class ChassisLayout extends HTMLElement {
  constructor () {
    super()

    _private.set(this, {
      children: []
    })
  }

  connectedCallback () {
    console.log('Init chassis-layout');
  }
}

customElements.define('chassis-layout', ChassisLayout)
