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
    list: 'nav > .sections',
    sections: 'nav > .sections > .section',
    headers: 'nav .section .header'
  },

  init () {
    this.properties.on('field.update', change => {
      switch (change.field) {
        case 'selectedSection': return this.emit('populate')
      }
    })

    this.on({
      populate: () => this.render(this.ref.list.element, MenuStore.records.map((section, index) => {
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
          } : {},

          children: [
            this.createElement({
              tag: 'div',

              attributes: {
                class: 'header'
              },

              children: [
                section.label,
                hasChildren ? this.createElement({
                  tag: 'svg',

                  attributes: {
                    class: 'icon',
                    src: 'assets/icons/chevron-down.svg'
                  }
                }) : null
              ]
            }),

            hasChildren ? this.createElement({
              tag: 'ul',

              attributes: {
                class: 'children'
              },

              children: section.children.records.map(child => (
                this.createElement({
                  tag: 'li',
                  children: [child.label]
                })
              ))
            }) : null
          ]
        })
      }))
      .then(() => this.emit('rendered'))
      .catch(error => console.error(error)),

      section: {
        selected: key => this.properties.selectedSection = key
      }
    })
  }
})

// this.render(MenuStore.records.map(record => ({
//   template: record.children.recordCount > 0 ? 'accordion' : 'section',
//   target: this.ref.nav.element,
//
//   properties: {
//     key: record.key,
//     label: record.label
//   },
//
//   on: {
//     click: evt => console.log(`You clicked ${record.label}.`)
//   }//,
//
//   // children: record.children.records.map(child => ({
//   //   template: 'child',
//   //
//   //   properties: {
//   //     key: child.key,
//   //     label: child.label
//   //   },
//   //
//   //   on: {
//   //     click: evt => console.log(`You clicked ${child.label}.`)
//   //   }
//   // }))
// }))).then(elements => console.log(elements))
