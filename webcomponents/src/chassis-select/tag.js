class ChassisSelect extends HTMLElement {
  constructor () {
    super()

    this._options = new Map()
    this._title = ''
    this._selectEledOption = null

    this._bodyClickHandler = (evt) => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
    }
  }

  static get observedAttributes () {
    return ['open']
  }

  get options () {
    return Array.from(this._options.values())
  }

  get sourceElement () {
    return this._selectEl
  }

  connectedCallback () {
    setTimeout(() => this._applyListeners(), 0)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    switch (attr.toLowerCase()) {
      case 'open':
        if (this.hasAttribute('open')) {
          this.open()
        } else {
          this.close()
        }
        break;
      default:

    }
  }

  open () {
    // Force redraw in Safari
    // this.menuContainer.style.display = 'none'
    // this.menuContainer.style.display = this.menuContainerBoxModel
    // this.menuContainer.removeAttribute('style')

    document.body.addEventListener('click', this._bodyClickHandler)
  }

  close () {
    // Force redraw in Safari
    // this.menuContainer.style.display = 'none'
    // this.menuContainer.removeAttribute('style')

    document.body.removeEventListener('click', this._bodyClickHandler)
  }

  _inject (select) {
    this._selectEl = select

    this._titleEl = document.createElement('chassis-select-title')
    this._titleEl.slot = 'title'
    this.appendChild(this._titleEl)

    this._optionsEl = document.createElement('chassis-options')
    this._optionsEl.slot = 'options'
    this.appendChild(this._optionsEl)

    this.addChildren(select.children)

    this._titleEl.innerHTML = this.options[0].displayElement.innerHTML
  }

  addChildren (children) {
    for (let child of children) {
      switch (child.nodeName) {
        case 'OPTION':
          // if (child.hasAttribute('title')) {
            // this.addTitle(this._generateChassisSelectTitle(child))
          // } else {
            this.addOption(this._generateOptionObject(child))
          // }
          break

        // case 'OPTGROUP':
        //   this.addOptgroup(this._generateChassisOptgroup(child))
        //   break

        default:
          console.warn(`${child.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`)
          break
      }
    }
  }

  addOption (option, dest = this._optionsEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    let label = option.sourceElement.getAttribute('label')
    let chassisOption = document.createElement('chassis-option')

    chassisOption.key = option.id
    chassisOption.innerHTML = label && label.trim() !== '' ? label : option.sourceElement.innerHTML
    chassisOption.sourceElement = option.sourceElement

    dest.appendChild(chassisOption)

    option.displayElement = chassisOption
    this._options.set(option.id, option)
  }

  addOptgroup (optgroup, dest = this._optionsEl) {
    let label = document.createElement('div')
    label.classList.add('optgroup-label')
    label.innerHTML = optgroup.getAttribute('label')

    dest.appendChild(label)
    dest.appendChild(optgroup)
  }

  _applyListeners () {
    this.addEventListener('click', (evt) => {
      if (this.hasAttribute('open')) {
        this.removeAttribute('open')
      } else {
        this.setAttribute('open', '')
      }
    })
  }

  _generateOptionObject (optionEl) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    let obj = {
      id: this._generateGuid(),
      attributes: {},
      sourceElement: optionEl
    }

    for (let attr of optionEl.attributes) {
      obj.attributes[attr.name] = attr.value
    }

    return obj
  }

  _generateGuid (prefix = 'option') {
    let lut = []

    for (let i = 0; i < 256; i++) {
      lut[i] = (i < 16 ? '0' : '') + i.toString(16)
    }

    let d0 = Math.random() * 0xffffffff | 0
    let d1 = Math.random() * 0xffffffff | 0
    let d2 = Math.random() * 0xffffffff | 0
    let d3 = Math.random() * 0xffffffff | 0

    return `${prefix}_` + lut[d0&0xff] + lut[d0>>8&0xff] + lut[d0>>16&0xff] + lut[d0>>24&0xff] + '-' +
      lut[d1&0xff] + lut[d1>>8&0xff] + '-' + lut[d1>>16&0x0f|0x40] + lut[d1>>24&0xff] +'-'+
      lut[d2&0x3f|0x80] + lut[d2>>8&0xff] + '-' + lut[d2>>16&0xff] + lut[d2>>24&0xff] +
      lut[d3&0xff] + lut[d3>>8&0xff] + lut[d3>>16&0xff] + lut[d3>>24&0xff]
  }

  _generateChassisOptgroup (optgroup) {
    if (!customElements.get('chassis-optgroup')) {
      console.error(`chassis-select requires chassis-optgroup. Please include it in this document's <head> element.`)
      return
    }

    let fauxOptgroup = document.createElement('chassis-optgroup')
    fauxOptgroup.id = this._generateGuid('optgroup')

    let label = optgroup.getAttribute('label')

    if (!label || label.trim() === '') {
      console.error('[ERROR] <optgroup> must have a label attribute!')
      return
    }

    fauxOptgroup.setAttribute('label', label)
    fauxOptgroup.slot = 'options'

    let options = optgroup.querySelectorAll('option')

    for (let option of options) {
      this.addOption(this._generateOptionObject(option), fauxOptgroup)
    }

    return fauxOptgroup
  }
}

customElements.define('chassis-select', ChassisSelect)
