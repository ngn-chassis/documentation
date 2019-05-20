class GRegistry extends NGNX.VIEW.Registry {
  constructor (cfg) {
    super(cfg)

    Object.defineProperties(this, {
      vDOMs: NGN.privateconst(new Map()),

      createDOMObject: NGN.privateconst(({
        tag = null,
        attributes = null,
        on = null,
        component = null,
        children = []
      }) => ({
        tag,
        attributes,
        on,
        component,
        children: children.filter(Boolean)
      })),

      parseElement: NGN.privateconst(element => this.createDOMObject({
        tag: element.localName,

        attributes: [...element.attributes].reduce((result, attribute) => {
          result[attribute.name] = attribute.value
          return result
        }, {}),

        children: [...element.childNodes].map(child => {
          switch (child.nodeType) {
            case 1: return this.parseElement(child)
            case 3: return child.data
            default: return null
          }
        })
      })),

      // TODO: Handle component creation and management
      createNode: NGN.privateconst(node => {
        if (typeof node === 'string') {
          return document.createTextNode(node)
        }

        let element = document.createElement(node.tag)

        for (let attribute in node.attributes) {
          element.setAttribute(attribute, node.attributes[attribute])
        }

        if (node.on) {
          for (let listener in node.on) {
            element.addEventListener(listener, node.on[listener])
          }
        }

        if (node.children) {
          node.children.map(this.createNode).forEach(element.appendChild.bind(element))
        }

        return element
      }),

      nodesMatch: NGN.privateconst((subject, comparator) => {
        if (typeof subject !== typeof comparator) {
          return false
        }

        if (typeof subject === 'string' && subject === comparator) {
          return true
        }

        // TODO do a proper object comparison to support event listeners and components
        return subject.tag === comparator.tag && subject.attributes === comparator.attributes
      }),

      updateChildNode: NGN.privateconst(({
        target = null,
        newNode = null,
        oldNode = null,
        index = 0
      }) => {
        if (oldNode === null) {
          return target.appendChild(this.createNode(newNode))
        }

        if (newNode === null) {
          return target.childNodes[index] && target.removeChild(target.childNodes[index])
        }

        // TODO: Run a diff and return the properties that are different.
        // Then, for example, if it is only an attribute or listener that is
        // different, apply the change without replacing the element.
        // There are numerous other optimizations that could be made here as well.
        if (!this.nodesMatch(newNode, oldNode)) {
          return target.replaceChild(this.createNode(newNode), target.childNodes[index])
        }

        if (!newNode.hasOwnProperty('children')) {
          return
        }

        for (let i = 0; i < Math.max(newNode.children.length, oldNode.children.length); i++) {
          this.updateChildNode({
            target: target.childNodes[index],
            newNode: newNode.children[i],
            oldNode: oldNode.children[i],
            index: i
          })
        }
      }),

      renderHTML: NGN.privateconst((target, newChildren) => new Promise((resolve, reject) => {
        if (!target) {
          return reject('Invalid target element.')
        }

        if (newChildren.length === 0) {
          return reject('No child elements were provided for rendering.')
        }

        if (!this.vDOMs.has(target)) {
          this.vDOMs.set(target, this.parseElement(target))
        }

        let oldChildren = this.vDOMs.get(target).children

        for (let i = 0; i < Math.max(newChildren.length, oldChildren.length); i++) {
          this.updateChildNode({
            target,
            newNode: NGN.coalesce(newChildren[i]),
            oldNode: NGN.coalesce(oldChildren[i]),
            index: i
          })
        }

        if (NGN.hasOwnProperty('DOM')) {
          NGN.DOM.svg.update()
        }

        this.vDOMs.get(target).children = newChildren

        resolve()
      }))
    })
  }

  createElement (...args) {
    if (args.length === 0 || !args[0]) {
      throw new Error('Invalid Configuration.')
    }

    switch (typeof args[0]) {
      case 'string': return this.createDOMObject({
        tag: args[0],
        attributes: NGN.coalesce(args[1]),
        children: NGN.coalesce(args[2])
      })

      case 'object': return this.createDOMObject(args[0])

      default: throw new Error('Invalid Configuration.')
    }
  }

  // TODO: Add try/catch to handle errors from this.createElement
  render (...args) {
    if (args[0] instanceof HTMLElement) {
      return this.renderHTML(...args)
    }

    // TODO: Handle template rendering
  }
}
