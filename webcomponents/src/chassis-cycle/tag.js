class ChassisCycle extends HTMLElement {
  constructor () {
    super()

    _private.get(this).hideChild = child => {
      child.removeAttribute('active', '')
    }

    _private.get(this).showChild = child => {
      _private.get(this).hideChild(this.children.item(this.activeIndex))
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
  }

  static get observedAttributes () {
    return []
  }

  get active () {
    return {
      element: this.activeElement,
      index: this.activeIndex,
      page: this.activePage
    }
  }

  get activeElement () {
    return this.activeIndex === null ? null : this.children.item(this.activeIndex)
  }

  get activePage () {
    return this.activeIndex + 1
  }

  get activeIndex () {
    for (let index in this.children) {
      if (!this.children.hasOwnProperty(index)) {
        continue
      }

      let child = this.children.item(index)

      if (child.hasAttribute('active')) {
        return parseInt(index)
      }
    }

    return null
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

            if (addedNodes.item(0).hasAttribute('active')) {
              return this.show(addedNodes.item(0))
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
  }

  hideAll () {
    for (let child of this.children) {
      child.removeAttribute('active')
    }
  }

  /**
   * @method first
   * A helper method to display the first element.
   */
  first () {
    this.show(1)
  }

  last () {
    this.show(this.children.length)
  }

  /**
   * @method next
   * Deactivate the currently active child element and activate the one
   * adjacent to it.
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
   * Deactive the currently active element, unless query matches it, and
   * Activate a different one
   * @param {number | string | HTMLElement} query
   * index,
   * Element selector string, or
   * HTMLElement to make active
   */
  show (query) {
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
