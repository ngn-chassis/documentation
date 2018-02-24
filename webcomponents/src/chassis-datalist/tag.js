class ChassisDatalist extends HTMLElement {
  constructor () {
    super()

    _private.get(this).addReadOnlyProp('options')

    _private.get(this).options = []

    _private.get(this).arrowKeydownHandler = (evt) => {
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

    _private.get(this).bodyClickHandler = (evt) => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
    }

    _private.get(this).generateOptionObject = (optionEl) => {
      if (!customElements.get('chassis-option')) {
        console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`)
        return
      }

      let obj = {
        id: _private.get(this).generateGuid('option'),
        attributes: {},
        sourceElement: optionEl
      }

      for (let attr of optionEl.attributes) {
        obj.attributes[attr.name] = attr.value
      }

      return obj
    }
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'name', 'tabindex']
  }

  connectedCallback () {

  }

  addChildren (children) {
    for (let child of children) {
      this.addOption(child instanceof HTMLElement ? _private.get(this).generateOptionObject(child) : child)
    }
  }

  addOption (option, index, dest = _private.get(this).optionsEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    if (!option.hasOwnProperty('id')) {
      option.id = _private.get(this).generateGuid('option')
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
      this[`${index}`] = option.sourceElement
      _private.get(this).options.splice(index, 0, option)
      return
    }

    this[`${_private.get(this).options.length}`] = option.sourceElement
    _private.get(this).options.push(option)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'autofocus':
      case 'disabled':
        console.log(attr);
        // _private.get(this).handleBooleanAttributeChange(attr, newValue)
        break

      case 'name':
        console.log(attr);
        // _private.get(this).handleAttributeChange(attr, newValue)
        break
    }
  }

  inject (input, datalist, guid) {
    _private.get(this).sourceEl = datalist

    _private.get(this).inputEl = input
    _private.get(this).inputEl.slot = 'input'
    _private.get(this).inputEl.id = guid
    this.appendChild(_private.get(this).inputEl)

    _private.get(this).optionsEl = document.createElement('chassis-options')
    _private.get(this).optionsEl.slot = 'options'

    this.appendChild(_private.get(this).optionsEl)

    this.addChildren(datalist.options)
  }
}

customElements.define('chassis-datalist', ChassisDatalist)
