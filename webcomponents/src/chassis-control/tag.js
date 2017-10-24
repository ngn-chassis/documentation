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

    this._input = null
  }

  static get observedAttributes () {
    return []
  }

  get input () {
    return this._input
  }

  set input (input) {
    if (this._input) {
      console.warn(`Setting <chassis-control> child input programmatically is not allowed.`)
      return
    }

    this._input = input
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    this.setAttribute('type', value)
  }

  connectedCallback () {
    this._guid = this._generateGuid()

    setTimeout(() => {
      let label = this.querySelector('label')
      let input = this.querySelector('input')
      let textarea = this.querySelector('textarea')
      let select = this.querySelector('select')

      label && this._initLabel(label)
      input && this._initInput(input)
      textarea && this._initInput(textarea)
      select && this._initSelectMenu(select)
    })
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

  _initInput (node) {
    this._input = node
    node.slot = node.slot || 'input'

    if (this.id) {
      node.id = this._guid
    }

    if (this.fieldInputTypes.includes(node.type)) {
      this.type = 'field'
    }

    if (this.toggleInputTypes.includes(node.type)) {
      this.type = 'toggle'
    }
  }

  _initLabel (node) {
    this.label = node
    node.slot = node.slot || 'label'

    if (this.id) {
      node.htmlFor = this._guid
    }
  }

  _initSelectMenu (node) {
    this._input = node
    node.slot = node.slot || 'input'
    this.type = 'select'

    if (this.id) {
      node.id = this._guid
    }
  }
}

customElements.define('chassis-control', ChassisFormControl)
