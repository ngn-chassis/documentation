if (!customElements.get('chassis-optgroup-label')) {
  customElements.define("chassis-optgroup-label",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-optgroup-label{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-optgroup-label *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforelabel"></slot><slot></slot><slot name="afterlabel"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-optgroup-label> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}})}connectedCallback(){}}}());
}
if (!customElements.get('chassis-optgroup')) {
  customElements.define("chassis-optgroup",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-optgroup{contain:content;display:flex;flex-direction:column;max-width:100%}:host :after,:host :before,chassis-optgroup *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptgroup"></slot><slot></slot><slot name="afteroptgroup"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-optgroup> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}})}connectedCallback(){}}}());
}
if (!customElements.get('chassis-option')) {
  customElements.define("chassis-option",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-option{contain:content;display:flex;flex-direction:column;max-width:100%}:host :after,:host :before,chassis-option *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoption"></slot><slot></slot><slot name="afteroption"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-option> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}}),this.parent=null,this.defaultSelected=!1,this.addEventListener("click",()=>{console.log("chassis-option")})}static get observedAttributes(){return["disabled","label","selected","value"]}get disabled(){return a.get(this).getBooleanPropertyValue("disabled")}set disabled(b){a.get(this).handleBooleanPropertyChange("disabled",b)}set form(b){return a.get(this).throw("readonly",{name:"form"})}get index(){return this.parent.options.findIndex(a=>a.displayElement===this)}set index(b){return a.get(this).throw("readonly",{name:"index"})}get label(){return a.get(this).sourceEl.label}set label(b){a.get(this).handlePropertyChange("label",b)}get selected(){return a.get(this).getBooleanPropertyValue("selected")}set selected(b){a.get(this).handleBooleanPropertyChange("selected",b)}get text(){return this.innerHTML}set text(a){this.innerHTML=a}get value(){return a.get(this).sourceEl.value}set value(b){a.get(this).handlePropertyChange("value",b)}attributeChangedCallback(b,c,d){if(b=b.toLowerCase(),d!==c)return"disabled"===b||"selected"===b?a.get(this).handleBooleanAttributeChange(b,d):"label"===b||"value"===b?a.get(this).handleAttributeChange(b,d):void 0}connectedCallback(){}/**
     * @method remove
     * Remove this option from the DOM.
     * @override
     */remove(){this.parent.removeOptionByIndex(this.index,!1),super.remove()}}}());
}
if (!customElements.get('chassis-options')) {
  customElements.define("chassis-options",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-options> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}}),this.parent=null,this.addEventListener("click",()=>{console.log("chassis-options")}),a.get(this).options=[],a.get(this).optionConstructor=function(){let a=new WeakMap;return class{constructor(b,c,d,e){this.id=b,this.key=d.key,this.displayElement=d,this.sourceElement=c,this.defaultSelected=c.selected,this.form=e,this.index=null,a.set(this,{attributes:{disabled:c.disabled,id:c.getAttribute("id"),label:c.getAttribute("label")||c.textContent.trim(),selected:c.selected,value:c.getAttribute("value"),text:c.text}}),this.displayElement.innerHTML=this.sourceElement.innerHTML;// Add additional attributes
for(let f of c.attributes)if(!a.get(this).attributes.hasOwnProperty(f.name)){if("boolean"==typeof f.value){f.value?this.displayElement.setAttribute(f.name,""):this.displayElement.removeAttribute(f.name);continue}this.displayElement.setAttribute(f.name,f.value)}}get disabled(){return a.get(this).attributes.disabled}set disabled(a){this.setAttr("disabled",a)}get selected(){return a.get(this).attributes.selected}set selected(a){this.setAttr("selected",a)}get label(){return a.get(this).attributes.label}set label(a){this.setAttr("label",a)}get text(){return a.get(this).attributes.text}set text(a){this.setAttr("text",a)}get value(){return a.get(this).attributes.value}set value(a){this.setAttr("value",a)}setAttr(b,c){this.sourceElement[b]=c,"boolean"==typeof c?c?this.displayElement.setAttribute(b,""):this.displayElement.removeAttribute(b):this.displayElement.setAttribute(b,c),a.get(this).attributes[b]=c}}},a.get(this).generateOptionObject=b=>customElements.get("chassis-option")?new(a.get(this).optionConstructor())(a.get(this).generateGuid(),b,a.get(this).generateDisplayOptionElement(this),this.form):void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`),a.get(this).generateDisplayOptionElement=b=>{let c=document.createElement("chassis-option");return c.key=a.get(this).generateGuid(),c.parent=b,c.addEventListener("click",b=>{a.get(this).selectByKey(c.key,this.parent.multiple,{shift:b.shiftKey,ctrl:b.ctrlKey,cmd:b.metaKey})}),c},a.get(this).generateSourceOptionElement=a=>{let b=document.createElement("option");return a.hasOwnProperty("innerHTML")&&(b.innerHTML=a.innerHTML),a.hasOwnProperty("label")&&(b.innerHTML=a.label),a.hasOwnProperty("value")&&(b.value=a.value),a.hasOwnProperty("disabled")&&(b.disabled="boolean"==typeof a.disabled&&a.disabled),b},a.get(this).generateOptgroup=b=>{if(!customElements.get("chassis-optgroup"))return void console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`);let c=document.createElement("chassis-optgroup");c.id=a.get(this).generateGuid("optgroup");let d=b.getAttribute("label");if(!d||""===d.trim())return void console.error("<optgroup> must have a label attribute!");c.setAttribute("label",d);let e=b.querySelectorAll("option");for(let d of e)this.add(a.get(this).generateOptionObject(d),null,c);return c},a.get(this).getOptionByKey=a=>{let b;for(let c=0;c<this.options.length;c++)if(this.options[c].key===a){b=this.options[c];break}return b},a.get(this).ChassisHTMLCollection=function(){let a=new WeakMap;return class{constructor(b){a.set(this,{arr:b}),b.forEach((a,b)=>this[b]=a)}get length(){return a.get(this).arr.length}item(b){return a.get(this).arr[b]}namedItem(b){let c=a.get(this).arr.filter(a=>a.id===b||a.name===b);return 0<c.length?c[0]:null}}},a.get(this).ChassisOptionsCollection=()=>{new WeakMap;return class extends a.get(this).ChassisHTMLCollection(){constructor(a,b=-1,c,d){super(a),this.selectedIndex=b,this.add=c,this.remove=d}}},a.get(this).selectByKey=(b,c=!1,d={})=>{let e=a.get(this).getOptionByKey(b);return e?void this.select(e,c,d):(console.error(`Invalid option key "${b}"`),this.deselectAll())},a.get(this).selectByIndex=(a,b=!1,c={})=>{let d=this.options[a];return d?void this.select(d,b,c):0<=a?console.error(`No option at index ${a}`):this.deselectAll()}}get form(){return this.parent.form}set form(b){return a.get(this).throw("readonly",{name:"form"})}get displayOptions(){return new(a.get(this).ChassisOptionsCollection())(this.options.map(a=>a.displayElement),this.selectedIndex,(b,c)=>{this.add(a.get(this).generateOptionObject(b),c)},a=>this.removeOptionByIndex(a))}set displayOptions(b){return a.get(this).throw("readonly",{name:"displayOptions"})}get options(){return a.get(this).options}set options(b){return a.get(this).throw("readonly",{name:"options"})}get selectedIndex(){return this.options.findIndex(a=>a.displayElement===this.selectedOptions.item(0))}set selectedIndex(b){a.get(this).selectByIndex(b)}get selectedOptions(){let b=this.querySelectorAll("[selected]");return new(a.get(this).ChassisHTMLCollection())(b)}set selectedOptions(b){return a.get(this).throw("readonly",{name:"selectedOptions"})}connectedCallback(){}add(b,c=null,d=this){return customElements.get("chassis-option")?(b instanceof Option&&(b=a.get(this).generateOptionObject(b)),c?(b.index=c,d.insertBefore(b.displayElement,d.children.item(c)),this.parent[`${c}`]=b.displayElement,this.options.splice(c,0,b),this.parent.sourceElement.add(b.sourceElement,c),void(b.selected&&a.get(this).selectByIndex(c))):void(d.appendChild(b.displayElement),b.index=this.options.length,this.parent[`${this.options.length}`]=b.displayElement,this.options.push(b),!this.parent.sourceElement[this.options.length-1]&&this.parent.sourceElement.appendChild(b.sourceElement),b.selected&&a.get(this).selectByKey(b.key))):void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)}addChildren(b){for(let c of b){let b=c instanceof HTMLElement;switch(c.nodeName){case"OPTION":this.add(b?a.get(this).generateOptionObject(c):c);break;case"OPTGROUP":this.addOptgroup(b?a.get(this).generateOptgroup(c):c);break;default:console.warn(`${c.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`);}}}addOptgroup(a){let b=document.createElement("chassis-optgroup-label");b.innerHTML=a.getAttribute("label"),this.appendChild(b),this.appendChild(a)}clear(){for(;this.lastChild;)this.removeChild(this.lastChild)}deselect(a){a.selected=!1}deselectAll(){this.parent.selectedOptionsEl.clear(),this.options.forEach(a=>this.deselect(a))}item(a){return this.options[a].displayElement}namedItem(a){let b=this.options.filter(b=>{let c=b.sourceElement.attributes.getNamedItem("id");return c&&c.value===a});return b.length?b[b.length-1].displayElement:null}/**
     * @method removeOptionByIndex
     * @param  {Number}  [index=null]
     * Index of option to remove
     * @param  {Boolean} [destroy=true]
     */removeOptionByIndex(a=null,b=!0){if(!(null===a||a>=this.options.length)){let c=this.options[a];c.sourceElement.remove(),b&&c.displayElement.remove(),this.options.splice(a,1)}}/**
     * [select description]
     * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
     */select(b,c=!1,d={}){if("number"==typeof b)return a.get(this).selectByIndex(b);let e=!0;if(c){if(d.shift&&console.log("shift key held"),d.cmd||d.ctrl){if(b.selected)return this.deselect(b);e=!1}}else if(b.selected)return;// TODO: Handle this in chassis-selected-options
e&&this.deselectAll(),b.selected=!0,this.parent.selectedOptionsEl.add(b),this.parent.selectedOptionsEl.removeAttribute("placeholder"),this.dispatchChangeEvent()}}}());
}
if (!customElements.get('chassis-select')) {
  customElements.define("chassis-select",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-select{display:inline-block;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeselectedoptions"></slot><slot name="selectedoptions"></slot><slot name="afterselectedoptions"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-select> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}}),this.addEventListener("click",()=>{console.log("chassis-select")}),a.get(this).addReadOnlyProps(["form","labels","willValidate","type","validationMessage","validity"]),a.get(this).addPrivateProps({placeholder:"",title:"",arrowKeydownHandler:a=>{switch(a[this.keySource]){case 38:case"ArrowUp":if(a.preventDefault(),!this.isOpen)return this.open();console.log("select previous option");break;case 40:case"ArrowDown":if(a.preventDefault(),!this.isOpen)return this.open();console.log(this.options);break;default:}},bodyClickHandler:a=>{a.target===this||this.contains(a.target)||this.removeAttribute("open")}})}static get observedAttributes(){return["autofocus","disabled","multiple","name","open","tabindex"]}get autofocus(){return a.get(this).getBooleanPropertyValue("autofocus")}set autofocus(b){a.get(this).handleBooleanPropertyChange("autofocus",b)}get disabled(){return a.get(this).getBooleanPropertyValue("disabled")}set disabled(b){a.get(this).handleBooleanPropertyChange("disabled",b)}get isOpen(){return this.multiple?null:this.hasAttribute("open")}set isOpen(a){this.multiple||(a?this.setAttribute("open",""):this.removeAttribute("open"))}get length(){return a.get(this).sourceEl.length}get multiple(){return a.get(this).getBooleanPropertyValue("multiple")}set multiple(b){b&&this.hasAttribute("open")&&this.removeAttribute("open"),a.get(this).handleBooleanPropertyChange("multiple",b)}get name(){return a.get(this).sourceEl.name}set name(b){a.get(this).handlePropertyChange("name",b)}get options(){return a.get(this).optionsEl.displayOptions}set options(b){return a.get(this).throw("readonly",{name:"options"})}get placeholder(){return a.get(this).placeholder}set placeholder(b){a.get(this).placeholder=b}get required(){return a.get(this).getBooleanPropertyValue("required")}set required(b){a.get(this).handleBooleanPropertyChange("required",b)}get selectedIndex(){return a.get(this).optionsEl.selectedIndex}set selectedIndex(b){return 0>b?this.deselectAll():void(a.get(this).optionsEl.selectedIndex=b)}get selectedOptions(){return a.get(this).optionsEl?a.get(this).optionsEl.selectedOptions:null}set selectedOptions(b){return a.get(this).throw("readonly",{name:"selectedOptions"})}get sourceElement(){return a.get(this).sourceEl}get value(){return a.get(this).sourceEl.value}add(b,c){a.get(this).optionsEl.add(b,c)}attributeChangedCallback(b,c,d){if(b=b.toLowerCase(),d!==c)switch(b){case"autofocus":case"disabled":return a.get(this).handleBooleanAttributeChange(b,d);case"multiple":if(a.get(this).handleBooleanAttributeChange(b,d),!d&&this.selectedOptions){let a=this.selectedIndex;this.deselectAll(),this.select(a)}break;case"name":return a.get(this).handleAttributeChange(b,d);case"open":return this.multiple?void 0:this.isOpen?this.open():this.close();}}checkValidity(){return a.get(this).sourceEl.checkValidity()}clear(){a.get(this).optionsEl.clear()}close(){this.multiple||(document.body.removeEventListener("click",a.get(this).bodyClickHandler),document.body.removeEventListener("touchcancel",a.get(this).bodyClickHandler),document.body.removeEventListener("touchend",a.get(this).bodyClickHandler),this.isOpen&&(this.isOpen=!1))}connectedCallback(){this.addEventListener("click",()=>{this.multiple||(this.hasAttribute("open")?this.removeAttribute("open"):this.setAttribute("open",""))}),this.addEventListener("focus",()=>{this.addEventListener("keydown",a.get(this).arrowKeydownHandler)}),this.addEventListener("blur",()=>{this.removeEventListener("keydown",a.get(this).arrowKeydownHandler)}),setTimeout(()=>{this.hasAttribute("tabindex")||this.setAttribute("tabindex",0),this.autofocus&&this.focus()},0)}deselectAll(){a.get(this).optionsEl.deselectAll()}inject(b){a.get(this).sourceEl=b,a.get(this).optionsEl=document.createElement("chassis-options"),a.get(this).optionsEl.parent=this,a.get(this).optionsEl.dispatchChangeEvent=()=>{this.dispatchEvent(new Event("change",{bubbles:!0}))},this.selectedOptionsEl=document.createElement("chassis-selected-options"),this.selectedOptionsEl.parent=this,this.selectedOptionsEl.slot="selectedoptions",this.appendChild(this.selectedOptionsEl),a.get(this).optionsEl.slot="options",this.appendChild(a.get(this).optionsEl),a.get(this).placeholder=this.getAttribute("placeholder"),0<b.children.length?(a.get(this).optionsEl.addChildren(b.children),this.select(this.selectedIndex)):this.deselectAll()}item(b){return a.get(this).optionsEl.item(b)}namedItem(b){return a.get(this).optionsEl.namedItem(b)}open(){this.multiple||(document.body.addEventListener("click",a.get(this).bodyClickHandler),document.body.addEventListener("touchcancel",a.get(this).bodyClickHandler),document.body.addEventListener("touchend",a.get(this).bodyClickHandler),!this.isOpen&&(this.isOpen=!0))}/**
     * method querySelector
     * @param  {string} selector
     * @return {HTMLElement}
     * @override
     */querySelector(a){return":checked"===a?0<this.selectedOptions.length?this.selectedOptions[0]:null:super.querySelector(a)}/**
     * method querySelectorAll
     * @param  {string} selector
     * @return {NodeList}
     * @override
     */querySelectorAll(b){return":checked"===b?a.get(this).optionsEl.querySelectorAll("[selected]"):super.querySelectorAll(b)}remove(b=null){return null===b?super.remove():void a.get(this).optionsEl.removeOptionByIndex(b)}select(b){a.get(this).optionsEl.select(b)}setCustomValidity(b){a.get(this).sourceEl.setCustomValidity(b)}}}());
}
if (!customElements.get('chassis-selected-options')) {
  customElements.define("chassis-selected-options",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-selected-options{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-selected-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforecontents"></slot><div class="contents"><slot id="contents"></slot></div><slot name="aftercontents"></slot><div class="beforeend"><slot name="beforeend"></slot></div></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{addPrivateProps:b=>{for(let c in b)a.get(this)[c]=b[c]},addReadOnlyProp:b=>{Object.defineProperty(this,b,a.get(this).readonlyProperty(b))},addReadOnlyProps:b=>{b.forEach(b=>a.get(this).addReadOnlyProp(b))},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},getBooleanPropertyValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),handleAttributeChange:(b,c)=>{a.get(this).sourceEl&&(this.setAttribute(b,c),a.get(this).sourceEl[b]=c)},handleBooleanAttributeChange:(b,c)=>{if(a.get(this).sourceEl){return["true","false","",null].includes(c)?"false"===c&&this.hasAttribute(b)?(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)):void(a.get(this).sourceEl[b]=this.hasAttribute(b)):(console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1))}},handleBooleanPropertyChange:(b,c)=>c?void((!this.hasAttribute(b)||"true"!==this.getAttribute(b))&&(this.setAttribute(b,""),a.get(this).sourceEl[b]=!0)):(this.removeAttribute(b),void(a.get(this).sourceEl[b]=!1)),handlePropertyChange:(b,c)=>{a.get(this).sourceEl[b]=c,this.hasAttribute(b)&&this.getAttribute(b)===c||this.setAttribute(b,c)},readonlyProperty:b=>({get:()=>a.get(this).sourceEl[b],set:()=>a.get(this).throw("readonly",{name:b})}),throw:(a,b)=>{let c="ERROR <chassis-selected-options> ";"readonly"===a?c+=`Cannot set read-only property "${b.name}".`:c=c.trim();console.error(c)}}),this.parent=null,a.get(this).contentsEl=this.shadowRoot.querySelector("#contents"),a.get(this).options=[],a.get(this).generateList=()=>{a.get(this).contentsEl.innerHTML=a.get(this).options.map(a=>a.displayElement.text).join(", ")}}add(b){this.parent.multiple?a.get(this).options.push(b):a.get(this).options=[b],a.get(this).generateList()}clear(){a.get(this).options=[],this.setAttribute("placeholder",""),a.get(this).generateList()}connectedCallback(){this._appendCaret()}_appendCaret(){let a=24,b=24,c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.slot="beforeend",c.setAttributeNS(null,"width",a),c.setAttributeNS(null,"height",b),c.setAttributeNS(null,"viewBox",`0 0 ${a} ${b}`),c.setAttributeNS(null,"fill","none"),c.setAttributeNS(null,"stroke","currentColor"),c.setAttributeNS(null,"stroke-width","3"),c.setAttributeNS(null,"stroke-linecap","square"),c.setAttributeNS(null,"stroke-linejoin","miter");let d=document.createElementNS("http://www.w3.org/2000/svg","polyline");d.setAttributeNS(null,"points","6 9 12 15 18 9"),c.appendChild(d),this.appendChild(c)}}}());
}
