class ChassisSelect extends HTMLElement {
  constructor () {
    super()

    _private.get(this).addReadOnlyProps([
      'form',
      'labels',
      'willValidate',
      'selectedOptions',
      'type',
      'validationMessage',
      'validity'
    ])

    _private.get(this).title = ''
    _private.get(this).placeholder = ''

    _private.get(this).arrowKeydownHandler = evt => {
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

    _private.get(this).bodyClickHandler = evt => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
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

  get options () {
    return _private.get(this).optionsEl.options
  }

  set options (value) {
    return _private.get(this).throw('readonly', {
      name: 'options'
    })
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

  get placeholder () {
    return _private.get(this).placeholder
  }

  set placeholder (text) {
    _private.get(this).placeholder = text
  }

  get required () {
    return _private.get(this).getBooleanPropertyValue('required')
  }

  set required (bool) {
    _private.get(this).handleBooleanPropertyChange('required', bool)
  }

  get selectedIndex () {
    return _private.get(this).optionsEl.selectedIndex
  }

  set selectedIndex (index) {
    if (index < 0) {
      return this.deselectAll()
    }

    _private.get(this).optionsEl.selectedIndex = index
  }

  get sourceElement () {
    return _private.get(this).sourceEl
  }

  get value () {
    return _private.get(this).sourceEl.value
  }

  add (option, index) {
    _private.get(this).optionsEl.add(option, index)
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

  deselectAll () {
    _private.get(this).optionsEl.deselectAll()
  }

  inject (select) {
    _private.get(this).optionsEl = document.createElement('chassis-options')
    _private.get(this).sourceEl = select
    _private.get(this).optionsEl.parent = this
    _private.get(this).optionsEl.selectedOptionEl = document.createElement('chassis-selected-option')

    _private.get(this).optionsEl.selectedOptionEl.slot = 'selectedoption'
    this.appendChild(_private.get(this).optionsEl.selectedOptionEl)

    _private.get(this).optionsEl.slot = 'options'
    this.appendChild(_private.get(this).optionsEl)

    _private.get(this).placeholder = this.getAttribute('placeholder')

    if (select.children.length > 0) {
      _private.get(this).optionsEl.addChildren(select.children)
      _private.get(this).optionsEl.selectByIndex(this.selectedIndex)
    } else {
      this.deselectAll()
    }
  }

  item (index) {
    return _private.get(this).optionsEl.item(index)
  }

  namedItem (id) {
    return _private.get(this).optionsEl.namedItem(id)
  }

  open () {
    document.body.addEventListener('click', _private.get(this).bodyClickHandler)
    document.body.addEventListener('touchcancel', _private.get(this).bodyClickHandler)
    document.body.addEventListener('touchend', _private.get(this).bodyClickHandler)

    if (!this.isOpen) {
      this.isOpen = true
    }
  }

  remove (index = null) {
    if (index === null) {
      return super.remove()
    }

    _private.get(this).optionsEl.remove(index)
  }

  select (index) {
    _private.get(this).optionsEl.selectByIndex(index)
  }

  setCustomValidity (string) {
    _private.get(this).sourceEl.setCustomValidity(string)
  }
}

customElements.define('chassis-select', ChassisSelect)
