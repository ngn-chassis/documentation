customElements.define("author-tooltip",class extends AuthorElement(HTMLElement){constructor(){super(`<template><style>@charset "UTF-8"; :host{position:fixed;display:block}:host([hidden]){display:none}:host *,:host :after,:host :before{box-sizing:border-box}author-tooltip{position:fixed;display:block}author-tooltip[hidden]){display:none}author-tooltip *,author-tooltip :after,author-tooltip :before{box-sizing:border-box}</style><slot></slot></template>`),this.UTIL.defineProperties({position:{private:!0,default:[]},positionValues:{readonly:!0,private:!0,default:["left","center","right","top","bottom"]}}),this.UTIL.defineAttributes({hidden:!0,position:{default:"center top",get:()=>this.PRIVATE.position?this.PRIVATE.position.join(" "):null,set:a=>{let{positionValues:b}=this.PRIVATE,c=a.trim().split(" ");this.PRIVATE.position=c.filter(a=>{let c=b.includes(a);return c||this.UTIL.printToConsole(`Invalid position value "${a}". Accepted values: ${this.PRIVATE.positionValues.join(", ")}`,"error"),c})}}}),this.UTIL.registerListeners(this,{connected:()=>(this.hide(),!this.hasAttribute("for"))?this.UTIL.throwError({message:`Missing required "for" attribute.`}):(this.annotatedElement=document.getElementById(this.getAttribute("for"))||null,this.annotatedElement?void this.UTIL.registerListeners(this.annotatedElement,{mouseenter:()=>this.show(),mouseleave:()=>this.hide()}):this.UTIL.throwError({type:"reference",message:`Could not find element #${this.getAttribute("for")}. "for" attribute must be set to the id of the element to which to attach the tooltip.`}))})}static get observedAttributes(){return["for","hidden","position"]}get isHidden(){return this.hasAttribute("hidden")}get isVisible(){return!this.isHidden}hide(){this.setAttribute("hidden","")}show(){this.removeAttribute("hidden")}});