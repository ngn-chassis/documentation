const AuthorElement = superClass => class extends superClass {
  constructor (templateString) {
    super()

    this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : ('keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode')

    this.attachShadow({ mode: 'open' })

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

    // TODO: Add enumerable: false
    // configurable: false
    // writable: false
    Object.defineProperties(this, {
      PRIVATE: {
        value: {}
      },

      UTIL: {
        value: {}
      }
    })

    Object.defineProperties(this.PRIVATE, {
      attributes: {
        value: {}
      },

      booleanAttributes: {
        value: {}
      },

      privateProperties: {
        value: []
      },

      readOnlyProperties: {
        value: []
      },

      listeners: {
        value: []
      }
    })

    Object.defineProperties(this.UTIL, {
      defineAttribute: {
        value: (name, defaultValue) => {
          let customGetter = null
          let customSetter = null

          if (typeof defaultValue === 'object') {
            let cfg = defaultValue

            if (cfg.hasOwnProperty('get')) {
              customGetter = cfg.get
            }

            if (cfg.hasOwnProperty('set')) {
              customSetter = cfg.set
            }

            defaultValue = cfg.default || null
          }

          let isBool = typeof defaultValue === 'boolean'
          let privateKey = isBool ? 'booleanAttributes' : 'attributes'

          Object.defineProperty(this.PRIVATE[privateKey], name, {
            get: () => {
              if (customGetter) {
                return customGetter() || defaultValue
              }

              return defaultValue
            },

            set: value => customSetter && customSetter(value)
          })

          Object.defineProperty(this, name, {
            get: () => {
              if (customGetter) {
                return customGetter() || defaultValue
              }

              if (isBool) {
                return this.UTIL.getBooleanAttributeValue(name)
              }

              return this.hasAttribute(name) ? this.getAttribute(name) : defaultValue
            },

            set: value => {
              customSetter && customSetter(value)

              if (customGetter) {
                value = this.PRIVATE[privateKey][name]
              }

              if (isBool) {
                return this.UTIL.setBooleanAttributeValue(name, value)
              }

              this.setAttribute(name, value)
            }
          })
        }
      },

      defineAttributes: {
        value: attrs => {
          for (let attr in attrs) {
            this.UTIL.defineAttribute(attr, attrs[attr])
          }
        }
      },

      definePrivateProperty: {
        value: (prop, value) => {
          this.PRIVATE.privateProperties.push(prop)

          Object.defineProperty(this.PRIVATE, prop, {
            writable: true,
            value
          })
        }
      },

      definePrivateProperties: {
        value: props => {
          for (let prop in props) {
            this.UTIL.definePrivateProperty(prop, props[prop])
          }
        }
      },

      defineReadOnlyProperty: {
        value: prop => {
          if (typeof prop === 'string') {
            this.PRIVATE.readOnlyProperties.push(prop)

            return Object.defineProperty(this, prop, { // eslint-disable-line accessor-pairs
              set (value) {
                this.throwError({
                  type: 'readonly',
                  vars: { prop }
                })
              }
            })
          }

          if (typeof prop !== 'object') {
            return this.UTIL.throwError({
              type: 'type',
              message: `Read-only property must be type "object" or "string"`
            })
          }

          if (!prop.hasOwnProperty('name')) {
            return this.UTIL.throwError({
              type: 'reference',
              message: `Read-only property definition object must must have a "name" property!`
            })
          }

          this.PRIVATE.readOnlyProperties.push(prop.name)

          Object.defineProperty(this, prop.name, {
            set (value) {
              this.UTIL.throwError({
                type: 'readonly',
                vars: {
                  prop: prop.name
                }
              })
            },

            get: prop.hasOwnProperty('get') ? prop.get : function () {
              return this[prop]
            }
          })
        }
      },

      defineReadOnlyProperties: {
        value: props => props.forEach(prop => this.UTIL.defineReadOnlyProperty(prop))
      },

      getBooleanAttributeValue: {
        value: attr => this.hasAttribute(attr) && this.getAttribute(attr) !== 'false'
      },

      setBooleanAttributeValue: {
        value: (attr, value) => {
          if (typeof value === 'boolean') {
            value = value.toString()
          }

          let acceptableValues = ['true', 'false', '', null]

          if (!acceptableValues.includes(value)) {
            this.UTIL.printToConsole(`"${attr}" attribute expected boolean but received "${value}"`, 'error')
            return this.removeAttribute(attr)
          }

          switch (value) {
            case 'false':
            case null:
              return this.removeAttribute(attr)

            case 'true':
            case '':
              return this.setAttribute(attr, '')
          }
        }
      },

      createEvent: {
        value: (name, detail) => {
          return new CustomEvent(name, { detail })
        }
      },

      generateGuid: {
        value: (prefix = null) => {
          let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => { // eslint-disable-line space-infix-ops
            return (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          })

          return prefix ? `${prefix}_${id}` : id
        }
      },

      throwError: {
        value: properties => {
          let finalMessage = `<${this.localName}> `

          let type = properties.type || 'custom'
          let error = new Error()
          let { vars } = properties || null

          if (type === 'dependency') {
            finalMessage += 'Missing dependency'

            if (vars) {
              if (vars.hasOwnProperty('name')) {
                finalMessage += `: ${vars.name}`
              }

              if (vars.hasOwnProperty('url')) {
                finalMessage += ` ${vars.url}`
              }
            }
          }

          if (type === 'readonly') {
            finalMessage += `Cannot set read-only property`

            if (vars) {
              if (vars.hasOwnProperty('prop')) {
                finalMessage += ` "${vars.prop}"`
              }
            }
          }

          if (type === 'reference') {
            error = new ReferenceError()
          }

          if (type === 'type') {
            error = new TypeError()
          }

          if (properties.hasOwnProperty('message')) {
            finalMessage += ` ${properties.message}`
          }

          error.message = finalMessage.trim()
          throw error
        }
      },

      printToConsole: {
        value: (message, type = 'log') => {
          let finalMessage = `<${this.localName}> ${message}`

          switch (type) {
            case 'warning': return console.warn(`[WARNING] ${finalMessage}`)
            case 'error': return console.error(`[ERROR] ${finalMessage}`)
            case 'info': return console.info(finalMessage)
            default: return console.log(finalMessage)
          }
        }
      },

      childMonitor: {
        value: null
      },

      monitorChildren: {
        value: (callback, subtree = false) => {
          this.childMonitor = new MutationObserver(callback)

          this.childMonitor.observe(this, {
            childList: true,
            attributes: false,
            characterData: false,
            subtree: typeof subtree === 'boolean' ? subtree : false
          })
        }
      },

      registerListener: {
        value: (element, evtName, callback) => {
          let listener = {
            id: `listener_${this.UTIL.generateGuid()}`,
            apply: () => {
              element.addEventListener(evtName, callback)
            },
            remove: () => {
              element.removeEventListener(evtName, callback)
            }
          }

          this.PRIVATE.listeners.push(listener)
          listener.apply()
        }
      },

      registerListeners: {
        value: (element, listeners) => {
          listeners.forEach(listener => this.UTIL.registerListener(element, listener.name, listener.callback))
        }
      }
    })
  }

  attributeChangedCallback (attribute, oldValue, newValue) {
    let { attributes, booleanAttributes } = this.PRIVATE

    if (attributes.hasOwnProperty(attribute)) {
      if (attributes[attribute] !== newValue) {
        this.PRIVATE.attributes[attribute] = newValue
      }

      return
    }

    if (booleanAttributes.hasOwnProperty(attribute)) {
      if (newValue !== 'true' && newValue !== '') {
        this.PRIVATE.booleanAttributes[attribute] = newValue
      }
    }

    this.emit('attribute.change', {
      attribute,
      oldValue,
      newValue
    })
  }

  connectedCallback () {
    this.emit('connected')

    setTimeout(() => {
      this.emit('rendered')
    }, 0)
  }

  disconnectedCallback () {
    this.PRIVATE.listeners.forEach(listener => listener.remove())
    this.emit('disconnected')
  }

  emit (name, detail, target = null) {
    let event = this.UTIL.createEvent(name, detail)

    if (target) {
      return target.dispatchEvent(event)
    }

    this.dispatchEvent(event)
  }

  on (evtName, callback) {
    this.addEventListener(evtName, callback)
  }
}
