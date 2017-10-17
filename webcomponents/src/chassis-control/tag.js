class ChassisFormControl extends HTMLElement {
  constructor () {
    super()

    this.fieldInputTypes = [
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'image',
      'month',
      'number',
      'password',
      'range',
      'reset',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
      'week',
      'textarea'
    ]

    this.toggleInputTypes = [
      'checkbox',
      'radio'
    ]

    this.supportedTypes = [
      'field',
      'toggle',
      'select'
    ]
  }

  static get observedAttributes () {
    return ['type']
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    this.setAttribute('type', value)
  }

  _generateGuid () {
    let lut = []

    for (let i = 0; i < 256; i++) {
      lut[i] = (i < 16 ? '0' : '') + i.toString(16)
    }

    let d0 = Math.random() * 0xffffffff | 0
    let d1 = Math.random() * 0xffffffff | 0
    let d2 = Math.random() * 0xffffffff | 0
    let d3 = Math.random() * 0xffffffff | 0

    return 'input_' + lut[d0&0xff] + lut[d0>>8&0xff] + lut[d0>>16&0xff] + lut[d0>>24&0xff] + '-' +
      lut[d1&0xff] + lut[d1>>8&0xff] + '-' + lut[d1>>16&0x0f|0x40] + lut[d1>>24&0xff] +'-'+
      lut[d2&0x3f|0x80] + lut[d2>>8&0xff] + '-' + lut[d2>>16&0xff] + lut[d2>>24&0xff] +
      lut[d3&0xff] + lut[d3>>8&0xff] + lut[d3>>16&0xff] + lut[d3>>24&0xff]
  }

  connectedCallback () {
    this._guid = this._generateGuid()

    for (let child of this.shadowRoot.childNodes) {
      if (child.nodeName === 'SLOT') {
        child.addEventListener('slotchange', (e) => {
          console.log('slotchange fired');
        })
      }
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!mutation.addedNodes.length) {
          return
        }

        let node = mutation.addedNodes[0]

        switch (node.nodeName) {
          case 'LABEL':
            return this.initLabel(node)

          case 'INPUT':
          case 'TEXTAREA':
            return this.initInput(node)

          case 'SELECT':
            return this.initSelectMenu(node)

          default:
            return
        }
      })
    })

    observer.observe(this, { childList: true })

    // Mutation Observer will not run on initialization in browsers without a
    // native implementation of Web Components, so this will add labels and
    // inputs to the appropriate slots once the component has connected
    setTimeout(() => {
      let label = this.querySelector('label')
      let input = this.querySelector('input')
      let textarea = this.querySelector('textarea')
      let select = this.querySelector('select')

      if (label) {
        this.initLabel(label)
      }

      if (input) {
        this.initInput(input)
      }

      if (textarea) {
        this.initInput(textarea)
      }

      if (select) {
        this.initSelectMenu(select)
      }
    })
  }

  attributeChangedCallback (name, oldValue, newValue) {
    let attr = name.toLowerCase()

    switch (attr) {
      case 'type':
        if (this.type !== newValue) {
          this.type = newValue
        }
        break

      default:
        return
    }
  }

  initLabel (node) {
    this.label = node
    node.slot = node.slot || 'label'

    if (this.id) {
      node.htmlFor = this._guid
    }
  }

  initInput (node) {
    this.input = node
    node.slot = node.slot || 'input'

    if (this.id) {
      node.id = this._guid
    }

    if (this.type) {
      if (!this.supportedTypes.includes(this.type)) {
        console.warn(`[WARNING] Chassis Form Controls do not support type "${this.type}." Supported types: ${this.supportedTypes.join(', ')}.`)
      }

      return
    }

    if (this.fieldInputTypes.includes(node.type)) {
      this.type = 'field'
    }

    if (this.toggleInputTypes.includes(node.type)) {
      this.type = 'toggle'
    }
  }

  initSelectMenu (node) {
    this.input = node
    node.slot = node.slot || 'input'
    this.type = 'select'

    if (this.id) {
      node.id = this._guid
    }
  }
}

customElements.define('chassis-control', ChassisFormControl)
