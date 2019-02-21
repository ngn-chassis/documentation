class AuthorDraggableElement extends HTMLElement {
  constructor () {
    super ()

    this.UTIL.defineAttributes({
      type: {
        default: null
      }
    })

    this.UTIL.defineProperties({
      clone: {
        private: true,
        default: null
      },

      cursorOffset: {
        private: true,
        default: null
      },

      dragIsActive: {
        private: true,
        default: false
      },

      dimensions: {
        private: true,
        readonly: true,
        get: () => this.getBoundingClientRect()
      },

      pointerEventsSupported: {
        private: true,
        readonly: true,
        default: window.PointerEvent === undefined ? false : true
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
      appendClone: () => {
        this.PRIVATE.clone = this.cloneNode(true)
        this.PRIVATE.clone.setAttribute('clone', '')

        let lastChild = !this.nextElementSibling
        let onlyChild = !this.previousElementSibling && lastChild

        if (lastChild || onlyChild) {
          this.parentNode.appendChild(this.PRIVATE.clone)
        } else {
          this.parentNode.insertBefore(this.PRIVATE.clone, this)
        }
      },

      forwardEvent: (evt, newEvtName, detail = {}) => {
        evt.preventDefault()

        if (!this.PRIVATE.pointerEventsSupported) {
          this.emit(newEvtName, detail, this)
        }
      },

      initiateDrag: () => {
        let { width, height } = this.PRIVATE.dimensions

        this.UTIL.setStyleProperties('dragging', [
          {
            name: 'width',
            value: `${width}px`
          },
          {
            name: 'height',
            value: `${height}px`
          }
        ])

        this.setAttribute('dragging', '')
        this.PRIVATE.dragIsActive = true
        this.emit('after.drag.start')
      },

      pointerMoveHandler: evt => {
        if (!this.PRIVATE.dragIsActive) {
          this.emit('drag.start')
          this.PRIVATE.appendClone()
          this.PRIVATE.initiateDrag()
        }

        this.emit('drag.active', evt)
        this.PRIVATE.updatePosition(evt)
      },

      reset: () => {
        this.parentNode.removeChild(this.PRIVATE.clone)
        this.PRIVATE.clone = null

        this.removeAttribute('dragging')
        this.UTIL.removeStyleProperties('dragging', [
          'width',
          'height',
          'left',
          'top'
        ])

        this.PRIVATE.dragIsActive = false
        this.PRIVATE.cursorOffset = null
        document.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
      },

      updatePosition: evt => {
        let { cursorOffset } = this.PRIVATE
        this.UTIL.setStyleProperty('dragging', 'left', `${evt.clientX - cursorOffset.x}px`)
        this.UTIL.setStyleProperty('dragging', 'top', `${evt.clientY - cursorOffset.y}px`)
      }
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.UTIL.insertStyleRules({
          dragging: ':host([dragging]) {}',
          clone: ':host([clone]) {}'
        })
      },

      mousedown: evt => {
        if (this.PRIVATE.userIsTouching) {
          return evt.preventDefault()
        }

        console.log('mousedown')
        this.PRIVATE.forwardEvent(evt, 'pointerdown')
      },

      touchstart: evt => {
        console.log('touchstart')
        evt.preventDefault()
        this.PRIVATE.userIsTouching = true
        this.PRIVATE.forwardEvent(evt, 'pointerdown')
      },

      pointerdown: evt => {
        console.log('pointerdown')

        this.PRIVATE.cursorOffset = {
          x: evt.clientX - this.PRIVATE.dimensions.left,
          y: evt.clientY - this.PRIVATE.dimensions.top
        }

        document.addEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
      }
    })

    this.UTIL.registerListeners(document, {
      mouseup: evt => document.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler),
      touchend: evt => document.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler),
      pointerup: evt => {
        if (!this.PRIVATE.dragIsActive) {
          return this.emit('after.drag.end', evt)
        }

        this.PRIVATE.reset()
        this.emit('drag.end', evt)
      }
    })
  }

  static get observedAttributes () {
    return ['type']
  }
}

customElements.define('author-draggable', AuthorDraggableElement)
