class ChassisOptgroup extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});let a=document.createElement('div');a.insertAdjacentHTML('afterbegin',this.templateString);let b=a.querySelector('template');'content'in b?this.shadowRoot.appendChild(b.content.cloneNode(!0)):b.childNodes.forEach((a)=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),b=null}get templateString(){return`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:content;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}chassis-optgroup{display:flex;contain:content;max-width:100%}chassis-optgroup *{box-sizing:border-box}chassis-optgroup :before{box-sizing:border-box}chassis-optgroup :after{box-sizing:border-box}</style><slot name="options"></slot></template>`}connectedCallback(){}}customElements.define('chassis-optgroup',ChassisOptgroup);