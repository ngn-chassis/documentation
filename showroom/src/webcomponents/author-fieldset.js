customElements.define("author-fieldset",class extends AuthorElement(HTMLElement){constructor(){super(`<template><style>@charset "UTF-8";</style><slot></slot></template>`),this.UTIL.defineAttributes({name:""}),this.UTIL.defineProperties({sourceElement:{private:!0,readonly:!0,default:document.createElement("fieldset")},disabled:!1,elements:{readonly:!0,get:()=>""},form:{readonly:!0,get:()=>""},type:{readonly:!0,default:"author-fieldset"},validationMessage:{readonly:!0,get:()=>this.PRIVATE.sourceElement.validationMessage},validity:{readonly:!0,get:()=>this.PRIVATE.sourceElement.validity},willValidate:{readonly:!0,get:()=>this.PRIVATE.sourceElement.willValidate}})}checkValidity(){this.PRIVATE.sourceElement.checkValidity()}setCustomValidity(a=""){this.PRIVATE.sourceElement.setCustomValidity(a)}});