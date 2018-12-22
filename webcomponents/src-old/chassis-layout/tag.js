class ChassisLayoutElement extends HTMLElement {
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

customElements.define('chassis-layout', ChassisLayoutElement)
