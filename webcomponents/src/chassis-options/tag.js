class ChassisOptionsElement extends HTMLElement {
  constructor () {
    super()

    this.parent = null
    this.mousedown = false

    _.get(this).addReadOnlyProperties([
      {
        name: 'form',
        get () {
          return this.parent.form
        }
      },

      {
        name: 'displayOptions',
        get () {
          return new (_.get(this).ChassisHTMLOptionsCollection())(this.options.map(option => option.displayElement), this.selectedIndex, (element, before) => {
            this.add(_.get(this).generateOptionObject(element), before)
          }, index => this.removeOptionByIndex(index))
        }
      },

      {
        name: 'hoveredIndex',
        get () {
          return this.options.findIndex(option => option.displayElement.hover)
        }
      },

      'options',

      {
        name: 'selectedOptions',
        get () {
          let nodes = this.querySelectorAll('[selected]')
          return new (_.get(this).ChassisHTMLCollection())(nodes)
        }
      }
    ])

    _.get(this).addPrivateProperties({
      options: [],
      selectionStartIndex: -1,

      selection: class {
        constructor (options) {
          this.options = options
        }

        get length () {
          return this.options.length
        }

        append (option) {
          this.options.push(option)
        }

        clear () {
          this.options = []
        }

        prepend (option) {
          this.options.unshift(option)
        }
      },

      optionConstructor () {
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
            this.displayElement.addEventListener('mousedown', evt => {
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
      },

      generateOptionObject: sourceElement => {
        if (!customElements.get('chassis-option')) {
          console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
          return
        }

        return new (_.get(this).optionConstructor())(this, _.get(this).generateGuid(), sourceElement, document.createElement('chassis-option'))
      },

      generateSourceOptionElement: option => {
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
      },

      generateOptgroup: optgroup => {
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
      },

      ChassisHTMLCollection () {
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
      },

      ChassisHTMLOptionsCollection: () => {
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
      },

      selectByKey: (key, ...keys) => {
        let option = _.get(this).getOptionByKey(key)

        if (!option) {
          console.error(`Invalid option key "${key}"`)
          return this.deselectAll()
        }

        this.select(option, ...keys)
      },

      selectByIndex: (index, ...keys) => {
        let option = this.options[index]

        if (!option) {
          if (index >= 0) {
            return console.error(`No option at index ${index}`)
          }

          return
        }

        this.select(option, ...keys)
      },

      selectByString: (string, ...keys) => {
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
      },

      selectOption: option => {
        option.selected = true
        this.parent.selectedOptionsElement.add(option)
        this.parent.dispatchEvent(new Event('change', {
          bubbles: true
        }))
      }
    })

    this.addEventListener('mousedown', evt => this.mousedown = true)
    this.addEventListener('mouseup', evt => this.mousedown = false)
  }

  get selectedIndex () {
    return this.options.findIndex(option => option.displayElement === this.selectedOptions.item(0))
  }

  set selectedIndex (index) {
    this.select(index)
  }

  hoverOption (index) {
    this.unHoverAllOptions()
    this.options[index].displayElement.hover = true
  }

  unHoverOption (index) {
    this.options[index].displayElement.hover = false
  }

  unHoverAllOptions () {
    this.options.forEach((option, index) => this.unHoverOption(index))
  }

  connectedCallback () {
    _.get(this).selectionStartIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0
  }

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
      this.removeChild(this.lastChild)
    }
  }

  deselect (option) {
    option.selected = false
    this.parent.selectedOptionsElement.remove(option)
  }

  deselectAll () {
    this.parent.selectedOptionsElement.clear()
    this.options.filter(option => option.selected).forEach(option => this.deselect(option))
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

  get start () {
    return _.get(this).selectionStartIndex
  }

  /**
   * [select description]
   * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
   */
  select (option, shiftKey = false, ctrlKey = false, metaKey = false) {
    let keys = Array.prototype.slice.call(arguments, 1)

    if (Array.isArray(option)) {
      return console.log('Handle array of indexes')
    }

    if (typeof option === 'number') {
      return _.get(this).selectByIndex(option, ...keys)
    }

    if (typeof option === 'string') {
      return _.get(this).selectByString(option, ...keys)
    }

    let selection = new (_.get(this).selection)([option])

    if (this.parent.multiple) {
      if (shiftKey) {
        let { selectionStartIndex } = _.get(this)

        if (this.selectedOptions.length === 1) {
          if (option.index === this.selectedIndex) {
            return
          }

          selection.clear()

          if (option.index < this.selectedIndex) {
            for (let i = this.selectedIndex; i >= option.index; i--) {
              selection.prepend(this.options[i])
            }
          }

          if (option.index > this.selectedIndex) {
            for (let i = this.selectedIndex; i <= option.index; i++) {
              selection.append(this.options[i])
            }
          }
        }

        if (this.selectedOptions.length > 1) {
          if (option.index !== selectionStartIndex) {
            selection.clear()

            if (option.index < selectionStartIndex) {
              for (let i = selectionStartIndex; i >= option.index; i--) {
                selection.prepend(this.options[i])
              }
            }

            if (option.index > selectionStartIndex) {
              for (let i = selectionStartIndex; i <= option.index; i++) {
                selection.append(this.options[i])
              }
            }
          }
        }

        // return selection.options.forEach(option => console.log(option.displayElement))
      } else if (ctrlKey || metaKey) {
        if (option.selected) {
          return this.deselect(option)
        }

        selection.append(option)
      }

      // Shift trumps other keys
      // if (shiftKey) {
      //
      //
      //   // if (option.index < selectionStartIndex) {
      //   //   let upperBound = selectionStartIndex
      //   //
      //   //   if (this.selectedOptions.length > 1) {
      //   //     upperBound += this.selectedOptions.length
      //   //   }
      //   //
      //   //   for (let i = upperBound; i >= option.index; i--) {
      //   //     options.unshift(this.options[i])
      //   //   }
      //   // }
      //   //
      //   // if (option.index > selectionStartIndex) {
      //   //   for (let i = selectionStartIndex; i <= option.index; i++) {
      //   //     options.push(this.options[i])
      //   //   }
      //   // }
      // }
    } else if (option.selected) {
      return
    }

    if (selection.length === 1) {
      _.get(this).selectionStartIndex = option.index
    }

    this.deselectAll()
    selection.options.forEach(option => _.get(this).selectOption(option))

    if (!this.parent.multiple) {
      this.parent.open = false
    }

    this.unHoverAllOptions()
  }
}

customElements.define('chassis-options', ChassisOptionsElement)
