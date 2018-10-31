class ChassisSelect extends HTMLElement {
  constructor () {
    super()

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
        switch (evt[this.keySource]) {
          case 38:
          case 'ArrowUp':
            evt.preventDefault()

            if (!this.isOpen) {
              return this.open()
            }

            console.log('select previous option');
            break

          case 40:
          case 'ArrowDown':
            evt.preventDefault()

            if (!this.isOpen) {
              return this.open()
            }

            console.log('select next option');
            break

          default:
            return
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
    return _.get(this).optionsEl.selectedIndex
  }

  set selectedIndex (index) {
    if (index < 0) {
      return this.deselectAll()
    }

    _.get(this).optionsEl.selectedIndex = index
  }

  get selectedOptions () {
    return _.get(this).optionsEl.selectedOptions
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
      case 'multiple':
        return _.get(this).handleBooleanAttributeChange(attr, newValue)

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
    this.addEventListener('click', (evt) => {
      if (this.multiple) {
        return
      }

      this.hasAttribute('open') ? this.removeAttribute('open') : this.setAttribute('open', '')
    })

    this.addEventListener('focus', (evt) => {
      this.addEventListener('keydown', _.get(this).arrowKeydownHandler)
    })

    this.addEventListener('blur', (evt) => {
      this.removeEventListener('keydown', _.get(this).arrowKeydownHandler)
    })

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
    _.get(this).sourceEl = select

    _.get(this).optionsEl = document.createElement('chassis-options')
    _.get(this).optionsEl.parent = this
    _.get(this).optionsEl.dispatchChangeEvent = () => {
      this.dispatchEvent(new Event('change', {
        bubbles: true
      }))
    }

    _.get(this).optionsEl.selectedOptionsEl = document.createElement('chassis-selected-options')
    _.get(this).optionsEl.selectedOptionsEl.parent = this

    _.get(this).optionsEl.selectedOptionsEl.slot = 'selectedoptions'
    this.appendChild(_.get(this).optionsEl.selectedOptionsEl)

    _.get(this).optionsEl.slot = 'options'
    this.appendChild(_.get(this).optionsEl)

    _.get(this).placeholder = this.getAttribute('placeholder')

    if (select.children.length > 0) {
      _.get(this).optionsEl.addChildren(select.children)
      _.get(this).optionsEl.selectByIndex(this.selectedIndex)
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
    _.get(this).optionsEl.selectByIndex(index)
  }

  setCustomValidity (string) {
    _.get(this).sourceEl.setCustomValidity(string)
  }
}

customElements.define('chassis-select', ChassisSelect)
