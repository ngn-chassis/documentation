class GRegistry extends NGNX.VIEW.Registry {
  constructor (cfg) {
    super(cfg)

    Object.defineProperties(this, {
      vDOMs: NGN.privateconst(new Map()),

      parseElement: NGN.privateconst(element => this.createDOMObject({
        tag: element.localName,

        attributes: [...element.attributes].reduce((result, attribute) => {
          result[attribute.name] = attribute.value
          return result
        }, {}),

        children: [...element.childNodes].map(child => {
          switch (child.nodeType) {
            case 1: return this.parseElement(child)
            case 3: return NGN.coalesce(child.data.trim()) ? child.data : null
            default: return null
          }
        }).filter(Boolean)
      })),

      renderDOMObject: NGN.privateconst(obj => new Promise((resolve, reject) => {

        console.log(obj);
        resolve(obj)
      })),

      renderHTML: NGN.privateconst((target, children) => new Promise((resolve, reject) => {
        if (!target) {
          return reject('Invalid target element.')
        }

        if (children.length === 0) {
          return reject('No child elements were provided for rendering.')
        }

        if (!this.vDOMs.has(target)) {
          this.vDOMs.set(target, this.parseElement(target))
        }

        console.log('DIFF');
        console.log(this.vDOMs.get(target).children);
        console.log(children);
        console.log('---------------------');

        // let tasks = new NGN.Tasks()
        //
        // children.forEach(child => tasks.add(`Rendering Element...`, next => {
        //   this.renderDOMObject(child).then(element => next())
        // }))
        //
        // tasks.on('complete', () => resolve())
        // tasks.run(true)
      }))
    })
  }

  // TODO: Support "once" handlers too
  createDOMObject ({
    tag = null,
    attributes = null,
    on = null,
    component = null,
    children = null
  }) {
    return {
      tag,
      attributes,
      on,
      component,
      children
    }
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
