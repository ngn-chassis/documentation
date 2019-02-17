class AuthorPaneElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.defineAttributes({
      horizontal: false,

      max: {
        default: 'auto',

        set: value => {
          if (!this.PRIVATE.styleRules.hasOwnProperty('maxRule')) {
            return
          }

          let propName = this.parentNode.hasAttribute('horizontal')
            ? 'max-width'
            : 'max-height'

          this.UTIL.setStyleProperty('maxRule', propName, value)
        }
      },

      min: {
        default: '0px',

        set: value => {
          if (!this.PRIVATE.styleRules.hasOwnProperty('minRule')) {
            return
          }

          let propName = this.parentNode.hasAttribute('horizontal')
            ? 'min-width'
            : 'min-height'

          this.UTIL.setStyleProperty('minRule', propName, value)
        }
      },

      size: {
        default: 'auto',

        set: value => {
          if (!this.PRIVATE.styleRules.hasOwnProperty('sizeRule') || value === this.size) {
            return
          }

          this.UTIL.setStyleProperty('sizeRule', 'flex-basis', value)
        }
      }
    })

    this.UTIL.defineProperties({
      totalSize: {
        readonly: true,
        get: () => {
          return this.hasAttribute('horizontal') ? this.offsetWidth : this.offsetHeight
          // let dimension = this.hasAttribute('horizontal') ? 'offsetWidth' : 'offsetHeight'
          // let area = this[dimension]
          //
          // for (let handle of this.resizeHandles) {
          //   area -= handle[dimension]
          // }
          //
          // return area
        }
      },

      resizeHandles: {
        readonly: true,
        get: () => {
          let handles = []
          let AuthorHTMLCollection = this.PRIVATE.generateAuthorHTMLCollectionConstructor()

          for (let child of this.children) {
            if (child.localName === 'author-pane-resize-handle') {
              handles.push(child)
            }
          }

          return new AuthorHTMLCollection(handles)
        }
      },

      panes: {
        readonly: true,
        get: () => {
          let panes = []
          let AuthorHTMLCollection = this.PRIVATE.generateAuthorHTMLCollectionConstructor()

          for (let child of this.children) {
            if (child.localName === this.localName) {
              panes.push(child)
            }
          }

          return new AuthorHTMLCollection(panes)
        }
      }
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.UTIL.insertStyleRules({
          sizeRule: ':host([size]) {}',
          maxRule: ':host([max]) {}',
          minRule: ':host([min]) {}'
        })


        if (this.hasAttribute('fullscreen')) {
          this.removeAttribute('size')
          this.removeAttribute('min')
          this.removeAttribute('max')
          return
        }

        if (this.hasAttribute('size')) {
          this.size = this.getAttribute('size')
        }

        if (this.hasAttribute('min')) {
          this.min = this.getAttribute('min')
        }

        if (this.hasAttribute('max')) {
          this.max = this.getAttribute('max')
        }
      },

      rendered: () => {
        for (let handle of this.resizeHandles) {
          this.emit('initialize', null, handle)
        }
      }
    })
  }

  static get observedAttributes () {
    return ['horizontal', 'max', 'min', 'size']
  }
}

customElements.define('author-pane', AuthorPaneElement)
