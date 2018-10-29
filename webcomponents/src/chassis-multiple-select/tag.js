class ChassisMultipleSelect extends HTMLElement {
  constructor () {
    super()


  }

  static get observedAttributes () {
    return []
  }

  attributeChangedCallback () {

  }

  connectedCallback () {
    console.log('<chassis-multiple-select> init')
  }
}

customElements.define('chassis-multiple-select', ChassisMultipleSelect)
