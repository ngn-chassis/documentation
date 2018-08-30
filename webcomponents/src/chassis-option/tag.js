class ChassisOption extends HTMLElement {
  constructor () {
    super()

    this.optionEl = null
    this.parent = null
  }

  get defaultSelected () {
    return this.optionEl.defaultSelected
  }

  set defaultSelected (bool) {
    this.optionEl.defaultSelected = bool
  }

  get disabled () {
    return this.optionEl.disabled
  }

  set disabled (bool) {
    this.optionEl.disabled = bool
  }

  get form () {
    return this.parent.form
  }

  set form (value) {
    return _private.get(this).throw('readonly', {
      name: 'form'
    })
  }

  get index () {
    return this.optionEl.index
  }

  set index (value) {
    return _private.get(this).throw('readonly', {
      name: 'index'
    })
  }

  get label () {
    return this.optionEl.label
  }

  set label (value) {
    this.optionEl.label = value
  }

  get selected () {
    return this.optionEl.selected
  }

  set selected (bool) {
    this.optionEl.selected = bool
  }

  get text () {
    return this.optionEl.text
  }

  set text (value) {
    this.optionEl.text = value
  }

  get value () {
    return this.optionEl.value
  }

  set value (value) {
    this.optionEl.value = value
  }

  connectedCallback () {

  }
}

customElements.define('chassis-option', ChassisOption)
