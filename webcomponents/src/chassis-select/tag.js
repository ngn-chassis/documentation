class ChassisSelectElement extends HTMLElement {
  constructor () {
    super()

    // this.addEventListener('click', evt => {
    //   console.log('chassis-select');
    // })

    _.get(this).addReadOnlyProps([
      'form',
      'willValidate',
      'type',
      'validationMessage',
      'validity'
    ])

    _.get(this).addPrivateProps({
      title: '',

      arrowKeydownHandler: evt => {
        let startIndex = this.hoveredIndex > -1 ? this.hoveredIndex : this.selectedIndex > -1 ? this.selectedIndex : -1

        switch (evt[this.keySource]) {
          case 13:
          case 'Enter':
          case 32:
          case ' ':
            evt.preventDefault()

            if (!this.multiple) {
              if (!this.isOpen && (evt[this.keySource] === 32 || evt[this.keySource] === ' ')) {
                return this.open()
              }

              if (this.hoveredIndex === this.selectedIndex || this.hoveredIndex === -1) {
                return this.close()
              }
            }

            return this.optionsElement.select(this.hoveredIndex, evt.shiftKey, evt.ctrlKey, evt.metaKey)

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
                return this.optionsElement.hoverOption(startIndex - 1)
            }

            break

          case 40:
          case 'ArrowDown':
            evt.preventDefault()

            if (!this.multiple && !this.isOpen) {
              return this.open()
            }

            switch (startIndex) {
              case this.options.length - 1: return

              default:
                return this.optionsElement.hoverOption(startIndex + 1)
            }

            break

          default: return
        }
      },

      bodyClickHandler: evt => {
        if (evt.target === this || this.contains(evt.target)) {
          return
        }

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
    return this.optionsElement.hoveredIndex
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
    return this.options.length
  }

  get labels () {
    return _.get(this).labels
  }

  set labels (elements) {
    return _.get(this).throw('readonly', {
      name: 'labels'
    })
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
    return this.getAttribute('name')
  }

  set name (name) {
    _.get(this).handlePropertyChange('name', name)
  }

  get options () {
    return this.optionsElement.displayOptions
  }

  set options (value) {
    return _.get(this).throw('readonly', {
      name: 'options'
    })
  }

  get optionsElement () {
    return _.get(this).optionsEl
  }

  set optionsElement (el) {
    return _.get(this).throw('readonly', {
      name: 'optionsElement'
    })
  }

  get required () {
    return _.get(this).getBooleanPropertyValue('required')
  }

  set required (bool) {
    _.get(this).handleBooleanPropertyChange('required', bool)
  }

  get selectedIndex () {
    return this.optionsElement ? this.optionsElement.selectedIndex : null
  }

  set selectedIndex (index) {
    if (index < 0) {
      return this.deselectAll()
    }

    this.optionsElement.selectedIndex = index
  }

  get selectedOptions () {
    return this.optionsElement ? this.optionsElement.selectedOptions : null
  }

  set selectedOptions (value) {
    return _.get(this).throw('readonly', {
      name: 'selectedOptions'
    })
  }

  get sourceElement () {
    return _.get(this).sourceEl
  }

  set sourceElement (el) {
    return _.get(this).throw('readonly', {
      name: 'sourceElement'
    })
  }

  get selectedOptionsElement () {
    return _.get(this).selectedOptionsEl
  }

  set selectedOptionsElement (el) {
    return _.get(this).throw('readonly', {
      name: 'selectedOptionsElement'
    })
  }

  get value () {
    if (this.selectedOptions.length === 0) {
      return null
    }

    let selectedOption = this.selectedOptions.item(0)
    return selectedOption ? selectedOption.value || selectedOption.text : null
  }

  add (option, index) {
    this.optionsElement.add(option, index)
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
    return this.sourceElement.checkValidity()
  }

  clear () {
    this.optionsElement.clear()
    this.selectedOptionsElement.clear()
  }

  close () {
    // In case method is called directly by user
    if (this.multiple) {
      return
    }

    document.body.removeEventListener('click', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchend', _.get(this).bodyClickHandler)

    this.isOpen = false
  }

  connectedCallback () {
    this.addEventListener('focus', evt => this.addEventListener('keydown', _.get(this).arrowKeydownHandler))
    this.addEventListener('blur', evt => this.removeEventListener('keydown', _.get(this).arrowKeydownHandler))
    document.body.addEventListener('mouseup', evt => this.optionsElement.mousedown = false)

    setTimeout(() => {
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0)
      }

      this.autofocus && this.focus()
    }, 0)
  }

  deselectAll () {
    this.optionsElement.deselectAll()
  }

  inject (select, labels) {
    Object.assign(_.get(this), {
      sourceEl: select,
      optionsEl: document.createElement('chassis-options'),
      selectedOptionsEl: document.createElement('chassis-selected-options'),
      labels
    })

    this.placeholder = this.getAttribute('placeholder')

    this.optionsElement.parent = this
    this.selectedOptionsElement.parent = this

    this.selectedOptionsElement.slot = 'selectedoptions'
    this.appendChild(this.selectedOptionsElement)

    this.optionsElement.slot = 'options'
    this.appendChild(this.optionsElement)

    if (select.children.length > 0) {
      this.optionsElement.addChildren(select.children)
      this.select(this.selectedIndex)
    } else {
      this.deselectAll()
    }
  }

  item (index) {
    return this.optionsElement.item(index)
  }

  namedItem (id) {
    return this.optionsElement.namedItem(id)
  }

  open () {
    // In case method is called directly by user
    if (this.multiple) {
      return
    }

    document.body.addEventListener('click', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchend', _.get(this).bodyClickHandler)

    this.isOpen = true
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

    return this.optionsElement.querySelectorAll('[selected]')
  }

  remove (index = null) {
    if (index === null) {
      return super.remove()
    }

    this.optionsElement.removeOptionByIndex(index)
  }

  /**
   * @method select
   * @param  {Number || Array} index
   */
  select (index) {
    this.optionsElement.select(index)
  }

  setCustomValidity (string) {
    this.sourceElement.setCustomValidity(string)
  }

  [Symbol.toStringTag] () {
    return 'ChassisSelectElement'
  }
}

customElements.define('chassis-select', ChassisSelectElement)
