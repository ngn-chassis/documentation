const ComponentsShowroom = new NGNX.VIEW.Registry({
  selector: '.components.showroom',
  namespace: 'components.',

  references: {
    content: 'author-cycle.content'
  },

  init () {
    MenuStore.on({
      load: () => this.emit('menu.populate')
    })

    this.on({
      menu: {
        section: {
          select: (index, key) => {
            this.ref.content.element.show(index)
            this.emit('menu.section.selected', key)
          }
        }
      }
    })

    NGN.NET.json('config/menu.json', (err, cfg) => {
      if (err) {
        throw err
      }

      MenuStore.load(cfg)
    })
  }
})
