class ChassisSelectTitle extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    console.log('connected chassis-select-title');
  }
}

customElements.define('chassis-select-title', ChassisSelectTitle)
