class ChassisCycle extends HTMLElement {
  constructor () {
    super()

    _private.get(this).dummyEl = document.createElement('div')

    _private.get(this).hideChild = child => {
      child.removeAttribute('active', '')
    }

    _private.get(this).showChild = child => {
      _private.get(this).hideChild(this.children.item(this.activeIndex || 0))
      child.setAttribute('active', '')
    }

    _private.get(this).showChildByIndex = index => {
      if (this.activeIndex === index || index >= this.children.length || index < 0) {
        return
      }

      _private.get(this).showChild(this.children.item(index))
    }

    _private.get(this).showChildBySelector = query => {
      let nodes = this.querySelectorAll(query)

      if (!nodes.length) {
        return
      }

      if (nodes.length > 1) {
        console.warn(`<chassis-cycle> found multiple nodes matching "${query}". Displaying first result...`)
      }

      _private.get(this).showChild(nodes.item(0))
    }

    _private.get(this).replaceDeprecatedAttributes = child => {
      if (child.hasAttribute('selected')) {
        console.warn(`<chassis-cycle> 'selected' attribute is deprecated. Please use 'active' instead.`);
        child.removeAttribute('selected')
        child.setAttribute('active', '')
      }
    }
  }

  static get observedAttributes () {
    return []
  }

  /**
   * @typedef {Object} ActiveElementProperties
   * @property {HTMLElement} element The currently active page.
   * @property {Number} index The zero-based index of the currently active page.
   * @property {Number} page The 1-based index of the currently active page.
   */

  /**
   * @property active
   * Information about the currently active page.
   * @return {ActiveElementProperties}
   */
  get active () {
    return {
      element: this.activeElement,
      index: this.activeIndex,
      page: this.activePage
    }
  }

  /**
   * @property activeElement
   * The currently active page.
   * @return {HTMLElement}
   */
  get activeElement () {
    return this.activeIndex === null ? null : this.children.item(this.activeIndex)
  }

  /**
   * @property activePage
   * The 1-based index of the currently active page.
   * @return {Number}
   */
  get activePage () {
    return this.activeIndex + 1
  }

  /**
   * @property activeIndex
   * The zero-based index of the currently active page.
   * @return {Number}
   */
  get activeIndex () {
    for (let index in this.children) {
      if (!this.children.hasOwnProperty(index)) {
        continue
      }

      let child = this.children.item(index)

      if (typeof child !== 'object') {
        continue
      }

      if (child.hasAttribute('active')) {
        return parseInt(index)
      }
    }

    return null
  }

  /**
   * @property selected
   * The current active section.
   * @return {HTMLElement}
   * @deprecated
   */
  get selected () {
    console.warn(`<chassis-cycle> 'selected' property is deprecated. Please use 'activeElement' instead.`);
    return this.activeElement
  }

  /**
   * @property selectedIndex
   * The index number of the current active section.
   * @return {Number}
   * @deprecated
   */
  get selectedIndex () {
    console.warn(`<chassis-cycle> 'selectedIndex' property is deprecated. Please use 'activeIndex' for zero-based indexing or 'activePage' for 1-based indexing instead.`);
    return this.activePage
  }

  connectedCallback () {
    let observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        let { addedNodes, removedNodes, type } = mutation

        switch (type) {
          case 'childList':
            if (removedNodes.length > 0 && !this.activeElement) {
              return this.previous()
            }

            if (addedNodes.length === 0 || addedNodes.item(0).nodeType !== Node.ELEMENT_NODE) {
              return
            }

            let node = addedNodes.item(0)

            if (node.nodeType !== Node.ELEMENT_NODE) {
              return
            }

            _private.get(this).replaceDeprecatedAttributes(node)

            if (node.hasAttribute('active')) {
              return this.show(node)
            }

          default: return
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false
    })

