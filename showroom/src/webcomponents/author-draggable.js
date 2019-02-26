class AuthorDraggableElement extends AuthorElement(HTMLElement) {
  constructor () {
    super (`<template><style>@charset "UTF-8"; :host{display:flex;cursor:move}:host *,:host :after,:host :before{box-sizing:border-box}:host([clone][dragging]){contain:content!important;position:fixed!important;z-index:2147483647!important}author-draggable{display:flex;cursor:move}author-draggable *,author-draggable :after,author-draggable :before{box-sizing:border-box}author-draggable[clone][dragging]{contain:content!important;position:fixed!important;z-index:2147483647!important}</style><slot></slot></template>`)

    this.UTIL.defineAttributes({
      direction: {
        default: null
      },

      disabled: {
        default: false
      },

      free: {
        default: false
      },

      'max-drag-distance': {
        default: null
      },

      'min-drag-distance': {
        default: null
      },

      type: {
        default: null
      },
    })

    this.UTIL.defineProperties({
      acceptedConstraintKeys: {
        private: true,
        readonly: true,
        default: [
          'x',
          'y',
          'up',
          'right',
          'down',
          'left'
        ]
      },

      canDrop: {
        default: false
      },

      clone: {
        private: true,
        default: null
      },

      constraints: {
        private: true,
        readonly: true,
        get: () => {
          if (!this.direction) {
            return null
          }

          return this.direction.replace(/\s+/g,' ').trim().split(' ')
        }
      },

      dimensions: {
        private: true,
        readonly: true,
        get: () => this.getBoundingClientRect()
      },

      dragArea: {
        private: true,
        readonly: true,
        get: () => {
          let dragAreas = document.querySelectorAll('author-dragarea')

          for (let dragArea of dragAreas) {
            if (dragArea.contains(this)) {
              return dragArea
            }
          }

          return document.body
        }
      },

      dragIsActive: {
        private: true,
        default: false
      },

      dropTargets: {
        private: true,
        default: null
      },

      pointerEventsSupported: {
        private: true,
        readonly: true,
        default: window.PointerEvent === undefined ? false : true
      },

      pointerOffset: {
        private: true,
        default: null
      },

      userIsTouching: {
        private: true,
        default: false
      },

      types: {
        private: true,
        readonly: true,
        get: () => {
          if (!this.type) {
            return null
          }

          return this.type.replace(/\s+/g,' ').trim().split(' ')
        }
      }
    })

    this.UTIL.definePrivateMethods({
      forwardEvent: (evt, newEvtName, detail = {}, target = this) => {
        evt.preventDefault()

        detail.originalEvent = evt

        if (!this.PRIVATE.pointerEventsSupported) {
          this.emit(newEvtName, detail, target)
        }
      },

      // Polyfill for Firefox bug from 2002 :|
      // window.getComputedStyle(el).cssText returns ""
      // https://bugzilla.mozilla.org/show_bug.cgi?id=137687
      getComputedStylesCssText: element => {
        let computed = window.getComputedStyle(element)
        let acc = []

        if (computed.cssText !== '') {
          return computed.cssText
        }

        for (let property in computed) {
          if (typeof computed[property] === 'string') {
            acc.push(`${property}: ${computed[property]}`)
          }
        }

        return acc.join('; ')
      },

      handshakeAcceptedHandler: evt => this.PRIVATE.dropTargets.push(evt.detail.dropTarget),

      initializeClone: () => {
        this.setAttribute('dragging', '')

        this.PRIVATE.clone = this.cloneNode(true)
        this.PRIVATE.synchronizeStyles()

        this.removeAttribute('dragging')
        this.PRIVATE.clone.setAttribute('clone', '')

        document.body.appendChild(this.PRIVATE.clone)
      },

      pointerupHandler: evt => {
        if (!this.PRIVATE.dragIsActive) {
          return this.emit('after.drag.end', evt)
        }

        this.PRIVATE.reset()
        this.emit('drag.end', evt)
      },

      mouseupHandler: evt => {
        console.log('mouseup')
        this.PRIVATE.forwardEvent(evt, 'pointerup', {}, document.body)
      },

      touchendHandler: evt => {
        // document.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
      },

      applyBodyListeners: () => {
        document.body.addEventListener('pointerup', this.PRIVATE.pointerupHandler)
        document.body.addEventListener('mouseup', this.PRIVATE.mouseupHandler)
        document.body.addEventListener('touchend', this.PRIVATE.touchendHandler)
      },

      removeBodyListeners: () => {
        document.body.removeEventListener('pointerup', this.PRIVATE.pointerupHandler)
        document.body.removeEventListener('mouseup', this.PRIVATE.mouseupHandler)
        document.body.removeEventListener('touchend', this.PRIVATE.touchendHandler)
        document.body.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
      },

      initiateDrag: () => {
        this.PRIVATE.applyBodyListeners()

        this.setAttribute(this.free ? 'dragging' : 'ghost', '')
        this.PRIVATE.dragIsActive = true
        this.emit('after.drag.start')
      },

      pointerMoveHandler: evt => {
        if (!this.PRIVATE.dragIsActive) {
          this.emit('drag.start')

          if (!this.free) {
            this.PRIVATE.initializeClone()
          }

          this.PRIVATE.initiateDrag()
        }

        this.emit('drag', evt)
        this.PRIVATE.updatePosition(evt)
      },

      reset: () => {
        if (this.free) {
          this.removeAttribute('dragging')
        } else {
          this.removeAttribute('ghost')
          document.body.removeChild(this.PRIVATE.clone)
          this.PRIVATE.clone = null
        }

        this.PRIVATE.dragIsActive = false
        this.PRIVATE.pointerOffset = null
        this.PRIVATE.removeBodyListeners()
        this.PRIVATE.dropTargets = null
      },

      storeDropTargets: () => {
        this.PRIVATE.dropTargets = []
        let allDropTargets = document.querySelectorAll('author-droptarget')

        this.on('handshake.accepted', this.PRIVATE.handshakeAcceptedHandler)

        for (let dropTarget of allDropTargets) {
          this.emit('handshake.offered', {
            draggable: this,
            types: this.PRIVATE.types
          }, dropTarget)
        }

        this.off('handshake.accepted', this.PRIVATE.handshakeHandler)
      },

      synchronizeStyles: () => {
        let { clone, getComputedStylesCssText } = this.PRIVATE

        clone.style.cssText = getComputedStylesCssText(this)

        let children = this.getElementsByTagName('*')
        let cloneChildren = clone.getElementsByTagName('*')

        if (children.length > 0) {
          for (let i = 0; i < children.length; i++) {
            cloneChildren[i].style.cssText = getComputedStylesCssText(children[i])
          }
        }
      },

      updatePosition: evt => {
        let { clone, dimensions, originalCoordinates, pointerOffset } = this.PRIVATE
        let newCoordinates = {
          x: evt.clientX - pointerOffset.x,
          y: evt.clientY - pointerOffset.y
        }

        if (this.free) {
          newCoordinates = {
            x: newCoordinates.x - (originalCoordinates.x - window.scrollX),
            y: newCoordinates.y - (originalCoordinates.y - window.scrollY)
          }

          return this.UTIL.setStyleProperty('dragging', 'transform', `translate(${newCoordinates.x}px, ${newCoordinates.y}px)`)
        }

        clone.UTIL.setStyleProperties('dragging', [
          {
            name: 'left',
            value: `${newCoordinates.x}px`,
            important: true
          },
          {
            name: 'top',
            value: `${newCoordinates.y}px`,
            important: true
          }
        ])
      }
    })

    this.UTIL.registerListeners(this, {
      'attribute.changed': evt => {
        let { attribute, newValue, oldValue } = evt.detail

        switch (attribute) {
          case 'free':
            if (!this.free) {
              this.UTIL.removeStyleProperty('dragging', 'transform')
            }
            break
        }
      },

      'drop.permission.granted': evt => {
        this.canDrop = true
      },

      'drop.permission.denied': evt => {
        this.canDrop = false
      },

      connected: () => {
        this.UTIL.insertStyleRule('dragging', ':host {}')

        this.emit('author-draggable.connected', {
          draggable: this
        }, window)
      },

      mousedown: evt => {
        if (this.PRIVATE.userIsTouching) {
          return evt.preventDefault()
        }

        this.PRIVATE.forwardEvent(evt, 'pointerdown')
      },

      touchstart: evt => {
        evt.preventDefault()
        this.PRIVATE.userIsTouching = true
        this.PRIVATE.forwardEvent(evt, 'pointerdown')
      },

      pointerdown: evt => {
        let client = {}

        if (evt instanceof CustomEvent) {
          client.x = evt.detail.originalEvent.clientX
          client.y = evt.detail.originalEvent.clientY
        } else {
          client.x = evt.clientX
          client.y = evt.clientY
        }

        this.PRIVATE.pointerOffset = {
          x: client.x - this.PRIVATE.dimensions.left,
          y: client.y - this.PRIVATE.dimensions.top
        }

        document.body.addEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
        this.PRIVATE.storeDropTargets()
      },

      rendered: () => {
        this.UTIL.defineProperty('originalCoordinates', {
          private: true,
          readonly: true,
          default: {
            x: this.PRIVATE.dimensions.left + window.scrollX,
            y: this.PRIVATE.dimensions.top + window.scrollY
          }
        })
      }
    })
  }

  static get observedAttributes () {
    return ['direction', 'disabled', 'free', 'min-drag-distance', 'max-drag-distance', 'type']
  }
}

customElements.define('author-draggable', AuthorDraggableElement)
