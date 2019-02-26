class AuthorGridElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`<template><style>@charset "UTF-8"; :host{display:grid}:host([inline]){display:inline-grid}author-grid{display:grid}author-grid[inline]{display:inline-grid}</style><slot></slot></template>`)

    this.UTIL.defineAttributes({
      columns: {
        set: value => this.PRIVATE.updateColumns(value)
      },

      rows: {
        set: value => this.PRIVATE.updateRows(value)
      },

      gutter: {
        default: 'none',
        set: value => this.PRIVATE.updateGutter()
      }
    })

    this.UTIL.definePrivateProperties({
      columnsRule: null,
      rowsRule: null,
      gutterRule: null,

      observer: new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          let { addedNodes, removedNodes, type } = mutation

          switch (type) {
            case 'childList':
              return this.PRIVATE.resetZIndexes()

            default: return
          }
        })
      }),

      resetZIndexes: () => {
        console.log('resetting z-indexes');
      },

      updateGutter: (value = this.getAttribute('gutter').trim()) => {
        if (!this.PRIVATE.gutterRule) {
          return
        }

        this.PRIVATE.gutterRule.style.setProperty('grid-gap', value)
      },

      updateColumns: (value = this.getAttribute('columns').trim()) => {
        if (!this.children.length || !this.PRIVATE.columnsRule) {
          return
        }

        this.PRIVATE.columnsRule.style.setProperty('grid-template-columns', this.PRIVATE.getProcessedGridTemplateValue(value))
      },

      updateRows: (value = this.getAttribute('rows').trim()) => {
        if (!this.children.length || !this.PRIVATE.rowsRule) {
          return
        }

        this.PRIVATE.rowsRule.style.setProperty('grid-template-rows', this.PRIVATE.getProcessedGridTemplateValue(value))
      },

      getProcessedGridTemplateValue: value => {
        if (!isNaN(value)) {
          let quantity = parseInt(value)
          let array = []

          for (let i = 0; i < quantity; i++) {
            array.push('1fr')
          }

          value = array.join(' ')
        }

        return value
      }
    })

    this.PRIVATE.observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false
    })
  }

  static get observedAttributes () {
    return ['columns', 'rows', 'gutter']
  }

  connectedCallback () {
    this.UTIL.definePrivateProperties({
      styleSheet: this.shadowRoot.styleSheets[0]
    })

    let {
      styleSheet
    } = this.PRIVATE
    let sheetLength = this.PRIVATE.styleSheet.cssRules.length

    styleSheet.insertRule(':host([gutter]) {}', sheetLength)
    this.PRIVATE.gutterRule = styleSheet.cssRules[sheetLength]

    styleSheet.insertRule(':host([columns]) {}', sheetLength)
    this.PRIVATE.columnsRule = styleSheet.cssRules[sheetLength]

    styleSheet.insertRule(':host([rows]) {}', sheetLength)
    this.PRIVATE.rowsRule = styleSheet.cssRules[sheetLength]

    setTimeout(() => {
      if (this.hasAttribute('gutter')) {
        this.PRIVATE.updateGutter()
      }

      if (this.hasAttribute('columns')) {
        this.PRIVATE.updateColumns()
      }

      if (this.hasAttribute('rows')) {
        this.PRIVATE.updateRows()
      }
    }, 0)
  }
}

customElements.define('author-grid', AuthorGridElement)
