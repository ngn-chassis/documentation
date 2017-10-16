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
    return ['type', 'id']
  }

  get id () {
    return this.getAttribute('id')
  }

  set id (value) {
    this.setAttribute('id', value)
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    this.setAttribute('type', value)
  }

  connectedCallback () {
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

    setTimeout(() => {
      this.removeAttribute('id')
      // console.log('Input added:');
      // console.log('Label: ', this.label);
      // console.log('Input:', this.input)
    }, 0)
  }

  attributeChangedCallback (name, oldValue, newValue) {
    let attr = name.toLowerCase()

    switch (attr) {
      case 'type':
        if (this.type !== newValue) {
          this.type = newValue
        }
        break

      case 'id':
        if (this.id && this.id !== newValue) {
          this.applyId(newValue)
        }
        break

      default:
        return
    }
  }

  applyId (id) {
    this.removeAttribute('id')

    this.input && this.input.setAttribute('id', id)
    this.label && this.label.setAttribute('for', id)
  }

  initLabel (node) {
    this.label = node
    node.slot = node.slot || 'label'

    if (this.id) {
      node.htmlFor = this.id
    }
  }

  initInput (node) {
    this.input = node
    node.slot = node.slot || 'input'

    if (this.id) {
      node.id = this.id
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
      node.id = this.id
    }
  }
}

customElements.define('chassis-control', ChassisFormControl)
