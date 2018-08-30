class ChassisOptions extends HTMLElement {
  constructor () {
    super()

    this.parent = null

    this.options = []
    this.selectedOption = null
    this.selectedOptionEl = null
  }

  get selectedIndex () {
    return this.options.indexOf(this.selectedOption)
  }

  set selectedIndex (index) {
    this.selectByIndex(index)
  }

  connectedCallback () {

  }

  add (option, index) {
    if (!customElements.get('chassis-option')) {
      console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
      return
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

    let disabled = option.sourceElement.disabled
    let id = option.sourceElement.getAttribute('id')
    let label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim()
    let selected = option.sourceElement.hasAttribute('selected')
    let value = option.sourceElement.getAttribute('value')

    let chassisOption = document.createElement('chassis-option')

    if (id) {
      chassisOption.id = id
    }

    if (option.sourceElement.hasAttribute('label')) {
      chassisOption.setAttribute('label', option.sourceElement.getAttribute('label'))
    }

    if (value) {
      chassisOption.setAttribute('value', value)
    }

    if (disabled) {
      chassisOption.setAttribute('disabled', '')
    }

    chassisOption.key = _private.get(this).generateGuid()
    chassisOption.addEventListener('click', (evt) => this.selectByKey(chassisOption.key))
    chassisOption.innerHTML = option.sourceElement.innerHTML

    option = {
      attributes: { disabled, id, label, selected, value },
      key: chassisOption.key,
      displayElement: chassisOption,
      sourceElement: option.sourceElement
    }

    if (index) {
      this.insertBefore(chassisOption, this.children.item(index))

      this.parent[`${index}`] = option.displayElement
      this.options.splice(index, 0, option)
      this.parent.sourceEl.add(option.sourceElement, index)

      if (selected) {
        this.selectByIndex(index)
      }

      return
    }

    this.appendChild(chassisOption)

    this.parent[`${this.options.length}`] = option.displayElement
    this.options.push(option)

    if (!this.parent.sourceElement[this.options.length - 1]) {
      this.parent.sourceElement.appendChild(option.sourceElement)
    }

    if (selected) {
      this.selectByKey(option.key)
    }
  }

  addChildren (children) {
    for (let child of children) {
      let isElement = child instanceof HTMLElement

      switch (child.nodeName) {
        case 'OPTION':
          this.add(isElement ? this.generateOptionObject(child) : child)
          break

        case 'OPTGROUP':
          this.addOptgroup(isElement ? this.generateOptgroup(child) : child)

          break

        default:
          console.warn(`${child.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`)
          break
      }
    }
  }

  addOptgroup (optgroup) {
    let label = document.createElement('chassis-optgroup-label')
    label.innerHTML = optgroup.getAttribute('label')

    this.appendChild(label)
    this.appendChild(optgroup)
  }

  clear () {
    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }
  }

  deselectAll () {
    this.selectedOption = null
    this.parent.sourceElement.selectedIndex = -1
    this.selectedOptionEl.contents = this.parent.placeholder
    this.selectedOptionEl.setAttribute('placeholder', '')
  }

  generateOptgroup (optgroup) {
    if (!customElements.get('chassis-optgroup')) {
      console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`)
      return
    }

    let fauxOptgroup = document.createElement('chassis-optgroup')
    fauxOptgroup.id = _private.get(this).generateGuid('optgroup')

    let label = optgroup.getAttribute('label')

    if (!label || label.trim() === '') {
      console.error('<optgroup> must have a label attribute!')
      return
    }

    fauxOptgroup.setAttribute('label', label)

    let options = optgroup.querySelectorAll('option')

    for (let option of options) {
      this.add(this.generateOptionObject(option), null, fauxOptgroup)
    }

    return fauxOptgroup
  }

  generateOptionObject (optionEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
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

  getOptionByKey (key) {
    let option

    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].key === key) {
        option = this.options[i]
        break
      }
    }

    return option
  }

  item (index) {
    return this.options[index].displayElement
  }

  namedItem (value) {
    let query = this.options.filter(option => {
      let id = option.sourceElement.attributes.getNamedItem('id')
      return id && id.value === value
    })

    if (!query.length) {
      return null
    }

    return query[query.length - 1].displayElement
  }

  remove (index = null) {
    if (index === null) {
      return
    }

    let option = this.options[index]
    option.sourceElement.remove()
    option.displayElement.remove()

    this.options.splice(index, 1)
  }

  /**
   * [select description]
   * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
   */
  select (option) {
    option.sourceElement.selected = true
    this.selectedOptionEl.contents = option.displayElement.innerHTML
    this.selectedOption = option

    this.options.forEach(option => option.displayElement.removeAttribute('selected'))
    option.displayElement.setAttribute('selected', '')

    this.selectedOptionEl.removeAttribute('placeholder')

    this.dispatchEvent(new Event('change', {
      bubbles: true
    }))
  }

  selectByKey (key) {
    let option = this.getOptionByKey(key)

    if (!option) {
      console.error(`Invalid option key "${key}"`)
      return this.deselectAll()
    }

    this.select(option)
  }

  selectByIndex (index) {
    let option = this.options[index]

    if (!option) {
      if (index >= 0) {
        return console.error(`No option at index ${index}`)
      }

      return this.deselectAll()
    }

    this.select(option)
  }
}

customElements.define('chassis-options', ChassisOptions)
