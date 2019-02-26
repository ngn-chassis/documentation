class AuthorDragareaElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`<template><style>@charset "UTF-8"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}author-dragarea{display:block}author-dragarea *,author-dragarea :after,author-dragarea :before{box-sizing:border-box}</style><slot></slot></template>`)
  }
}

customElements.define('author-dragarea', AuthorDragareaElement)
