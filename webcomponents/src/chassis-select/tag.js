class ChassisSelectElement extends HTMLElement {
  constructor () {
    super()

    _.get(this).addReadOnlyProperties([
      'form',

      {
        name: 'hoveredIndex',
        get () {
          return this.optionsElement.hoveredIndex
        }
      },

      'labels',

      {
        name: 'options',
        get () {
          return this.optionsElement.displayOptions
        }
      },

      'optionsElement',

      {
        name: 'selectedOptions',
        get () {
          return this.optionsElement ? this.optionsElement.selectedOptions : null
        }
      },

      'selectedOptionsElement',
      'sourceElement',

      {
        name: 'type',
        get () {
          return this.multiple ? 'select-multiple' : 'select-one'
        }
      },

      'willValidate',
      'validationMessage',
      'validity'
    ])

    _.get(this).addAttributes([
      'name',
      'placeholder'
    ])

    _.get(this).addBooleanAttributes([
      'autofocus',
      'disabled',
      'multiple',
      'open',
      'required'
    ])

    _.get(this).addPrivateProperties({
      injected: false,
      title: '',

      addOpenListeners: () => {
        document.body.addEventListener('mousedown', _.get(this).bodyMousedownHandler)
        document.body.addEventListener('touchcancel', _.get(this).bodyMousedownHandler)
        document.body.addEventListener('touchend', _.get(this).bodyMousedownHandler)
      },

      arrowKeydownHandler: evt => {
        let startIndex = this.hoveredIndex > -1 ? this.hoveredIndex : this.selectedIndex > -1 ? this.selectedIndex : -1

        switch (evt[this.keySource]) {
          case 13:
          case 'Enter':
          case 32:
          case ' ':
            evt.preventDefault()

            if (!this.multiple) {
              if (!this.open && (evt[this.keySource] === 32 || evt[this.keySource] === ' ')) {
                this.open = true
                return
              }

              if (this.hoveredIndex === this.selectedIndex || this.hoveredIndex === -1) {
                this.open = false
                return
              }
            }

            return
            // return this.optionsElement.select(this.hoveredIndex, evt.shiftKey, evt.ctrlKey, evt.metaKey)

          case 38:
          case 'ArrowUp':
            evt.preventDefault()

            if (!this.multiple) {
              if (!this.open) {
                this.open = true
                return
              }

              switch (startIndex) {
                case -1:
                case 0:
                  return

                default:
                  return this.optionsElement.hoverOption(startIndex - 1)
              }
            }

            if (this.selectedIndex === 0) {
              return
            }

            if (!evt.shiftKey) {
              return this.optionsElement.select(this.optionsElement.selectionStartIndex - 1)
            }

            if (this.selectedOptions.length === 1) {
              return this.optionsElement.select(this.selectedIndex - 1, evt.shiftKey, null, null, this.selectedIndex)
            }

            for (let option of this.selectedOptions) {
              console.log(option);
            }

            return



            if (!evt.shiftKey) {
              return this.optionsElement.select(this.selectedOptions[this.selectedOptions.length - 1].index)
            }

            if (this.optionsElement.selectionStartIndex < this.selectedIndex) {
              return this.optionsElement.deselect(this.selectedOptions[this.selectedOptions.length - 1].index)
            }

            return this.optionsElement.select(this.selectedIndex - 1, evt.shiftKey)

          case 40:
          case 'ArrowDown':
            evt.preventDefault()

            if (!this.multiple) {
              if (!this.open) {
                this.open = true
                return
              }

              switch (startIndex) {
                case this.options.length - 1: return

                default:
                  return this.optionsElement.hoverOption(startIndex + 1)
              }
            }

            if (this.selectedIndex === this.length - 1) {
              return
            }

            if (this.selectedOptions.length === 1) {
              return this.optionsElement.select(this.selectedOptions[this.selectedOptions.length - 1].index + 1, evt.shiftKey, null, null, this.selectedIndex)
            }

            if (!evt.shiftKey) {
              if (this.selectedOptions.length === 1) {
                return this.optionsElement.select(this.selectedIndex + 1)
              }


            }

            if (this.optionsElement.selectionStartIndex > this.selectedIndex) {
              return this.optionsElement.deselect(this.selectedIndex)
            }

            return this.optionsElement.select(this.selectedOptions[this.selectedOptions.length - 1].index + 1, evt.shiftKey)

          default: return
        }
      },

      blurHandler: evt => this.removeEventListener('keydown', _.get(this).arrowKeydownHandler),

      bodyMousedownHandler: evt => {
        if (evt.target === this || this.contains(evt.target)) {
          return
        }

        this.open = false
      },

      focusHandler: evt => this.addEventListener('keydown', _.get(this).arrowKeydownHandler),

      middleware: {
        beforeChange: null,
        afterChange: null
      },

      optionSelectionHandler: evt => {
        evt.stopPropagation()
        let { afterChange } = _.get(this).middleware

        if (this.open) {
          this.removeAttribute('open')
        }

        _.get(this).emit('options.selected', evt.detail.options, this.selectedOptionsElement)

        if (afterChange && typeof afterChange === 'function') {
          afterChange(evt.detail.previous, this.selectedOptions)
        }
      },

      removeOpenListeners: () => {
        document.body.removeEventListener('mousedown', _.get(this).bodyMousedownHandler)
        document.body.removeEventListener('touchcancel', _.get(this).bodyMousedownHandler)
        document.body.removeEventListener('touchend', _.get(this).bodyMousedownHandler)
      },

      stateChangeHandler: evt => {
        let { name, value } = evt.detail

        switch (name) {
          case 'open':
            if (!value) {
              return _.get(this).removeOpenListeners()
            }

            if (this.multiple) {
              console.warn('WARNING <chassis-select multiple> cannot be opened.')
              return this.removeAttribute('open')
            }

            this.optionsElement.unHoverAllOptions()
            return _.get(this).addOpenListeners()

          case 'multiple':
            if (value && this.hasAttribute('open')) {
              this.removeAttribute('open')
            }

            break

          default: return
        }
      },

      throwSizeAttributeWarning: () => {
        console.warn('WARNING <chassis-select> "size" attribute is not supported. Please use CSS to set the height of the options panel instead.')
      },

      toggleHandler: evt => this.open = !this.open
    })
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'placeholder', 'tabindex', 'size']
  }

  get afterChange () {
    return _.get(this).middleware.afterChange
  }

  set afterChange (func) {
    _.get(this).middleware.afterChange = func.bind(this)
  }

  get beforeChange () {
    return _.get(this).middleware.beforeChange
  }

  set beforeChange (func) {
    _.get(this).middleware.beforeChange = func.bind(this)
  }

  get length () {
    return this.options.length
  }

  get selectedIndex () {
    return this.optionsElement ? this.optionsElement.selectedIndex : null
  }

  set selectedIndex (index) {
    if (index < 0) {
      return this.deselectAll()
    }

    this.optionsElement.selectedIndex = index
  }

  get size () {
    _.get(this).throwSizeAttributeWarning()
    return null
  }

  set size (value) {
    _.get(this).throwSizeAttributeWarning()
  }

  get value () {
    if (this.selectedOptions.length === 0) {
      return null
    }

    let selectedOption = this.selectedOptions.item(0)
    return selectedOption ? selectedOption.value || selectedOption.text : null
  }

  add (option, index) {
    this.optionsElement.add(option, index)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'multiple':
        return _.get(this).emit('state.change', {
          name: 'multiple',
          value: this.multiple
        })

      case 'open':
        return _.get(this).emit('state.change', {
          name: 'open',
          value: this.open
        })

      case 'placeholder':
        this.placeholder = newValue

        if (this.selectedOptionsElement) {
          this.selectedOptionsElement.update()
        }

        break

      case 'size':
        return _.get(this).throwSizeAttributeWarning()

      default: return
    }
  }

  checkValidity () {
    return this.sourceElement.checkValidity()
  }

  clear () {
    this.optionsElement.clear()
    this.selectedOptionsElement.clear()
  }

  connectedCallback () {
    this.addEventListener('blur', _.get(this).blurHandler)
    this.addEventListener('focus', _.get(this).focusHandler)
    this.addEventListener('state.change', _.get(this).stateChangeHandler)
    this.addEventListener('toggle', _.get(this).toggleHandler)
    this.addEventListener('options.selected', _.get(this).optionSelectionHandler)

    setTimeout(() => {
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0)
      }

      this.autofocus && this.focus()

      // TEMP
      this.parentNode.parentNode.insertBefore(_.get(this).sourceElement, this.nextSibling)
    }, 0)
  }

  disconnectedCallback () {
    this.removeEventListener('blur', _.get(this).blurHandler)
    this.removeEventListener('focus', _.get(this).focusHandler)
    this.addEventListener('state.change', _.get(this).stateChangeHandler)
    this.removeEventListener('toggle', _.get(this).toggleHandler)
    this.removeEventListener('options.selected', _.get(this).optionSelectionHandler)
  }

  deselectAll () {
    this.optionsElement.deselectAll()
  }

  inject (select, labels) {
    // Prevent re-injections
    if (_.get(this).injected) {
      return
    }

    let selectedOptionsElement = document.createElement('chassis-selected-options')
    selectedOptionsElement.slot = 'selectedoptions'

    let optionsElement = document.createElement('chassis-options')
    optionsElement.slot = 'options'

    Object.assign(_.get(this), {
      sourceElement: select,
      optionsElement,
      selectedOptionsElement,
      labels
    })

    this.appendChild(_.get(this).selectedOptionsElement)
    this.appendChild(_.get(this).optionsElement)

    if (select.children.length > 0) {
      if (!this.multiple) {
        for (let option of select.children) {
          if (option.index !== select.selectedIndex) {
            option.removeAttribute('selected')
          }
        }
      }

      this.optionsElement.addChildren(select.children)

      if (!this.multiple) {
        this.selectedOptionsElement.add(this.optionsElement.options[this.selectedIndex])
      }
    }

    _.get(this).injected = true
  }

  item (index) {
    return this.optionsElement.item(index)
  }

  namedItem (id) {
    return this.optionsElement.namedItem(id)
  }

  /**
   * method querySelector
   * @param  {string} selector
   * @return {HTMLElement}
   * @override
   */
  querySelector (selector) {
    if (selector !== ':checked') {
      return super.querySelector(selector)
    }

    return this.selectedOptions.length > 0 ? this.selectedOptions[0] : null
  }

  /**
   * method querySelectorAll
   * @param  {string} selector
   * @return {NodeList}
   * @override
   */
  querySelectorAll (selector) {
    if (selector !== ':checked') {
      return super.querySelectorAll(selector)
    }

    return this.optionsElement.querySelectorAll('[selected]')
  }

  remove (index = null) {
    if (index === null) {
      return super.remove()
    }

    this.optionsElement.removeOptionByIndex(index)
  }

  /**
   * @method select
   * @param  {Number || Array} index
   */
  // select (index) {
  //   this.optionsElement.select(index)
  // }

  setCustomValidity (string) {
    this.sourceElement.setCustomValidity(string)
  }

  [Symbol.toStringTag] () {
    return 'ChassisSelectElement'
  }
}

customElements.define('chassis-select', ChassisSelectElement)
