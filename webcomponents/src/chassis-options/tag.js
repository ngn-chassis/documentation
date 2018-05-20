class ChassisOptions extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {

  }

  clear () {
    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }
  }
}

customElements.define('chassis-options', ChassisOptions)
