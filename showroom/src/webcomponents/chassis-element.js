const ChassisBaseComponent = superClass => class extends superClass {
  constructor (templateString) {
    super()

    this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : ('keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode')

    this.attachShadow({mode: 'open'})

    let container = document.createElement('div')
    container.insertAdjacentHTML('afterbegin', templateString)

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

    Object.defineProperties(this, {
      PRIVATE: {
        value: {}
      },

      UTIL: {
        value: {}
      }
    })

    Object.defineProperties(this.UTIL, {
      addAttribute: {
        value: attr => {
          this.addProperty(attr)
        }
      },

      addAttributes: {
        value: attrs => attrs.forEach(attr => this.addAttribute(attr))
      },

      addProperty: {
        value: prop => {
          Object.defineProperty(this, prop, {
            get () {
              return this.getAttribute(prop)
            },
            set (value) {
              this.setAttribute(prop, value)
            }
          })
        }
      },

      addProperties: {
        value: props => props.forEach(prop => this.addProperty(prop))
      },

      addReadOnlyProperty: {
        value: prop => {
          let name = prop

          if (typeof prop === 'string') {
            return Object.defineProperty(this, prop, {
              set (value) {
                this.throw('readonly', {prop})
              }
            })
          }

          if (typeof prop !== 'object') {
            return console.error(`ERROR <${this.localName}> Read-only property must be type "object" or "string"`)
          }

          if (!prop.hasOwnProperty('name')) {
            return console.error(`ERROR <${this.localName}> Read-only property definition object must must have a "name" property!`)
          }

          Object.defineProperty(this, props.name, {
            set (value) {
              this.throw('readonly', {
                prop: prop.name
              })
            },

            get: prop.hasOwnProperty('get') ? prop.get : function () {
              return this[prop]
            }
          })
        }
      },

      addReadOnlyProperties: {
        value: props => props.forEach(prop => this.addReadOnlyProperty(prop))
      },

      addBooleanAttribute: {
        value: attr => {
          Object.defineProperty(this, attr, {
            get () {
              return this.getBooleanAttributeValue(prop)
            },

            set (value) {
              this[attr] = value
            }
          })
        }
      },

      addBooleanAttributes: {
        value: attrs => attrs.forEach(attr => this.addBooleanAttribute(attr))
      },

      addPrivateProperties: {
        value: props => {
          for (let prop in props) {
            Object.defineProperty(this.PRIVATE, prop, {
              writable: true,
              value: props[prop]
            })
          }
        }
      },

      getBooleanAttributeValue: {
        value: attr => this.hasAttribute(prop) && this.getAttribute(prop) !== 'false'
      },

      setBooleanAttributeValue: {
        value: (attr, value) => {
          if (typeof value === 'boolean') {
            value = value.toString()
          }

          let acceptableValues = ['true', 'false', '', null]

          if (!acceptableValues.includes(value)) {
            console.error(`<${this.localName}> "${attr}" attribute expected boolean but received "${value}"`)
            return this.removeAttribute(attr)
          }

          switch (value) {
            case false:
            case null:
              return this.removeAttribute(attr)

            case 'true':
            case '':
              return this.setAttribute(attr, '')

            default: return
          }
        }
      },

      generateGuid: {
        value: (prefix = null) => {
          let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => {
            return (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          })

          return prefix ? `${prefix}_${id}` : id
        }
      },

      createEvent: {
        value: (name, detail) => {
          return new CustomEvent(name, {detail})
        }
      },

      emit: {
        value: (name, detail, target = null) => {
          let event = this.createEvent(name, detail)

          if (target) {
            return target.dispatchEvent(event)
          }

          this.dispatchEvent(event)
        }
      },

      throw: {
        value: (type, vars) => {
          let message = `ERROR <${this.localName}> `

          switch (type) {
            case 'readonly':
              message += `Cannot set read-only property "${vars.prop}"`
              break

            default:
              message = message.trim()
          }

          console.error(message)
        }
      }
    })
  }
}
