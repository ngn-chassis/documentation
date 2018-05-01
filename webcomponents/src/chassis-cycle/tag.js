class ChassisCycle extends HTMLElement {
  constructor () {
    super()
    this.active = false
  }

  connectedCallback () {
    console.log('init chassis-cycle');
  }
}

customElements.define('chassis-cycle', ChassisCycle)
