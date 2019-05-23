const ComponentsShowroomMenu = new GRegistry({
  parent: ComponentsShowroom,
  selector: 'main .sidebar',
  namespace: 'menu.',

  properties: {
    selectedSection: {
      type: String,
      default: 'introduction'
    }
  },

  references: {
    drawer: '> author-drawer',
    list: 'nav > .sections'
  },

  init () {
    this.properties.on('field.update', change => {
      switch (change.field) {
        case 'selectedSection': return this.emit('populate')
      }
    })

    this.on({
      populate: () => this.render(this.ref.list, MenuStore.records.map((section, index) => {
        let hasChildren = section.children.recordCount > 0
        let isSelected = section.key === this.properties.selectedSection

        return this.createElement({
          tag: 'div',

          attributes: {
            'class': classNames({
              accordion: hasChildren,
              selected: isSelected
            }, 'section')
          },

          on: !isSelected ? {
            click: evt => this.emit('section.select', index, section.key)
          } : null,

          children: [
            this.createElement('div', {
              class: 'header'
            }, [
              section.label,
              hasChildren ? this.createElement({
                tag: 'svg',

                attributes: {
                  class: 'icon',
                  src: 'assets/icons/chevron-down.svg'
                }
              }) : null
            ]),

            hasChildren ? this.createElement('ul', {
              class: 'children',
            }, section.children.records.map(child => this.createElement({
              tag: 'li',
              children: [child.label],

              on: {
                click: evt => this.emit('section.select', index, section.key, child.key)
              }
            }))) : null
          ]
        })
      }))
      .then(target => this.emit('rendered'))
      .catch(error => console.error(error)),

      section: {
        selected: (section, child) => {
          this.properties.selectedSection = section

          if (child) {
            window.location.hash = `${section}_${child}`
          }
        }
      }
    })
  }
})
