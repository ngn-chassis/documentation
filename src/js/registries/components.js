const ComponentsShowroom = new NGNX.VIEW.Registry({
  selector: '.components.showroom',
  namespace: 'components.',

  references: {

  },

  init () {
    MenuStore.on({
      load: () => this.emit('menu.populate', MenuStore.records)
    })

    NGN.NET.json('config/menu.json', (err, cfg) => {
      if (err) {
        throw err
      }

      MenuStore.load(cfg)
    })
  }
})
