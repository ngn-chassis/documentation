class AuthorOptgroupLabelElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)
  }
}

customElements.define('author-optgroup-label', AuthorOptgroupLabelElement)
