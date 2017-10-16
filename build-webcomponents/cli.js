#!/usr/bin/env node

const Builder = require('./index')

let args = process.argv.splice(2)

let outputStyles = args.filter((arg) => {
  return arg === '--import-style' || arg === '--bundle-style' || arg === '--raw'
}).map((entry) => {
  if (entry === '--import-style') {
    return 'import'
  }

  if (entry === '--bundle-style') {
    return 'bundle'
  }

  if (entry === '--raw') {
    return 'raw'
  }
})

let cfg = {
  src: args[0],
  transpile: args.includes('--es5'),
  outputStyles
}

if (args.length > 1) {
  cfg.dest = args[1]
}

const bwc = new Builder(cfg)

bwc.build()
