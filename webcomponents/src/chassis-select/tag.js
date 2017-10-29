class ChassisSelect extends HTMLElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
    return ['open']
  }

  connectedCallback () {

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
    console.log('open');
  }

  close () {
    console.log('close');
  }

  _inject (select) {
    select.slot = 'select'
    this.appendChild(select)

    this.select = select
    this.options = {}

    let menu = document.createElement('div')
    menu.classList.add('options')
    menu.slot = 'menu'
    this.menu = menu

    this.appendChild(menu)

    for (let child of select.children) {
      switch (child.nodeName) {
        case 'OPTION':
          if (child.hasAttribute('title')) {
            this.addTitle(this._generateChassisSelectTitle(child))
          } else {
            this.addOption(this._generateChassisOption(child))
          }
          break

        case 'OPTGROUP':
          this.addOptgroup(this._generateChassisOptgroup(child))
          break

        default:
          console.warn(`${child.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`)
          break
      }
    }

    this._applyListeners()
  }

  addOptions (options) {
    options.forEach((option) => this.addOption(option))
  }

  addOption (data, dest = this.menu) {
    if (!customElements.get('chassis-option')) {
      console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`)
      return
    }

    let option = document.createElement('chassis-option')
    option.dataset['optionId'] = data.id
    option.innerHTML = data.innerHTML
    option.slot = 'options'

    for (let attr in data.attributes) {
      option.setAttribute(attr, data.attributes[attr])
    }

    dest.appendChild(option)
  }

  addOptgroup (optgroup, dest = this.menu) {
    let label = document.createElement('div')
    label.classList.add('optgroup-label')
    label.innerHTML = optgroup.getAttribute('label')

    dest.appendChild(label)
    dest.appendChild(optgroup)
  }

  addTitle (title) {
    this.insertAdjacentElement('afterbegin', title)
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

  _generateChassisSelectTitle (option) {
    let title = document.createElement('chassis-select-title')
    title.innerHTML = option.innerHTML
    title.slot = 'title'

    return title
  }

  _generateChassisOption (option) {
    let id = this._generateGuid()
    this.options[id] = option

    let label = option.getAttribute('label')

    let fauxOption = {
      id,
      attributes: {},
      innerHTML: label && label.trim() !== '' ? label : option.innerHTML
    }

    for (let attr of option.attributes) {
      fauxOption.attributes[attr.name] = attr.value
    }

    return fauxOption
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
      this.addOption(this._generateChassisOption(option), fauxOptgroup)
    }

    return fauxOptgroup
  }
}

customElements.define('chassis-select', ChassisSelect)
