class GRegistry extends NGNX.VIEW.Registry {
  constructor (cfg) {
    super(cfg)

    Object.defineProperties(this, {
      vDOMs: NGN.privateconst(new Map()),

      clearChildNodes: NGN.privateconst(target => {
        let replacement = target.cloneNode(false)
        target.parentNode.replaceChild(replacement, target);
        return replacement
      }),

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

      nodeIsEmpty: NGN.privateconst(target => {
        return [...target.childNodes].every(child => child.nodeType === 3 && !child.data.trim())
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

      parseElement: NGN.privateconst(element => this.createDOMObject({
        tag: element.localName,

        attributes: [...element.attributes].reduce((result, attribute) => {
          result[attribute.name] = attribute.value
          return result
        }, {}),

        children: element.childNodes.length > 0 ? [...element.childNodes].map(child => {
          switch (child.nodeType) {
            case 1: return this.parseElement(child)
            case 3: return child.data
            default: return null
          }
        }) : []
      })),

      reconcileNodes: NGN.privateconst(({
        target = null,
        virtual = {
          old: null,
          new: null
        },
        index = 0
      }) => {
        // If no old node specified, add new node
        if (virtual.old === null) {
          return target.appendChild(this.createNode(virtual.new))
        }

        let currentNode = target.childNodes[index]

        // If no new node specified, remove old node
        if (virtual.new === null) {
          return nodeToReplace && target.removeChild(nodeToReplace)
        }

        // Compare and reconcile node types
        if (typeof virtual.new !== typeof virtual.old) {
          return target.replaceChild(this.createNode(virtual.new), currentNode)
        }

        if (typeof virtual.new === 'string') {
          if (virtual.new !== virtual.old) {
            return target.replaceChild(this.createNode(virtual.new), currentNode)
          }

          return
        }

        // Compare and reconcile node tags
        if (virtual.new.tag !== virtual.old.tag) {
          return target.replaceChild(this.createNode(virtual.new), currentNode)
        }

        // Compare and reconcile attributes
        if (!virtual.old.attributes) {
          if (virtual.new.attributes) {
            for (let attribute in virtual.new.attributes) {
              currentNode.setAttribute(attribute, virtual.new.attributes[attribute])
            }
          }

        } else if (!virtual.new.attributes) {
          while(currentNode.attributes.length > 0) {
            currentNode.removeAttribute(currentNode.attributes[0].name)
          }

        } else  {
          let newNodeHasAttribute = false
          let oldNodeHasAttribute = false
          let shared = false
          let match = false

          for (let attribute in Object.assign({}, virtual.new.attributes, virtual.old.attributes)) {
            newNodeHasAttribute = virtual.new.attributes.hasOwnProperty(attribute)
            oldNodeHasAttribute = virtual.old.attributes.hasOwnProperty(attribute)
            shared = newNodeHasAttribute && oldNodeHasAttribute
            match = shared ? virtual.new.attributes[attribute].trim() === virtual.old.attributes[attribute].trim() : false

            if (shared) {
              if (match) {
                continue
              } else {
                currentNode.setAttribute(attribute, virtual.new.attributes[attribute])
              }

            } else if (newNodeHasAttribute) {
              currentNode.setAttribute(attribute, virtual.new.attributes[attribute])

            } else {
              currentNode.removeAttribute(attribute)
            }
          }
        }

        // Compare node children
        if (virtual.new.children.length === 0) {
          if (virtual.old.children.length === 0) {
            return
          }

          return this.clearChildNodes(target)
        }

        // If children are present, reconcile them
        for (let i = 0; i < Math.max(virtual.new.children.length, virtual.old.children.length); i++) {
          this.reconcileNodes({
            target: currentNode,
            virtual: {
             old: virtual.old.children[i],
             new: virtual.new.children[i]
            },
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

        // If the target element does not have any children, or has only empty
        // text nodes, clear all child nodes to avoid a diff
        if (this.nodeIsEmpty(target) && target.childNodes.length > 0) {
          target = this.clearChildNodes(target)
        }

        // If the target element does not yet have its inner DOM managed by
        // the registry, parse it to generate a virtual DOM tree for its
        // default state
        if (!this.vDOMs.has(target)) {
          this.vDOMs.set(target, this.parseElement(target))
        }

        let oldChildren = this.vDOMs.get(target).children

        if (oldChildren.length === 0) {
          newChildren.forEach(child => target.appendChild(this.createNode(child)))
        } else {
          for (let i = 0; i < Math.max(newChildren.length, oldChildren.length); i++) {
            this.reconcileNodes({
              target,
              virtual: {
                old: NGN.coalesce(oldChildren[i]),
                new: NGN.coalesce(newChildren[i])
              },
              index: i
            })
          }
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
