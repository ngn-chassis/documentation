#!/usr/bin/env node

// USAGE:
// bundle-webcomponents --name={{COMPONENT-NAME}} --components={{LIST,OF,COMPONENTS,TO,BUNDLE}} --dir={{PARENT DIRECTORY}}

const Bundler = require('./index')

const Utils = {
  fs: require('fs'),
  path: require('path'),
  args: require('yargs').argv
}

const bundler = new Bundler({
  name: Utils.args.name,
  components: Utils.args.components.split(','),
  dir: Utils.args.dir
})

bundler.run()
