class ChassisSelect extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {

  }

  _inject (select) {
    select.slot = 'select'
    this.appendChild(select)

    this.menu = select
    this.options = {}

    for (let child of select.children) {
      switch (child.nodeName) {
        case 'OPTION':
          this.addOption(this._generateChassisOption(child))
          break

        case 'OPTGROUP':
          this.appendChild(this._generateChassisOptgroup(child))
          break

        default:
          console.log('OTHER');
          console.log(child);
      }
    }
  }

  addOptions (options) {
    options.forEach((option) => this.addOption(option))
  }

  addOption (data, dest = this) {
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
