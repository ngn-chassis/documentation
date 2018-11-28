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

      getNextActiveChild: child => {
        let nextIndex = _.get(this).getChildIndex(child)

        return {
          element: child,
          index: nextIndex,
          page: nextIndex + 1
        }
      },

      hideChild: child => child.removeAttribute('active', ''),

      showChild: child => {
        let {
          getChildIndex,
          getNextActiveChild,
          hideChild,
          middleWare
        } = _.get(this)

        let previous = this.active
        let next = getNextActiveChild(child)

        this.dispatchEvent(new CustomEvent('page-change', {
          detail: {
            active: this.active,
            next
          }
        }))

        let completeChange = () => {
          if (this.activeIndex >= 0) {
            hideChild(this.children.item(this.activeIndex || 0))
          }

          child.setAttribute('active', '')

          this.dispatchEvent(new CustomEvent('page-changed', {
            detail: {
              previous,
              active: this.active
            }
          }))

          if (middleWare.afterChange && typeof middleWare.afterChange === 'function') {
            middleWare.afterChange(previous, this.active)
          }
        }

        if (middleWare.beforeChange && typeof middleWare.beforeChange === 'function') {
          middleWare.beforeChange(this.active, next, completeChange)
        } else {
          completeChange()
        }
      },

      showChildByIndex: index => {
        if (this.activeIndex === index || index >= this.children.length || index < 0) {
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
      },

      replaceDeprecatedAttributes: child => {
        if (child.hasAttribute('selected')) {
          console.warn(`<chassis-cycle> 'selected' attribute is deprecated. Please use 'active' instead.`);
          child.removeAttribute('selected')

          _.get(this).showChild(child)
        }
      }
    })
  }

  static get observedAttributes () {
    return ['mode']
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

            _.get(this).replaceDeprecatedAttributes(node)

            break
            // return node.hasAttribute('active') ? _.get(this).showChild(node) : _.get(this).hideChild(node)

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

        _.get(this).replaceDeprecatedAttributes(child)

        if (child !== this.activeElement) {
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
    console.warn(`<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`);
    _.get(this).hideChild(child)
  }

  /**
   * @method hideActive
   * Deactivate the currently active page.
   * @deprecated
   */
  hideActive () {
    console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`);
    _.get(this).hideChild(this.activeElement)
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

  pageNumberOf (child) {
    return _.get(this).getChildIndex(child) + 1
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
      return _.get(this).showChildByIndex(0)
    }

    switch ((typeof query).toLowerCase()) {
      case 'number':
        return _.get(this).showChildByIndex(query - 1)

      case 'string':
        return isNaN(parseInt(query))
          ? _.get(this).showChildBySelector(query)
          : _.get(this).showChildByIndex(parseInt(query) - 1)

      default:
        return query instanceof HTMLElement
          ? _.get(this).showChild(query)
          : console.error(`<chassis-cycle>: Invalid query "${query}"`)
    }
  }
}

customElements.define('chassis-cycle', ChassisCycleElement)
