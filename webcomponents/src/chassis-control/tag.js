class ChassisFormControl extends HTMLElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
    return ['type']
  }

  connectedCallback () {
    console.log('connected');
  }

  attributeChangedCallback (name, oldValue, newValue) {
    switch (name.toLowerCase()) {


      default:
        return
    }
  }
}

customElements.define('chassis-control', ChassisFormControl)
