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
        let { dimensions, lastPointerPosition } = this.PRIVATE
        let { clientX, clientY, target } = evt.detail
        let isEntering = null
        let isLeaving = null

        let isOver = {
          x: clientX >= dimensions.left && clientX <= dimensions.right,
          y: clientY >= dimensions.top && clientY <= dimensions.bottom
        }

        if (lastPointerPosition !== null) {
          isEntering = {
            top: isOver.x && lastPointerPosition.y <= dimensions.top && clientY > dimensions.top,
            right: isOver.y && lastPointerPosition.x >= dimensions.right && clientX < dimensions.right,
            bottom: isOver.x && lastPointerPosition.y >= dimensions.bottom && clientY < dimensions.bottom,
            left: isOver.y && lastPointerPosition.x <= dimensions.left && clientX > dimensions.left
          }

          isLeaving = {
            top: isOver.x && lastPointerPosition.y >= dimensions.top && clientY < dimensions.top,
            right: isOver.y && lastPointerPosition.x <= dimensions.right && clientX > dimensions.right,
            bottom: isOver.x && lastPointerPosition.y <= dimensions.bottom && clientY > dimensions.bottom,
            left: isOver.y && lastPointerPosition.x >= dimensions.left && clientX < dimensions.left
          }
        }

        // TODO: Customize Event data
        if (isEntering !== null && Object.values(isEntering).some(Boolean)) {
          this.over = true
          this.emit('drag.enter', evt)
        }

        // TODO: Customize Event data
        if (isOver.x && isOver.y) {
          if (!this.over) {
            this.over = true
          }

          this.emit('drag.over', evt)
        }

        // TODO: Customize Event data
        if (isLeaving !== null && Object.values(isLeaving).some(Boolean)) {
          this.over = false
          this.emit('drag.leave', evt)
        }

        this.PRIVATE.lastPointerPosition = {
          x: clientX,
          y: clientY
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
