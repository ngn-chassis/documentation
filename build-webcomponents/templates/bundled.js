class {{CLASS-IDENTIFIER}} extends {{SUPER-CLASS}} {
  constructor () {
    super()

    this.attachShadow({mode: 'open'})

    let container = document.createElement('div')
    container.insertAdjacentHTML('afterbegin', this.templateString)

    let template = container.querySelector('template')

    if ('content' in template) {
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    } else {
      template.childNodes.forEach((child) => {
        this.shadowRoot.appendChild(child.cloneNode(true))
      })
    }

    template = null

    this.crypto = null

    try {
      this.crypto = crypto
    } catch (e) {
      this.crypto = msCrypto
    }
  }

  get templateString () {
    return `{{TEMPLATE-STRING}}`
  }
}

customElements.define('{{TAG-NAME}}', {{CLASS-IDENTIFIER}})
