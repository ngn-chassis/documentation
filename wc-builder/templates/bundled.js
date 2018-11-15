customElements.define('{{TAG-NAME}}', (function () {
  let _ = new WeakMap()

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

      _.set(this, {
        sourceElement: null,

        addAttribute: prop => {
          Object.defineProperty(this, prop, {
            get () {
              return this.getAttribute(prop)
            },
            set (value) {
              _.get(this).setAttributeValue(prop, value)
            }
          })
        },

        addAttributes: props => props.forEach(prop => _.get(this).addAttribute(prop)),

        setAttributeValue: (attr, val) => {
          this.setAttribute(attr, val)

          if (_.get(this).sourceElement) {
            _.get(this).sourceElement[attr] = val
          }
        },

        addReadOnlyProperty: prop => {
          let custom = typeof prop === 'object'

          if (!custom && typeof prop !== 'string') {
            return console.error('ERROR <{{TAG-NAME}}> Read-only property must be type "object" or "string"')
          }

          let props = {
            set () {
              _.get(this).throw('readonly', {prop: custom ? prop.name : prop})
            }
          }

          if (custom && prop.hasOwnProperty('get')) {
            props.get = prop.get
          } else {
            props.get = function () {
              return _.get(this)[prop]
            }
          }

          Object.defineProperty(this, custom ? prop.name : prop, props)
        },

        addReadOnlyProperties: props => props.forEach(prop => _.get(this).addReadOnlyProperty(prop)),

        setReadOnlyPropertyValue: value => _.get(this)[prop] = value,

        addBooleanAttribute: prop => {
          Object.defineProperty(this, prop, {
            get () {
              return _.get(this).getBooleanAttributeValue(prop)
            },
            set (value) {
              _.get(this).setBooleanAttributeValue(prop, value)
            }
          })
        },

        addBooleanAttributes: props => props.forEach(prop => _.get(this).addBooleanAttribute(prop)),

        getBooleanAttributeValue: prop => this.hasAttribute(prop) && this.getAttribute(prop) !== 'false',

        setBooleanAttributeValue: (attr, value) => {
          if (typeof value === 'boolean') {
            value = value.toString()
          }

          let acceptableValues = ['true', 'false', '', null]

          if (!acceptableValues.includes(value)) {
            console.error(`<${this.localName}> "${attr}" attribute expected boolean but received "${value}"`)
            this.removeAttribute(attr)

            if (_.get(this).sourceElement) {
              _.get(this).sourceElement[attr] = false
            }

            return
          }

          switch (value) {
            case 'false':
            case null:
              this.removeAttribute(attr)

              if (_.get(this).sourceElement) {
                _.get(this).sourceElement[attr] = false
              }

              break

            case 'true':
            case '':
              this.setAttribute(attr, '')

              if (_.get(this).sourceElement) {
                _.get(this).sourceElement[attr] = true
              }
              break

            default: return
          }
        },

        addPrivateProperties: props => {
          for (let prop in props) {
            _.get(this)[prop] = props[prop]
          }
        },

        generateGuid: (prefix = null) => {
          let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => {
            return (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          })

          return prefix ? `${prefix}_${id}` : id
        },

        emit: (name, detail, target = null) => {
          if (target) {
            return target.dispatchEvent(_.get(this).newEvent(name, detail))
          }
          
          this.dispatchEvent(_.get(this).newEvent(name, detail))
        },

        newEvent: (name, detail) => {
          return new CustomEvent(name, {detail})
        },

        throw: (type, vars) => {
          let message = 'ERROR <{{TAG-NAME}}> '

          switch (type) {
            case 'readonly':
              message += `Cannot set read-only property "${vars.prop}".`
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
