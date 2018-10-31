class ChassisOptions extends HTMLElement {
  constructor () {
    super()

    this.parent = null

    this.selectedOptionsEl = null

    _.get(this).options = []

    _.get(this).generateDisplayOptionElement = option => {
      let chassisOption = document.createElement('chassis-option')

      if (option.attributes.id) {
        chassisOption.id = option.attributes.id
      }

      if (option.sourceElement.hasAttribute('label')) {
        chassisOption.setAttribute('label', option.sourceElement.getAttribute('label'))
      }

      if (option.attributes.value) {
        chassisOption.setAttribute('value', option.attributes.value)
      }

      if (option.attributes.disabled) {
        chassisOption.setAttribute('disabled', '')
      }

      chassisOption.defaultSelected = option.attributes.selected

      chassisOption.key = _.get(this).generateGuid()
      chassisOption.addEventListener('click', evt => this.selectByKey(chassisOption.key))
      chassisOption.innerHTML = option.sourceElement.innerHTML

      return chassisOption
    }

    _.get(this).generateSourceOptionElement = option => {
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

      return sourceEl
    }

    _.get(this).ChassisHTMLCollection = function () {
      let _p = new WeakMap()

      return class ChassisHTMLCollection {
        constructor (arr) {
          _p.set(this, {arr})
          arr.forEach((node, index) => this[index] = node)
        }

        get length () {
          return _p.get(this).arr.length
        }

        item (index) {
          return _p.get(this).arr[index]
        }

        namedItem (name) {
          let matches = _p.get(this).arr.filter(item => item.id === name || item.name === name)
          return matches.length > 0 ? matches[0] : null
        }
      }
    }

    _.get(this).ChassisOptionsCollection = () => {
      let _p = new WeakMap()

      return class ChassisOptionsCollection extends _.get(this).ChassisHTMLCollection() {
        constructor (arr, selectedIndex = -1, add, remove) {
          super(arr)
          this.selectedIndex = selectedIndex
          this.add = add
          this.remove = remove
        }
      }
    }
  }

  get form () {
    return this.parent.form
  }

  set form (value) {
    return _.get(this).throw('readonly', {
      name: 'form'
    })
  }

  get displayOptions () {
    return new (_.get(this).ChassisOptionsCollection())(this.options.map(option => option.displayElement), this.selectedIndex, (element, before) => {
      this.add(this.generateOptionObject(element), before)
    }, index => this.removeOptionByIndex(index))
  }

  set displayOptions (value) {
    return _.get(this).throw('readonly', {
      name: 'displayOptions'
    })
  }

  get options () {
    return _.get(this).options
  }

  set options (value) {
    return _.get(this).throw('readonly', {
      name: 'options'
    })
  }

  get selectedIndex () {
    return this.options.findIndex(option => option.displayElement === this.selectedOptions.item(0))
  }

  set selectedIndex (index) {
    this.selectByIndex(index)
  }

  get selectedOptions () {
    let nodes = this.querySelectorAll('[selected]')
    return new (_.get(this).ChassisHTMLCollection())(nodes)
  }

  set selectedOptions (value) {
    return _.get(this).throw('readonly', {
      name: 'selectedOptions'
    })
  }

  connectedCallback () {

  }

  add (option, index = null, dest = this) {
    if (!customElements.get('chassis-option')) {
      console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
      return
    }

    if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
      option.sourceElement = _.get(this).generateSourceOptionElement(option)
    }

    option = {
      attributes: {
        disabled: option.sourceElement.disabled,
        id: option.sourceElement.getAttribute('id'),
        label: option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim(),
        selected: option.sourceElement.hasAttribute('selected'),
        value: option.sourceElement.getAttribute('value')
      },
      sourceElement: option.sourceElement
    }

    let chassisOption = _.get(this).generateDisplayOptionElement(option)
    chassisOption.parent = dest

    option.displayElement = chassisOption
    option.key = chassisOption.key

    if (index) {
      dest.insertBefore(chassisOption, dest.children.item(index))

      this.parent[`${index}`] = option.displayElement
      this.options.splice(index, 0, option)
      this.parent.sourceElement.add(option.sourceElement, index)

      if (option.attributes.selected) {
        this.selectByIndex(index)
      }

      return
    }

    dest.appendChild(chassisOption)

    this.parent[`${this.options.length}`] = option.displayElement
    this.options.push(option)

    if (!this.parent.sourceElement[this.options.length - 1]) {
      this.parent.sourceElement.appendChild(option.sourceElement)
    }

    if (option.attributes.selected) {
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
    this.parent.sourceElement.selectedIndex = -1
    this.selectedOptionsEl.contents = this.parent.placeholder
    this.selectedOptionsEl.setAttribute('placeholder', '')

    this.options.forEach(option => {
      option.displayElement.removeAttribute('selected')
      option.sourceElement.selected = false
    })
  }

  generateOptgroup (optgroup) {
    if (!customElements.get('chassis-optgroup')) {
      console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`)
      return
    }

    let fauxOptgroup = document.createElement('chassis-optgroup')
    fauxOptgroup.id = _.get(this).generateGuid('optgroup')

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
      id: _.get(this).generateGuid(),
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

  /**
   * @method removeOptionByIndex
   * @param  {Number}  [index=null]
   * Index of option to remove
   * @param  {Boolean} [destroy=true]
   */
  removeOptionByIndex (index = null, destroy = true) {
    if (index === null || index >= this.options.length) {
      return
    }

    let option = this.options[index]
    option.sourceElement.remove()
    destroy && option.displayElement.remove()

    this.options.splice(index, 1)
  }

  /**
   * [select description]
   * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
   */
  select (option) {
    if (option === this.selectedOption) {
      return
    }

    if (!this.parent.multiple) {
      this.deselectAll()
    }

    option.sourceElement.selected = true
    option.displayElement.setAttribute('selected', '')

    this.selectedOptionsEl.add(option)

    this.selectedOptionsEl.removeAttribute('placeholder')
    this.dispatchChangeEvent()
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
