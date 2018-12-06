customElements.define("chassis-cycle",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset "UTF-8"; :host {
  display: block;
}

:host *,
:host *:before,
:host *:after {
  box-sizing: border-box;
}

:host(:not([mode="custom"])) > ::slotted(:not([selected])) {
  display: none !important;
}

chassis-cycle {
  display: block;
}

chassis-cycle *,
chassis-cycle *:before,
chassis-cycle *:after {
  box-sizing: border-box;
}

chassis-cycle:not([mode="custom"])) > :not([selected] {
  display: none !important;
}</style><slot></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-cycle> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-cycle> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addPrivateProperties({dummyEl:document.createElement("div"),middleWare:{beforeChange:null,afterChange:null},getChildIndex:a=>[].slice.call(this.children).indexOf(a),getNextSelectedChild:b=>{let c=a.get(this).getChildIndex(b);return{element:b,index:c}},hideChild:a=>a.removeAttribute("selected",""),showChild:b=>{let{getChildIndex:c,getNextSelectedChild:d,hideChild:e,middleWare:f}=a.get(this),g=this.selected,h=d(b);this.dispatchEvent(new CustomEvent("change",{detail:{selected:this.selected,next:h}}));let i=()=>{0<=this.selectedIndex&&e(this.children.item(this.selectedIndex||0)),b.setAttribute("selected",""),this.dispatchEvent(new CustomEvent("changed",{detail:{previous:g,selected:this.selected}})),f.afterChange&&"function"==typeof f.afterChange&&f.afterChange(g,this.selected)};f.beforeChange&&"function"==typeof f.beforeChange?f.beforeChange(this.selected,h,i):i()},showChildByIndex:b=>{this.selectedIndex===b||b>=this.children.length||0>b||a.get(this).showChild(this.children.item(b))},showChildBySelector:b=>{let c=this.querySelectorAll(b);c.length&&(1<c.length&&console.warn(`<chassis-cycle> found multiple nodes matching "${b}". Displaying first result...`),a.get(this).showChild(c.item(0)))}})}static get observedAttributes(){return["mode"]}/**
     * @typedef {Object} SelectedElementProperties
     * @property {HTMLElement} element The currently selected page.
     * @property {Number} index The zero-based index of the currently selected page.
     */ /**
     * @property selected
     * Information about the currently selected page.
     * @return {SelectedElementProperties}
     */get selected(){return{element:this.selectedElement,index:this.selectedIndex}}/**
     * @property selectedElement
     * The currently selected page.
     * @return {HTMLElement}
     */get selectedElement(){return null===this.selectedIndex?null:this.children.item(this.selectedIndex)}/**
     * @property selectedIndex
     * The zero-based index of the currently selected page.
     * @return {Number}
     */get selectedIndex(){for(let a in this.children){if(!this.children.hasOwnProperty(a))continue;let b=this.children.item(a);if("object"==typeof b&&b.hasAttribute("selected"))return parseInt(a)}return null}set beforeChange(b){a.get(this).middleWare.beforeChange=b.bind(this)}set afterChange(b){a.get(this).middleWare.afterChange=b.bind(this)}connectedCallback(){let b=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:b,removedNodes:c,type:d}=a;switch(d){case"childList":if(0<c.length&&!this.selectedElement)return this.previous();break;default:}})});b.observe(this,{attributes:!1,childList:!0,characterData:!1}),setTimeout(()=>{for(let b in this.children){if(!this.children.hasOwnProperty(b))continue;let c=this.children.item(b);"object"==typeof c&&c!==this.selectedElement&&a.get(this).hideChild(c)}},0)}/**
     * @method hide
     * Deactivate a page.
     * @deprecated
     */hide(b){console.warn(`<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage selected elements.`),a.get(this).hideChild(b)}/**
     * @method hideActive
     * Deactivate the currently selected page.
     * @deprecated
     */hideActive(){console.warn(`<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage selected elements.`),a.get(this).hideChild(this.selectedElement)}/**
     * @method hideAll
     * Deactivate all pages.
     */hideAll(){for(let b in this.children){if(!this.children.hasOwnProperty(b))continue;let c=this.children.item(b);"object"==typeof c&&a.get(this).hideChild(c)}}indexOf(b){return a.get(this).getChildIndex(b)}/**
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
     */first(){this.show(0)}/**
     * @method last
     * A helper method to display the last child element.
     */last(){this.show(this.children.length-1)}/**
     * @method next
     * Deactivate the currently selected child element and activate the one
     * immediately adjacent to it.
     * @param {function} callback
     * Executed when the operation is complete.
     */next(a){this.show(this.selectedIndex===this.children.length-1?0:this.selectedIndex+1),a&&a(this.selectedElement)}/**
     * @method previous
     * Deactivate the currently selected child element and activate the one
     * immediately preceding it.
     * @param {function} callback
     * Executed when the operation is complete.
     */previous(a){this.show(0===this.selectedIndex?this.children.length-1:this.selectedIndex-1),a&&a(this.selectedElement)}/**
     * @method show
     * Deselect the currently selected element and select a different one.
     * @param {number | string | HTMLElement} query
     * 1-based index,
     * Element selector string, or
     * HTMLElement to select
     */show(b){if(null===b)return void(this.selectedIndex||a.get(this).showChildByIndex(0));switch((typeof b).toLowerCase()){case"number":return a.get(this).showChildByIndex(b);case"string":return isNaN(parseInt(b))?a.get(this).showChildBySelector(b):a.get(this).showChildByIndex(parseInt(b));default:return b instanceof HTMLElement?a.get(this).showChild(b):console.error(`<chassis-cycle>: Invalid query "${b}"`);}}}}());