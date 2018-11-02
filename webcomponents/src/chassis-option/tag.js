class ChassisOption extends HTMLElement {
  constructor () {
    super()

    this.parent = null
    this.defaultSelected = false

    // this.addEventListener('click', evt => {
    //   console.log('chassis-option');
    // })

    this.addEventListener('mouseover', evt => {
      if (this.parent.mousedown) {
        return console.log('select me');
      }

      this.parent.hoverOption(this.index)
    })

    this.addEventListener('mousemove', evt => this.parent.hoverOption(this.index))
    this.addEventListener('mouseout', evt => this.parent.unHoverOption(this.index))
  }

  static get observedAttributes () {
    return ['disabled', 'hovered', 'label', 'selected', 'value']
  }

  get disabled () {
    return _.get(this).getBooleanPropertyValue('disabled')
  }

  set disabled (bool) {
    _.get(this).handleBooleanPropertyChange('disabled', bool)
  }

  set form (value) {
    return _.get(this).throw('readonly', {
      name: 'form'
    })
  }

  get id () {
    return this.getAttribute('id')
  }

  set id (value) {
    _.get(this).handlePropertyChange('id', value)
  }

  get index () {
    return this.parent.options.findIndex(option => option.displayElement === this)
  }

  set index (value) {
    return _.get(this).throw('readonly', {
      name: 'index'
    })
  }

  get label () {
    return this.getAttribute('label')
  }

  set label (label) {
    _.get(this).handlePropertyChange('label', label)
  }

  get selected () {
    return _.get(this).getBooleanPropertyValue('selected')
  }

  set selected (bool) {
    _.get(this).handleBooleanPropertyChange('selected', bool)
  }

  get text () {
    return this.innerHTML
  }

  set text (content) {
    this.innerHTML = content
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (value) {
    _.get(this).handlePropertyChange('value', value)
  }

  get hovered () {
    return this.hasAttribute('hover')
  }

  set hovered (bool) {
    bool ? this.setAttribute('hover', '') : this.removeAttribute('hover')
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
        return _.get(this).handleBooleanAttributeChange(attr, newValue)

      case 'label':
      case 'value':
        return _.get(this).handleAttributeChange(attr, newValue)

      default: return
    }
  }

  connectedCallback () {}

  /**
   * @method remove
   * Remove this option from the DOM.
   * @override
   */
  remove (native = true) {
    this.parent.options.splice(this.index, 1)
    super.remove()
  }
}

customElements.define('chassis-option', ChassisOption)
