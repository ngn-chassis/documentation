const fs = require('fs-extra')
const path = require('path')

const TaskRunner = require('shortbus')

const postcss = require('postcss')
const cleanCss = new (require('clean-css'))()

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
    this.filename = path.basename(cfg.src)

    this.src = {
      root: cfg.src,
      js: cfg.hasOwnProperty('js') ? cfg.js : path.join(cfg.src, 'tag.js'),
      css: cfg.hasOwnProperty('css') ? cfg.css : path.join(cfg.src, 'style.css'),
      template: cfg.hasOwnProperty('template') ? cfg.template : path.join(cfg.src, 'template.html')
    }

    this.dest = cfg.dest || null
  }

  get finalTemplateString () {
    let templateString = `<template><style>@charset "UTF-8"; ${this.css}</style>${this.template}</template>`

    return minifyHtml(templateString, {
      collapseWhitespace: true,
      removeComments: true
    })
  }

  build () {
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

      this._writeFiles(files, () => console.info(`Done.`))
    })

    processor.run(true)
  }

  processCss (cb) {
    this.css = postcss.parse(this._readFile(this.src.css))

    let newRules = []

    this.css.walkRules(rule => newRules.push(
      rule.clone({
        selector: this._transformSelector(rule.selector)
      })
    ))

    this.css.append(newRules)
    this.css = cleanCss.minify(this.css.toString()).styles

    cb && cb()
  }

  processJs (cb) {
    this.js = this._readFile(this.src.js)

    let regex = /customElements\.define\([\'|\"](.*)[\'|\"]\,/i
    let tagName = regex.exec(this.js)

    if (tagName === null) {
      console.error('ERROR: tag.js must include a Custom Element Definition as follows:')
      console.info(`customElements.define('tag-name', ClassIdentifier)`)
      return console.error('Aborting...')
    }

    tagName = tagName[1]

    if (!tagName || !tagName.includes('-')) {
      return console.error(`ERROR: Custom element must have a tag name with at least one hyphen! Aborting...`)
    }

    // Used by this.processCss() as replacement for :host selector
    this.tagName = tagName
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
    if (!this.tagName) {
      return console.error(`ERROR ${this.filename}: Valid tag name not found. Aborting...`)
    }

    let regex = {
      host: /\:host\((.*?)\)\s?/i,
      hostContext: /\:host-context\((.*?)\)\s?/i,
      slotted: /\:{2}slotted\((.*?)\)\s?/i
    }

    // STEP 1: Replace :host() instances
    let result = regex.host.exec(selector)
    selector = result === null ? selector : selector.replace(result[0].trim(), `${this.tagName}${result[1]}`)

    // STEP 2: Replace host-context() instances
    result = regex.hostContext.exec(selector)
    selector = result === null ? selector : selector.replace(result[0].trim(), `${result[1]} ${this.tagName}`)

    // STEP 3: Replace ::slotted() instances
    result = regex.slotted.exec(selector)
    selector = result === null ? selector : selector.replace(result[0].trim(), `${result[1]}`)

    // STEP 4: Replace remaining :host instances
    return selector.replace(/\:host/gi, this.tagName)
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
