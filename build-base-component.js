#!/usr/bin/env node

require('ngn')
const fs = require('fs-extra')
const path = require('path')
const babel = require('@babel/core')
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

    this.tasks = new NGN.Tasks()
    this.src = cfg.src
    this.dest = cfg.dest

    this.file = {
      name: path.basename(cfg.src),
      contents: fs.readFileSync(cfg.src)
    }

    this.tagname = this.file.name.split('.').slice(0, -1).join('.')
  }

  run () {
    let es6 = this.file.contents.toString()
    let es5 = null

    this.tasks.add('Transpiling Base Component...', next => {
      es5 = babel.transformSync(es6, {
        presets: [require('@babel/preset-env')]
      }).code

      next()
    })

    this.tasks.add('Compressing...', next => {
      es5 = uglify(es5, {}).code

      // TODO: Babel is throwing error on minification
      // es6 = babel.transformSync(es6, {
      //   presets: ['minify'],
      //   comments: false
      // })

      next()
    })

    this.tasks.add('Writing to file system...', next => {
      fs.writeFileSync(path.join(this.dest, `${this.tagname}.js`), es6)
      fs.writeFileSync(path.join(this.dest, `${this.tagname}-es5.js`), es5)
      next()
    })

    this.tasks.on('stepstart', () => {
      console.log('Start');
    })

    this.tasks.on('stepcomplete', () => console.log('Done.'))
    this.tasks.on('complete', () => console.log('Done.'))

    this.tasks.run(true)
  }
}

let args = process.argv.splice(2)

const builder = new Builder({
  src: args[0],
  dest: args[1]
})

builder.run()
