customElements.define("chassis-options",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-options> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-options> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addReadOnlyProperties([{name:"form",get(){return this.parentNode.form}},{name:"displayOptions",get(){return new(a.get(this).ChassisHTMLOptionsCollection())(this.options.map(a=>a.displayElement),this.selectedIndex,(b,c)=>{this.add(a.get(this).generateOptionObject(b),c)},a=>this.removeOptionByIndex(a))}},{name:"hoveredIndex",get(){return this.options.findIndex(a=>a.displayElement.hover)}},{name:"multiple",get(){return this.parentNode.multiple}},"options",{name:"selectedOptions",get(){let b=this.querySelectorAll("[selected]");return new(a.get(this).ChassisHTMLCollection())(b)}}]),a.get(this).addPrivateProperties({options:[],selectionStartIndex:-1,optionSelectionHandler:b=>{let{ChassisHTMLCollection:c,emit:d,Selection:e,selectionStartIndex:f}=a.get(this),{index:g,shiftKey:h,metaKey:i,ctrlKey:j}=b.detail,k=this.options[g],l={shiftKey:h,metaKey:i,ctrlKey:j},m=new e,n=a=>{let{beforeChange:b}=this.parentNode,e=()=>(l.options=m.options,l.previous=this.selectedOptions,l.next=new(c())(m.displayElements),a(),d("options.selected",l,this.parentNode));return b&&"function"==typeof b?void b(this.selectedOptions,l.next,e):e()};if(this.multiple){if(i||j)return m.options=this.options.filter(a=>a.selected||a.index===g&&!a.selected),a.get(this).selectionStartIndex=g,n(()=>k.selected=!k.selected);if(h){let a=[g,f].sort();return a[0]===a[1]?void 0:(m.options=this.options.slice(a[0],a[1]+1),n(()=>{this.deselectAll(),m.options.forEach(a=>a.selected=!0)}))}}else if(g===this.selectedIndex)return;m.options=[k],a.get(this).selectionStartIndex=g,n(()=>{this.deselectAll(),k.selected=!0})},parentStateChangeHandler:b=>{a.get(this).emit("state.change",b.detail);let{name:c,value:d}=b.detail;switch(c){case"multiple":if(!d&&0<this.selectedOptions.length){let b=this.selectedIndex;this.deselectAll(),a.get(this).emit("option.selected",{index:b})}break;default:}},Selection:class{constructor(a=[]){this.options=a}get displayElements(){return this.options.map(a=>a.displayElement)}get length(){return this.options.length}append(a){this.options.push(a)}clear(){this.options=[]}prepend(a){this.options.unshift(a)}},OptionConstructor:()=>{let b=new WeakMap,c=a.get(this).optionSelectionHandler;return class{constructor(a,c,d,e){this.key=c,this.form=a.form,this.defaultSelected=d.selected,this.sourceElement=d,this.displayElement=e,this.displayElement.parent=a,this.displayElement.defaultSelected=d.selected,this.displayElement.innerHTML=d.innerHTML;// Add additional attributes
for(let b of d.attributes){if("boolean"==typeof b.value){b.value?this.displayElement.setAttribute(b.name,""):this.displayElement.removeAttribute(b.name);continue}this.displayElement.setAttribute(b.name,b.value)}b.set(this,{attributes:{disabled:d.disabled,id:d.getAttribute("id"),label:d.getAttribute("label")||d.textContent.trim(),selected:d.selected,value:d.getAttribute("value").trim(),text:d.text.trim()}})}get disabled(){return b.get(this).attributes.disabled}set disabled(a){this.setAttr("disabled",a)}get index(){return this.sourceElement.index}get id(){return b.get(this).attributes.id}set id(a){this.setAttr("id",a)}get selected(){return b.get(this).attributes.selected}set selected(a){this.setAttr("selected",a)}get label(){return b.get(this).attributes.label}set label(a){this.setAttr("label",a)}get text(){return b.get(this).attributes.text}set text(a){this.setAttr("text",a)}get value(){return b.get(this).attributes.value}set value(a){this.setAttr("value",a)}remove(){this.sourceElement.remove(),this.displayElement.remove()}setAttr(a,c){this.sourceElement[a]=c,"boolean"==typeof c?c?this.displayElement.setAttribute(a,""):this.displayElement.removeAttribute(a):this.displayElement.setAttribute(a,c),b.get(this).attributes[a]=c}}},generateOptionObject:b=>customElements.get("chassis-option")?new(a.get(this).OptionConstructor())(this,a.get(this).generateGuid(),b,document.createElement("chassis-option")):void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`),generateSourceOptionElement:a=>{let b=document.createElement("option");return a.hasOwnProperty("innerHTML")&&(b.innerHTML=a.innerHTML),a.hasOwnProperty("label")&&(b.innerHTML=a.label),a.hasOwnProperty("value")&&(b.value=a.value),a.hasOwnProperty("disabled")&&(b.disabled="boolean"==typeof a.disabled&&a.disabled),b},generateOptgroup:b=>{if(!customElements.get("chassis-optgroup"))return void console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`);let c=document.createElement("chassis-optgroup");c.id=a.get(this).generateGuid("optgroup");let d=b.getAttribute("label");if(!d||""===d.trim())return void console.error("<optgroup> must have a label attribute!");c.setAttribute("label",d);let e=b.querySelectorAll("option");for(let d of e)this.add(a.get(this).generateOptionObject(d),null,c);return c},ChassisHTMLCollection(){let a=new WeakMap;return class{constructor(b){a.set(this,{arr:b}),b.forEach((a,b)=>{this[b]=a,a.id&&(this[a.id]=a)})}get length(){return a.get(this).arr.length}item(b){return a.get(this).arr[b]}namedItem(b){let c=a.get(this).arr.filter(a=>a.id===b||a.name===b);return 0<c.length?c[0]:null}[Symbol.iterator](){let b=0;return{next:()=>{let c={value:a.get(this).arr[b],done:!(b in a.get(this).arr)};return b++,c}}}[Symbol.toStringTag](){return"ChassisHTMLCollection"}}},ChassisHTMLOptionsCollection:()=>{let b=new WeakMap,c=class extends a.get(this).ChassisHTMLCollection(){constructor(a,c=-1,d,e){super(a),this.selectedIndex=c,this.add=d,this.remove=e,b.set(this,{arr:a})}[Symbol.toStringTag](){return"ChassisHTMLOptionsCollection"}};return c}// selectByKey: (key, ...keys) => {
//   let option = _.get(this).getOptionByKey(key)
//
//   if (!option) {
//     console.error(`Invalid option key "${key}"`)
//     return this.deselectAll()
//   }
//
//   this.select(option, ...keys)
// },
//
// selectByIndex: (index, ...keys) => {
//   let option = this.options[index]
//
//   if (!option) {
//     if (index >= 0) {
//       return console.error(`No option at index ${index}`)
//     }
//
//     return
//   }
//
//   this.select(option, ...keys)
// },
//
// selectByString: (string, ...keys) => {
//   let query
//
//   for (let option of this.options) {
//     if (option.key === string || option.id === string) {
//       query = option
//       break
//     }
//   }
//
//   if (!query) {
//     console.error(`Option matching query "${key}" not found`)
//     return
//   }
//
//   this.select(query, ...keys)
// }
})}get selectedIndex(){return 0===this.selectedOptions.length?void 0:this.selectedOptions.item(0).index}set selectedIndex(b){a.get(this).emit("option.selected",b)}get selectionStartIndex(){return a.get(this).selectionStartIndex}set selectionStartIndex(a){console.warn(`WARNING <chassis-select> selectionStartIndex cannot be set manually.`)}hoverOption(a){this.unHoverAllOptions(),this.options[a].displayElement.hover=!0}unHoverOption(a){this.options[a].displayElement.hover=!1}unHoverAllOptions(){this.options.forEach((a,b)=>this.unHoverOption(b))}add(b,c=null,d=this){return customElements.get("chassis-option")?void(b instanceof Option&&(b=a.get(this).generateOptionObject(b)),this.parentNode[`${b.index}`]=b.displayElement,c?(d.insertBefore(b.displayElement,d.children.item(c)),this.options.splice(c,0,b),this.parentNode.sourceElement.add(b.sourceElement,c)):(d.appendChild(b.displayElement),this.options.push(b),!this.parentNode.sourceElement[this.options.length-1]&&this.parentNode.sourceElement.appendChild(b.sourceElement))):void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)}addChildren(b){for(let c of b){let b=c instanceof HTMLElement;switch(c.nodeName){case"OPTION":this.add(b?a.get(this).generateOptionObject(c):c);break;case"OPTGROUP":this.addOptgroup(b?a.get(this).generateOptgroup(c):c);break;default:console.warn(`${c.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`);}}}addOptgroup(a){let b=document.createElement("chassis-optgroup-label");b.innerHTML=a.getAttribute("label"),this.appendChild(b),this.appendChild(a)}clear(){for(;this.lastChild;)this.removeChild(this.lastChild)}connectedCallback(){this.addEventListener("option.selected",a.get(this).optionSelectionHandler),this.parentNode.addEventListener("state.change",a.get(this).parentStateChangeHandler),a.get(this).selectionStartIndex=0<=this.selectedIndex?this.selectedIndex:0}disconnectedCallback(){this.removeEventListener("option.selected",a.get(this).optionSelectionHandler),this.parentNode.removeEventListener("state.change",a.get(this).parentStateChangeHandler)}deselect(a,b=!0){"number"==typeof a&&(a=this.options[a]),a.selected=!1,this.parentNode.selectedOptionsElement.remove(a,b)}deselectAll(a=!0){this.options.filter(a=>a.selected).forEach((b,c,d)=>{this.deselect(b,c=d.length-1&&a)})}item(a){return this.options[a].displayElement}namedItem(a){let b=this.options.filter(b=>{let c=b.sourceElement.attributes.getNamedItem("id");return c&&c.value===a});return b.length?b[b.length-1].displayElement:null}/**
     * @method removeOptionByIndex
     * @param  {Number}  [index=null]
     * Index of option to remove
     * @param  {Boolean} [destroy=true]
     */removeOptionByIndex(a=null){null===a||a>=this.options.length||this.options[a].remove()}/**
     * [select description]
     * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
     */ // select (option, input, shiftKey = false, ctrlKey = false, metaKey = false, startIndex = null) {
