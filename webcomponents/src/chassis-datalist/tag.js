class ChassisDatalist extends HTMLElement {
  constructor () {
    super()

    _private.get(this).addReadOnlyProp('options')

    _private.get(this).options = []

    _private.get(this).arrowKeydownHandler = (evt) => {
      switch (evt.keyCode) {
        case 38:
          evt.preventDefault()
          console.log('select previous option');
          break

        case 40:
          evt.preventDefault()
          console.log('select next option');
          break

        default:
          return
      }
    }

    _private.get(this).bodyClickHandler = (evt) => {
      if (evt.target === this || this.contains(evt.target)) {
        return
      }

      this.removeAttribute('open')
    }

    _private.get(this).generateOptionObject = (optionEl) => {
      if (!customElements.get('chassis-option')) {
        console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`)
        return
      }

      let obj = {
        id: _private.get(this).generateGuid(),
        attributes: {},
        sourceElement: optionEl
      }

      for (let attr of optionEl.attributes) {
        obj.attributes[attr.name] = attr.value
      }

      return obj
    }
  }

  static get observedAttributes () {
    return ['autofocus', 'disabled', 'name', 'tabindex']
  }

  connectedCallback () {
    console.log(_private);
  }

  addChildren (children) {
    for (let child of children) {
      this.addOption(child instanceof HTMLElement ? _private.get(this).generateOptionObject(child) : child)
    }
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    attr = attr.toLowerCase()

    if (newValue === oldValue) {
      return
    }

    switch (attr) {
      case 'autofocus':
      case 'disabled':
        console.log(attr);
        // _private.get(this).handleBooleanAttributeChange(attr, newValue)
        break

      case 'name':
        console.log(attr);
        // _private.get(this).handleAttributeChange(attr, newValue)
        break
    }
  }

  inject (datalist) {
    _private.get(this).sourceEl = datalist
    _private.get(this).optionsEl = document.createElement('chassis-options')

    _private.get(this).optionsEl.slot = 'options'
    this.appendChild(_private.get(this).optionsEl)

    this.addChildren(datalist.options)
  }
}

customElements.define('chassis-datalist', ChassisDatalist)
