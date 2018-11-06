class ChassisOptionElement extends HTMLElement {
  constructor () {
    super()

    this.parent = null
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
          return this.parent.options.findIndex(option => option.displayElement === this)
        }
      }
    ])

    _.get(this).addPrivateProperties({
      form: null
    })

    this.addEventListener('mouseover', evt => {
      if (this.parent.multiple && this.parent.mousedown) {
        return this.parent.select(this.index, true)
      }

      this.parent.hoverOption(this.index)
    })

    this.addEventListener('focus', evt => {
      console.log('chassis-option');
    })

    this.addEventListener('mousemove', evt => this.parent.hoverOption(this.index))
    this.addEventListener('mouseout', evt => this.parent.unHoverOption(this.index))
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

  connectedCallback () {}

  /**
   * @method remove
   * Remove this option from the DOM.
   * @override
   */
  remove () {
    this.parent.options.splice(this.index, 1)
    super.remove()
  }
}

customElements.define('chassis-option', ChassisOptionElement)
