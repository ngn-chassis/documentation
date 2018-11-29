class ChassisCycleElement extends HTMLElement {
  constructor () {
    super()

    _.get(this).addPrivateProperties({
      dummyEl: document.createElement('div'),

      middleWare: {
        beforeChange: null,
        afterChange: null
      },

      getChildIndex: child => [].slice.call(this.children).indexOf(child),

      getNextSelectedChild: child => {
        let nextIndex = _.get(this).getChildIndex(child)

        return {
          element: child,
          index: nextIndex
        }
      },

      hideChild: child => child.removeAttribute('selected', ''),

      showChild: child => {
        let {
          getChildIndex,
          getNextSelectedChild,
          hideChild,
          middleWare
        } = _.get(this)

        let previous = this.selected
        let next = getNextSelectedChild(child)

        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            selected: this.selected,
            next
          }
        }))

        let completeChange = () => {
          if (this.selectedIndex >= 0) {
            hideChild(this.children.item(this.selectedIndex || 0))
          }

          child.setAttribute('selected', '')

          this.dispatchEvent(new CustomEvent('changed', {
            detail: {
              previous,
              selected: this.selected
            }
          }))

          if (middleWare.afterChange && typeof middleWare.afterChange === 'function') {
            middleWare.afterChange(previous, this.selected)
          }
        }

        if (middleWare.beforeChange && typeof middleWare.beforeChange === 'function') {
          middleWare.beforeChange(this.selected, next, completeChange)
        } else {
          completeChange()
        }
      },

      showChildByIndex: index => {
        if (this.selectedIndex === index || index >= this.children.length || index < 0) {
          return
        }

        _.get(this).showChild(this.children.item(index))
      },

      showChildBySelector: query => {
        let nodes = this.querySelectorAll(query)

        if (!nodes.length) {
          return
        }

        if (nodes.length > 1) {
          console.warn(`<chassis-cycle> found multiple nodes matching "${query}". Displaying first result...`)
        }

        _.get(this).showChild(nodes.item(0))
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

  set beforeChange (func) {
    _.get(this).middleWare.beforeChange = func.bind(this)
  }

  set afterChange (func) {
    _.get(this).middleWare.afterChange = func.bind(this)
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
          _.get(this).hideChild(child)
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
    _.get(this).hideChild(child)
  }

  /**
   * @method hideActive
   * Deactivate the currently selected page.
   * @deprecated
   */
  hideActive () {
    console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage selected elements.`);
    _.get(this).hideChild(this.selectedElement)
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

      _.get(this).hideChild(child)
    }
  }

  indexOf (child) {
    return _.get(this).getChildIndex(child)
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
        _.get(this).dummyEl.insertAdjacentHTML(position, text)
        let node = _.get(this).dummyEl.children.item(0)

        while (_.get(this).dummyEl.firstChild) {
          _.get(this).dummyEl.removeChild(_.get(this).dummyEl.firstChild)
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
        _.get(this).showChildByIndex(0)
      }

      return
    }

    switch ((typeof query).toLowerCase()) {
      case 'number':
        return _.get(this).showChildByIndex(query)

      case 'string':
        return isNaN(parseInt(query))
          ? _.get(this).showChildBySelector(query)
          : _.get(this).showChildByIndex(parseInt(query))

      default:
        return query instanceof HTMLElement
          ? _.get(this).showChild(query)
          : console.error(`<chassis-cycle>: Invalid query "${query}"`)
    }
  }
}

customElements.define('chassis-cycle', ChassisCycleElement)
