const fs = require('fs-extra')
const path = require('path')
const rimraf = require('rimraf')

const TaskRunner = require('shortbus')
const webpack = require('webpack')

const babel = require('@babel/core')
const parser = require('@babel/parser')

const postcss = require('postcss')
const cleanCss = new (require('clean-css'))()

const uglify = require('uglify-js').minify
const minifyHtml = require('html-minifier').minify

module.exports = class {
  constructor (cfg) {
    cfg = cfg || {}

    try {
      fs.accessSync(cfg.src, fs.R_OK)
      cfg.src = path.resolve(cfg.src)
    } catch (e) {
      cfg.src = path.join(process.cwd(), cfg.src)
    }

    this.sourceType = cfg.sourceType || 'script'
    this.addTranspiledVersion = cfg.transpile || false
    this.filename = path.basename(cfg.src)

    this.src = {
      root: cfg.src,
      js: cfg.hasOwnProperty('js') ? cfg.js : path.join(cfg.src, 'tag.js'),
      css: cfg.hasOwnProperty('css') ? cfg.css : path.join(cfg.src, 'styles.css'),
      template: cfg.hasOwnProperty('template') ? cfg.template : path.join(cfg.src, 'template.html')
    }

    this.dest = cfg.dest || null

    this.reservedNames = cfg.reservedNames || []

    this.templates = {
      bundled: path.resolve(__dirname, 'templates/bundled.js'),
      import: path.resolve(__dirname, 'templates/import.js')
    }
  }

  get finalTemplateString () {
    let templateString = `<template><style>@charset "UTF-8"; ${this.css}</style>${this.template}</template>`

    return minifyHtml(templateString, {
      collapseWhitespace: true,
      removeComments: true
    })
  }

  build () {
    let tempDirs = {
      bundled: path.resolve(__dirname, 'bundled'),
      transpiled: path.resolve(__dirname, 'transpiled')
    }

    for (let dir in tempDirs) {
      this._mkdirp(tempDirs[dir])
    }

    let processor = new TaskRunner()

    console.info(`Building "${this.filename}" component...`)

    processor.add('Processing JavaScript...', next => this.processJs(next))
    processor.add('Processing CSS...', next => this.processCss(next))
    processor.add('Processing Template...', next => this.processTemplate(next))

    processor.on('stepstarted', task => console.info(task.name))

    processor.on('complete', () => {
      let files = [{
        name: this.filename,
        contents: this.js.replace(/{{TEMPLATE-STRING}}/gi, this.finalTemplateString),
      }]

      let compiler = new TaskRunner()

      if (this.addTranspiledVersion) {
        compiler.add('Generating ES5 Version...', next => {
          let file = {
            name: `${this.filename}-es5`,
            contents: babel.transformSync(files[0].contents, {
              presets: [require("@babel/preset-env")],
              "plugins": ["@babel/plugin-transform-runtime"]
            })
          }

          fs.writeFileSync(path.join(tempDirs.transpiled, `${file.name}.js`), file.contents.code);

          let bundler = webpack({
            devtool: 'source-map',
            entry: path.join(tempDirs.transpiled, `${file.name}.js`),
            output: {
              path: tempDirs.bundled,
              filename: `${file.name}-bundle.js`
            },
            plugins: [
              new webpack.DefinePlugin({
                'process.env': {
                  'NODE_ENV': JSON.stringify('production')
                }
              })
            ],
            optimization: {
              minimize: false
            }
          })

          bundler.run((err, stats) => {
            let bundled = fs.readFileSync(path.join(tempDirs.bundled, `${file.name}-bundle.js`));
            file.contents = bundled.toString()
            files.push(file)
            next()
          })
        })
      }

      compiler.add('Compressing...', next => {
        files.forEach(file => {
          if (file.name.endsWith('-es5')) {
            file.contents = uglify(file.contents, {
              mangle: {
                reserved: this.reservedNames
              }
            }).code
            return
          }

          file.contents = babel.transformSync(file.contents, {
            presets: [['minify', {
              mangle: {
                exclude: this.reservedNames
              }
            }]],
            comments: false
          }).code
        })

        next()
      })

      compiler.on('stepstarted', task => console.info(task.name))

      compiler.on('complete', () => {
        this._writeFiles(files, () => {
          console.info(`Done.`)

          // TODO: Find out why this doesn't work synchronously
          // for (let dir in tempDirs) {
          //   rimraf(tempDirs[dir], () => {})
          // }
        })
      })

      compiler.run(true)
    })

    processor.run(true)
  }

  processCss (cb) {
    this.css = postcss.parse(this._readFile(this.src.css))

    let newRules = []

    this.css.walkRules(rule => newRules.push(
      rule.clone({
        selector: this._transformSelector(this._stripUnsupportedSelectorElements(rule.selector))
      })
    ))

    this.css.append(newRules)
    this.css = cleanCss.minify(this.css.toString()).styles

    cb && cb()
  }

  processJs (cb) {
    let tagName = null
    let input = this._readFile(this.src.js)
    let output = this._readFile(this.templates.bundled)

    let ast = parser.parse(input, {sourceType: this.sourceType})

    let inputClassDecl = ast.program.body.find(node => {
      return node.type === 'ClassDeclaration'
    })

    let elDefinition = ast.program.body.find(node => {
      return node.type === 'ExpressionStatement'
        && node.expression.callee.object.name === 'customElements'
        && node.expression.callee.property.name === 'define'
    })

    if (!elDefinition) {
      console.error(`ERROR "${this.filename}": tag.js must include a Custom Element Definition as follows:`)
      console.info(`customElements.define('${this.filename || 'tag-name'}', ${inputClassDecl.id.name || 'ClassIdentifier'})`);
      console.error('Aborting...');
      return
    }

    tagName = elDefinition.expression.arguments[0].value

    if (!tagName || !tagName.includes('-')) {
      console.error(`ERROR "${this.filename}": Web Component must have a Tag Name with at least one hyphen! Aborting...`)
      return
    }

    // Used by this.processCss() as replacement for :host selector
    this.tagName = tagName

    output = output
      .replace(/{{CLASS-IDENTIFIER}}/gi, inputClassDecl.id.name)
      .replace(/{{SUPER-CLASS}}/gi, inputClassDecl.superClass.name || 'HTMLElement')
      .replace(/{{TAG-NAME}}/gi, tagName)

    let methods = []
    let parsed = parser.parse(output)

    let outputClassExpression = parsed.program.body[0].expression.arguments[1]

    let outputConstructor = outputClassExpression.body.body.find(node => {
      return node.key.name === 'constructor'
    })

    inputClassDecl.body.body.forEach(method => {
      if (method.key.name === 'constructor') {
        method.body.body.forEach(node => {
          if (node.hasOwnProperty('expression') && node.expression.hasOwnProperty('callee') && node.expression.callee.type === 'Super') {
            return
          }

          outputConstructor.body.body.push(node)
        })

        return
      }

      outputClassExpression.body.body.push(method)
    })

    this.js = babel.transformFromAst(parsed).code

    cb && cb()
  }

  processTemplate (cb) {
    this.template = this._readFile(this.src.template)

    cb && cb()
  }

  _mkdirp (dir) {
    try {
      fs.accessSync(dir, fs.F_OK)
      return
    } catch (e) {
      try {
        fs.accessSync(path.join(dir, '..'), fs.F_OK)
        fs.mkdirSync(dir)
      } catch (ee) {
        this._mkdirp(path.join(dir, '..'))
      }
    }
  }

  _readFile (filepath) {
    return fs.readFileSync(filepath).toString()
  }

  _stripUnsupportedSelectorElements (selector) {
    let slugs = selector.split(' ')

    return slugs.map(slug => {
      if (slug.includes('::slotted')) {
        // return /\(([^)]+)\)/.exec(slug)[1]
        return slug.replace('::slotted(', '').slice(0, -1)
      }

      return slug
    }).join(' ')
  }

  _transformSelector (selector) {
    let regex = /\:host\((.*)/gi
    let result = regex.exec(selector)

    if (!this.tagName) {
      console.error(`ERROR ${this.filename}: Valid tag name not found. Aborting...`)
      return
    }

    if (!result) {
      return selector.replace(/:host/g, this.tagName)
    }

    return selector.replace(result[0], `${this.tagName}${result[1]}`)
  }

  _writeFiles (files, cb) {
    let outputDirectory = path.resolve(this.dest)

    if (!outputDirectory) {
      outputDirectory = path.join(this.src.root, 'dist')
    }

    console.info(`Writing to ${outputDirectory}`)

    files.forEach(file => this._writeFile(file, outputDirectory))

    cb && cb()
  }

  _writeFile (file, outputDirectory) {
    this._mkdirp(outputDirectory)
    fs.writeFileSync(path.join(outputDirectory, `${file.name}.js`), file.contents)
  }
}
