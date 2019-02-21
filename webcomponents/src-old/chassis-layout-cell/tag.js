class ChassisLayoutCellElement extends HTMLElement {
  constructor () {
    super()

    _.get(this).addPrivateProperties({
      children: [],
      styleSheet: null,
      sizeRule: null
    })

    _.get(this).addAttributes([
      {
        name: 'size',
        set (value) {
          console.log('custom set');
          _.get(this).setAttributeValue('size', value)
        }
      }
    ])
  }

  static get observedAttributes () {
    return ['min', 'max', 'size']
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

  // attributeChangedCallback (attr, oldValue, newValue) {
  //   attr = attr.toLowerCase()
  //
  //   if (newValue === oldValue) {
  //     return
  //   }
  //
  //   switch (attr) {
  //     case 'size':
  //     console.log('setting');
  //       _.get(this).setAttributeValue(attr, newValue)
  //       // if (_.get(this).size !== newValue) {
  //       //   this.size = newValue
  //       // }
  //       break
  //
  //     default: return
  //   }
  // }

  // get size () {
  //   return this.hasAttribute('size') ? this.getAttribute('size') : 'auto'
  // }

  set size (val) {
    console.log('setting size to ' + val);
    if (!_.get(this).sizeRule) {
      return
    }

    _.get(this).size = val
    _.get(this).sizeRule.style.setProperty('flex-basis', val)
    _.get(this).setAttributeValue('size', newValue)
    this.setAttribute('size', val)
  }
}

customElements.define('chassis-layout-cell', ChassisLayoutCellElement)
