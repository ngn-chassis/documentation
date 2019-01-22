class AuthorTooltipElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.defineProperties({
      position: {
        private: true,
        default: []
      },

      positionValues: {
        readonly: true,
        private: true,
        default: ['left', 'center', 'right', 'top', 'bottom']
      }
    })

    this.UTIL.defineAttributes({
      hidden: true,

      position: {
        default: 'center top',

        get: () => this.PRIVATE.position ? this.PRIVATE.position.join(' ') : null,

        set: value => {
          let { positionValues } = this.PRIVATE
          let array = value.trim().split(' ')

          this.PRIVATE.position = array.filter(term => {
            let isValid = positionValues.includes(term)

            if (!isValid) {
              this.UTIL.printToConsole(`Invalid position value "${term}". Accepted values: ${this.PRIVATE.positionValues.join(', ')}`, 'error')
            }

            return isValid
          })
        }
      }
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.hide()

        if (!this.hasAttribute('for')) {
          return this.UTIL.throwError({
            message: `Missing required "for" attribute.`
          })
        }

        this.annotatedElement = document.getElementById(this.getAttribute('for')) || null

        if (!this.annotatedElement) {
          return this.UTIL.throwError({
            type: 'reference',
            message: `Could not find element #${this.getAttribute('for')}. "for" attribute must be set to the id of the element to which to attach the tooltip.`
          })
        }

        this.UTIL.registerListeners(this.annotatedElement, {
          mouseenter: evt => this.show(),
          mouseleave: evt => this.hide()
        })
      }
    })
  }

  static get observedAttributes () {
    return ['for', 'hidden', 'position']
  }

  get isHidden () {
    return this.hasAttribute('hidden')
  }

  get isVisible () {
    return !this.isHidden
  }

  hide () {
    this.setAttribute('hidden', '')
  }

  show () {
    this.removeAttribute('hidden')
  }
}

customElements.define('author-tooltip', AuthorTooltipElement)
