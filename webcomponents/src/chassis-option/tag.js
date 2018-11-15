class ChassisOptionElement extends HTMLElement {
  constructor () {
    super()

    this.defaultSelected = false

    _.get(this).addAttributes([
      'id',
      'label',
      'value'
    ])

    _.get(this).addBooleanAttributes([
      'disabled',
      'hover',
      'selected'
    ])

    _.get(this).addReadOnlyProperties([
      'form',

      {
        name: 'index',
        get () {
          return this.parentNode.options.findIndex(option => option.displayElement === this)
        }
      }
    ])

    _.get(this).addPrivateProperties({
      form: null,

      mouseButtonDown: evt => {
        let code = evt.buttons !== undefined ? evt.buttons : evt.nativeEvent.which
        return code >= 1
      },

      mousemoveHandler: evt => _.get(this).emit('option.hovered', this.index),

      mouseoutHandler: evt => this.hover = false,

      mouseoverHandler: evt => {
        let mousedown = _.get(this).mouseButtonDown(evt)

        if (!(this.parentNode.multiple && mousedown)) {
          this.hover = true
          return
        }

        let { shiftKey, metaKey, ctrlKey } = evt
        _.get(this).select(shiftKey, metaKey, ctrlKey, mousedown)
      },

      select: (shiftKey = false, metaKey = false, ctrlKey = false, mousedown = false) => {
        let { index } = this
        _.get(this).emit('option.selected', {index, shiftKey, metaKey, ctrlKey, mousedown}, this.parentNode)
      },

      selectionHandler: evt => {
        let { shiftKey, metaKey, ctrlKey } = evt
        _.get(this).select(shiftKey, metaKey, ctrlKey)
      },

      parentStateChangeHandler: evt => {
        let { name, value } = evt.detail

        switch (name) {
          case 'multiple':
            if (value) {
              this.removeEventListener('mouseup', _.get(this).selectionHandler)
              this.addEventListener('mousedown', _.get(this).selectionHandler)
            } else {
              this.addEventListener('mouseup', _.get(this).selectionHandler)
              this.removeEventListener('mousedown', _.get(this).selectionHandler)
            }
            break

          default: return
        }
      }
    })
  }

  static get observedAttributes () {
    return ['disabled', 'hover', 'label', 'selected', 'value']
  }

  get text () {
    return this.innerHTML
  }

  set text (content) {
    this.innerHTML = content
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'disabled':
      case 'selected':
      case 'hovered':
        return _.get(this).setBooleanAttributeValue(attr, newValue)

      case 'label':
      case 'value':
        return _.get(this).setAttributeValue(attr, newValue)

      default: return
    }
  }

  connectedCallback () {
    this.addEventListener('mouseover', _.get(this).mouseoverHandler)
    this.addEventListener('mousemove', _.get(this).mousemoveHandler)
    this.addEventListener('mouseout', _.get(this).mouseoutHandler)
    this.addEventListener('mouseup', _.get(this).selectionHandler)

    this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler)
  }

  disconnectedCallback () {
    this.removeEventListener('mouseover', _.get(this).mouseoverHandler)
    this.removeEventListener('mousemove', _.get(this).mousemoveHandler)
    this.removeEventListener('mouseout', _.get(this).mouseoutHandler)
    this.removeEventListener('mouseup', _.get(this).selectionHandler)
    this.removeEventListener('mousedown', _.get(this).selectionHandler)

    this.displayElement.removeEventListener('mousedown', _p.get(this).multipleMousedownHandler)
    this.displayElement.removeEventListener('mouseup', _p.get(this).multipleMouseupHandler)
    this.displayElement.removeEventListener('mouseup', _p.get(this).mouseupHandler)

    this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler)
  }

  /**
   * @method remove
   * Remove this option from the DOM.
   * @override
   */
  remove () {
    this.parentNode.options.splice(this.index, 1)
    super.remove()
  }
}

customElements.define('chassis-option', ChassisOptionElement)
