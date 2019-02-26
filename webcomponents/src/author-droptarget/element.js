class AuthorDropTargetElement extends AuthorElement(HTMLElement) {
  constructor () {
    super (`{{TEMPLATE-STRING}}`)

    this.UTIL.defineAttributes({
      accepts: {
        default: '*'
      },

      mustMatch: {
        default: 1
      },

      over: {
        default: false
      },

      sortable: {
        default: false
      },

      types: {
        private: true,
        readonly: true,
        get: () => {
          if (this.accepts === null) {
            return null
          }

          return this.accepts.replace(/\s+/g,' ').trim().split(' ')
        }
      }
    })

    this.UTIL.defineProperties({
      dimensions: {
        private: true,
        readonly: true,
        get: () => this.getBoundingClientRect()
      },

      draggable: {
        private: true,
        default: null
      },

      lastPointerPosition: {
        private: true,
        default: null
      }
    })

    this.UTIL.definePrivateMethods({
      applyDragHandlers: () => {
        let { draggable } = this.PRIVATE

        draggable.on('drag', this.PRIVATE.dragHandler)
        draggable.on('drag.end', this.PRIVATE.dragendHandler)
      },

      dragHandler: evt => {
        let { draggable, dimensions, lastPointerPosition } = this.PRIVATE
        let { client } = evt.detail.position
        let isEntering = null
        let isLeaving = null

        let isOver = {
          x: client.x >= dimensions.left && client.x <= dimensions.right,
          y: client.y >= dimensions.top && client.y <= dimensions.bottom
        }

        if (lastPointerPosition !== null) {
          isEntering = {
            top: isOver.x && lastPointerPosition.y <= dimensions.top && client.y > dimensions.top,
            right: isOver.y && lastPointerPosition.x >= dimensions.right && client.x < dimensions.right,
            bottom: isOver.x && lastPointerPosition.y >= dimensions.bottom && client.y < dimensions.bottom,
            left: isOver.y && lastPointerPosition.x <= dimensions.left && client.x > dimensions.left
          }

          isLeaving = {
            top: isOver.x && lastPointerPosition.y >= dimensions.top && client.y < dimensions.top,
            right: isOver.y && lastPointerPosition.x <= dimensions.right && client.x > dimensions.right,
            bottom: isOver.x && lastPointerPosition.y <= dimensions.bottom && client.y > dimensions.bottom,
            left: isOver.y && lastPointerPosition.x >= dimensions.left && client.x < dimensions.left
          }
        }

        let isParent = this.contains(draggable)

        // TODO: Customize Event data
        // If event default is prevented, do not set this.over to true
        if (isEntering !== null && Object.values(isEntering).some(Boolean)) {
          this.over = !isParent
          !isParent && this.emit(`drop.allow`, {})

          this.emit('drag.enter', evt)
        }

        // TODO: Customize Event data
        // If event default is prevented, do not set this.over to true
        if (isOver.x && isOver.y) {
          if (!this.over) {
            this.over = !isParent
            this.emit(`drop.${isParent ? 'deny' : 'allow'}`, {})
          }

          this.emit('drag.over', evt)
        }

        // TODO: Customize Event data
        // If event default is prevented, do not set this.over to false
        if (isLeaving !== null && Object.values(isLeaving).some(Boolean)) {
          // target.sourceElement.canDrop = false
          this.over = false
          this.emit('drop.deny', {})
          this.emit('drag.leave', evt)
        }

        this.PRIVATE.lastPointerPosition = {
          x: client.x,
          y: client.y
        }
      },

      dragendHandler: evt => {
        this.PRIVATE.removeDragHandlers()
        this.over = false
      },

      removeDragHandlers: () => {
        this.PRIVATE.draggable.off('drag', this.PRIVATE.dragHandler)
        this.PRIVATE.draggable.off('drag.end', this.PRIVATE.dragendHandler)
      }
    })

    this.UTIL.registerListeners(this, {
      'handshake.offered': evt => {
        let { draggable, types } = evt.detail
        let reject = false

        switch (this.mustMatch) {
          case 'all':
          case '*':
            if (!this.types.every(type => types.includes(type))) {
              reject = true
            }
            break

          default:
            if (!(this.types.filter(type => types.includes(type)).length >= this.mustMatch)) {
              reject = true
            }
        }

        if (reject) {
          return
        }

        this.emit('handshake.accepted', { dropTarget: this }, draggable)

        this.PRIVATE.draggable = draggable
        this.PRIVATE.applyDragHandlers()
      }
    })
  }

  static get observedAttributes () {
    return ['accepts', 'sortable']
  }
}

customElements.define('author-droptarget', AuthorDropTargetElement)
