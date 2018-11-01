class ChassisSelect extends HTMLElement {
  constructor () {
    super()

    // this.addEventListener('click', evt => {
    //   console.log('chassis-select');
    // })

    _.get(this).addReadOnlyProps([
      'form',
      'labels',
      'willValidate',
      'type',
      'validationMessage',
      'validity'
    ])

    _.get(this).addPrivateProps({
      placeholder: '',
      title: '',

      arrowKeydownHandler: evt => {
        let startIndex = this.hoveredIndex > -1 ? this.hoveredIndex : this.selectedIndex > -1 ? this.selectedIndex : -1

        switch (evt[this.keySource]) {
          case 13:
          case 'Enter':
          case 32:
          case ' ':
            evt.preventDefault()
            return this.select(this.hoveredIndex)

          case 38:
          case 'ArrowUp':
            evt.preventDefault()

            if (!this.multiple && !this.isOpen) {
              return this.open()
            }

            switch (startIndex) {
              case -1:
              case 0:
                return

              default:
                return _.get(this).optionsEl.hoverOption(startIndex - 1)
            }

            break

          case 40:
          case 'ArrowDown':
            evt.preventDefault()

            if (!this.multiple && !this.isOpen) {
              return this.open()
            }

            switch (startIndex) {
              case this.options.length - 1:
                return

              default:
                return _.get(this).optionsEl.hoverOption(startIndex + 1)
            }

            break

          default:
            return
        }
      },

      bodyClickHandler: evt => {
        if (evt.target === this || this.contains(evt.target)) {
          return
        }
        console.log('hey');
        this.removeAttribute('open')
      }
    })
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'tabindex']
  }

  get autofocus () {
    return _.get(this).getBooleanPropertyValue('autofocus')
  }

  set autofocus (bool) {
    _.get(this).handleBooleanPropertyChange('autofocus', bool)
  }

  get disabled () {
    return _.get(this).getBooleanPropertyValue('disabled')
  }

  set disabled (bool) {
    _.get(this).handleBooleanPropertyChange('disabled', bool)
  }

  get hoveredIndex () {
    return _.get(this).optionsEl.hoveredIndex
  }

  set hoveredIndex (index) {
    return _.get(this).throw('readonly', {
      name: 'hoveredIndex'
    })
  }

  get isOpen () {
    if (this.multiple) {
      return null
    }

    return this.hasAttribute('open')
  }

  set isOpen (bool) {
    if (this.multiple) {
      return
    }

    bool ? this.setAttribute('open', '') : this.removeAttribute('open')
  }

  get length () {
    return _.get(this).sourceEl.length
  }

  get multiple () {
    return _.get(this).getBooleanPropertyValue('multiple')
  }

  set multiple (bool) {
    if (bool && this.hasAttribute('open')) {
      this.removeAttribute('open')
    }

    _.get(this).handleBooleanPropertyChange('multiple', bool)
  }

  get name () {
    return _.get(this).sourceEl.name
  }

  set name (name) {
    _.get(this).handlePropertyChange('name', name)
  }

  get options () {
    return _.get(this).optionsEl.displayOptions
  }

  set options (value) {
    return _.get(this).throw('readonly', {
      name: 'options'
    })
  }

  get placeholder () {
    return _.get(this).placeholder
  }

  set placeholder (text) {
    _.get(this).placeholder = text
  }

  get required () {
    return _.get(this).getBooleanPropertyValue('required')
  }

  set required (bool) {
    _.get(this).handleBooleanPropertyChange('required', bool)
  }

  get selectedIndex () {
    return _.get(this).optionsEl ? _.get(this).optionsEl.selectedIndex : null
  }

  set selectedIndex (index) {
    if (index < 0) {
      return this.deselectAll()
    }

    _.get(this).optionsEl.selectedIndex = index
  }

  get selectedOptions () {
    return _.get(this).optionsEl ? _.get(this).optionsEl.selectedOptions : null
  }

  set selectedOptions (value) {
    return _.get(this).throw('readonly', {
      name: 'selectedOptions'
    })
  }

  get sourceElement () {
    return _.get(this).sourceEl
  }

  get value () {
    return _.get(this).sourceEl.value
  }

  add (option, index) {
    _.get(this).optionsEl.add(option, index)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'autofocus':
      case 'disabled':
        return _.get(this).handleBooleanAttributeChange(attr, newValue)

      case 'multiple':
        _.get(this).handleBooleanAttributeChange(attr, newValue)

        if (!newValue && this.selectedOptions) {
          let index = this.selectedIndex
          this.deselectAll()
          this.select(index)
        }

        break

      case 'name':
        return _.get(this).handleAttributeChange(attr, newValue)

      case 'open':
        if (this.multiple) {
          return
        }

        return this.isOpen ? this.open() : this.close()
    }
  }

  checkValidity () {
    return _.get(this).sourceEl.checkValidity()
  }

  clear () {
    _.get(this).optionsEl.clear()
  }

  close () {
    if (this.multiple) {
      return
    }

    document.body.removeEventListener('click', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchend', _.get(this).bodyClickHandler)

    if (this.isOpen) {
      this.isOpen = false
    }
  }

  connectedCallback () {
    this.addEventListener('focus', (evt) => {
      this.addEventListener('keydown', _.get(this).arrowKeydownHandler)
    })

    this.addEventListener('blur', (evt) => {
      this.removeEventListener('keydown', _.get(this).arrowKeydownHandler)
    })

    document.body.addEventListener('mouseup', evt => _.get(this).optionsEl.mousedown = false)

    setTimeout(() => {
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0)
      }

      if (this.autofocus) {
        this.focus()
      }
    }, 0)
  }

  deselectAll () {
    _.get(this).optionsEl.deselectAll()
  }

  inject (select) {
    Object.assign(_.get(this), {
      sourceEl: select,
      optionsEl: document.createElement('chassis-options'),
      placeholder: this.getAttribute('placeholder')
    })

    let { optionsEl } = _.get(this)

    optionsEl.parent = this

    this.selectedOptionsEl = document.createElement('chassis-selected-options')
    this.selectedOptionsEl.parent = this

    this.selectedOptionsEl.slot = 'selectedoptions'
    this.appendChild(this.selectedOptionsEl)

    optionsEl.slot = 'options'
    this.appendChild(optionsEl)

    if (select.children.length > 0) {
      optionsEl.addChildren(select.children)
      this.select(this.selectedIndex)
    } else {
      this.deselectAll()
    }
  }

  item (index) {
    return _.get(this).optionsEl.item(index)
  }

  namedItem (id) {
    return _.get(this).optionsEl.namedItem(id)
  }

  open () {
    if (this.multiple) {
      return
    }

    document.body.addEventListener('click', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchend', _.get(this).bodyClickHandler)

    if (!this.isOpen) {
      this.isOpen = true
    }
  }

  /**
   * method querySelector
   * @param  {string} selector
   * @return {HTMLElement}
   * @override
   */
  querySelector (selector) {
    if (selector !== ':checked') {
      return super.querySelector(selector)
    }

    return this.selectedOptions.length > 0 ? this.selectedOptions[0] : null
  }

  /**
   * method querySelectorAll
   * @param  {string} selector
   * @return {NodeList}
   * @override
   */
  querySelectorAll (selector) {
    if (selector !== ':checked') {
      return super.querySelectorAll(selector)
    }

    return _.get(this).optionsEl.querySelectorAll('[selected]')
  }

  remove (index = null) {
    if (index === null) {
      return super.remove()
    }

    _.get(this).optionsEl.removeOptionByIndex(index)
  }

  select (index) {
    _.get(this).optionsEl.select(index)
  }

  setCustomValidity (string) {
    _.get(this).sourceEl.setCustomValidity(string)
  }
}

customElements.define('chassis-select', ChassisSelect)
