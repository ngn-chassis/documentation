class ChassisDatalistElement extends HTMLElement {
  constructor () {
    super()

    this.clickCount = 0

    _.get(this).addReadOnlyProperty('options')

    _.get(this).options = []

    _.get(this).find = query => {
      return _.get(this).options.filter(option => {
        let value = this.hasAttribute('case-sensitive') ? option.sourceElement.value : option.sourceElement.value.toLowerCase()
        let text = this.hasAttribute('case-sensitive') ? option.sourceElement.text : option.sourceElement.text.toLowerCase()
        query = this.hasAttribute('case-sensitive') ? query : query.toLowerCase()

        return value.indexOf(query) >= 0 || text.indexOf(query) >= 0
      })
    }

    _.get(this).clear = () => {
      _.get(this).options.forEach(option => option.displayElement.style.display = 'none')
    }

    _.get(this).showAllOptions = () => {
      _.get(this).options.forEach(option => option.displayElement.style.display = '')
    }

    _.get(this).clickHandler = evt => {
      this.clickCount++

      if (this.clickCount === 2) {
        _.get(this).showAllOptions()
        this.open()
      }
    }

    _.get(this).keydownHandler = evt => {
      if (!this.isOpen) {
        _.get(this).showAllOptions()
        return this.open()
      }

      switch (evt[this.keySource]) {
        case 27:
        case 'Escape':
          _.get(this).clear()
          this.close()
          break

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

    _.get(this).inputHandler = evt => {
      _.get(this).clear()
      let query = _.get(this).inputEl.value

      if (!query) {
        return
      }

      let results = _.get(this).find(query)

      if (results.length) {
        results.forEach(result => result.displayElement.style.display = '')
        this.setAttribute('open', '')
        return
      }

      if (this.hasAttribute('open')) {
        this.removeAttribute('open')
      }

      _.get(this).clear()
    }

    _.get(this).bodyClickHandler = evt => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
    }

    _.get(this).getOptionById = (id) => {
      let options = _.get(this).options
      let option

      for (let i = 0; i < options.length; i++) {
        if (options[i].id === id) {
          option = options[i]
          break
        }
      }

      return option
    }

    _.get(this).generateOptionObject = optionEl => {
      if (!customElements.get('chassis-option')) {
        console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`)
        return
      }

      let obj = {
        id: _.get(this).generateGuid('option'),
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
    return ['autofocus', 'case-sensitive', 'disabled', 'name', 'open', 'tabindex']
  }

  get isOpen () {
    return this.hasAttribute('open')
  }

  set isOpen (bool) {
    bool ? this.setAttribute('open', '') : this.removeAttribute('open')
  }

  get value () {
    return _.get(this).inputEl.value
  }

  connectedCallback () {
    _.get(this).inputEl.addEventListener('focus', evt => {
      this.addEventListener('keydown', _.get(this).keydownHandler)
    })

    _.get(this).inputEl.addEventListener('input', _.get(this).inputHandler)

    _.get(this).inputEl.addEventListener('click', _.get(this).clickHandler)

    _.get(this).inputEl.addEventListener('blur', evt => {
      this.clickCount = 0
      this.removeEventListener('keydown', _.get(this).keydownHandler)
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

  addChildren (children) {
    for (let child of children) {
      this.addOption(child instanceof HTMLElement ? _.get(this).generateOptionObject(child) : child)
    }
  }

  addOption (option, index, dest = _.get(this).optionsEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    if (!option.hasOwnProperty('id')) {
      option.id = _.get(this).generateGuid('option')
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

    chassisOption.style.display = 'none'
    chassisOption.key = option.id
    chassisOption.innerHTML = option.sourceElement.innerHTML

    dest.appendChild(chassisOption)
    chassisOption.addEventListener('click', evt => this.select(chassisOption.key))

    option = {
      attributes: { disabled, label, value },
      id: option.id,
      displayElement: chassisOption,
      sourceElement: option.sourceElement
    }

    if (index) {
      this[`${index}`] = option.sourceElement
      _.get(this).options.splice(index, 0, option)
      return
    }

    this[`${_.get(this).options.length}`] = option.sourceElement
    _.get(this).options.push(option)
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
        // _.get(this).setBooleanAttributeValue(attr, newValue)
        break

      case 'name':
        console.log(attr);
        // _.get(this).setAttributeValue(attr, newValue)
        break

      case 'open':
        this.isOpen ? this.open() : this.close()
        break
    }
  }

  close () {
    document.body.removeEventListener('click', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.removeEventListener('touchend', _.get(this).bodyClickHandler)

    if (this.isOpen) {
      this.isOpen = false
    }
  }

  open () {
    document.body.addEventListener('click', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler)
    document.body.addEventListener('touchend', _.get(this).bodyClickHandler)

    if (!this.isOpen) {
      this.isOpen = true
    }
  }

  inject (input, datalist, guid) {
    _.get(this).sourceEl = datalist
    _.get(this).inputEl = input
    _.get(this).inputEl.slot = 'input'
    _.get(this).inputEl.id = guid
    this.appendChild(_.get(this).inputEl)

    _.get(this).optionsEl = document.createElement('chassis-options')
    _.get(this).optionsEl.slot = 'options'

    this.appendChild(_.get(this).optionsEl)

    this.addChildren(datalist.options)
  }

  select (id) {
    let option = _.get(this).getOptionById(id)

    if (option) {
      option.sourceElement.selected = true
      _.get(this).inputEl.value = option.displayElement.innerHTML
      _.get(this).selectedOption = option

      _.get(this).options.forEach(option => option.displayElement.removeAttribute('selected'))
      option.displayElement.setAttribute('selected', '')

      this.dispatchEvent(new Event('input', {
        bubbles: true
      }))

      this.close()
    }
  }
}

customElements.define('chassis-datalist', ChassisDatalistElement)
