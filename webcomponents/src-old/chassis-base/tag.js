const ChassisBaseComponent = superClass => class extends superClass {
  constructor (templateString) {
    super()
    console.log('base component initialized');
  }

  test () {
    console.log('base class test passed');
  }
}

// class ChassisBaseComponent extends HTMLElement {
//   constructor (templateString) {
//     super()
//
//     this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : ('keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode')
//
//     this.attachShadow({mode: 'open'})
//
//     let container = document.createElement('div')
//     container.insertAdjacentHTML('afterbegin', templateString)
//
//     let template = container.querySelector('template')
//
//     if ('content' in template) {
//       this.shadowRoot.appendChild(template.content.cloneNode(true))
//     } else {
//       template.childNodes.forEach((child) => {
//         this.shadowRoot.appendChild(child.cloneNode(true))
//       })
//     }
//
//     template = null
//     this.crypto = null
//
//     try {
//       this.crypto = crypto
//     } catch (e) {
//       this.crypto = msCrypto
//     }
//
//     Object.defineProperty(this, 'PRIVATE', {
//       value: {
//         addAttribute: attr => {
//           this.PRIVATE.addProperty(attr)
//         },
//
//         addAttributes: attrs => attrs.forEach(attr => this.PRIVATE.addAttribute(attr)),
//
//         addProperty: prop => {
//           Object.defineProperty(this, prop, {
//             get () {
//               return this.getAttribute(prop)
//             },
//             set (value) {
//               this.setAttribute(prop, value)
//             }
//           })
//         },
//
//         addProperties: props => props.forEach(prop => this.PRIVATE.addProperty(prop)),
//
//         addReadOnlyProperty: prop => {
//           let name = prop
//
//           if (typeof prop === 'string') {
//             return Object.defineProperty(this, prop, {
//               set (value) {
//                 this.PRIVATE.throw('readonly', {prop})
//               }
//             })
//           }
//
//           if (typeof prop !== 'object') {
//             return console.error(`ERROR <${this.localName}> Read-only property must be type "object" or "string"`)
//           }
//
//           if (!prop.hasOwnProperty('name')) {
//             return console.error(`ERROR <${this.localName}> Read-only property definition object must must have a "name" property!`)
//           }
//
//           Object.defineProperty(this, props.name, {
//             set (value) {
//               this.PRIVATE.throw('readonly', {
//                 prop: prop.name
//               })
//             },
//
//             get: prop.hasOwnProperty('get') ? prop.get : function () {
//               return this.PRIVATE[prop]
//             }
//           })
//         },
//
//         addReadOnlyProperties: props => props.forEach(prop => this.PRIVATE.addReadOnlyProperty(prop)),
//
//         addBooleanAttribute: attr => {
//           Object.defineProperty(this, attr, {
//             get () {
//               return this.PRIVATE.getBooleanAttributeValue(prop)
//             },
//
//             set (value) {
//               this.PRIVATE[attr] = value
//             }
//           })
//         },
//
//         addBooleanAttributes: attrs => attrs.forEach(attr => this.PRIVATE.addBooleanAttribute(attr)),
//
//         getBooleanAttributeValue: attr => this.hasAttribute(prop) && this.getAttribute(prop) !== 'false',
//
//         setBooleanAttributeValue: (attr, value) => {
//           if (typeof value === 'boolean') {
//             value = value.toString()
//           }
//
//           let acceptableValues = ['true', 'false', '', null]
//
//           if (!acceptableValues.includes(value)) {
//             console.error(`<${this.localName}> "${attr}" attribute expected boolean but received "${value}"`)
//             return this.removeAttribute(attr)
//           }
//
//           switch (value) {
//             case false:
//             case null:
//               return this.removeAttribute(attr)
//
//             case 'true':
//             case '':
//               return this.setAttribute(attr, '')
//
//             default: return
//           }
//         },
//
//         generateGuid: (prefix = null) => {
//           let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => {
//             return (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//           })
//
//           return prefix ? `${prefix}_${id}` : id
//         },
//
//         createEvent: (name, detail) => {
//           return new CustomEvent(name, {detail})
//         },
//
//         emit: (name, detail, target = null) => {
//           let event = this.PRIVATE.createEvent(name, detail)
//
//           if (target) {
//             return target.dispatchEvent(event)
//           }
//
//           this.dispatchEvent(event)
//         },
//
//         throw: (type, vars) => {
//           let message = `ERROR <${this.localName}> `
//
//           switch (type) {
//             case 'readonly':
//               message += `Cannot set read-only property "${vars.prop}"`
//               break
//
//             default:
//               message = message.trim()
//           }
//
//           console.error(message)
//         }
//       }
//     })
//   }
// }
