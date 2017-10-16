const fs = require('fs')
const path = require('path')
const TaskRunner = require('shortbus')
let CleanCSS = require('clean-css')

const postcss = require('postcss')
const babel = require("babel-core")
const babylon = require('babylon')
const cleanCss = new CleanCSS()
const minifyHtml = require('html-minifier').minify
const uglify = require('uglify-js').minify

class Builder {
  constructor (cfg) {
    cfg = cfg || {}

    try {
      fs.accessSync(cfg.src, fs.R_OK)
      cfg.src = path.resolve(cfg.src)
    } catch (e) {
      cfg.src = path.join(process.cwd(), cfg.src)
    }

    this.transpile = cfg.transpile || false

    this.sourceType = cfg.sourceType || 'script'
    this.outputStyles = cfg.outputStyles.length > 0 ? cfg.outputStyles : ['bundle']

    this.templates = {
      bundled: path.resolve(__dirname, 'templates/bundled.js'),
      import: path.resolve(__dirname, 'templates/import.js')
    }

    this.src = {
      root: cfg.src,
      js: cfg.hasOwnProperty('js') ? cfg.js : path.join(cfg.src, 'tag.js'),
      css: cfg.hasOwnProperty('css') ? cfg.css : path.join(cfg.src, 'styles.css'),
      template: cfg.hasOwnProperty('template') ? cfg.template : path.join(cfg.src, 'template.html')
    }

    this.dest = cfg.dest || null
    this.filename = path.basename(cfg.src)

    this.output = ''
  }

  get finalTemplateString () {
    let templateString = `<template><style>@charset UTF-8; ${this.css}</style>${this.template}</template>`

    return minifyHtml(templateString, {
      collapseWhitespace: true,
      removeComments: true
    })
  }

  get outputDir () {
    if (!this.dest) {
      return path.join(this.src.root, 'dist')
    }

    return path.resolve(this.dest)
  }

  get outputFile () {
    return path.join(this.outputDir, `${this.filename}.js`)
  }

  build () {
    let processor = new TaskRunner()

    processor.add('Processing JavaScript...', (next) => this.processJs(next))
    processor.add('Processing CSS...', (next) => this.processCss(next))
    processor.add('Processing Template...', (next) => this.processTemplate(next))

    processor.on('stepstarted', (task) => console.info(task.name))

    processor.on('complete', () => {
      // if (this.outputStyles.includes('import')) {
      //   tasks.add('Bundling HTML Import...', (next) => {
      //     next()
      //   })
      // }
      //
      // if (this.outputStyles.includes('bundle')) {
      //   tasks.add('Bundling Web Component...', (next) => {
      //     next()
      //   })
      // }
      //
      // if (this.outputStyles.includes('raw')) {
      //   console.log('raw');
      // }

      let output = this.js.replace(/{{TEMPLATE-STRING}}/gi, this.finalTemplateString)
      let compiler = new TaskRunner()

      if (this.transpile) {
        compiler.add('Transpiling to ES5...', (next) => {
          output = babel.transform(output, {
            presets: ['env']
          }).code

          next()
        })

        compiler.add('Compressing...', (next) => {
          output = uglify(output).code
          next()
        })
      } else {
        compiler.add('Compressing...', (next) => {
          output = babel.transform(output, {
            presets: ['minify']
          }).code

          next()
        })
      }

      compiler.on('stepstarted', (task) => console.info(task.name))
      compiler.on('complete', () => {
        if (this.dest) {
          this._writeFile(output, () => {
            console.info(`Done. Wrote to ${this.outputDir}`)
          })
        }
      })

      compiler.run(true)
    })

    processor.run(true)
  }

  processCss (cb) {
    this.css = postcss.parse(this._readFile(this.src.css))

    let newRules = []

    this.css.walkRules((rule) => newRules.push(
      rule.clone({
        selector: this._transformSelector(rule.selector)
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

    let ast = babylon.parse(input, {sourceType: this.sourceType})

    let inputClassDecl = ast.program.body.find((node) => {
      return node.type === 'ClassDeclaration'
    })

    let elDefinition = ast.program.body.find((node) => {
      return node.type === 'ExpressionStatement'
        && node.expression.callee.object.name === 'customElements'
        && node.expression.callee.property.name === 'define'
    })

    if (!elDefinition) {
      console.error(`ERROR "${this.filename}": Web Component must have a Custom Element Definition of the following shape:`)
      console.info(`customElements.define('tag-name', ClassIdentifier)`);
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
    let parsed = babylon.parse(output)
    let outputClassDecl = parsed.program.body.find((node) => {
      return node.type === 'ClassDeclaration'
    })

    let inputConstructor = inputClassDecl.body.body.find((node) => {
      return node.key.name === 'constructor'
    })

    let outputConstructor = outputClassDecl.body.body.find((node) => {
      return node.key.name === 'constructor'
    })

    inputClassDecl.body.body.forEach((method) => {
      if (method.key.name === 'constructor') {
        method.body.body.forEach((node) => {
          if (node.hasOwnProperty('expression') && node.expression.hasOwnProperty('callee') && node.expression.callee.type === 'Super') {
            return
          }

          outputConstructor.body.body.push(node)
        })

        return
      }

      outputClassDecl.body.body.push(method)
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

  _transformSelector (selector) {
    let regex = /\:host\((.*)\)/gi
    let result = regex.exec(selector)

    if (!this.tagName) {
      console.error(`ERROR ${this.filename}: Valid tag name not found. Aborting...`)
      return
    }

    if (!result) {
      return selector.replace(':host', this.tagName)
    }

    return selector.replace(result[0], `${this.tagName}${result[1]}`)
  }

  _writeFile (content, cb) {
    this._mkdirp(this.outputDir)
    fs.writeFileSync(this.outputFile, content)

    cb && cb()
  }
}

module.exports = Builder
