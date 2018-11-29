customElements.define("chassis-control",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";

:host {
  display: flex;
  contain: layout style;
  max-width: 100%;
}

:host *,
:host *:before,
:host *:after {
  box-sizing: border-box;
}

:host .hidden {
  display: none;
  visibility: hidden;
  opacity: 0;
}

:host([type="field"]) {
  flex-direction: column;
}

:host([type="toggle"]) {
  align-items: center;
}

:host .label-wrapper {
  flex: 1 1 auto;
  display: flex;
}

:host .input-wrapper {
  display: flex;
  align-items: center;
}

:host([type="toggle"]) .input-wrapper {
  order: -1;
  justify-content: center;
}

:host([type="select"]) {
  flex-direction: column;
}

chassis-control {
  display: flex;
  contain: layout style;
  max-width: 100%;
}

chassis-control *,
chassis-control *:before,
chassis-control *:after {
  box-sizing: border-box;
}

chassis-control .hidden {
  display: none;
  visibility: hidden;
  opacity: 0;
}

chassis-control[type="field"] {
  flex-direction: column;
}

chassis-control[type="toggle"] {
  align-items: center;
}

chassis-control .label-wrapper {
  flex: 1 1 auto;
  display: flex;
}

chassis-control .input-wrapper {
  display: flex;
  align-items: center;
}

chassis-control[type="toggle"] .input-wrapper {
  order: -1;
  justify-content: center;
}

chassis-control[type="select"] {
  flex-direction: column;
}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-control> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-control> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addPrivateProperties({fieldInputTypes:["color","date","datetime-local","email","file","hidden","image","month","number","password","range","reset","search","submit","tel","text","time","url","week","textarea"],toggleInputTypes:["checkbox","radio"],supportedTypes:["field","toggle","select"],input:null,initDatalist:(b,c)=>{if(this.type="field",!customElements.get("chassis-datalist")){console.dir(b),b.id=a.get(this).guid,c.id=`${b.id}_datalist`,b.setAttribute("list",c.id),b.slot=b.slot||"input",a.get(this).input=b;let d=c.querySelectorAll("option[title]");d.forEach(a=>select.removeChild(a));for(let a of c.options)a.hasAttribute("label")&&""===a.getAttribute("label").trim()&&a.removeAttribute("label");return}let d=document.createElement("chassis-datalist");d.slot="input";for(let a of c.attributes)a.specified&&(d.setAttribute(a.name,a.value),"autofocus"===a.name&&c.removeAttribute(a.name));this.removeChild(c),this.removeChild(b),d.inject(b,c,a.get(this).guid),this.appendChild(d),a.get(this).input=d},initInput:b=>{b.slot=b.slot||"input",a.get(this).input=b,b.id=a.get(this).guid,0<=a.get(this).fieldInputTypes.indexOf(b.type)&&(this.type="field"),0<=a.get(this).toggleInputTypes.indexOf(b.type)&&(this.type="toggle")},initLabel:b=>{this.label=b,b.slot=b.slot||"label",b.htmlFor=a.get(this).guid,"select"===this.type&&this.label.addEventListener("click",()=>{this.input.focus()})},initDefaultSelect:b=>{b.id=a.get(this).guid,b.slot=b.slot||"input",b.setAttribute("role","menu"),a.get(this).input=b;// Purge incompatible attributes
let c=b.querySelectorAll("option[title]");c.forEach(a=>b.removeChild(a));for(let a of b.options)a.hasAttribute("label")&&""===a.getAttribute("label").trim()&&a.removeAttribute("label")},initMultipleSelectMenu:b=>(this.type="select",customElements.get("chassis-select")?void a.get(this).initSelectSurrogate(b,document.createElement("chassis-select")):a.get(this).initDefaultSelect(b)),initSelectSurrogate:(b,c)=>{c.slot="input",c.id=a.get(this).guid;for(let a of b.attributes)a.specified&&(c.setAttribute(a.name,a.value),"autofocus"===a.name&&b.removeAttribute(a.name));this.removeChild(b),c.inject(b,this.querySelectorAll("label")),this.appendChild(c),a.get(this).input=c},initSelectMenu:b=>(this.type="select",customElements.get("chassis-select")?void a.get(this).initSelectSurrogate(b,document.createElement("chassis-select")):a.get(this).initDefaultSelect(b))})}static get observedAttributes(){return["disabled"]}get input(){return a.get(this).input}set input(b){return this.input?void console.warn(`Setting <chassis-control> child input programmatically is not allowed.`):void(a.get(this).input=b)}get type(){return this.getAttribute("type")}set type(a){this.setAttribute("type",a)}connectedCallback(){a.get(this).guid=a.get(this).generateGuid("control");let b=new MutationObserver((b,c)=>{let d=b.filter(a=>3!==a.addedNodes.item(0).nodeType);d.forEach((b,c,d)=>{let e=b.addedNodes.item(0);switch(e.nodeName){case"LABEL":return a.get(this).initLabel(e);case"INPUT":// Check if there is an additional element adjacent to the input
if(void 0===d[c+1])return a.get(this).initInput(e);let b=d[c+1].addedNodes.item(0);return b&&"DATALIST"===b.nodeName?a.get(this).initDatalist(e,b):a.get(this).initInput(e);case"TEXTAREA":return a.get(this).initInput(e);case"SELECT":return e.multiple?a.get(this).initMultipleSelectMenu(e):a.get(this).initSelectMenu(e);default:}}),c.disconnect()});b.observe(this,{childList:!0})}}}());