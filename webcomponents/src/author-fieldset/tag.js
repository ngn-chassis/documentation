class AuthorFieldsetElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.defineAttributes({
      name: ''
    })

    this.UTIL.defineProperties({
      sourceElement: {
        private: true,
        readonly: true,
        default: document.createElement('fieldset')
      },

      disabled: false,

      elements: {
        readonly: true,
        get: () => ''
      },

      form: {
        readonly: true,
        get: () => ''
      },

      type: {
        readonly: true,
        default: 'author-fieldset'
      },

      validationMessage: {
        readonly: true,
        get: () => this.PRIVATE.sourceElement.validationMessage
      },

      validity: {
        readonly: true,
        get: () => this.PRIVATE.sourceElement.validity
      },

      willValidate: {
        readonly: true,
        get: () => this.PRIVATE.sourceElement.willValidate
      }
    })
  }

  checkValidity () {
    this.PRIVATE.sourceElement.checkValidity()
  }

  setCustomValidity (string = '') {
    this.PRIVATE.sourceElement.setCustomValidity(string)
  }
}

customElements.define('author-fieldset', AuthorFieldsetElement)
