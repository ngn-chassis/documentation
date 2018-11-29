class ChassisFormControl extends HTMLElement {
  constructor () {
    super()

    _.get(this).addPrivateProperties({
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
          console.dir(input);
          input.id = _.get(this).guid
          datalist.id = `${input.id}_datalist`
          input.setAttribute('list', datalist.id)
          input.slot = input.slot || 'input'
          // select.setAttribute('role', 'menu')
          _.get(this).input = input

          let titleEls = datalist.querySelectorAll('option[title]')
          titleEls.forEach(el => select.removeChild(el))

          for (let option of datalist.options) {
            if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
              option.removeAttribute('label')
            }
          }

          return
        }

        let surrogate = document.createElement('chassis-datalist')
        surrogate.slot = 'input'

        for (let attr of datalist.attributes) {
          if (attr.specified) {
            surrogate.setAttribute(attr.name, attr.value)

            if (attr.name === 'autofocus') {
              datalist.removeAttribute(attr.name)
            }
          }
        }

        this.removeChild(datalist)
        this.removeChild(input)

        surrogate.inject(input, datalist, _.get(this).guid)
        this.appendChild(surrogate)
        _.get(this).input = surrogate
      },

      initInput: input => {
        input.slot = input.slot || 'input'
        _.get(this).input = input
        input.id = _.get(this).guid

        if (_.get(this).fieldInputTypes.indexOf(input.type) >= 0) {
          this.type = 'field'
        }

        if (_.get(this).toggleInputTypes.indexOf(input.type) >= 0) {
          this.type = 'toggle'
        }
      },

      initLabel: label => {
        this.label = label
        label.slot = label.slot || 'label'
        label.htmlFor = _.get(this).guid

        if (this.type === 'select') {
          this.label.addEventListener('click', (evt) => {
            this.input.focus()
          })
        }
      },

      initDefaultSelect: select => {
        select.id = _.get(this).guid
        select.slot = select.slot || 'input'
        select.setAttribute('role', 'menu')
        _.get(this).input = select

        // Purge incompatible attributes
        let titleEls = select.querySelectorAll('option[title]')
        titleEls.forEach(el => select.removeChild(el))

        for (let option of select.options) {
          if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
            option.removeAttribute('label')
          }
        }
      },

      initMultipleSelectMenu: select => {
        this.type = 'select'

        if (!customElements.get('chassis-select')) {
          return _.get(this).initDefaultSelect(select)
        }

        _.get(this).initSelectSurrogate(select, document.createElement('chassis-select'))
      },

      initSelectSurrogate: (original, surrogate) => {
        surrogate.slot = 'input'
        surrogate.id = _.get(this).guid

        for (let attr of original.attributes) {
          if (attr.specified) {
            surrogate.setAttribute(attr.name, attr.value)

            if (attr.name === 'autofocus') {
              original.removeAttribute(attr.name)
            }
          }
        }

        this.removeChild(original)
        surrogate.inject(original, this.querySelectorAll('label'))

        this.appendChild(surrogate)
        _.get(this).input = surrogate
      },

      initSelectMenu: select => {
        this.type = 'select'

        if (!customElements.get('chassis-select')) {
          return _.get(this).initDefaultSelect(select)
        }

        _.get(this).initSelectSurrogate(select, document.createElement('chassis-select'))
      }
    })
  }

  static get observedAttributes () {
    return ['disabled']
  }

  get input () {
    return _.get(this).input
  }

  set input (input) {
    if (this.input) {
      console.warn(`Setting <chassis-control> child input programmatically is not allowed.`)
      return
    }

    _.get(this).input = input
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    this.setAttribute('type', value)
  }

  connectedCallback () {
    _.get(this).guid = _.get(this).generateGuid('control')

    let observer = new MutationObserver((mutations, observer) => {
      let filtered = mutations.filter(record => record.addedNodes.item(0).nodeType !== 3)

      filtered.forEach((record, index, array) => {
        let node = record.addedNodes.item(0)

        switch (node.nodeName) {
          case 'LABEL':
            return _.get(this).initLabel(node)

          case 'INPUT':
            // Check if there is an additional element adjacent to the input
            if (array[index + 1] === void 0) {
              return _.get(this).initInput(node)
            }

            let adjacentElement = array[index + 1].addedNodes.item(0)

            if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
              return _.get(this).initInput(node)
            }

            return _.get(this).initDatalist(node, adjacentElement)

          case 'TEXTAREA':
            return _.get(this).initInput(node)

          case 'SELECT':
            if (!node.multiple) {
              return _.get(this).initSelectMenu(node)
            }

            return _.get(this).initMultipleSelectMenu(node)

          default: return
        }
      })

      observer.disconnect()
    })

    observer.observe(this, {
      childList: true
    })
  }
}

customElements.define('chassis-control', ChassisFormControl)
