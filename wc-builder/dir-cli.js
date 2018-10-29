#!/usr/bin/env node

// USAGE:
// build-webcomponents {{SRC}} {{DEST}} {{FLAGS}}

const Utils = {
  fs: require('fs'),
  path: require('path')
}

const Builder = require('./index')

let args = process.argv.splice(2)

let flags = []
let paths = []

args.forEach(arg => {
  if (arg.startsWith('--')) {
    flags.push(arg)
  } else {
    paths.push(arg)
  }
})

let src = Utils.path.resolve(paths[0])
let dest = Utils.path.resolve(paths[1])

Utils.fs.lstat(src, (err, stats) => {
  if (err) {
    return console.error(err)
  }

  Utils.fs.readdir(src, (readErr, components) => {
    if (readErr) {
      return console.error(readErr)
    }
    
    components.forEach(component => {
      let builder = new Builder({
        src: Utils.path.join(src, component),
        dest,
        transpile: flags.includes('--es5')
      })

      builder.build()
    })
  })
})
