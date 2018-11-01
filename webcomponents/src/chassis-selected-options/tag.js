class ChassisSelectedOptions extends HTMLElement {
  constructor () {
    super()

    this.parent = null

    _.get(this).contentsEl = this.shadowRoot.querySelector('#contents')
    _.get(this).options = []

    _.get(this).generateList = () => {
      _.get(this).contentsEl.innerHTML = _.get(this).options.map(option => {
        return option.displayElement.text
      }).join(', ')
    }
  }

  add (option) {
    if (this.parent.multiple) {
      _.get(this).options.push(option)
    } else {
      _.get(this).options = [option]
    }

    _.get(this).generateList()
  }

  clear () {
    _.get(this).options = []
    this.setAttribute('placeholder', '')
    _.get(this).generateList()
  }

  connectedCallback () {
    this._appendCaret()
  }

  _appendCaret () {
    let xmlns = 'http://www.w3.org/2000/svg'
    let width = 24
    let height = 24

    let caret = document.createElementNS(xmlns, 'svg')
    caret.slot = 'beforeend'
    caret.setAttributeNS(null, 'width', width)
    caret.setAttributeNS(null, 'height', height)
    caret.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`)
    caret.setAttributeNS(null, 'fill', 'none')
    caret.setAttributeNS(null, 'stroke', 'currentColor')
    caret.setAttributeNS(null, 'stroke-width', '3')
    caret.setAttributeNS(null, 'stroke-linecap', 'square')
    caret.setAttributeNS(null, 'stroke-linejoin', 'miter')

    let shape = document.createElementNS(xmlns, 'polyline')
    shape.setAttributeNS(null, 'points', '6 9 12 15 18 9')

    caret.appendChild(shape)
    this.appendChild(caret)
  }
}

customElements.define('chassis-selected-options', ChassisSelectedOptions)
