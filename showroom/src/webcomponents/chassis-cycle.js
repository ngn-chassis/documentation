customElements.define("chassis-cycle",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([mode=custom]))>::slotted(:not([active])){display:none!important}chassis-cycle{display:block}:host :after,:host :before,chassis-cycle *{box-sizing:border-box}</style><slot></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-cycle> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-cycle> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addPrivateProperties({dummyEl:document.createElement("div"),middleWare:{beforeChange:null,afterChange:null},getChildIndex:a=>[].slice.call(this.children).indexOf(a),getNextActiveChild:b=>{let c=a.get(this).getChildIndex(b);return{element:b,index:c,page:c+1}},hideChild:a=>a.removeAttribute("active",""),showChild:b=>{let{getChildIndex:c,getNextActiveChild:d,hideChild:e,middleWare:f}=a.get(this),g=this.active,h=d(b);this.dispatchEvent(new CustomEvent("page-change",{detail:{active:this.active,next:h}}));let i=()=>{0<=this.activeIndex&&e(this.children.item(this.activeIndex||0)),b.setAttribute("active",""),this.dispatchEvent(new CustomEvent("page-changed",{detail:{previous:g,active:this.active}})),f.afterChange&&"function"==typeof f.afterChange&&f.afterChange(g,this.active)};f.beforeChange&&"function"==typeof f.beforeChange?f.beforeChange(this.active,h,i):i()},showChildByIndex:b=>{this.activeIndex===b||b>=this.children.length||0>b||a.get(this).showChild(this.children.item(b))},showChildBySelector:b=>{let c=this.querySelectorAll(b);c.length&&(1<c.length&&console.warn(`<chassis-cycle> found multiple nodes matching "${b}". Displaying first result...`),a.get(this).showChild(c.item(0)))},replaceDeprecatedAttributes:b=>{b.hasAttribute("selected")&&(console.warn(`<chassis-cycle> 'selected' attribute is deprecated. Please use 'active' instead.`),b.removeAttribute("selected"),a.get(this).showChild(b))}})}static get observedAttributes(){return["mode"]}/**
     * @typedef {Object} ActiveElementProperties
     * @property {HTMLElement} element The currently active page.
     * @property {Number} index The zero-based index of the currently active page.
     * @property {Number} page The 1-based index of the currently active page.
     */ /**
     * @property active
     * Information about the currently active page.
     * @return {ActiveElementProperties}
     */get active(){return{element:this.activeElement,index:this.activeIndex,page:this.activePage}}/**
     * @property activeElement
     * The currently active page.
     * @return {HTMLElement}
     */get activeElement(){return null===this.activeIndex?null:this.children.item(this.activeIndex)}/**
     * @property activePage
     * The 1-based index of the currently active page.
     * @return {Number}
     */get activePage(){return this.activeIndex+1}/**
     * @property activeIndex
     * The zero-based index of the currently active page.
     * @return {Number}
     */get activeIndex(){for(let a in this.children){if(!this.children.hasOwnProperty(a))continue;let b=this.children.item(a);if("object"==typeof b&&b.hasAttribute("active"))return parseInt(a)}return null}/**
     * @property selected
     * The current active section.
     * @return {HTMLElement}
     * @deprecated
     */get selected(){return console.warn(`<chassis-cycle> 'selected' property is deprecated. Please use 'activeElement' instead.`),this.activeElement}/**
     * @property selectedIndex
     * The index number of the current active section.
     * @return {Number}
     * @deprecated
     */get selectedIndex(){return console.warn(`<chassis-cycle> 'selectedIndex' property is deprecated. Please use 'activeIndex' for zero-based indexing or 'activePage' for 1-based indexing instead.`),this.activePage}set beforeChange(b){a.get(this).middleWare.beforeChange=b.bind(this)}set afterChange(b){a.get(this).middleWare.afterChange=b.bind(this)}connectedCallback(){let b=new MutationObserver(b=>{b.forEach(b=>{let{addedNodes:c,removedNodes:d,type:e}=b;switch(e){case"childList":if(0<d.length&&!this.activeElement)return this.previous();if(0===c.length||c.item(0).nodeType!==Node.ELEMENT_NODE)return;let b=c.item(0);if(b.nodeType!==Node.ELEMENT_NODE)return;a.get(this).replaceDeprecatedAttributes(b);break;// return node.hasAttribute('active') ? _.get(this).showChild(node) : _.get(this).hideChild(node)
default:}})});b.observe(this,{attributes:!1,childList:!0,characterData:!1}),setTimeout(()=>{for(let b in this.children){if(!this.children.hasOwnProperty(b))continue;let c=this.children.item(b);"object"==typeof c&&(a.get(this).replaceDeprecatedAttributes(c),c!==this.activeElement&&a.get(this).hideChild(c))}},0)}/**
     * @method hide
     * Deactivate a page.
     * @deprecated
     */hide(b){console.warn(`<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`),a.get(this).hideChild(b)}/**
     * @method hideActive
     * Deactivate the currently active page.
     * @deprecated
     */hideActive(){console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.`),a.get(this).hideChild(this.activeElement)}/**
     * @method hideAll
     * Deactivate all pages.
     */hideAll(){for(let b in this.children){if(!this.children.hasOwnProperty(b))continue;let c=this.children.item(b);"object"==typeof c&&a.get(this).hideChild(c)}}indexOf(b){return a.get(this).getChildIndex(b)}pageNumberOf(b){return a.get(this).getChildIndex(b)+1}/**
     * @method insertAdjacentHTML
     * Override this.prototype.insertAdjacentHTML and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentHTML() on web components
     * in Firefox and IE11.
     * @override
     */insertAdjacentHTML(b,c){switch(b){case"beforebegin":case"afterend":return HTMLElement.prototype.insertAdjacentHTML.call(this,b,c);default:a.get(this).dummyEl.insertAdjacentHTML(b,c);let d=a.get(this).dummyEl.children.item(0);for(;a.get(this).dummyEl.firstChild;)a.get(this).dummyEl.removeChild(a.get(this).dummyEl.firstChild);return"beforeend"===b?this.appendChild(d):this.insertBefore(d,this.firstElementChild);}}/**
     * @method insertAdjacentElement
     * Override this.prototype.insertAdjacentElement and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentElement() on web components
     * in Firefox and IE11.
     * @override
     */insertAdjacentElement(a,b){return"beforeend"===a?this.appendChild(b):"afterbegin"===a?this.insertBefore(b,this.firstElementChild):HTMLElement.prototype.insertAdjacentElement.call(this,a,b)}/**
     * @method first
     * A helper method to display the first child element.
     */first(){this.show(1)}/**
     * @method last
     * A helper method to display the last child element.
     */last(){this.show(this.children.length)}/**
     * @method next
     * Deactivate the currently active child element and activate the one
     * immediately adjacent to it.
     * @param {function} callback
     * Executed when the operation is complete.
     */next(a){this.show(this.activePage===this.children.length?1:this.activePage+1),a&&a(this.activeElement)}/**
     * @method previous
     * Deactivate the currently active child element and activate the one
     * immediately preceding it.
     * @param {function} callback
     * Executed when the operation is complete.
     */previous(a){this.show(1===this.activePage?this.children.length:this.activePage-1),a&&a(this.activeElement)}/**
     * @method show
     * Deactive the currently active element activate a different one.
     * @param {number | string | HTMLElement} query
     * 1-based index,
     * Element selector string, or
     * HTMLElement to make active
     */show(b){if(!b)return a.get(this).showChildByIndex(0);switch((typeof b).toLowerCase()){case"number":return a.get(this).showChildByIndex(b-1);case"string":return isNaN(parseInt(b))?a.get(this).showChildBySelector(b):a.get(this).showChildByIndex(parseInt(b)-1);default:return b instanceof HTMLElement?a.get(this).showChild(b):console.error(`<chassis-cycle>: Invalid query "${b}"`);}}}}());