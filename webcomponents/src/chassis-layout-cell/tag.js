class ChassisLayoutCell extends HTMLElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
    return ['size']
  }

  connectedCallback () {
    setTimeout(() => {
      this.styleSheet = this.shadowRoot.styleSheets[0]
      this.styleSheet.insertRule(':host([size]) {}', this.styleSheet.cssRules.length)
      this.sizeRule = this.styleSheet.cssRules[this.styleSheet.cssRules.length - 1]

      if (this.hasAttribute('size')) {
        this.size = this.getAttribute('size')
      }
    }, 0)
  }

  attributeChangedCallback (attr, newValue, oldValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'size':
        this.size = newValue
        break

      default: return
    }
  }

  get size () {
    return this.hasAttribute('size') ? this.getAttribute('size') : 'auto'
  }

  set size (val) {
    if (!this.sizeRule) {
      return
    }

    this.sizeRule.style.setProperty('flex-basis', val)
    // console.log(this.sizeRule);
  }
}

customElements.define('chassis-layout-cell', ChassisLayoutCell)
