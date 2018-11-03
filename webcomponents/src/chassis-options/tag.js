class ChassisOptions extends HTMLElement {
  constructor () {
    super()

    this.parent = null
    this.mousedown = false

    _.get(this).options = []

    _.get(this).optionConstructor = function () {
      let _p = new WeakMap()

      return class ChassisOptionObject {
        constructor (parent, key, sourceElement, displayElement) {
          this.key = key
          this.form = parent.form
          this.defaultSelected = sourceElement.selected

          this.sourceElement = sourceElement

          this.displayElement = displayElement
          this.displayElement.parent = parent
          this.displayElement.defaultSelected = sourceElement.selected
          this.displayElement.innerHTML = sourceElement.innerHTML
          this.displayElement.addEventListener('mouseup', evt => {
            parent.select(key, evt.shiftKey, evt.ctrlKey, evt.metaKey)
          })

          // Add additional attributes
          for (let attr of sourceElement.attributes) {
            if (typeof attr.value === 'boolean') {
              attr.value ? this.displayElement.setAttribute(attr.name, '') : this.displayElement.removeAttribute(attr.name)
              continue
            }

            this.displayElement.setAttribute(attr.name, attr.value)
          }

          _p.set(this, {
            attributes: {
              disabled: sourceElement.disabled,
              id: sourceElement.getAttribute('id'),
              label: sourceElement.getAttribute('label') || sourceElement.textContent.trim(),
              selected: sourceElement.selected,
              value: sourceElement.getAttribute('value').trim(),
              text: sourceElement.text.trim()
            }
          })
        }

        get disabled () {
          return _p.get(this).attributes.disabled
        }

        set disabled (bool) {
          this.setAttr('disabled', bool)
        }

        get index () {
          return this.sourceElement.index
        }

        get id () {
          return _p.get(this).attributes.id
        }

        set id (id) {
          this.setAttr('id', id)
        }

        get selected () {
          return _p.get(this).attributes.selected
        }

        set selected (bool) {
          this.setAttr('selected', bool)
        }

        get label () {
          return _p.get(this).attributes.label
        }

        set label (label) {
          this.setAttr('label', label)
        }

        get text () {
          return _p.get(this).attributes.text
        }

        set text (text) {
          this.setAttr('text', text)
        }

        get value () {
          return _p.get(this).attributes.value
        }

        set value (value) {
          this.setAttr('value', value)
        }

        remove () {
          this.sourceElement.remove()
          this.displayElement.remove()
        }

        setAttr (name, value) {
          this.sourceElement[name] = value

          if (typeof value === 'boolean') {
            value ? this.displayElement.setAttribute(name, '') : this.displayElement.removeAttribute(name)
          } else {
            this.displayElement.setAttribute(name, value)
          }

          _p.get(this).attributes[name] = value
        }
      }
    }

    _.get(this).generateOptionObject = sourceElement => {
      if (!customElements.get('chassis-option')) {
        console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
        return
      }

      return new (_.get(this).optionConstructor())(this, _.get(this).generateGuid(), sourceElement, document.createElement('chassis-option'))
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

    _.get(this).generateOptgroup = optgroup => {
      if (!customElements.get('chassis-optgroup')) {
        console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`)
        return
      }

      let surrogate = document.createElement('chassis-optgroup')
      surrogate.id = _.get(this).generateGuid('optgroup')

      let label = optgroup.getAttribute('label')

      if (!label || label.trim() === '') {
        console.error('<optgroup> must have a label attribute!')
        return
      }

      surrogate.setAttribute('label', label)

      let options = optgroup.querySelectorAll('option')

      for (let option of options) {
        this.add(_.get(this).generateOptionObject(option), null, surrogate)
      }

      return surrogate
    }

    _.get(this).ChassisHTMLCollection = function () {
      let _p = new WeakMap()

      return class ChassisHTMLCollection {
        constructor (arr) {
          _p.set(this, {arr})
          arr.forEach((node, index) => {
            this[index] = node

            if (node.id) {
              this[node.id] = node
            }
          })
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

        [Symbol.iterator] () {
          let index = 0

          return {
            next: () => {
              let result = {
                value: _p.get(this).arr[index],
                done: !(index in _p.get(this).arr)
              }

              index++

              return result
            }
          }
        }

        [Symbol.toStringTag] () {
          return 'ChassisHTMLCollection'
        }
      }
    }

    _.get(this).ChassisHTMLOptionsCollection = () => {
      let _p = new WeakMap()

      let ChassisHTMLOptionsCollection = class ChassisHTMLOptionsCollection extends _.get(this).ChassisHTMLCollection() {
        constructor (arr, selectedIndex = -1, add, remove) {
          super(arr)
          this.selectedIndex = selectedIndex
          this.add = add
          this.remove = remove

          _p.set(this, {arr})
        }

        [Symbol.toStringTag] () {
          return 'ChassisHTMLOptionsCollection'
        }
      }

      return ChassisHTMLOptionsCollection
    }

    _.get(this).selectByKey = (key, ...keys) => {
      let option = _.get(this).getOptionByKey(key)

      if (!option) {
        console.error(`Invalid option key "${key}"`)
        return this.deselectAll()
      }

      this.select(option, ...keys)
    }

    _.get(this).selectByIndex = (index, ...keys) => {
      let option = this.options[index]

      if (!option) {
        if (index >= 0) {
          return console.error(`No option at index ${index}`)
        }

        return
      }

      this.select(option, ...keys)
    }

    _.get(this).selectByString = (string, ...keys) => {
      let query

      for (let option of this.options) {
        if (option.key === string || option.id === string) {
          query = option
          break
        }
      }

      if (!query) {
        console.error(`Option matching query "${key}" not found`)
        return
      }

      this.select(query, ...keys)
    }

    this.addEventListener('mousedown', evt => this.mousedown = true)
    this.addEventListener('mouseup', evt => this.mousedown = false)
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
    return new (_.get(this).ChassisHTMLOptionsCollection())(this.options.map(option => option.displayElement), this.selectedIndex, (element, before) => {
      this.add(_.get(this).generateOptionObject(element), before)
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
    _.get(this).selectByIndex(index, false, false, false)
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

  get hoveredIndex () {
    return this.options.findIndex(option => option.displayElement.hovered)
  }

  set hoveredIndex (index) {
    return _.get(this).throw('readonly', {
      name: 'hoveredIndex'
    })
  }

  hoverOption (index) {
    this.unHoverAllOptions()
    this.options[index].displayElement.hovered = true
  }

  unHoverOption (index) {
    this.options[index].displayElement.hovered = false
  }

  unHoverAllOptions () {
    this.options.forEach((option, index) => this.unHoverOption(index))
  }

  connectedCallback () {}

  add (option, index = null, dest = this) {
    if (!customElements.get('chassis-option')) {
      console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
      return
    }

    if (option instanceof Option) {
      option = _.get(this).generateOptionObject(option)
    }

    this.parent[`${option.index}`] = option.displayElement

    if (index) {
      dest.insertBefore(option.displayElement, dest.children.item(index))

      this.options.splice(index, 0, option)
      this.parent.sourceElement.add(option.sourceElement, index)

    } else {
      dest.appendChild(option.displayElement)
      this.options.push(option)

      if (!this.parent.sourceElement[this.options.length - 1]) {
        this.parent.sourceElement.appendChild(option.sourceElement)
      }
    }

    if (option.selected) {
      _.get(this).selectByString(option.key, false, false, false)
    }
  }

  addChildren (children) {
    for (let child of children) {
      let isElement = child instanceof HTMLElement

      switch (child.nodeName) {
        case 'OPTION':
          this.add(isElement ? _.get(this).generateOptionObject(child) : child)
          break

        case 'OPTGROUP':
          this.addOptgroup(isElement ? _.get(this).generateOptgroup(child) : child)
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

  deselect (option) {
    option.selected = false
    this.parent.selectedOptionsElement.remove(option)
  }

  deselectAll () {
    this.parent.selectedOptionsElement.clear()
    this.options.forEach(option => this.deselect(option))
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
  removeOptionByIndex (index = null) {
    if (index === null || index >= this.options.length) {
      return
    }

    this.options[index].remove()
  }

  /**
   * [select description]
   * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
   */
  select (option, shiftKey = false, ctrlKey = false, metaKey = false) {
    let keys = Array.prototype.slice.call(arguments, 1)

    console.log(this.options);

    if (Array.isArray(option)) {
      return console.log('Handle array of indexes')
    }

    if (typeof option === 'number') {
      return _.get(this).selectByIndex(option, ...keys)
    }

    if (typeof option === 'string') {
      return _.get(this).selectByString(option, ...keys)
    }

    let deselectAll = true

    if (this.parent.multiple) {
      if (ctrlKey || metaKey) {
        if (option.selected) {
          return this.deselect(option)
        }

        deselectAll = false
      }

      // Shift trumps other keys
      if (shiftKey) {
        let currentSelection = this.selectedOptions.item(0)
        deselectAll = false

        console.log(currentSelection);
      }
    } else if (option.selected) {
      return
    }

    deselectAll && this.deselectAll()

    option.selected = true
    this.parent.selectedOptionsElement.add(option)
    this.parent.dispatchEvent(new Event('change', {
      bubbles: true
    }))

    if (!this.parent.multiple) {
      this.parent.close()
    }

    this.unHoverAllOptions()
  }
}

customElements.define('chassis-options', ChassisOptions)
