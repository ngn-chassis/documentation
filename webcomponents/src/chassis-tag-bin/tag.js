class ChassisTagBin extends HTMLElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
    return []
  }

  attributeChangedCallback (attr, oldValue, newValue) {

  }

  connectedCallback () {

  }
}

customElements.define('chassis-tag-bin', ChassisTagBin)
