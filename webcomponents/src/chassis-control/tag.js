class ChassisFormControl extends HTMLElement {
  constructor () {
    super()

    _private.get(this).addPrivateProps({
      fieldInputTypes: [
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
      ],

      toggleInputTypes: [
        'checkbox',
        'radio'
      ],

      supportedTypes: [
        'field',
        'toggle',
        'select'
      ],

      input: null,

      initDatalist: (input, datalist) => {
        this.type = 'field'

        if (!customElements.get('chassis-datalist')) {
          // Setup defaults
          return
        }

        let placeholder = document.createElement('chassis-datalist')
        placeholder.slot = 'input'

        for (let attr of datalist.attributes) {
          if (attr.specified) {
            placeholder.setAttribute(attr.name, attr.value)

            if (attr.name === 'autofocus') {
              datalist.removeAttribute(attr.name)
            }
          }
        }

        this.removeChild(datalist)
        this.removeChild(input)

        placeholder.inject(input, datalist, _private.get(this).guid)
        this.appendChild(placeholder)
        _private.get(this).input = placeholder
      },

      initInput: input => {
        input.slot = input.slot || 'input'
        _private.get(this).input = input
        input.id = _private.get(this).guid

        if (_private.get(this).fieldInputTypes.indexOf(input.type) >= 0) {
          this.type = 'field'
        }

        if (_private.get(this).toggleInputTypes.indexOf(input.type) >= 0) {
          this.type = 'toggle'
        }
      },

      initLabel: label => {
        this.label = label
        label.slot = label.slot || 'label'
        label.htmlFor = _private.get(this).guid

        if (this.type === 'select') {
          this.label.addEventListener('click', (evt) => {
            this.input.focus()
          })
        }
      },

      initSelectMenu: select => {
        this.type = 'select'

        if (!customElements.get('chassis-select')) {
          select.id = _private.get(this).guid
          select.slot = select.slot || 'input'
          select.setAttribute('role', 'menu')
          _private.get(this).input = select

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
        placeholder.id = _private.get(this).guid

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
        _private.get(this).input = placeholder
      }
    })
  }

  static get observedAttributes () {
    return ['disabled']
  }

  get input () {
    return _private.get(this).input
  }

  set input (input) {
    if (this.input) {
      console.warn(`Setting <chassis-control> child input programmatically is not allowed.`)
      return
    }

    _private.get(this).input = input
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    this.setAttribute('type', value)
  }

  connectedCallback () {
    _private.get(this).guid = _private.get(this).generateGuid('control')

    setTimeout(() => {
      let label = this.querySelector('label')
      let input = this.querySelector('input')
      let textarea = this.querySelector('textarea')
      let select = this.querySelector('select')
      let datalist = this.querySelector('datalist')

      textarea && _private.get(this).initInput(textarea)
      select && _private.get(this).initSelectMenu(select)

      if (input) {
        if (datalist) {
          _private.get(this).initDatalist(input, datalist)
        } else {
          _private.get(this).initInput(input)
        }
      }

      label && _private.get(this).initLabel(label)
    })
  }
}

customElements.define('chassis-control', ChassisFormControl)
