#!/usr/bin/env node

require('ngn')
const fs = require('fs-extra')

let args = process.argv.splice(2)

let cfg = {
  watch: args.includes('--watch')
  src: args[0],
  dest: args[1]
}

class Showroom {
  constructor (cfg) {
    this.tasks = new NGN.Tasks()
    this.watch = cfg.watch

    this.src = cfg.src
    this.dest = cfg.dest

    this.tasks.add('Clean', (next) => this.clean)

    this.tasks.on('stepcomplete', () => {
      
    })
  }

  build () {
    console.log(this.tasks);
  }

  clean () {

  }
}

const showroom = new Showroom(cfg)

showroom.build()
