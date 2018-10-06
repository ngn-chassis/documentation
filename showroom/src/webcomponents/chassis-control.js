customElements.define("chassis-control",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:layout style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}:host([type=select]){flex-direction:column}chassis-control{display:flex;contain:layout style;max-width:100%}:host :after,:host :before,chassis-control *{box-sizing:border-box}chassis-control .hidden{display:none;visibility:hidden;opacity:0}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control .label-wrapper{flex:1 1 auto;display:flex}chassis-control .input-wrapper{display:flex;align-items:center}chassis-control[type=toggle] .input-wrapper{order:-1;justify-content:center}chassis-control[type=select]{flex-direction:column}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-control> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}}),a.get(this).addPrivateProps({fieldInputTypes:["color","date","datetime-local","email","file","hidden","image","month","number","password","range","reset","search","submit","tel","text","time","url","week","textarea"],toggleInputTypes:["checkbox","radio"],supportedTypes:["field","toggle","select"],input:null,initDatalist:(b,c)=>{if(this.type="field",!!customElements.get("chassis-datalist"))// Setup defaults
{let d=document.createElement("chassis-datalist");d.slot="input";for(let a of c.attributes)a.specified&&(d.setAttribute(a.name,a.value),"autofocus"===a.name&&c.removeAttribute(a.name));this.removeChild(c),this.removeChild(b),d.inject(b,c,a.get(this).guid),this.appendChild(d),a.get(this).input=d}},initInput:b=>{b.slot=b.slot||"input",a.get(this).input=b,b.id=a.get(this).guid,0<=a.get(this).fieldInputTypes.indexOf(b.type)&&(this.type="field"),0<=a.get(this).toggleInputTypes.indexOf(b.type)&&(this.type="toggle")},initLabel:b=>{this.label=b,b.slot=b.slot||"label",b.htmlFor=a.get(this).guid,"select"===this.type&&this.label.addEventListener("click",()=>{this.input.focus()})},initSelectMenu:b=>{if(this.type="select",!customElements.get("chassis-select")){b.id=a.get(this).guid,b.slot=b.slot||"input",b.setAttribute("role","menu"),a.get(this).input=b;let c=b.querySelectorAll("option[title]");c.forEach(a=>b.removeChild(a));for(let a of b.options)a.hasAttribute("label")&&""===a.getAttribute("label").trim()&&a.removeAttribute("label");return}let c=document.createElement("chassis-select");c.slot="input",c.id=a.get(this).guid;for(let a of b.attributes)a.specified&&(c.setAttribute(a.name,a.value),"autofocus"===a.name&&b.removeAttribute(a.name));this.removeChild(b),c.inject(b),this.appendChild(c),a.get(this).input=c}})}static get observedAttributes(){return["disabled"]}get input(){return a.get(this).input}set input(b){return this.input?void console.warn(`Setting <chassis-control> child input programmatically is not allowed.`):void(a.get(this).input=b)}get type(){return this.getAttribute("type")}set type(a){this.setAttribute("type",a)}connectedCallback(){a.get(this).guid=a.get(this).generateGuid("control"),setTimeout(()=>{let b=this.querySelector("label"),c=this.querySelector("input"),d=this.querySelector("textarea"),e=this.querySelector("select"),f=this.querySelector("datalist");d&&a.get(this).initInput(d),e&&a.get(this).initSelectMenu(e),c&&(f?a.get(this).initDatalist(c,f):a.get(this).initInput(c)),b&&a.get(this).initLabel(b)})}}}());