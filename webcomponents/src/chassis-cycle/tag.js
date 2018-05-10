class ChassisCycle extends HTMLElement {
  constructor () {
    super()

    _private.get(this).hideChild = child => {
      child.removeAttribute('active', '')
    }

    _private.get(this).showChild = child => {
      child.setAttribute('active', '')
    }

    _private.get(this).showChildByIndex = index => {
      if (this.activeIndex === index) {
        return
      }

      if (index >= this.children.length) {
        return
      }

      // TODO: Handle backward and forward indexes. i.e.
      // '-2' or '+3'

      let current = this.children.item(this.activeIndex)

      _private.get(this).hideChild(current)
      _private.get(this).showChild(this.children.item(index))
    }
  }

  static get observedAttributes () {
    return []
  }

  get active () {
    return {
      element: this.activeElement,
      index: this.activeIndex
    }
  }

  get activeElement () {
    return this.activeIndex === null ? null : this.children.item(this.activeIndex)
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
              this.previous()
            }

            break

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

  /**
   * @method goto
   * Deactive the currently active element, unless query matches it, and
   * Activate a different one
   * @param {number | string | HTMLElement} query
   * 1-based index (i.e. first element index === 1),
   * Element selector string, or
   * HTMLElement to make active
   */
  goto (query) {
    switch ((typeof query).toLowerCase()) {
      case 'number':
        return _private.get(this).showChildByIndex(query)

      case 'string':
        return isNaN(parseInt(query))
          ? _private.get(this).showElementBySelector(query)
          : _private.get(this).showChildByIndex(query)

      default:
        if (query instanceof HTMLElement) {
          return _private.get(this).showElement(query)
        }
    }

    // TODO: Throw error
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
    this.goto(0)
  }

  last () {
    this.goto(this.children.length - 1)
  }

  /**
   * @method next
   * Deactivate the currently active child element and activate the one
   * adjacent to it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  next (callback) {
    let currentIndex = this.activeIndex
    this.goto(currentIndex === this.children.length - 1 ? 0 : currentIndex + 1)
    callback && callback(this.children.item(currentIndex))
  }

  /**
   * @method previous
   * Deactivate the currently active child element and activate the one
   * immediately preceding it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  previous (callback) {
    let currentIndex = this.activeIndex
    this.goto(currentIndex === 0 ? this.children.length - 1 : currentIndex - 1)
    callback && callback(this.children.item(currentIndex))
  }
}

customElements.define('chassis-cycle', ChassisCycle)
