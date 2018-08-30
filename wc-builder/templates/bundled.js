customElements.define('{{TAG-NAME}}', (function () {
  let _private = new WeakMap()

  return class extends {{SUPER-CLASS}} {
    constructor () {
      super()

      this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : ('keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode')

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

      _private.set(this, {
        addReadOnlyProp: (prop) => {
          Object.defineProperty(this, prop, _private.get(this).readonlyProperty(prop))
        },

        addReadOnlyProps: (props) => {
          props.forEach((prop) => _private.get(this).addReadOnlyProp(prop))
        },

        generateGuid: (prefix = null) => {
          let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => {
            return (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          })

          return prefix ? `${prefix}_${id}` : id
        },

        getBooleanPropertyValue: prop => this.hasAttribute(prop) && this.getAttribute(prop) !== 'false',

        handleAttributeChange: (attr, val) => {
          if (!_private.get(this).sourceEl) {
            return
          }

          this.setAttribute(attr, val)
          _private.get(this).sourceEl[attr] = val
        },

        handleBooleanAttributeChange: (attr, value) => {
          if (!_private.get(this).sourceEl) {
            return
          }

          let acceptableValues = ['true', 'false', '', null]

          if (!acceptableValues.includes(value)) {
            console.error(`<${this.tagName.toLowerCase()}> "${attr}" attribute expected boolean but received "${value}"`)
            this.removeAttribute(attr)
            _private.get(this).sourceEl[attr] = false
            return
          }

          if (value === 'false' && this.hasAttribute(attr)) {
            this.removeAttribute(attr)
            _private.get(this).sourceEl[attr] = false
            return
          }

          _private.get(this).sourceEl[attr] = this.hasAttribute(attr)
        },

        handleBooleanPropertyChange: (prop, bool) => {
          if (!bool) {
            this.removeAttribute(prop)
            _private.get(this).sourceEl[prop] = false
            return
          }

          if (!this.hasAttribute(prop) || this.getAttribute(prop) !== 'true') {
            this.setAttribute(prop, '')
            _private.get(this).sourceEl[prop] = true
          }
        },

        handlePropertyChange: (prop, val) => {
          _private.get(this).sourceEl[prop] = val

          if (!this.hasAttribute(prop) || this.getAttribute(prop) !== val) {
            this.setAttribute(prop, val)
          }
        },

        readonlyProperty: (name) => ({
          get: () => _private.get(this).sourceEl[name],
          set: () => _private.get(this).throw('readonly', {name})
        }),

        throw: (type, vars) => {
          let message = 'ERROR <{{TAG-NAME}}> '

          switch (type) {
            case 'readonly':
              message += `Cannot set read-only property "${vars.name}".`
              break

            default:
              message = message.trim()
          }

          console.error(message)
        }
      })
    }
  }
})())
