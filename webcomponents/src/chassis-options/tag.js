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

      optionSelectionHandler: evt => {
        let { ChassisHTMLCollection, emit, Selection, selectionStartIndex } = _.get(this)
        let { index, shiftKey, metaKey, ctrlKey } = evt.detail

        let option = this.options[index]
        let detail = { shiftKey, metaKey, ctrlKey }
        let selection = new Selection()

        let applyMiddleware = next => {
          let { beforeChange } = this.parentNode

          let cb = () => {
            detail.options = selection.options
            next()

            return emit('options.selected', detail, this.parentNode)
          }

          if (!(beforeChange && typeof beforeChange === 'function')) {
            return cb()
          }

          beforeChange(this.selectedOptions, new (ChassisHTMLCollection())(selection.displayElements), cb)
        }

        if (this.multiple) {
          if (metaKey || ctrlKey) {
            selection.options = this.options.filter(option => option.selected || (option.index === index && !option.selected))
            _.get(this).selectionStartIndex = index
            return applyMiddleware(() => option.selected = !option.selected)
          }

          if (shiftKey) {
            let bounds = [index, selectionStartIndex].sort()

            if (bounds[0] === bounds[1]) {
              return
            }

            selection.options = this.options.slice(bounds[0], bounds[1] + 1)

            return applyMiddleware(() => {
              this.deselectAll()
              selection.options.forEach(option => option.selected = true)
            })
          }
        } else if (index === this.selectedIndex) {
          return
        }

        selection.options = [option]
        _.get(this).selectionStartIndex = index

        applyMiddleware(() => {
          this.deselectAll()
          option.selected = true
        })
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
      },

      // selectByKey: (key, ...keys) => {
      //   let option = _.get(this).getOptionByKey(key)
      //
      //   if (!option) {
      //     console.error(`Invalid option key "${key}"`)
      //     return this.deselectAll()
      //   }
      //
      //   this.select(option, ...keys)
      // },
      //
      // selectByIndex: (index, ...keys) => {
      //   let option = this.options[index]
      //
      //   if (!option) {
      //     if (index >= 0) {
      //       return console.error(`No option at index ${index}`)
      //     }
      //
      //     return
      //   }
      //
      //   this.select(option, ...keys)
      // },
      //
      // selectByString: (string, ...keys) => {
      //   let query
      //
      //   for (let option of this.options) {
      //     if (option.key === string || option.id === string) {
      //       query = option
      //       break
      //     }
      //   }
      //
      //   if (!query) {
      //     console.error(`Option matching query "${key}" not found`)
      //     return
      //   }
      //
      //   this.select(query, ...keys)
      // }
    })
  }

  get selectedIndex () {
    if (this.selectedOptions.length === 0) {
      return
    }

    return this.selectedOptions.item(0).index
  }

  set selectedIndex (index) {
    _.get(this).emit('option.selected', index)
  }

  get selectionStartIndex () {
    return _.get(this).selectionStartIndex
  }

  set selectionStartIndex (value) {
    console.warn(`WARNING <chassis-select> selectionStartIndex cannot be set manually.`)
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
    this.addEventListener('option.selected', _.get(this).optionSelectionHandler)
    this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler)

    _.get(this).selectionStartIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0
  }

  disconnectedCallback () {
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
  // select (option, input, shiftKey = false, ctrlKey = false, metaKey = false, startIndex = null) {
  //   let keys = Array.prototype.slice.call(arguments, 1)
  //
  //   if (Array.isArray(option)) {
  //     return console.log('Handle array of indexes')
  //   }
  //
  //   if (typeof option === 'number') {
  //     return _.get(this).selectByIndex(option, ...keys)
  //   }
  //
  //   if (typeof option === 'string') {
  //     return _.get(this).selectByString(option, ...keys)
  //   }
  //
  //   if (typeof option !== 'object') {
  //     return console.error(`ERROR <chassis-select> Cannot select option type "${typeof option}"`)
  //   }
  //
  //   let selection = new (_.get(this).selection)([option])
  //
  //   if (selection.length === 1) {
  //     _.get(this).selectionStartIndex = option.index
  //   }
  //
  //   if (this.parentNode.multiple) {
  //     let { selectionStartIndex } = _.get(this)
  //
  //     if (startIndex) {
  //       selectionStartIndex = startIndex
  //     }
  //
  //     if (shiftKey) {
  //       console.log('shift key');
  //     } else if (ctrlKey || metaKey) {
  //       _.get(this).selectionStartIndex = option.index
  //
  //       deselectAll = false
  //     }
  //
  //   } else if (option.selected) {
  //     return
  //   }
  //
  //   let completeChange = () => {
  //     let previouslySelectedOptions = this.selectedOptions
  //
  //     deselectAll && this.deselectAll(false)
  //     selection.options.forEach(option => option.selected = true)
  //
  //     this.parentNode.dispatchEvent(new Event('change', {
  //       bubbles: true
  //     }))
  //
  //     if (this.parentNode.afterChange && typeof this.parentNode.afterChange === 'function') {
  //       this.parentNode.afterChange(previouslySelectedOptions, this.selectedOptions)
  //     }
  //   }
  //
  //   if (this.parentNode.beforeChange && typeof this.parentNode.beforeChange === 'function') {
  //     let collection = new (_.get(this).ChassisHTMLCollection())(selection.options.map(option => option.displayElement))
  //     return this.parentNode.beforeChange(this.selectedOptions, collection, completeChange)
  //   }
  //
  //   completeChange()
  //
  //   // if (this.parentNode.multiple) {
  //   //   let { selectionStartIndex } = _.get(this)
  //   //
  //   //   if (startIndex) {
  //   //     selectionStartIndex = startIndex
  //   //   }
  //   //
  //   //   // TODO: Refactor to use bounding method
  //   //   if (shiftKey) {
  //   //     if (this.selectedOptions.length === 1) {
  //   //       if (option.index === this.selectedIndex) {
  //   //         return
  //   //       }
  //   //
  //   //       selection.clear()
  //   //
  //   //       if (option.index < this.selectedIndex) {
  //   //         for (let i = this.selectedIndex; i >= option.index; i--) {
  //   //           selection.prepend(this.options[i])
  //   //         }
  //   //       }
  //   //
  //   //       if (option.index > this.selectedIndex) {
  //   //         for (let i = this.selectedIndex; i <= option.index; i++) {
  //   //           selection.append(this.options[i])
  //   //         }
  //   //       }
  //   //     }
  //   //
  //   //     if (this.selectedOptions.length > 1 && option.index !== selectionStartIndex) {
  //   //       selection.clear()
  //   //
  //   //       if (option.index < selectionStartIndex) {
  //   //         for (let i = selectionStartIndex; i >= option.index; i--) {
  //   //           selection.prepend(this.options[i])
  //   //         }
  //   //       }
  //   //
  //   //       if (option.index > selectionStartIndex) {
  //   //         for (let i = selectionStartIndex; i <= option.index; i++) {
  //   //           selection.append(this.options[i])
  //   //         }
  //   //       }
  //   //     }
  //   //   } else if (ctrlKey || metaKey) {
  //   //     _.get(this).selectionStartIndex = option.index
  //   //
  //   //     if (option.selected) {
  //   //       return this.deselect(option)
  //   //     }
  //   //
  //   //     deselectAll = false
  //   //   }
  //   // } else if (option.selected) {
  //   //   return
  //   // }
  // }
}

customElements.define('chassis-options', ChassisOptionsElement)
