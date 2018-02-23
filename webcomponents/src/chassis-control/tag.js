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
    return ['disabled']
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
    this._guid = _private.get(this).generateGuid()

    setTimeout(() => {
      let label = this.querySelector('label')
      let input = this.querySelector('input')
      let textarea = this.querySelector('textarea')
      let select = this.querySelector('select')
      let datalist = this.querySelector('datalist')

      label && this._initLabel(label)
      input && this._initInput(input)
      textarea && this._initInput(textarea)
      select && this._initSelectMenu(select)
      datalist && this._initDatalist(datalist)
    })
  }

  _generateGuid (prefix = 'input') {
    return `${prefix}_` + ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  _initInput (input) {
    input.slot = input.slot || 'input'
    this._input = input
    input.id = this._guid

    if (this.fieldInputTypes.indexOf(input.type) >= 0) {
      this.type = 'field'
    }

    if (this.toggleInputTypes.indexOf(input.type) >= 0) {
      this.type = 'toggle'
    }
  }

  _initLabel (label) {
    this.label = label
    label.slot = label.slot || 'label'
    label.htmlFor = this._guid
  }

  _initDatalist (datalist) {
    console.log(datalist);
  }

  _initSelectMenu (select) {
    this.type = 'select'

    if (!customElements.get('chassis-select')) {
      select.id = this._guid
      select.slot = select.slot || 'input'
      select.setAttribute('role', 'menu')
      this._input = select

      let titleEls = select.querySelectorAll('option[title]')
      titleEls.forEach((el) => select.removeChild(el))

      for (let option of select.options) {
        if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
          option.removeAttribute('label')
        }
      }

      return
    }

    let placeholder = document.createElement('chassis-select')
    placeholder.slot = 'input'

    for (let attr of select.attributes) {
      if (attr.specified) {
        placeholder.setAttribute(attr.name, attr.value)

        if (attr.name === 'autofocus') {
          select.removeAttribute(attr.name)
        }
      }
    }

    this.removeChild(select)

    placeholder.inject(select)
    this.appendChild(placeholder)
    this._input = placeholder
  }
}

customElements.define('chassis-control', ChassisFormControl)
