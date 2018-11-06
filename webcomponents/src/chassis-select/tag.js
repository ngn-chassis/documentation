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
      'type',
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
      title: '',

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

            return this.optionsElement.select(this.hoveredIndex, evt.shiftKey, evt.ctrlKey, evt.metaKey)

          case 38:
          case 'ArrowUp':
            evt.preventDefault()

            if (!this.multiple && !this.open) {
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

            break

          case 40:
          case 'ArrowDown':
            evt.preventDefault()

            if (!this.multiple && !this.open) {
              this.open = true
              return
            }

            switch (startIndex) {
              case this.options.length - 1: return

              default:
                return this.optionsElement.hoverOption(startIndex + 1)
            }

            break

          default: return
        }
      },

      bodyClickHandler: evt => {
        if (evt.target === this || this.contains(evt.target)) {
          return
        }

        this.open = false
      }
    })
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'tabindex']
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
        if (newValue && this.hasAttribute('open')) {
          this.removeAttribute('open')
        }

        if (!newValue && this.selectedOptions) {
          let index = this.selectedIndex
          this.deselectAll()
          this.select(index)
        }

        break

      case 'open':
        if (!this.open) {
          document.body.removeEventListener('click', _.get(this).bodyClickHandler)
          document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler)
          document.body.removeEventListener('touchend', _.get(this).bodyClickHandler)
          return
        }

        if (this.multiple) {
          console.warn('WARNING <chassis-select multiple> cannot be opened.')
          return this.removeAttribute('open')
        }

        document.body.addEventListener('click', _.get(this).bodyClickHandler)
        document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler)
        document.body.addEventListener('touchend', _.get(this).bodyClickHandler)
        break
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
    this.addEventListener('focus', evt => this.addEventListener('keydown', _.get(this).arrowKeydownHandler))
    this.addEventListener('blur', evt => this.removeEventListener('keydown', _.get(this).arrowKeydownHandler))
    document.body.addEventListener('mouseup', evt => this.optionsElement.mousedown = false)

    setTimeout(() => {
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0)
      }

      this.autofocus && this.focus()

      this.parentNode.parentNode.insertBefore(_.get(this).sourceElement, this.nextSibling)
      _.get(this).sourceElement.addEventListener('mousedown', evt => {
        console.log(evt);
      })
    }, 0)
  }

  deselectAll () {
    this.optionsElement.deselectAll()
  }

  inject (select, labels) {
    Object.assign(_.get(this), {
      sourceElement: select,
      optionsElement: document.createElement('chassis-options'),
      selectedOptionsElement: document.createElement('chassis-selected-options'),
      labels
    })

    this.placeholder = this.getAttribute('placeholder')

    this.optionsElement.parent = this
    this.selectedOptionsElement.parent = this

    this.selectedOptionsElement.slot = 'selectedoptions'
    this.appendChild(this.selectedOptionsElement)

    this.optionsElement.slot = 'options'
    this.appendChild(this.optionsElement)

    if (select.children.length > 0) {
      this.optionsElement.addChildren(select.children)
      this.select(this.selectedIndex)
    } else {
      this.deselectAll()
    }
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
  select (index) {
    this.optionsElement.select(index)
  }

  setCustomValidity (string) {
    this.sourceElement.setCustomValidity(string)
  }

  [Symbol.toStringTag] () {
    return 'ChassisSelectElement'
  }
}

customElements.define('chassis-select', ChassisSelectElement)