    setTimeout(() => {
      for (let index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue
        }

        let child = this.children.item(index)

        if (typeof child !== 'object') {
          continue
        }

        _private.get(this).replaceDeprecatedAttributes(child)
      }
    }, 0)
  }

  /**
   * @method hideActive
   * Deactivate the currently active page.
   * @deprecated
   */
  hide (child) {
    console.warn(`<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`);
    _private.get(this).hideChild(child)
  }

  /**
   * @method hideActive
   * Deactivate the currently active page.
   * @deprecated
   */
  hideActive () {
    console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`);
    _private.get(this).hideChild(this.activeElement)
  }

  /**
   * @method hideAll
   * Deactivate all pages.
   */
  hideAll () {
    for (let index in this.children) {
      if (!this.children.hasOwnProperty(index)) {
        continue
      }

      let child = this.children.item(index)

      if (typeof child !== 'object') {
        continue
      }

      _private.get(this).hideChild(child)
    }
  }

  /**
   * @method insertAdjacentHTML
   * Override this.prototype.insertAdjacentHTML and replace with
   * appendChild() or insertBefore()
   * This is done because of bugs with insertAdjacentHTML() on web components
   * in Firefox and IE11.
   * @override
   */
  insertAdjacentHTML (position, text) {
    switch (position) {
      case 'beforebegin':
      case 'afterend':
        return HTMLElement.prototype.insertAdjacentHTML.call(this, position, text)

      default:
        _private.get(this).dummyEl.insertAdjacentHTML(position, text)
        let node = _private.get(this).dummyEl.children.item(0)

        while (_private.get(this).dummyEl.firstChild) {
          _private.get(this).dummyEl.removeChild(_private.get(this).dummyEl.firstChild)
        }

        return position === 'beforeend' ? this.appendChild(node) : this.insertBefore(node, this.firstElementChild)
    }
  }

  /**
   * @method insertAdjacentElement
   * Override this.prototype.insertAdjacentElement and replace with
   * appendChild() or insertBefore()
   * This is done because of bugs with insertAdjacentElement() on web components
   * in Firefox and IE11.
   * @override
   */
  insertAdjacentElement (position, node) {
    switch (position) {
      case 'beforeend':
        return this.appendChild(node)

      case 'afterbegin':
        return this.insertBefore(node, this.firstElementChild)

      default:
        return HTMLElement.prototype.insertAdjacentElement.call(this, position, node)
    }
  }

  /**
   * @method first
   * A helper method to display the first child element.
   */
  first () {
    this.show(1)
  }

  /**
   * @method last
   * A helper method to display the last child element.
   */
  last () {
    this.show(this.children.length)
  }

  /**
   * @method next
   * Deactivate the currently active child element and activate the one
   * immediately adjacent to it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  next (callback) {
    this.show(this.activePage === this.children.length ? 1 : this.activePage + 1)
    callback && callback(this.activeElement)
  }

  /**
   * @method previous
   * Deactivate the currently active child element and activate the one
   * immediately preceding it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  previous (callback) {
    this.show(this.activePage === 1 ? this.children.length : this.activePage - 1)
    callback && callback(this.activeElement)
  }

  /**
   * @method show
   * Deactive the currently active element activate a different one.
   * @param {number | string | HTMLElement} query
   * 1-based index,
   * Element selector string, or
   * HTMLElement to make active
   */
  show (query) {
    if (!query) {
      return _private.get(this).showChildByIndex(0)
    }

    switch ((typeof query).toLowerCase()) {
      case 'number':
        return _private.get(this).showChildByIndex(query - 1)

      case 'string':
        return isNaN(parseInt(query))
          ? _private.get(this).showChildBySelector(query)
          : _private.get(this).showChildByIndex(parseInt(query) - 1)

      default:
        return query instanceof HTMLElement
          ? _private.get(this).showChild(query)
          : console.error(`<chassis-cycle>: Invalid query "${query}"`)
    }
  }
}

customElements.define('chassis-cycle', ChassisCycle)
