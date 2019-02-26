class AuthorOptgroupLabelElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`<template><style>@charset "UTF-8"; :host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-optgroup-label{contain:content;display:flex;max-width:100%}author-optgroup-label *,author-optgroup-label :after,author-optgroup-label :before{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforelabel"></slot><slot></slot><slot name="afterlabel"></slot><slot name="beforeend"></slot></template>`)
  }
}

customElements.define('author-optgroup-label', AuthorOptgroupLabelElement)
