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
          select: (index, section, child) => {
            this.ref.content.element.show(index)
            this.emit('menu.section.selected', section, child)
          }
        }
      }
    })

    API.fetchMenuConfig(cfg => MenuStore.load(cfg))
  }
})
