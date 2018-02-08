class ChassisLayout extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    console.log(_private);
  }
}

customElements.define('chassis-layout', ChassisLayout)
