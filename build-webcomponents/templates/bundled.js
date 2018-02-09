customElements.define('{{TAG-NAME}}', (function () {
  let _private = new WeakMap()

  return class extends {{SUPER-CLASS}} {
    constructor () {
      super()

      this.attachShadow({mode: 'open'})

      let container = document.createElement('div')
      container.insertAdjacentHTML('afterbegin', `{{TEMPLATE-STRING}}`)

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
  }
})())
