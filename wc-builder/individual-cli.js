#!/usr/bin/env node

const Utils = {
  args: require('yargs').argv
}

const Builder = require('./index')

let args = process.argv.splice(2)

let cfg = {
  src: args[0],
  transpile: args.includes('--es5'),
  reservedNames: Utils.args.reservedNames.split(',')
}

if (args.length > 1) {
  cfg.dest = args[1]
}

const bwc = new Builder(cfg)

bwc.build()
