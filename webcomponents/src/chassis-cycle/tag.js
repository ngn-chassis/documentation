class ChassisCycleElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.addPrivateProperties({
      dummyEl: document.createElement('div'),

      getChildIndex: child => [].slice.call(this.children).indexOf(child),

      getNextSelectedChild: child => {
        let nextIndex = this.PRIVATE.getChildIndex(child)

        return {
          element: child,
          index: nextIndex
        }
      },

      hideChild: child => child.removeAttribute('selected', ''),

      beforeChangeCallback: (child, previousSelection) => {
        if (this.selectedIndex >= 0) {
          this.PRIVATE.hideChild(this.children.item(this.selectedIndex || 0))
        }

        child.setAttribute('selected', '')

        this.dispatchEvent(new CustomEvent('change', {
          bubbles: true,
          cancelable: true,
          composed: true,

          detail: {
            previousSelection,
            currentSelection: this.selected
          }
        }))
      },

      showChild: child => {
        let {
          beforeChangeCallback,
          getNextSelectedChild,
          hideChild
        } = this.PRIVATE

        let previousSelection = this.selected
        let nextSelection = getNextSelectedChild(child)

        let beforechangeHandler = evt => {
          this.removeEventListener('beforechange', beforechangeHandler)

          if (evt.defaultPrevented) {
            return
          }

          beforeChangeCallback(child, previousSelection)
        }

        this.addEventListener('beforechange', beforechangeHandler)

        let beforechangeEvent = new CustomEvent('beforechange', {
          bubbles: true,
          cancelable: true,
          composed: true,

          detail: {
            currentSelection: this.selected,
            nextSelection,
            next () {
              if (!this.defaultPrevented) {
                return console.warn(`<chassis-cycle> Calling "next()" in "beforechange" event will not do anything unless the event's default behavior is canceled. (use Event.preventDefault())`)
              }

              beforeChangeCallback(child, previousSelection)
            }
          }
        })

        beforechangeEvent.detail.next = beforechangeEvent.detail.next.bind(beforechangeEvent)
        this.dispatchEvent(beforechangeEvent)
      },

      showChildByIndex: index => {
        if (this.selectedIndex === index || index >= this.children.length || index < 0) {
          return
        }

        this.PRIVATE.showChild(this.children.item(index))
      },

      showChildBySelector: query => {
        let nodes = this.querySelectorAll(query)

        if (!nodes.length) {
          return
        }

        if (nodes.length > 1) {
          console.warn(`<chassis-cycle> found multiple nodes matching "${query}". Displaying first result...`)
        }

        this.PRIVATE.showChild(nodes.item(0))
      }
    })
  }

  static get observedAttributes () {
    return ['mode']
  }

  /**
   * @typedef {Object} SelectedElementProperties
   * @property {HTMLElement} element The currently selected page.
   * @property {Number} index The zero-based index of the currently selected page.
   */

  /**
   * @property selected
   * Information about the currently selected page.
   * @return {SelectedElementProperties}
   */
  get selected () {
    return {
      element: this.selectedElement,
      index: this.selectedIndex
    }
  }

  /**
   * @property selectedElement
   * The currently selected page.
   * @return {HTMLElement}
   */
  get selectedElement () {
    return this.selectedIndex === null ? null : this.children.item(this.selectedIndex)
  }

  /**
   * @property selectedIndex
   * The zero-based index of the currently selected page.
   * @return {Number}
   */
  get selectedIndex () {
    for (let index in this.children) {
      if (!this.children.hasOwnProperty(index)) {
        continue
      }

      let child = this.children.item(index)

      if (typeof child !== 'object') {
        continue
      }

      if (child.hasAttribute('selected')) {
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
            if (removedNodes.length > 0 && !this.selectedElement) {
              return this.previous()
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

    setTimeout(() => {
      for (let index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue
        }

        let child = this.children.item(index)

        if (typeof child !== 'object') {
          continue
        }

        if (child !== this.selectedElement) {
          this.PRIVATE.hideChild(child)
        }
      }
    }, 0)
  }

  /**
   * @method hide
   * Deactivate a page.
   * @deprecated
   */
  hide (child) {
    console.warn(`<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage selected elements.`);
    this.PRIVATE.hideChild(child)
  }

  /**
   * @method hideActive
   * Deactivate the currently selected page.
   * @deprecated
   */
  hideActive () {
    console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage selected elements.`);
    this.PRIVATE.hideChild(this.selectedElement)
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

      this.PRIVATE.hideChild(child)
    }
  }

  indexOf (child) {
    return this.PRIVATE.getChildIndex(child)
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
        let { dummyEl } = this.PRIVATE

        dummyEl.insertAdjacentHTML(position, text)
        let node = dummyEl.children.item(0)

        while (dummyEl.firstChild) {
          dummyEl.removeChild(dummyEl.firstChild)
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
    this.show(0)
  }

  /**
   * @method last
   * A helper method to display the last child element.
   */
  last () {
    this.show(this.children.length - 1)
  }

  /**
   * @method next
   * Deactivate the currently selected child element and activate the one
   * immediately adjacent to it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  next (callback) {
    this.show(this.selectedIndex === this.children.length - 1 ? 0 : this.selectedIndex + 1)
    callback && callback(this.selectedElement)
  }

  /**
   * @method previous
   * Deactivate the currently selected child element and activate the one
   * immediately preceding it.
   * @param {function} callback
   * Executed when the operation is complete.
   */
  previous (callback) {
    this.show(this.selectedIndex === 0 ? this.children.length - 1 : this.selectedIndex - 1)
    callback && callback(this.selectedElement)
  }

  /**
   * @method show
   * Deselect the currently selected element and select a different one.
   * @param {number | string | HTMLElement} query
   * 1-based index,
   * Element selector string, or
   * HTMLElement to select
   */
  show (query) {
    if (query === null) {
      if (!this.selectedIndex) {
        this.PRIVATE.showChildByIndex(0)
      }

      return
    }

    switch ((typeof query).toLowerCase()) {
      case 'number':
        return this.PRIVATE.showChildByIndex(query)

      case 'string':
        return isNaN(parseInt(query))
          ? this.PRIVATE.showChildBySelector(query)
          : this.PRIVATE.showChildByIndex(parseInt(query))

      default:
        return query instanceof HTMLElement
          ? this.PRIVATE.showChild(query)
          : console.error(`<chassis-cycle>: Invalid query "${query}"`)
    }
  }
}

customElements.define('chassis-cycle', ChassisCycleElement)
