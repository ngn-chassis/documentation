class {{CLASS-IDENTIFIER}} extends {{SUPER-CLASS}} {
  constructor () {
    super()

    this.attachShadow({mode: 'open'})

    let template = document.createElement('template')
    template.insertAdjacentHTML('afterbegin', this.templateString)
    this.shadowRoot.appendChild(template.children[0].content.cloneNode(true))
    template = null
  }

  get templateString () {
    return `{{TEMPLATE-STRING}}`
  }
}

customElements.define('{{TAG-NAME}}', {{CLASS-IDENTIFIER}})
