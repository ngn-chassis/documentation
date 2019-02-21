class AuthorDropTargetElement extends HTMLElement {
  constructor () {
    super ()

    this.UTIL.defineAttributes({
      accepts: {
        default: '*'
      },

      sortable: {
        default: false
      }
    })
  }

  static get observedAttributes () {
    return ['accepts', 'sortable']
  }
}

customElements.define('author-droptarget', AuthorDropTargetElement)
