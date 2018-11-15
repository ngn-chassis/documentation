class ChassisSelectedOptionsElement extends HTMLElement {
  constructor () {
    super()

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
      },

      optionSelectionHandler: evt => {
        evt.stopPropagation()
        let { options, shiftKey, metaKey, ctrlKey } = evt.detail

        this.clear(false)
        options.forEach(option => this.add(option))
      },

      parentStateChangeHandler: evt => {
        let { name, value } = evt.detail

        switch (name) {
          case 'multiple':
            if (!value) {
              return this.addEventListener('mousedown', _.get(this).mousedownHandler)
            }

            return this.removeEventListener('mousedown', _.get(this).mousedownHandler)

          default: return
        }

        // if (!multiple && this.parentNode.selectedOptions) {
        //   this.clear(false)
        //
        // }

        // if (!this.multiple && this.selectedOptions) {
        //   this.deselectAll()
        //   this.select(this.selectedIndex)
        //
        //   if (!_.get(this).clickListenerActive) {
        //     this.selectedOptionsElement.addEventListener('mousedown', _.get(this).mousedownHandler)
        //     _.get(this).clickListenerActive = true
        //   }
        // } else {
        //   this.selectedOptionsElement.removeEventListener('mousedown', _.get(this).mousedownHandler)
        //   _.get(this).clickListenerActive = false
        // }
      },

      mousedownHandler: evt => _.get(this).emit('toggle', null, this.parentNode)
    })
  }

  get list () {
    return _.get(this).options.map(option => option.displayElement.text).join(', ')
  }

  add (option, update = true) {
    _.get(this).options.push(option)
    update && this.update()
  }

  remove (option, update = true) {
    _.get(this).options.splice(_.get(this).options.indexOf(option), 1)
    update && this.update()
  }

  clear (update = true) {
    _.get(this).options = []
    update && this.update()
  }

  connectedCallback () {
    _.get(this).appendCaret()
    this.update()

    this.addEventListener('mousedown', _.get(this).mousedownHandler)
    this.addEventListener('options.selected', _.get(this).optionSelectionHandler)
    this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler)
  }

  disconnectedCallback () {
    this.removeEventListener('mousedown', _.get(this).mousedownHandler)
    this.addEventListener('options.selected', _.get(this).optionSelectionHandler)
    this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler)
  }

  update () {
    _.get(this).contentsEl.innerHTML = _.get(this).options.length > 0
      ? this.list
      : this.parentNode.placeholder || ''
  }
}

customElements.define('chassis-selected-options', ChassisSelectedOptionsElement)
