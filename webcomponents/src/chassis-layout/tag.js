class ChassisLayout extends HTMLElement {
  constructor () {
    super()

    _.set(this, {
      children: []
    })
  }

  connectedCallback () {
    console.log('Init chassis-layout');
  }
}

customElements.define('chassis-layout', ChassisLayout)
