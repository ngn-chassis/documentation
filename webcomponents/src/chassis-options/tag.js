class ChassisOptionsElement extends HTMLElement {
  constructor () {
    super()

    _.get(this).addReadOnlyProperties([
      {
        name: 'form',
        get () {
          return this.parentNode.form
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

      {
        name: 'multiple',
        get () {
          return this.parentNode.multiple
        }
      },

      'options',

      {
        name: 'selectedIndexes',
        get () {
          let array = []

          for (let option of this.selectedOptions) {
            array.push(option.index)
          }

          return array
        }
      },

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

      // TODO: Handle cases where
      // selectionStartIndex !== this.selectedOptions.item(this.selectedOptions.length - 1).index
      // && selectionStartIndex !== this.selectedOptions.item(0).index
      // This happens if there is an active selection with > 1 options,
      // and ctrlKey || metaKey is used to select an option outside the range of
      // this.selectedOptions, or to deselect an option within this.selectedOptions

      arrowDownHandler: evt => {
        if (!this.multiple) {
          let { startIndex } = evt.detail

          switch (startIndex) {
            case this.options.length - 1:
              return

            default:
              return this.hoverOption(startIndex + 1)
          }

          return
        }

        if (this.selectedOptions.length === 1 && this.selectedIndex === this.options.length - 1) {
          return
        }

        let { shiftKey } = evt.detail
        let index = this.selectedIndex + 1

        if (this.selectedOptions.length === 0) {
          index = _.get(this).selectionStartIndex === 0 ? 0 : _.get(this).selectionStartIndex + 1
        }

        if (this.selectedOptions.length > 1) {
          if (this.selectedIndex === _.get(this).selectionStartIndex) {
            index = this.selectedOptions.item(this.selectedOptions.length - 1).index + 1
          }

          if (this.selectedIndex < _.get(this).selectionStartIndex) {
            if (this.selectedIndex === this.options.length - 1) {
              return
            }
          }
        }

        return _.get(this).emit('option.selected', {
          index,
          shiftKey,
          ctrlKey: false,
          metaKey: false
        })
      },

      arrowUpHandler: evt => {
        if (!this.multiple) {
          let { startIndex } = evt.detail

          switch (startIndex) {
            case -1:
            case 0:
              return

            default:
              return this.hoverOption(startIndex - 1)
          }

          return
        }

        if (this.selectedOptions.length === 1 && this.selectedIndex === 0) {
          return
        }

        let index = this.selectedIndex - 1
        let { shiftKey } = evt.detail

        if (this.selectedOptions.length === 0) {
          index = _.get(this).selectionStartIndex === -1 ? this.options.length - 1 : _.get(this).selectionStartIndex - 1
        }

        if (this.selectedOptions.length > 1) {
          if (this.selectedIndex === _.get(this).selectionStartIndex) {
            index = this.selectedOptions.item(this.selectedOptions.length - 1).index - 1
          }

          if (this.selectedIndex < _.get(this).selectionStartIndex && this.selectedIndex === 0) {
            return
          }
        }

        return _.get(this).emit('option.selected', {
          index,
          shiftKey,
          ctrlKey: false,
          metaKey: false
        })
      },

      optionSelectionHandler: evt => {
        let { ChassisHTMLCollection, emit, Selection, selectionStartIndex } = _.get(this)
        let { index, shiftKey, metaKey, ctrlKey, newStartIndex } = evt.detail

        let option = this.options[index]
        let selection = new Selection()

        let applyMiddleware = next => {
          let { beforeChange } = this.parentNode

          let detail = {
            options: selection.options,
            previous: this.selectedOptions,
            next: new (ChassisHTMLCollection())(selection.displayElements),
            shiftKey,
            metaKey,
            ctrlKey
          }

          let cb = () => {
            this.deselectAll()
            selection.selectAll()
            return emit('options.selected', detail, this.parentNode)
          }

          if (!(beforeChange && typeof beforeChange === 'function')) {
            return cb()
          }

          beforeChange(this.selectedOptions, detail.next, cb)
        }

        if (this.multiple) {
          if (shiftKey) {
            let bounds = [index, selectionStartIndex].sort()
            selection.options = bounds[0] === bounds[1] ? [option] : this.options.slice(bounds[0], bounds[1] + 1)
            return applyMiddleware()
          }

          if (metaKey || ctrlKey) {
            _.get(this).selectionStartIndex = index
            selection.options = this.options.filter(option => option.index === index ? !option.selected : option.selected)

            return applyMiddleware()
          }
        } else if (index === this.selectedIndex) {
          return
        }

        selection.options = [option]
        _.get(this).selectionStartIndex = index

        applyMiddleware()
      },

      parentStateChangeHandler: evt => {
        _.get(this).emit('state.change', evt.detail)

        let { name, value } = evt.detail

        switch (name) {
          case 'multiple':
            if (!value && this.selectedOptions.length > 0) {
              let index = this.selectedIndex

              this.deselectAll()
              _.get(this).emit('option.selected', {index})
            }

            break

          default: return
        }
      },

      Selection: class {
        constructor (options = []) {
          this.options = options
        }

        get displayElements () {
          return this.options.map(option => option.displayElement)
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

        selectAll () {
          this.options.forEach(option => option.selected = true)
        }
      },

      OptionConstructor: () => {
        let _p = new WeakMap()
        let selectionHandler = _.get(this).optionSelectionHandler

        return class ChassisOptionObject {
          constructor (parent, key, sourceElement, displayElement) {
            this.key = key
            this.form = parent.form
            this.defaultSelected = sourceElement.selected

            this.sourceElement = sourceElement
            this.displayElement = displayElement
            this.displayElement.parent = parent
            this.displayElement.selected = sourceElement.selected
            this.displayElement.defaultSelected = sourceElement.selected
            this.displayElement.innerHTML = sourceElement.innerHTML

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
                value: sourceElement.hasAttribute('value') ? sourceElement.getAttribute('value').trim() : null,
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

        return new (_.get(this).OptionConstructor())(this, _.get(this).generateGuid(), sourceElement, document.createElement('chassis-option'))
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
      }
    })
  }

  get selectedIndex () {
    if (this.selectedOptions.length === 0) {
      return
    }

    return this.selectedOptions.item(0).index
  }

  set selectedIndex (index) {
    _.get(this).emit('option.selected', {index})
  }

  get selectionStartIndex () {
    return _.get(this).selectionStartIndex
  }

  set selectionStartIndex (value) {
    console.warn(`WARNING <chassis-select> selectionStartIndex cannot be set manually.`)
  }

  add (option, index = null, dest = this) {
    if (!customElements.get('chassis-option')) {
      console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)
      return
    }

    if (option instanceof Option) {
      option = _.get(this).generateOptionObject(option)
    }

    this.parentNode[`${option.index}`] = option.displayElement

    if (index) {
      dest.insertBefore(option.displayElement, dest.children.item(index))

      this.options.splice(index, 0, option)
      this.parentNode.sourceElement.add(option.sourceElement, index)

    } else {
      dest.appendChild(option.displayElement)
      this.options.push(option)

      if (!this.parentNode.sourceElement[this.options.length - 1]) {
        this.parentNode.sourceElement.appendChild(option.sourceElement)
      }
    }

    if (option.selected) {
      if (!this.multiple) {
        this.selectedIndex = option.index
        return
      }
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

  connectedCallback () {
    this.addEventListener('keydown.arrowUp', _.get(this).arrowUpHandler)
    this.addEventListener('keydown.arrowDown', _.get(this).arrowDownHandler)
    this.addEventListener('option.selected', _.get(this).optionSelectionHandler)
    this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler)

    _.get(this).selectionStartIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0
  }

  disconnectedCallback () {
    this.removeEventListener('keydown.arrowUp', _.get(this).arrowUpHandler)
    this.removeEventListener('keydown.arrowDown', _.get(this).arrowDownHandler)
    this.removeEventListener('option.selected', _.get(this).optionSelectionHandler)
    this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler)
  }

  deselect (option, updateList = true) {
    if (typeof option === 'number') {
      option = this.options[option]
    }

    option.selected = false
    this.parentNode.selectedOptionsElement.remove(option, updateList)
  }

  deselectAll (showPlaceholder = true) {
    this.options.filter(option => option.selected).forEach((option, index, options) => {
      this.deselect(option, index = options.length - 1 && showPlaceholder)
    })
  }

  hoverOption (index) {
    this.unHoverAllOptions()
    this.options[index].displayElement.hover = true
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

  unHoverAllOptions () {
    this.options.forEach((option, index) => this.unHoverOption(index))
  }

  unHoverOption (index) {
    this.options[index].displayElement.hover = false
  }
}

customElements.define('chassis-options', ChassisOptionsElement)
