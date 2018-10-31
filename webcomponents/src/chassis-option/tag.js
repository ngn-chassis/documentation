class ChassisOption extends HTMLElement {
  constructor () {
    super()

    this.parent = null
    this.defaultSelected = false
  }

  static get observedAttributes () {
    return ['disabled', 'label', 'selected', 'value']
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

  get index () {
    return this.parent.options.findIndex(option => option.displayElement === this)
  }

  set index (value) {
    return _.get(this).throw('readonly', {
      name: 'index'
    })
  }

  get label () {
    return _.get(this).sourceEl.label
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
    return _.get(this).sourceEl.value
  }

  set value (value) {
    _.get(this).handlePropertyChange('value', value)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'disabled':
      case 'selected':
        return _.get(this).handleBooleanAttributeChange(attr, newValue)

      case 'label':
      case 'value':
        return _.get(this).handleAttributeChange(attr, newValue)

      default: return
    }
  }

  connectedCallback () {

  }

  /**
   * @method remove
   * Remove this option from the DOM.
   * @override
   */
  remove () {
    this.parent.removeOptionByIndex(this.index, false)
    super.remove()
  }
}

customElements.define('chassis-option', ChassisOption)
