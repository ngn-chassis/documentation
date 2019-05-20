const ComponentsShowroomMenu = new GRegistry({
  parent: ComponentsShowroom,
  selector: 'main .sidebar',
  namespace: 'menu.',

  templates: {
    accordion: './js/registries/menu/templates/accordion.html',
    section: './js/registries/menu/templates/section.html',
    child: './js/registries/menu/templates/child.html'
  },

  references: {
    drawer: '> author-drawer',
    sections: 'nav > .sections',
    headers: 'nav .section .header'
  },

  init () {
    this.on({
      populate: sections => setTimeout(() => this.render(this.ref.sections.element, sections.map(section => (
        this.createElement('div', {
          'class': 'section'
        }, [
          this.createElement({
            tag: 'div',

            attributes: {
              'class': 'header',
              'data-key': section.key
            },

            on: {
              click: evt => console.log(section.label)
            },

            children: [section.label]
          })
        ])
      ))), 3000)

      // populate: sections => this.render(this.ref.sections.element, sections.map(section => (
      //   this.createElement('div', {
      //     'class': 'section'
      //   }, [
      //     this.createElement({
      //       tag: 'div',
      //
      //       attributes: {
      //         'class': 'header',
      //         'data-key': section.key
      //       },
      //
      //       on: {
      //         click: evt => console.log(section.label)
      //       },
      //
      //       children: [section.label]
      //     })
      //   ])
      // )))
    })

    // this.ref.headers.forEach(header => {
    //   header.addEventListener('click', evt => this.emit('section.select', header.dataset.section))
    // })
  }
})

// this.createElement({
//   tag: 'div',
//
//   attributes: {
//     'class': 'section'
//   },
//
//   on: {
//     click: evt => console.log('clicked')
//   },
//
//   component: new SectionElement(arg1, arg2, arg3),
//
//   children: [
//     this.createElement('div', {
//       'class': 'header',
//       'data-key': section.key
//     }, [section.label])
//   ]
// })

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
