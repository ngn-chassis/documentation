class ChassisOption extends HTMLElement {
  constructor () {
    super()

    this.parent = null

    this.defaultSelected = false
    this.disabled = false
    this.label = ''
    this.selected = false
    this.text = ''
    this.value = ''
  }

  set form (value) {
    return _private.get(this).throw('readonly', {
      name: 'form'
    })
  }

  get index () {
    return this.parent.displayOptions.indexOf(this)
  }

  set index (value) {
    return _private.get(this).throw('readonly', {
      name: 'index'
    })
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
