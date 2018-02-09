class ChassisLayoutCell extends HTMLElement {
  constructor () {
    super()

    _private.set(this, {
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
      _private.get(this).styleSheet = this.shadowRoot.styleSheets[0]

      let sheetLength = _private.get(this).styleSheet.cssRules.length
      _private.get(this).styleSheet.insertRule(':host([size]) {}', sheetLength)
      _private.get(this).sizeRule = _private.get(this).styleSheet.cssRules[sheetLength]

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
        if (_private.get(this).size !== newValue) {
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
    if (!_private.get(this).sizeRule) {
      return
    }

    _private.get(this).size = val
    _private.get(this).sizeRule.style.setProperty('flex-basis', val)
    this.setAttribute('size', val)
  }
}

customElements.define('chassis-layout-cell', ChassisLayoutCell)
