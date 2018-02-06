class ChassisSelect extends HTMLElement {
  constructor () {
    super()

    Object.defineProperties(this, {
      _options: {
        value: []
      },

      _title: {
        value: ''
      },

      _selectedOption: {
        writable: true
      },

      _arrowKeydownHandler: {
        value: (evt) => {
          switch (evt.keyCode) {
            case 38:
              evt.preventDefault()
              console.log('select previous option');
              break

            case 40:
              evt.preventDefault()
              console.log('select next option');
              break

            default:
              return
          }
        }
      },

      _bodyClickHandler: {
        value: (evt) => {
          if (evt.target === this || this.contains(evt.target)) {
            return
          }

          this.removeAttribute('open')
        }
      },

      _generateGuid: {
        value: (prefix = 'option') => {
          return `${prefix}_` + ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          )
        }
      },

      _generateChassisOptgroup: {
        value: (optgroup) => {
          if (!customElements.get('chassis-optgroup')) {
            console.error(`chassis-select requires chassis-optgroup. Please include it in this document's <head> element.`)
            return
          }

          let fauxOptgroup = document.createElement('chassis-optgroup')
          fauxOptgroup.id = this._generateGuid('optgroup')

          let label = optgroup.getAttribute('label')

          if (!label || label.trim() === '') {
            console.error('[ERROR] <optgroup> must have a label attribute!')
            return
          }

          fauxOptgroup.setAttribute('label', label)

          let options = optgroup.querySelectorAll('option')

          for (let option of options) {
            this.addOption(this._generateOptionObject(option), null, fauxOptgroup)
          }

          return fauxOptgroup
        }
      },

      _generateOptionObject: {
        value: (optionEl) => {
          if (!customElements.get('chassis-option')) {
            console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
            return
          }

          let obj = {
            id: this._generateGuid(),
            attributes: {},
            sourceElement: optionEl
          }

          for (let attr of optionEl.attributes) {
            obj.attributes[attr.name] = attr.value
          }

          return obj
        }
      },

      _getBooleanPropertyValue: {
        value: (prop) => {
          return this.hasAttribute(prop) && this.getAttribute(prop) !== 'false'
        }
      },

      _handleAttributeChange: {
        value: (attr, val) => {
          if (!this._sourceEl) {
            return
          }

          this.setAttribute(attr, val)
          this._sourceEl[attr] = val
        }
      },

      _handleBooleanAttributeChange: {
        value: (attr, value) => {
          if (!this._sourceEl) {
            return
          }

          let acceptableValues = ['true', 'false', '', null]

          if (!acceptableValues.includes(value)) {
            console.error(`<chassis-select> ${attr} attribute expected boolean but received "${value}"`)
            this.removeAttribute(attr)
            this._sourceEl[attr] = false
            return
          }

          if (value === 'false' && this.hasAttribute(attr)) {
            this.removeAttribute(attr)
            this._sourceEl[attr] = false
            return
          }

          this._sourceEl[attr] = this.hasAttribute(attr)
        }
      },

      _handleBooleanPropertyChange: {
        value: (prop, bool) => {
          if (!bool) {
            this.removeAttribute(prop)
            this._sourceEl[prop] = false
            return
          }

          if (!this.hasAttribute(prop) || this.getAttribute(prop) !== 'true') {
            this.setAttribute(prop, '')
            this._sourceEl[prop] = true
          }
        }
      },

      _handlePropertyChange: {
        value: (prop, val) => {
          this._sourceEl[prop] = val

          if (!this.hasAttribute(prop) || this.getAttribute(prop) !== val) {
            this.setAttribute(prop, val)
          }
        }
      },

      _inject: {
        value: (select) => {
          Object.defineProperties(this, {
            _sourceEl: {
              value: select
            },

            _titleEl: {
              value: document.createElement('chassis-select-title')
            },

            _optionsEl: {
              value: document.createElement('chassis-options')
            }
          })

          this._titleEl.slot = 'title'
          this.appendChild(this._titleEl)

          this._optionsEl.slot = 'options'
          this.appendChild(this._optionsEl)

          this.addChildren(select.children)
          this.select(this._options[0].id)
        }
      },

      _throw: {
        value: (type, vars) => {
          switch (type) {
            case 'readonly':
              console.error(`ERROR Cannot set read-only property "${vars.name}".`)
              break

            default:
              console.error(`ERROR <chassis-select>`)
          }
        }
      }
    })
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'name', 'open', 'tabindex']
  }

  get autofocus () {
    return this._getBooleanPropertyValue('autofocus')
  }

  set autofocus (bool) {
    this._handleBooleanPropertyChange('autofocus', bool)
  }

  get disabled () {
    return this._getBooleanPropertyValue('disabled')
  }

  set disabled (bool) {
    this._handleBooleanPropertyChange('disabled', bool)
  }

  // TODO: Look for form in parent nodes, this always returns null because
  // this._sourceEl is not in the DOM
  /**
   * @property form
   * @return {Object}
   * Parent Form Element
   * @readonly
   */
  get form () {
    return this._sourceEl.form
  }

  set form (x) {
    this._throw('readonly', {name: 'form'})
  }

  get isOpen () {
    return this.hasAttribute('open')
  }

  set isOpen (bool) {
    bool ? this.setAttribute('open', '') : this.removeAttribute('open')
  }

  get length () {
    return this._sourceEl.length
  }

  // TODO: Check this functionality
  /**
   * @property labels
   * @return {NodeList}
   * @readonly
   */
  get labels () {
    return this._sourceEl.labels
  }

  set labels (x) {
    this._throw('readonly', {name: 'labels'})
  }

  get name () {
    return this._sourceEl.name
  }

  set name (name) {
    this._handlePropertyChange('name', name)
  }

  /**
   * @property options
   * @return {HTMLOptionsCollection}
   * @readonly
   */
  get options () {
    return this._sourceEl.options
  }

  set options (x) {
    this._throw('readonly', {name: 'options'})
  }

  get required () {
    return this._getBooleanPropertyValue('required')
  }

  set required (bool) {
    this._handleBooleanPropertyChange('required', bool)
  }

  get selectedIndex () {
    return this._sourceEl.selectedIndex
  }

  set selectedIndex (index) {
    this.select(this._options[index].id)
  }

  /**
   * @property selectedOptions
   * @return {HTMLCollection}
   * @readonly
   */
  get selectedOptions () {
    return this._sourceEl.selectedOptions
  }

  set selectedOptions (x) {
    this._throw('readonly', {name: 'selectedOptions'})
  }

  get sourceElement () {
    return this._sourceEl
  }

  /**
   * @property type
   * @return {Boolean}
   * @readonly
   */
  get type () {
    return this._sourceEl.type
  }

  set type (x) {
    this._throw('readonly', {name: 'type'})
  }

  /**
   * @property validationMessage
   * @return {String}
   * @readonly
   */
  get validationMessage () {
    return this._sourceEl.validationMessage
  }

  set validationMessage (x) {
    this._throw('readonly', {name: 'validationMessage'})
  }

  /**
   * @property validity
   * @return {Object}
   * @readonly
   */
  get validity () {
    return this._sourceEl.validity
  }

  set validity (x) {
    this._throw('readonly', {name: 'validity'})
  }

  get value () {
    return this._sourceEl.value
  }

  /**
   * @property willValidate
   * @return {Boolean}
   * @readonly
   */
  get willValidate () {
    return this._sourceEl.willValidate
  }

  set willValidate (x) {
    this._throw('readonly', {name: 'willValidate'})
  }

  checkValidity () {
    return this._sourceEl.checkValidity()
  }

  setCustomValidity (string) {
    this._sourceEl.setCustomValidity(string)
  }

  connectedCallback () {
    this.addEventListener('click', (evt) => {
      this.hasAttribute('open') ? this.removeAttribute('open') : this.setAttribute('open', '')
    })

    this.addEventListener('focus', (evt) => {
      this.addEventListener('keydown', this._arrowKeydownHandler)
    })

    this.addEventListener('blur', (evt) => {
      this.removeEventListener('keydown', this._arrowKeydownHandler)
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

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'autofocus':
      case 'disabled':
        this._handleBooleanAttributeChange(attr, newValue)
        break

      case 'name':
        this._handleAttributeChange(attr, newValue)
        break

      case 'open':
        this.isOpen ? this.open() : this.close()
        break
    }
  }

  open () {
    document.body.addEventListener('click', this._bodyClickHandler)
    document.body.addEventListener('touchcancel', this._bodyClickHandler)
    document.body.addEventListener('touchend', this._bodyClickHandler)

    if (!this.isOpen) {
      this.isOpen = true
    }
  }

  close () {
    document.body.removeEventListener('click', this._bodyClickHandler)
    document.body.removeEventListener('touchcancel', this._bodyClickHandler)
    document.body.removeEventListener('touchend', this._bodyClickHandler)

    if (this.isOpen) {
      this.isOpen = false
    }
  }

  addChildren (children) {
    for (let child of children) {
      let isElement = child instanceof HTMLElement

      switch (child.nodeName) {
        case 'OPTION':
          this.addOption(isElement ? this._generateOptionObject(child) : child)
          break

        case 'OPTGROUP':
          this.addOptgroup(isElement ? this._generateChassisOptgroup(child) : child)

          break

        default:
          console.warn(`${child.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`)
          break
      }
    }
  }

  addOption (option, index, dest = this._optionsEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    if (!option.hasOwnProperty('id')) {
      option.id = this._generateGuid()
    }

    if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
      let sourceEl = document.createElement('option')

      if (option.hasOwnProperty('innerHTML')) {
        sourceEl.innerHTML = option.innerHTML
      }

      if (option.hasOwnProperty('label')) {
        sourceEl.innerHTML = option.label
      }

      if (option.hasOwnProperty('value')) {
        sourceEl.value = option.value
      }

      if (option.hasOwnProperty('disabled')) {
        sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled
      }

      option.sourceElement = sourceEl
    }

    let label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim()
    let value = option.sourceElement.getAttribute('value')
    let disabled = option.sourceElement.disabled
    let chassisOption = document.createElement('chassis-option')

    chassisOption.key = option.id
    chassisOption.innerHTML = option.sourceElement.innerHTML

    dest.appendChild(chassisOption)
    chassisOption.addEventListener('click', (evt) => this.select(chassisOption.key))

    option = {
      attributes: { disabled, label, value },
      id: option.id,
      displayElement: chassisOption,
      sourceElement: option.sourceElement
    }

    if (index) {
      this._options.splice(index, 0, option)
      return
    }

    this._options.push(option)
  }

  addOptgroup (optgroup, dest = this._optionsEl) {
    let label = document.createElement('chassis-optgroup-label')
    label.innerHTML = optgroup.getAttribute('label')

    dest.appendChild(label)
    dest.appendChild(optgroup)
  }

  select (id) {
    let option = this._options.find((option) => option.id === id)

    if (option) {
      option.sourceElement.selected = true
      this._titleEl.title = option.displayElement.innerHTML
      this._selectedOption = option

      this._options.forEach((option) => option.displayElement.removeAttribute('selected'))
      option.displayElement.setAttribute('selected', '')
    }
  }
}

customElements.define('chassis-select', ChassisSelect)
