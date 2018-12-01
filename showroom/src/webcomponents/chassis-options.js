customElements.define("chassis-options",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";

:host {
  display: block;
  width: 100%;
}

:host *,
:host *:before,
:host *:after {
  box-sizing: border-box;
}

chassis-options {
  display: block;
  width: 100%;
}

chassis-options *,
chassis-options *:before,
chassis-options *:after {
  box-sizing: border-box;
}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-options> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-options> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addReadOnlyProperties([{name:"form",get(){return this.parentNode.form}},{name:"displayOptions",get(){return new(a.get(this).ChassisHTMLOptionsCollection())(this.options.map(a=>a.displayElement),this.selectedIndex,(b,c)=>{this.add(a.get(this).generateOptionObject(b),c)},a=>this.removeOptionByIndex(a))}},{name:"hoveredIndex",get(){return this.options.findIndex(a=>a.displayElement.hover)}},{name:"multiple",get(){return this.parentNode.multiple}},"options",{name:"selectedIndexes",get(){let a=[];for(let b of this.selectedOptions)a.push(b.index);return a}},{name:"selectedOptions",get(){let b=this.querySelectorAll("[selected]");return new(a.get(this).ChassisHTMLCollection())(b)}}]),a.get(this).addPrivateProperties({options:[],selectionStartIndex:null,lastSelectedIndex:null,cherryPicked:null,getCurrentSelection:()=>this.options.filter(a=>a.selected),selectedOptionsAreSequential:()=>{let a=Array.from(this.selectedOptions).map(a=>a.index);return a.every((b,c)=>c===a.length-1||b<a[c+1])},arrowDownHandler:b=>{if(!this.multiple){let{startIndex:a}=b.detail;return a===this.options.length-1?void 0:this.hoverOption(a+1)}let{lastSelectedIndex:c}=a.get(this);return c===this.options.length-1?void 0:a.get(this).emit("option.selected",{index:null===c?0:c+1,keyboard:!0,shiftKey:b.detail.shiftKey,ctrlKey:!1,metaKey:!1})},arrowUpHandler:b=>{if(!this.multiple){let{startIndex:a}=b.detail;return-1===a||0===a?void 0:this.hoverOption(a-1)}let{lastSelectedIndex:c}=a.get(this);return 0===c?void 0:a.get(this).emit("option.selected",{index:null===c?this.options.length-1:c-1,keyboard:!0,shiftKey:b.detail.shiftKey,ctrlKey:!1,metaKey:!1})},getSelectedOptionsAsArray:()=>Array.from(this.selectedOptions),selectedOptionsAreSequential:()=>{if(1===this.selectedOptions.length)return!0;let b=a.get(this).getSelectedOptionsAsArray().map(a=>a.index);return b.every((a,c)=>a===b[c+1]-1||c===b.length-1)},selectedOptionsContainsStartIndex:()=>{let b=a.get(this).getSelectedOptionsAsArray().map(a=>a.index);return b.some(b=>b===a.get(this).selectionStartIndex)},diffSelections:(a,b)=>a.filter(a=>!b.includes(a)),optionSelectionHandler:b=>{let{cherryPicked:c,diffSelections:d,getCurrentSelection:e,emit:f,ChassisHTMLCollection:g,handleClickSelection:h,handleKeyboardSelection:i,Selection:j}=a.get(this);null===c&&(a.get(this).cherryPicked=new j([]));let{index:k,keyboard:l}=b.detail,m=a=>{let b=e(),c=a.length>=b.length?a.options:b,h=d(c,c===b?a.options:b);if(0===h.length)return;let{beforeChange:i}=this.parentNode,j={options:a.options,previous:this.selectedOptions,next:new(g())(a.displayElements)},k=()=>(this.deselectAll(),a.selectAll(),f("options.selected",j,this.parentNode));return i&&"function"==typeof i?void i(this.selectedOptions,j.next,k):k()};return this.multiple?l?a.get(this).handleKeyboardSelection(b.detail,m):a.get(this).handleClickSelection(b.detail,m):m(new j([this.options[k]]))},handleClickSelection:(b,c)=>{let{cherryPicked:d,getCurrentSelection:e,lastSelectedIndex:f,Selection:g,selectionStartIndex:h}=a.get(this),{index:i,shiftKey:j,ctrlKey:k,metaKey:l}=b,m=this.options[i],n=e();if(j&&null!==f){a.get(this).lastSelectedIndex=i,a.get(this).cherryPicked.clear();let b=[i,h].sort();return c(new g(b[0]===b[1]?[m]:this.options.slice(b[0],b[1]+1)))}return k||l?(a.get(this).lastSelectedIndex=i,a.get(this).selectionStartIndex=i,a.get(this).cherryPicked.options=m.selected?n.filter(a=>a!==m):n,c(a.get(this).cherryPicked)):1!==n.length||i!==f?(a.get(this).lastSelectedIndex=i,a.get(this).selectionStartIndex=i,a.get(this).cherryPicked.clear(),c(new g([m]))):void 0},handleKeyboardSelection:(b,c)=>{let{cherryPicked:d,getCurrentSelection:e,lastSelectedIndex:f,Selection:g,selectionStartIndex:h}=a.get(this),{index:i,shiftKey:j}=b,k=this.options[i],l=e();if(a.get(this).lastSelectedIndex=i,!j||0===l.length)return a.get(this).selectionStartIndex=i,a.get(this).cherryPicked.clear(),c(new g([k]));// 1 option or more selected
if(0<l.length){let a=[i,h].sort(),b=new g(a[0]===a[1]?[k]:this.options.slice(a[0],a[1]+1));return 0<d.length&&(b.options=this.options.filter(a=>b.includes(a)||d.includes(a))),c(b)}},//       optionSelectionHandler: evt => {
//         let {
//           ChassisHTMLCollection,
//           cherryPickedOptions,
//           emit,
//           Selection,
//           selectedOptionsAreSequential,
//           selectedOptionsContainsStartIndex,
//           selectionStartIndex,
//           getSelectedOptionsAsArray
//         } = _.get(this)
//
//         let { index, keyboard, shiftKey, metaKey, ctrlKey } = evt.detail
// console.log(index);
//         _.get(this).lastSelectedIndex = index
//         let option = this.options[index]
//         let selection = new Selection()
//         let resetCherryPickedOptions = true
//
//         let applyMiddleware = next => {
//           let { beforeChange } = this.parentNode
//
//           let detail = {
//             options: selection.options,
//             previous: this.selectedOptions,
//             next: new (ChassisHTMLCollection())(selection.displayElements),
//             shiftKey,
//             metaKey,
//             ctrlKey
//           }
//
//           let cb = () => {
//             this.deselectAll()
//             selection.selectAll()
//             return emit('options.selected', detail, this.parentNode)
//           }
//
//           if (!(beforeChange && typeof beforeChange === 'function')) {
//             return cb()
//           }
//
//           beforeChange(this.selectedOptions, detail.next, cb)
//         }
//
//         if (this.multiple) {
//           if (shiftKey) {
//             if (keyboard) {
//               if (index === this.options.length) {
//                 console.log('A');
//                 return
//               }
//
//             } else if (option.selected) {
//               if (this.selectedOptions.length === 1) {
//                 console.log('B');
//                 return
//               }
//
//               if (selectedOptionsAreSequential()) {
//                 if (this.selectedOptions.length === 2) {
//                   if (index !== selectionStartIndex) {
//                     if (selectedOptionsContainsStartIndex()) {
//                       console.log('C');
//                       return
//                     }
//                   }
//
//                 } else if (index !== selectionStartIndex) {
//                   if (index === this.selectedOptions.item(this.selectedOptions.length - 1).index || index === this.selectedIndex) {
//                     if (selectedOptionsContainsStartIndex()) {
//                       console.log('D');
//                       return
//                     }
//                   }
//                 }
//
//               } else if (cherryPickedOptions.length > 0) {
//                 if (index === selectionStartIndex) {
//                   this.selectedIndex = index
//                   console.log('E');
//                   return
//                 }
//
//                 resetCherryPickedOptions = false
//               }
//             }
//
//             let bounds = [index, selectionStartIndex].sort()
//
//             selection.options = bounds[0] === bounds[1] ? [option] : this.options.slice(bounds[0], bounds[1] + 1)
//
//             if (cherryPickedOptions.length > 0) {
//               console.log(cherryPickedOptions);
//               selection.options = this.options.filter(option => cherryPickedOptions.includes(option) || selection.options.includes(option))
//             }
//
//             console.log('F');
//             return applyMiddleware()
//           }
//
//           if (metaKey || ctrlKey) {
//             _.get(this).selectionStartIndex = index
//             selection.options = this.options.filter(option => option.index === index ? !option.selected : option.selected)
//             _.get(this).cherryPickedOptions = option.selected ? [] : selection.options
//             console.log('G');
//             return applyMiddleware()
//           }
//         } else if (index === this.selectedIndex) {
//           console.log('H');
//           return
//         }
//
//         selection.options = [option]
//         _.get(this).selectionStartIndex = index
//
//         if (resetCherryPickedOptions) {
//           _.get(this).cherryPickedOptions = []
//         }
//         console.log('I');
//         applyMiddleware()
//       },
parentStateChangeHandler:b=>{a.get(this).emit("state.change",b.detail);let{name:c,value:d}=b.detail;switch(c){case"multiple":if(!d&&0<this.selectedOptions.length){let b=this.selectedIndex;this.deselectAll(),a.get(this).emit("option.selected",{index:b})}break;default:}},Selection:class{constructor(a=[]){this.options=a}get displayElements(){return this.options.map(a=>a.displayElement)}get length(){return this.options.length}get first(){return this.options[0]}get last(){return this.options[this.options.length-1]}append(a){this.options.push(a)}clear(){this.options=[]}includes(a){return this.options.includes(a)}prepend(a){this.options.unshift(a)}selectAll(){this.options.forEach(a=>a.selected=!0)}},OptionConstructor:()=>{let b=new WeakMap,c=a.get(this).optionSelectionHandler;return class{constructor(a,c,d,e){this.key=c,this.form=a.form,this.defaultSelected=d.selected,this.sourceElement=d,this.displayElement=e,this.displayElement.parent=a,this.displayElement.selected=d.selected,this.displayElement.defaultSelected=d.selected,this.displayElement.innerHTML=d.innerHTML;// Add additional attributes
for(let b of d.attributes){if("boolean"==typeof b.value){b.value?this.displayElement.setAttribute(b.name,""):this.displayElement.removeAttribute(b.name);continue}this.displayElement.setAttribute(b.name,b.value)}b.set(this,{attributes:{disabled:d.disabled,id:d.getAttribute("id"),label:d.getAttribute("label")||d.textContent.trim(),selected:d.selected,value:d.hasAttribute("value")?d.getAttribute("value").trim():null,text:d.text.trim()}})}get disabled(){return b.get(this).attributes.disabled}set disabled(a){this.setAttr("disabled",a)}get index(){return this.sourceElement.index}get id(){return b.get(this).attributes.id}set id(a){this.setAttr("id",a)}get selected(){return b.get(this).attributes.selected}set selected(a){this.setAttr("selected",a)}get label(){return b.get(this).attributes.label}set label(a){this.setAttr("label",a)}get text(){return b.get(this).attributes.text}set text(a){this.setAttr("text",a)}get value(){return b.get(this).attributes.value}set value(a){this.setAttr("value",a)}remove(){this.sourceElement.remove(),this.displayElement.remove()}setAttr(a,c){this.sourceElement[a]=c,"boolean"==typeof c?c?this.displayElement.setAttribute(a,""):this.displayElement.removeAttribute(a):this.displayElement.setAttribute(a,c),b.get(this).attributes[a]=c}}},generateOptionObject:b=>customElements.get("chassis-option")?new(a.get(this).OptionConstructor())(this,a.get(this).generateGuid(),b,document.createElement("chassis-option")):void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`),generateSourceOptionElement:a=>{let b=document.createElement("option");return a.hasOwnProperty("innerHTML")&&(b.innerHTML=a.innerHTML),a.hasOwnProperty("label")&&(b.innerHTML=a.label),a.hasOwnProperty("value")&&(b.value=a.value),a.hasOwnProperty("disabled")&&(b.disabled="boolean"==typeof a.disabled&&a.disabled),b},generateOptgroup:b=>{if(!customElements.get("chassis-optgroup"))return void console.error(`<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.`);let c=document.createElement("chassis-optgroup");c.id=a.get(this).generateGuid("optgroup");let d=b.getAttribute("label");if(!d||""===d.trim())return void console.error("<optgroup> must have a label attribute!");c.setAttribute("label",d);let e=b.querySelectorAll("option");for(let d of e)this.add(a.get(this).generateOptionObject(d),null,c);return c},ChassisHTMLCollection(){let a=new WeakMap;return class{constructor(b){a.set(this,{arr:b}),b.forEach((a,b)=>{this[b]=a,a.id&&(this[a.id]=a)})}get length(){return a.get(this).arr.length}item(b){return a.get(this).arr[b]}namedItem(b){let c=a.get(this).arr.filter(a=>a.id===b||a.name===b);return 0<c.length?c[0]:null}[Symbol.iterator](){let b=0;return{next:()=>{let c={value:a.get(this).arr[b],done:!(b in a.get(this).arr)};return b++,c}}}[Symbol.toStringTag](){return"ChassisHTMLCollection"}}},ChassisHTMLOptionsCollection:()=>{let b=new WeakMap,c=class extends a.get(this).ChassisHTMLCollection(){constructor(a,c=-1,d,e){super(a),this.selectedIndex=c,this.add=d,this.remove=e,b.set(this,{arr:a})}[Symbol.toStringTag](){return"ChassisHTMLOptionsCollection"}};return c}})}get selectedIndex(){return 0===this.selectedOptions.length?void 0:this.selectedOptions.item(0).index}set selectedIndex(b){a.get(this).emit("option.selected",{index:b})}get selectionStartIndex(){return a.get(this).selectionStartIndex}set selectionStartIndex(a){console.warn(`WARNING <chassis-select> selectionStartIndex cannot be set manually.`)}add(b,c=null,d=this){return customElements.get("chassis-option")?(b instanceof Option&&(b=a.get(this).generateOptionObject(b)),this.parentNode[`${b.index}`]=b.displayElement,c?(d.insertBefore(b.displayElement,d.children.item(c)),this.options.splice(c,0,b),this.parentNode.sourceElement.add(b.sourceElement,c)):(d.appendChild(b.displayElement),this.options.push(b),!this.parentNode.sourceElement[this.options.length-1]&&this.parentNode.sourceElement.appendChild(b.sourceElement)),b.selected&&!this.multiple)?void(this.selectedIndex=b.index):void 0:void console.error(`<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.`)}addChildren(b){for(let c of b){let b=c instanceof HTMLElement;switch(c.nodeName){case"OPTION":this.add(b?a.get(this).generateOptionObject(c):c);break;case"OPTGROUP":this.addOptgroup(b?a.get(this).generateOptgroup(c):c);break;default:console.warn(`${c.nodeName.toLowerCase()} is not a valid child element for <chassis-select>. Removing...`);}}}addOptgroup(a){let b=document.createElement("chassis-optgroup-label");b.innerHTML=a.getAttribute("label"),this.appendChild(b),this.appendChild(a)}clear(){for(;this.lastChild;)this.removeChild(this.lastChild)}connectedCallback(){this.addEventListener("keydown.arrowUp",a.get(this).arrowUpHandler),this.addEventListener("keydown.arrowDown",a.get(this).arrowDownHandler),this.addEventListener("option.selected",a.get(this).optionSelectionHandler),this.parentNode.addEventListener("state.change",a.get(this).parentStateChangeHandler),a.get(this).selectionStartIndex=0<=this.selectedIndex?this.selectedIndex:0}disconnectedCallback(){this.removeEventListener("keydown.arrowUp",a.get(this).arrowUpHandler),this.removeEventListener("keydown.arrowDown",a.get(this).arrowDownHandler),this.removeEventListener("option.selected",a.get(this).optionSelectionHandler),this.parentNode.removeEventListener("state.change",a.get(this).parentStateChangeHandler)}deselect(a,b=!0){"number"==typeof a&&(a=this.options[a]),a.selected=!1,this.parentNode.selectedOptionsElement.remove(a,b)}deselectAll(a=!0){this.options.filter(a=>a.selected).forEach((b,c,d)=>{this.deselect(b,c=d.length-1&&a)})}hoverOption(a){this.unHoverAllOptions(),this.options[a].displayElement.hover=!0}item(a){return this.options[a].displayElement}namedItem(a){let b=this.options.filter(b=>{let c=b.sourceElement.attributes.getNamedItem("id");return c&&c.value===a});return b.length?b[b.length-1].displayElement:null}/**
     * @method removeOptionByIndex
     * @param  {Number}  [index=null]
     * Index of option to remove
     * @param  {Boolean} [destroy=true]
     */removeOptionByIndex(a=null){null===a||a>=this.options.length||this.options[a].remove()}unHoverAllOptions(){this.options.forEach((a,b)=>this.unHoverOption(b))}unHoverOption(a){this.options[a].displayElement.hover=!1}}}());