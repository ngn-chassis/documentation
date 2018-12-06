class ChassisOptgroupElement extends HTMLElement {
  constructor () {
    super()

    _.get(this).addPrivateProperties({
      optionSelectionHandler: evt => _.get(this).emit('option.selected', evt.detail, this.parentNode),
      parentStateChangeHandler: evt => _.get(this).emit('state.change', evt.detail)
    })
  }

  get options () {
    return this.parentNode.options
  }

  get multiple () {
    return this.parentNode.multiple
  }

  connectedCallback () {
    this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler)
    this.addEventListener('option.selected', _.get(this).optionSelectionHandler)
  }

  disconnectedCallback () {
    this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler)
    this.removeEventListener('option.selected', _.get(this).optionSelectionHandler)
  }
}

customElements.define('chassis-optgroup', ChassisOptgroupElement)
