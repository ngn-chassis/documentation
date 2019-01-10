class ChassisLayoutCellElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.defineAttributes({
      max: {
        default: 'auto',

        set: value => {
          let propName = this.parentNode.getAttribute('orientation') === 'horizontal'
            ? 'max-width'
            : 'max-height'

          this.PRIVATE.maxRule.style.setProperty(propName, value)
        }
      },

      min: {
        default: 'auto',

        set: value => {
          let propName = this.parentNode.getAttribute('orientation') === 'horizontal'
            ? 'min-width'
            : 'min-height'

          this.PRIVATE.minRule.style.setProperty(propName, value)
        }
      },

      size: {
        default: 'auto',

        set: value => {
          this.PRIVATE.sizeRule.style.setProperty('flex-basis', value)
        }
      }
    })
  }

  static get observedAttributes () {
    return ['max', 'min', 'size']
  }

  connectedCallback () {
    this.UTIL.definePrivateProperties({
      children: [],
      styleSheet: this.shadowRoot.styleSheets[0],
      sizeRule: null
    })

    let sheetLength = this.PRIVATE.styleSheet.cssRules.length

    this.PRIVATE.styleSheet.insertRule(':host([size]) {}', sheetLength)
    this.PRIVATE.sizeRule = this.PRIVATE.styleSheet.cssRules[sheetLength]

    this.PRIVATE.styleSheet.insertRule(':host([max]) {}', sheetLength)
    this.PRIVATE.maxRule = this.PRIVATE.styleSheet.cssRules[sheetLength]

    this.PRIVATE.styleSheet.insertRule(':host([min]) {}', sheetLength)
    this.PRIVATE.minRule = this.PRIVATE.styleSheet.cssRules[sheetLength]

    if (this.hasAttribute('size')) {
      this.size = this.getAttribute('size')
    }
  }
}

customElements.define('chassis-layout-cell', ChassisLayoutCellElement)
