class ChassisSelect extends HTMLElement {
  constructor () {
    super()

    _private.get(this).addReadOnlyProps([
      'form',
      'labels',
      'options',
      'willValidate',
      'selectedOptions',
      'type',
      'validationMessage',
      'validity'
    ])

    _private.get(this).options = []
    _private.get(this).title = ''
    _private.get(this).selectedOption = null

    _private.get(this).arrowKeydownHandler = (evt) => {
      switch (evt[this.keySource]) {
        case 38:
        case 'ArrowUp':
          evt.preventDefault()
          console.log('select previous option');
          break

        case 40:
        case 'ArrowDown':
          evt.preventDefault()
          console.log('select next option');
          break

        default:
          return
      }
    }

    _private.get(this).bodyClickHandler = (evt) => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
    }

    _private.get(this).generateChassisOptgroup = (optgroup) => {
      if (!customElements.get('chassis-optgroup')) {
        console.error(`chassis-select requires chassis-optgroup. Please include it in this document's <head> element.`)
        return
      }

      let fauxOptgroup = document.createElement('chassis-optgroup')
      fauxOptgroup.id = _private.get(this).generateGuid('optgroup')

      let label = optgroup.getAttribute('label')

      if (!label || label.trim() === '') {
        console.error('[ERROR] <optgroup> must have a label attribute!')
        return
      }

      fauxOptgroup.setAttribute('label', label)

      let options = optgroup.querySelectorAll('option')

      for (let option of options) {
        this.add(_private.get(this).generateOptionObject(option), null, fauxOptgroup)
      }

      return fauxOptgroup
    }

    _private.get(this).generateOptionObject = (optionEl) => {
      if (!customElements.get('chassis-option')) {
        console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
        return
      }

      let obj = {
        id: _private.get(this).generateGuid(),
        attributes: {},
        sourceElement: optionEl
      }

      for (let attr of optionEl.attributes) {
        obj.attributes[attr.name] = attr.value
      }

      return obj
    }

    _private.get(this).getBooleanPropertyValue = (prop) => this.hasAttribute(prop) && this.getAttribute(prop) !== 'false',

    _private.get(this).getOptionById = (id) => {
      let options = _private.get(this).options
      let option

      for (let i = 0; i < options.length; i++) {
        if (options[i].id === id) {
          option = options[i]
          break
        }
      }

      return option
    }

    _private.get(this).handleAttributeChange = (attr, val) => {
      if (!_private.get(this).sourceEl) {
        return
      }

      this.setAttribute(attr, val)
      _private.get(this).sourceEl[attr] = val
    }

    _private.get(this).handleBooleanAttributeChange = (attr, value) => {
      if (!_private.get(this).sourceEl) {
        return
      }

      let acceptableValues = ['true', 'false', '', null]

      if (!acceptableValues.includes(value)) {
        console.error(`<chassis-select> ${attr} attribute expected boolean but received "${value}"`)
        this.removeAttribute(attr)
        _private.get(this).sourceEl[attr] = false
        return
      }

      if (value === 'false' && this.hasAttribute(attr)) {
        this.removeAttribute(attr)
        _private.get(this).sourceEl[attr] = false
        return
      }

      _private.get(this).sourceEl[attr] = this.hasAttribute(attr)
    }

    _private.get(this).handleBooleanPropertyChange = (prop, bool) => {
      if (!bool) {
        this.removeAttribute(prop)
        _private.get(this).sourceEl[prop] = false
        return
      }

      if (!this.hasAttribute(prop) || this.getAttribute(prop) !== 'true') {
        this.setAttribute(prop, '')
        _private.get(this).sourceEl[prop] = true
      }
    }

