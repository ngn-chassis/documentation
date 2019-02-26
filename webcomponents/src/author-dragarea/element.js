class AuthorDragareaElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)
  }
}

customElements.define('author-dragarea', AuthorDragareaElement)
