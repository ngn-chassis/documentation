class ChassisLayoutCell extends HTMLElement {
  constructor () {
    super()

    _.set(this, {
      children: [],
      styleSheet: null,
      sizeRule: null,
      size: null
    })
  }

  static get observedAttributes () {
    return ['size']
  }

  connectedCallback () {
    setTimeout(() => {
      _.get(this).styleSheet = this.shadowRoot.styleSheets[0]

      let sheetLength = _.get(this).styleSheet.cssRules.length
      _.get(this).styleSheet.insertRule(':host([size]) {}', sheetLength)
      _.get(this).sizeRule = _.get(this).styleSheet.cssRules[sheetLength]

      if (this.hasAttribute('size')) {
        this.size = this.getAttribute('size')
      }
    }, 0)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'size':
        if (_.get(this).size !== newValue) {
          this.size = newValue
        }
        break

      default: return
    }
  }

  get size () {
    return this.hasAttribute('size') ? this.getAttribute('size') : 'auto'
  }

  set size (val) {
    if (!_.get(this).sizeRule) {
      return
    }

    _.get(this).size = val
    _.get(this).sizeRule.style.setProperty('flex-basis', val)
    this.setAttribute('size', val)
  }
}

customElements.define('chassis-layout-cell', ChassisLayoutCell)