    _private.get(this).handlePropertyChange = (prop, val) => {
      _private.get(this).sourceEl[prop] = val

      if (!this.hasAttribute(prop) || this.getAttribute(prop) !== val) {
        this.setAttribute(prop, val)
      }
    }
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'name', 'open', 'tabindex']
  }

  get autofocus () {
    return _private.get(this).getBooleanPropertyValue('autofocus')
  }

  set autofocus (bool) {
    _private.get(this).handleBooleanPropertyChange('autofocus', bool)
  }

  get disabled () {
    return _private.get(this).getBooleanPropertyValue('disabled')
  }

  set disabled (bool) {
    _private.get(this).handleBooleanPropertyChange('disabled', bool)
  }

  get isOpen () {
    return this.hasAttribute('open')
  }

  set isOpen (bool) {
    bool ? this.setAttribute('open', '') : this.removeAttribute('open')
  }

  get length () {
    return _private.get(this).sourceEl.length
  }

  get name () {
    return _private.get(this).sourceEl.name
  }

  set name (name) {
    _private.get(this).handlePropertyChange('name', name)
  }

  get required () {
    return _private.get(this).getBooleanPropertyValue('required')
  }

  set required (bool) {
    _private.get(this).handleBooleanPropertyChange('required', bool)
  }

  get selectedIndex () {
    return _private.get(this).sourceEl.selectedIndex
  }

  set selectedIndex (index) {
    this.select(_private.get(this).options[index].id)
  }

  get sourceElement () {
    return _private.get(this).sourceEl
  }

  get value () {
    return _private.get(this).sourceEl.value
  }

  addChildren (children) {
    for (let child of children) {
      let isElement = child instanceof HTMLElement

      switch (child.nodeName) {
        case 'OPTION':
          this.add(isElement ? _private.get(this).generateOptionObject(child) : child)
          break

        case 'OPTGROUP':
          this.addOptgroup(isElement ? _private.get(this).generateChassisOptgroup(child) : child)

          break

        default:
          console.warn(`${child.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`)
          break
      }
    }
  }

  addOptgroup (optgroup, dest = _private.get(this).optionsEl) {
    let label = document.createElement('chassis-optgroup-label')
    label.innerHTML = optgroup.getAttribute('label')

    dest.appendChild(label)
    dest.appendChild(optgroup)
  }

  add (option, index, dest = _private.get(this).optionsEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    if (!option.hasOwnProperty('id')) {
      option.id = _private.get(this).generateGuid()
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

    chassisOption.addEventListener('click', (evt) => this.select(chassisOption.key))
    chassisOption.key = option.id
    chassisOption.innerHTML = option.sourceElement.innerHTML

    option = {
      attributes: { disabled, label, value },
      id: option.id,
      displayElement: chassisOption,
      sourceElement: option.sourceElement
    }

    if (index) {
      dest.insertBefore(chassisOption, dest.children.item(index))

      this[`${index}`] = option.sourceElement
      _private.get(this).options.splice(index, 0, option)
      _private.get(this).sourceEl.add(option.sourceElement, index)
      return
    }

    dest.appendChild(chassisOption)

    this[`${_private.get(this).options.length}`] = option.sourceElement
    _private.get(this).options.push(option)

    if (!_private.get(this).sourceEl[_private.get(this).options.length - 1]) {
      _private.get(this).sourceEl.appendChild(option.sourceElement)
    }
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'autofocus':
      case 'disabled':
        _private.get(this).handleBooleanAttributeChange(attr, newValue)
        break

      case 'name':
        _private.get(this).handleAttributeChange(attr, newValue)
        break

      case 'open':
        this.isOpen ? this.open() : this.close()
        break
    }
  }

  checkValidity () {
    return _private.get(this).sourceEl.checkValidity()
  }

  clear () {
    _private.get(this).optionsEl.clear()
    _private.get(this).titleEl.clear()
  }

  close () {
    document.body.removeEventListener('click', _private.get(this).bodyClickHandler)
    document.body.removeEventListener('touchcancel', _private.get(this).bodyClickHandler)
    document.body.removeEventListener('touchend', _private.get(this).bodyClickHandler)

    if (this.isOpen) {
      this.isOpen = false
    }
  }

  connectedCallback () {
    this.addEventListener('click', (evt) => {
      this.hasAttribute('open') ? this.removeAttribute('open') : this.setAttribute('open', '')
    })

    this.addEventListener('focus', (evt) => {
      this.addEventListener('keydown', _private.get(this).arrowKeydownHandler)
    })

    this.addEventListener('blur', (evt) => {
      this.removeEventListener('keydown', _private.get(this).arrowKeydownHandler)
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

  inject (select) {
    _private.get(this).sourceEl = select
    _private.get(this).titleEl = document.createElement('chassis-select-title')
    _private.get(this).optionsEl = document.createElement('chassis-options')

    _private.get(this).titleEl.slot = 'title'
    this.appendChild(_private.get(this).titleEl)

    _private.get(this).optionsEl.slot = 'options'
    this.appendChild(_private.get(this).optionsEl)

    if (select.children.length > 0) {
      this.addChildren(select.children)
      this.select(_private.get(this).options[0].id)
    }
  }

  open () {
    document.body.addEventListener('click', _private.get(this).bodyClickHandler)
    document.body.addEventListener('touchcancel', _private.get(this).bodyClickHandler)
    document.body.addEventListener('touchend', _private.get(this).bodyClickHandler)

    if (!this.isOpen) {
      this.isOpen = true
    }
  }

  /**
   * [select description]
   * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
   */
  select (id) {
    let option = _private.get(this).getOptionById(id)

    if (option) {
      option.sourceElement.selected = true
      _private.get(this).titleEl.title = option.displayElement.innerHTML
      _private.get(this).selectedOption = option

      _private.get(this).options.forEach((option) => option.displayElement.removeAttribute('selected'))
      option.displayElement.setAttribute('selected', '')

      this.dispatchEvent(new Event('change', {
        bubbles: true
      }))
    }
  }

  setCustomValidity (string) {
    _private.get(this).sourceEl.setCustomValidity(string)
  }
}

customElements.define('chassis-select', ChassisSelect)
