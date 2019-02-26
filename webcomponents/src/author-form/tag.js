class AuthorFormElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineAttributes({
      novalidate: false
    })

    this.UTIL.defineProperties({
      validationHandlersApplied: {
        private: true,
        default: false
      },

      sourceElement: {
        private: true,
        readonly: true,
        default: document.createElement('form')
      },

      isValid: {
        readonly: true,
        get: () => this.invalidFields.length === 0
      },

      controls: {
        readonly: true,
        get: () => this.querySelectorAll('author-control')
      },

      elements: {
        readonly: true,
        get: () => {
          let AuthorHTMLFormControlsCollection = this.PRIVATE.generateAuthorHTMLFormControlsCollectionConstructor()
          let elements = this.querySelectorAll('author-control, author-fieldset, fieldset, button')
          let arr = []

          for (let element of elements) {
            if (element.localName === 'author-control') {
              element = element.input
            }

            arr.push(element)
          }

          return new AuthorHTMLFormControlsCollection(arr)
        }
      },

      resetButtons: {
        get: () => this.querySelectorAll('button[type="reset"]')
      },

      submitButtons: {
        get: () => this.querySelectorAll('button[type="submit"]')
      },

      invalidFields: {
        readonly: true,
        get: () => this.querySelectorAll('author-control[invalid]')
      },

      validFields: {
        readonly: true,
        get: () => this.querySelectorAll('author-control:not([invalid])')
      }
    })

    this.UTIL.definePrivateMethods({
      generateAuthorHTMLFormControlsCollectionConstructor: () => {
        let _p = new WeakMap()

        let AuthorHTMLFormControlsCollection = class AuthorHTMLFormControlsCollection extends this.PRIVATE.generateAuthorHTMLCollectionConstructor() {
          constructor (arr) {
            super(arr)
            _p.set(this, { arr })
          }

          get length () {
            return _p.get(this).arr.length
          }

          [Symbol.toStringTag] () {
            return `AuthorHTMLFormControlsCollection`
          }
        }

        return AuthorHTMLFormControlsCollection
      },

      validationHandler: evt => {
        let { attribute } = evt.detail

        if (attribute === 'invalid') {
          if (this.invalidFields.length > 0) {
            this.setAttribute('invalid', '')
          } else {
            this.removeAttribute('invalid')
          }
        }
      },

      applyValidationHandlers: () => {
        for (let control of this.controls) {
          control.on('attribute.changed', this.PRIVATE.validationHandler)
        }

        this.PRIVATE.validationHandlersApplied = true
      },

      removeValidationHandlers: () => {
        for (let control of this.controls) {
          control.off('attribute.changed', this.PRIVATE.validationHandler)
        }

        this.PRIVATE.validationHandlersApplied = false
      }
    })

    this.UTIL.registerListeners(this, {
      'attribute.changed': evt => {
        let { attribute } = evt.detail

        switch (attribute) {
          case 'novalidate':
            if (this.novalidate) {
              this.removeAttribute('invalid')

              if (this.PRIVATE.validationHandlersApplied) {
                this.PRIVATE.removeValidationHandlers()
              }
            } else {
              if (this.invalidFields.length > 0) {
                this.setAttribute('invalid', '')
              }

              if (!this.PRIVATE.validationHandlersApplied) {
                this.PRIVATE.applyValidationHandlers()
              }
            }

            break
        }
      },

      rendered: () => {
        if (!this.novalidate && !this.PRIVATE.validationHandlersApplied) {
           this.PRIVATE.applyValidationHandlers()
        }

        if (this.submitButtons.length > 0) {
          for (let submitButton of this.submitButtons) {
            this.UTIL.registerListener(submitButton, 'click', evt => {
              evt.preventDefault()

              if (this.novalidate || this.isValid) {
                return this.submit()
              }

              this.emit('invalid', { invalidFields: this.invalidFields })
            })
          }
        }

        if (this.resetButtons.length > 0) {
          for (let resetButton of this.resetButtons) {
            this.UTIL.registerListener(resetButton, 'click', evt => {
              evt.preventDefault()
              this.reset()
            })
          }
        }
      }
    })
  }

  static get observedAttributes () {
    return ['novalidate']
  }

  get data () {
    let data = {}

    for (let [index, control] of this.controls.entries()) {
      let { name, value } = control.input

      if (!name) {
        this.UTIL.printToConsole('Input is missing "name" attribute.', 'warning')
        name = index
      }

      data[name] = value
    }

    return data
  }

  reset () {
    for (let control of this.controls) {
      let { input } = control

      switch (input.localName) {
        case 'input':
        case 'textarea':
          input.value = control.initialValue
          break

        case 'author-select':
        case 'select':
          // input.selectedIndex = control.initialValue
          break
      }
    }
  }

  submit () {
    this.emit('submit', {
      invalidFields: this.invalidFields,
      data: this.data
    })
  }
}

customElements.define('author-form', AuthorFormElement)
