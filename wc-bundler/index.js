const Utils = {
  fs: require('fs-extra'),
  path: require('path')
}

module.exports = class {
  constructor (cfg) {
    cfg = cfg || {}

    try {
      fs.accessSync(cfg.dir, Utils.fs.R_OK)
      cfg.dir = Utils.path.resolve(cfg.dir)
    } catch (e) {
      cfg.dir = Utils.path.join(process.cwd(), cfg.dir)
    }

    this.name = cfg.name || null
    this.components = cfg.components || null
    this.dir = cfg.dir || null

    this.templates = {
      include: Utils.path.resolve(__dirname, 'templates/include.js')
    }
  }

  run () {
    if (!this.components) {
      return console.error('ERROR wc-bundler: Did not specify components to bundle')
    }

    let { fs, path } = Utils

    fs.readdir(this.dir, (err, files) => {
      if (err) {
        throw err
      }

      let es5 = []
      let es6 = []

      files.forEach(file => {
        if (file.includes('-es5')) {
          es5.push(file)
        } else {
          es6.push(file)
        }
      })

      let output = [{
        name: this.name,
        contents: this.generateBundle(es6)
      }]

      if (es5.length) {
        output.push({
          name: `${this.name}-es5`,
          contents: this.generateBundle(es5)
        })
      }

      // let filesToRemove = fs.readdirSync(this.dir).filter(file => this.hasFile(file))
      //
      // filesToRemove.forEach(file => {
      //   fs.unlinkSync(path.join(this.dir, file))
      // })

      output.forEach(file => {
        this._writeFile(file, this.dir)
      })
    })
  }

  hasFile (filename) {
    return this.components.includes(this.getTagName(filename))
  }

  getTagName (filename) {
    let es5 = filename.includes('-es5')
    return filename.replace(es5 ? '-es5.js' : '.js', '')
  }

  generateBundle (files) {
    let template = this._readFile(this.templates.include)
    let content = ''

    files = files.filter(file => this.hasFile(file))

    files.forEach(file => {
      let code = this._readFile(Utils.path.join(this.dir, file))
      content += template.replace(/{{TAG-NAME}}/gi, this.getTagName(file)).replace(/{{INCLUDE}}/gi, code)
    })

    return content
  }

  _mkdirp (dir) {
    let { fs, path } = Utils

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
    return Utils.fs.readFileSync(filepath).toString()
  }

  _writeFile (file, outputDirectory) {
    let { fs, path } = Utils

    this._mkdirp(outputDirectory)
    fs.writeFileSync(path.join(outputDirectory, `${file.name}.js`), file.contents)
  }
}
