class ChassisDrawerElement extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    console.log('init chassis-drawer');
  }
}

customElements.define('chassis-drawer', ChassisDrawerElement)
