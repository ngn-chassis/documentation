class ChassisSelectedOptionsElement extends HTMLElement {
  constructor () {
    super()

    this.parent = null

    _.get(this).addPrivateProperties({
      contentsEl: this.shadowRoot.querySelector('#contents'),
      options: [],

      appendCaret: () => {
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
    })
  }

  get list () {
    return _.get(this).options.map(option => option.displayElement.text).join(', ')
  }

  add (option) {
    _.get(this).options.push(option)
    this.update()
  }

  remove (option) {
    _.get(this).options.splice(_.get(this).options.indexOf(option), 1)
    this.update()
  }

  clear () {
    _.get(this).options = []
    this.update()
  }

  connectedCallback () {
    _.get(this).appendCaret()

    this.addEventListener('mousedown', evt => {
      if (this.parent.multiple) {
        return
      }

      this.parent.open = !this.parent.open
    })

    this.update()
  }

  update () {
    _.get(this).contentsEl.innerHTML = _.get(this).options.length > 0
      ? this.list
      : this.parent.placeholder || ''
  }
}

customElements.define('chassis-selected-options', ChassisSelectedOptionsElement)
