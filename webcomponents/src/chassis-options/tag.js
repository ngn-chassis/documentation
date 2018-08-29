class ChassisOptions extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {

  }

  get options () {
    return this.querySelectorAll('chassis-option')
  }

  clear () {
    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }
  }

  remove (index = null) {
    if (index === null) {
      return
    }

    this.options.item(index).remove()
  }
}

customElements.define('chassis-options', ChassisOptions)