//   let keys = Array.prototype.slice.call(arguments, 1)
//
//   if (Array.isArray(option)) {
//     return console.log('Handle array of indexes')
//   }
//
//   if (typeof option === 'number') {
//     return _.get(this).selectByIndex(option, ...keys)
//   }
//
//   if (typeof option === 'string') {
//     return _.get(this).selectByString(option, ...keys)
//   }
//
//   if (typeof option !== 'object') {
//     return console.error(`ERROR <chassis-select> Cannot select option type "${typeof option}"`)
//   }
//
//   let selection = new (_.get(this).selection)([option])
//
//   if (selection.length === 1) {
//     _.get(this).selectionStartIndex = option.index
//   }
//
//   if (this.parentNode.multiple) {
//     let { selectionStartIndex } = _.get(this)
//
//     if (startIndex) {
//       selectionStartIndex = startIndex
//     }
//
//     if (shiftKey) {
//       console.log('shift key');
//     } else if (ctrlKey || metaKey) {
//       _.get(this).selectionStartIndex = option.index
//
//       deselectAll = false
//     }
//
//   } else if (option.selected) {
//     return
//   }
//
//   let completeChange = () => {
//     let previouslySelectedOptions = this.selectedOptions
//
//     deselectAll && this.deselectAll(false)
//     selection.options.forEach(option => option.selected = true)
//
//     this.parentNode.dispatchEvent(new Event('change', {
//       bubbles: true
//     }))
//
//     if (this.parentNode.afterChange && typeof this.parentNode.afterChange === 'function') {
//       this.parentNode.afterChange(previouslySelectedOptions, this.selectedOptions)
//     }
//   }
//
//   if (this.parentNode.beforeChange && typeof this.parentNode.beforeChange === 'function') {
//     let collection = new (_.get(this).ChassisHTMLCollection())(selection.options.map(option => option.displayElement))
//     return this.parentNode.beforeChange(this.selectedOptions, collection, completeChange)
//   }
//
//   completeChange()
//
//   // if (this.parentNode.multiple) {
//   //   let { selectionStartIndex } = _.get(this)
//   //
//   //   if (startIndex) {
//   //     selectionStartIndex = startIndex
//   //   }
//   //
//   //   // TODO: Refactor to use bounding method
//   //   if (shiftKey) {
//   //     if (this.selectedOptions.length === 1) {
//   //       if (option.index === this.selectedIndex) {
//   //         return
//   //       }
//   //
//   //       selection.clear()
//   //
//   //       if (option.index < this.selectedIndex) {
//   //         for (let i = this.selectedIndex; i >= option.index; i--) {
//   //           selection.prepend(this.options[i])
//   //         }
//   //       }
//   //
//   //       if (option.index > this.selectedIndex) {
//   //         for (let i = this.selectedIndex; i <= option.index; i++) {
//   //           selection.append(this.options[i])
//   //         }
//   //       }
//   //     }
//   //
//   //     if (this.selectedOptions.length > 1 && option.index !== selectionStartIndex) {
//   //       selection.clear()
//   //
//   //       if (option.index < selectionStartIndex) {
//   //         for (let i = selectionStartIndex; i >= option.index; i--) {
//   //           selection.prepend(this.options[i])
//   //         }
//   //       }
//   //
//   //       if (option.index > selectionStartIndex) {
//   //         for (let i = selectionStartIndex; i <= option.index; i++) {
//   //           selection.append(this.options[i])
//   //         }
//   //       }
//   //     }
//   //   } else if (ctrlKey || metaKey) {
//   //     _.get(this).selectionStartIndex = option.index
//   //
//   //     if (option.selected) {
//   //       return this.deselect(option)
//   //     }
//   //
//   //     deselectAll = false
//   //   }
//   // } else if (option.selected) {
//   //   return
//   // }
// }
}}());