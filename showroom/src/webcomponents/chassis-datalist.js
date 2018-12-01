if (!customElements.get('chassis-datalist')) {
  customElements.define("chassis-datalist",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";

:host {
  display: inline-block;
  max-width: 100%;
}

:host *,
:host *:before,
:host *:after {
  box-sizing: border-box;
}

:host ::slotted(chassis-options) {
  height: 0;
  overflow: hidden;
}

:host([open]) ::slotted(chassis-options) {
  height: auto;
}

chassis-datalist {
  display: inline-block;
  max-width: 100%;
}

chassis-datalist *,
chassis-datalist *:before,
chassis-datalist *:after {
  box-sizing: border-box;
}

chassis-datalist chassis-options {
  height: 0;
  overflow: hidden;
}

chassis-datalist[open] chassis-options {
  height: auto;
}</style><slot name="afterbegin"></slot><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot><slot name="beforedatalist"></slot><slot name="datalist"></slot><slot name="afterdatalist"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-datalist> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-datalist> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),this.clickCount=0,a.get(this).addReadOnlyProperty("options"),a.get(this).options=[],a.get(this).find=b=>a.get(this).options.filter(a=>{let c=this.hasAttribute("case-sensitive")?a.sourceElement.value:a.sourceElement.value.toLowerCase(),d=this.hasAttribute("case-sensitive")?a.sourceElement.text:a.sourceElement.text.toLowerCase();return b=this.hasAttribute("case-sensitive")?b:b.toLowerCase(),0<=c.indexOf(b)||0<=d.indexOf(b)}),a.get(this).clear=()=>{a.get(this).options.forEach(a=>a.displayElement.style.display="none")},a.get(this).showAllOptions=()=>{a.get(this).options.forEach(a=>a.displayElement.style.display="")},a.get(this).clickHandler=()=>{this.clickCount++,2===this.clickCount&&(a.get(this).showAllOptions(),this.open())},a.get(this).keydownHandler=b=>{if(!this.isOpen)return a.get(this).showAllOptions(),this.open();switch(b[this.keySource]){case 27:case"Escape":a.get(this).clear(),this.close();break;case 38:case"ArrowUp":b.preventDefault(),console.log("select previous option");break;case 40:case"ArrowDown":b.preventDefault(),console.log("select next option");break;default:}},a.get(this).inputHandler=()=>{a.get(this).clear();let b=a.get(this).inputEl.value;if(b){let c=a.get(this).find(b);return c.length?(c.forEach(a=>a.displayElement.style.display=""),void this.setAttribute("open","")):void(this.hasAttribute("open")&&this.removeAttribute("open"),a.get(this).clear())}},a.get(this).bodyClickHandler=a=>{a.target===this||this.contains(a.target)||this.removeAttribute("open")},a.get(this).getOptionById=b=>{let c,d=a.get(this).options;for(let a=0;a<d.length;a++)if(d[a].id===b){c=d[a];break}return c},a.get(this).generateOptionObject=b=>{if(!customElements.get("chassis-option"))return void console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`);let c={id:a.get(this).generateGuid("option"),attributes:{},sourceElement:b};for(let a of b.attributes)c.attributes[a.name]=a.value;return c}}static get observedAttributes(){return["autofocus","case-sensitive","disabled","name","open","tabindex"]}get isOpen(){return this.hasAttribute("open")}set isOpen(a){a?this.setAttribute("open",""):this.removeAttribute("open")}get value(){return a.get(this).inputEl.value}connectedCallback(){a.get(this).inputEl.addEventListener("focus",()=>{this.addEventListener("keydown",a.get(this).keydownHandler)}),a.get(this).inputEl.addEventListener("input",a.get(this).inputHandler),a.get(this).inputEl.addEventListener("click",a.get(this).clickHandler),a.get(this).inputEl.addEventListener("blur",()=>{this.clickCount=0,this.removeEventListener("keydown",a.get(this).keydownHandler)}),setTimeout(()=>{this.hasAttribute("tabindex")||this.setAttribute("tabindex",0),this.autofocus&&this.focus()},0)}addChildren(b){for(let c of b)this.addOption(c instanceof HTMLElement?a.get(this).generateOptionObject(c):c)}addOption(b,c,d=a.get(this).optionsEl){if(!customElements.get("chassis-option"))return void console.error(`chassis-datalist requires chassis-option. Please include it in this document's <head> element.`);if(b.hasOwnProperty("id")||(b.id=a.get(this).generateGuid("option")),!b.hasOwnProperty("sourceElement")||!(b.sourceElement instanceof HTMLElement)){let a=document.createElement("option");b.hasOwnProperty("innerHTML")&&(a.innerHTML=b.innerHTML),b.hasOwnProperty("label")&&(a.innerHTML=b.label),b.hasOwnProperty("value")&&(a.value=b.value),b.hasOwnProperty("disabled")&&(a.disabled="boolean"==typeof b.disabled&&b.disabled),b.sourceElement=a}let e=b.sourceElement.getAttribute("label")||b.sourceElement.textContent.trim(),f=b.sourceElement.getAttribute("value"),g=b.sourceElement.disabled,h=document.createElement("chassis-option");return h.style.display="none",h.key=b.id,h.innerHTML=b.sourceElement.innerHTML,d.appendChild(h),h.addEventListener("click",()=>this.select(h.key)),b={attributes:{disabled:g,label:e,value:f},id:b.id,displayElement:h,sourceElement:b.sourceElement},c?(this[`${c}`]=b.sourceElement,void a.get(this).options.splice(c,0,b)):void(this[`${a.get(this).options.length}`]=b.sourceElement,a.get(this).options.push(b))}attributeChangedCallback(a,b,c){(a=a.toLowerCase(),c!==b)&&("autofocus"===a||"disabled"===a?console.log(a):"name"===a?console.log(a):"open"===a?this.isOpen?this.open():this.close():void 0)}close(){document.body.removeEventListener("click",a.get(this).bodyClickHandler),document.body.removeEventListener("touchcancel",a.get(this).bodyClickHandler),document.body.removeEventListener("touchend",a.get(this).bodyClickHandler),this.isOpen&&(this.isOpen=!1)}open(){document.body.addEventListener("click",a.get(this).bodyClickHandler),document.body.addEventListener("touchcancel",a.get(this).bodyClickHandler),document.body.addEventListener("touchend",a.get(this).bodyClickHandler),this.isOpen||(this.isOpen=!0)}inject(b,c,d){a.get(this).sourceEl=c,a.get(this).inputEl=b,a.get(this).inputEl.slot="input",a.get(this).inputEl.id=d,this.appendChild(a.get(this).inputEl),a.get(this).optionsEl=document.createElement("chassis-options"),a.get(this).optionsEl.slot="options",this.appendChild(a.get(this).optionsEl),this.addChildren(c.options)}select(b){let c=a.get(this).getOptionById(b);c&&(c.sourceElement.selected=!0,a.get(this).inputEl.value=c.displayElement.innerHTML,a.get(this).selectedOption=c,a.get(this).options.forEach(a=>a.displayElement.removeAttribute("selected")),c.displayElement.setAttribute("selected",""),this.dispatchEvent(new Event("input",{bubbles:!0})),this.close())}}}());
}
if (!customElements.get('chassis-option')) {
  customElements.define("chassis-option",function(){let a=new WeakMap;return class extends HTMLElement{constructor(){super(),this.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",this.attachShadow({mode:"open"});let b=document.createElement("div");b.insertAdjacentHTML("afterbegin",`<template><style>@charset UTF-8; @charset "UTF-8";

:host {
  contain: content;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

:host *,
:host *:before,
:host *:after {
  box-sizing: border-box;
}

chassis-option {
  contain: content;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

chassis-option *,
chassis-option *:before,
chassis-option *:after {
  box-sizing: border-box;
}</style><slot name="afterbegin"></slot><slot name="beforeoption"></slot><slot></slot><slot name="afteroption"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-option> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-option> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),this.defaultSelected=!1,a.get(this).addAttributes(["id","label","value"]),a.get(this).addBooleanAttributes(["disabled","hover","selected"]),a.get(this).addReadOnlyProperties(["form",{name:"index",get(){return this.parentNode.options.findIndex(a=>a.displayElement===this)}}]),a.get(this).addPrivateProperties({form:null,mouseButtonDown:a=>{let b=a.buttons===void 0?a.nativeEvent.which:a.buttons;return 1<=b},mousemoveHandler:()=>a.get(this).emit("option.hovered",this.index),mouseoutHandler:()=>this.hover=!1,mouseoverHandler:b=>{let c=a.get(this).mouseButtonDown(b);if(!(this.parentNode.multiple&&c))return void(this.hover=!0);let{shiftKey:d,metaKey:e,ctrlKey:f}=b;a.get(this).select(d,e,f,c)},select:(b=!1,c=!1,d=!1,e=!1)=>{let{index:f}=this;a.get(this).emit("option.selected",{index:f,shiftKey:b,metaKey:c,ctrlKey:d,mousedown:e},this.parentNode)},selectionHandler:b=>{let{shiftKey:c,metaKey:d,ctrlKey:e}=b;a.get(this).select(c,d,e)},parentStateChangeHandler:b=>{let{name:c,value:d}=b.detail;switch(c){case"multiple":d?(this.removeEventListener("mouseup",a.get(this).selectionHandler),this.addEventListener("mousedown",a.get(this).selectionHandler)):(this.addEventListener("mouseup",a.get(this).selectionHandler),this.removeEventListener("mousedown",a.get(this).selectionHandler));break;default:}}})}static get observedAttributes(){return["disabled","hover","label","selected","value"]}get text(){return this.innerHTML}set text(a){this.innerHTML=a}attributeChangedCallback(b,c,d){if(b=b.toLowerCase(),d!==c)return"disabled"===b||"selected"===b||"hovered"===b?a.get(this).setBooleanAttributeValue(b,d):"label"===b||"value"===b?a.get(this).setAttributeValue(b,d):void 0}connectedCallback(){this.addEventListener("mouseover",a.get(this).mouseoverHandler),this.addEventListener("mousemove",a.get(this).mousemoveHandler),this.addEventListener("mouseout",a.get(this).mouseoutHandler),this.addEventListener("mouseup",a.get(this).selectionHandler),this.parentNode.addEventListener("state.change",a.get(this).parentStateChangeHandler)}disconnectedCallback(){this.removeEventListener("mouseover",a.get(this).mouseoverHandler),this.removeEventListener("mousemove",a.get(this).mousemoveHandler),this.removeEventListener("mouseout",a.get(this).mouseoutHandler),this.removeEventListener("mouseup",a.get(this).selectionHandler),this.removeEventListener("mousedown",a.get(this).selectionHandler),this.displayElement.removeEventListener("mousedown",_p.get(this).multipleMousedownHandler),this.displayElement.removeEventListener("mouseup",_p.get(this).multipleMouseupHandler),this.displayElement.removeEventListener("mouseup",_p.get(this).mouseupHandler),this.parentNode.removeEventListener("state.change",a.get(this).parentStateChangeHandler)}/**
     * @method remove
     * Remove this option from the DOM.
     * @override
     */remove(){this.parentNode.options.splice(this.index,1),super.remove()}}}());
}
if (!customElements.get('chassis-options')) {
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
}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);let c=b.querySelector("template");"content"in c?this.shadowRoot.appendChild(c.content.cloneNode(!0)):c.childNodes.forEach(a=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),c=null,this.crypto=null;try{this.crypto=crypto}catch(a){this.crypto=msCrypto}a.set(this,{sourceElement:null,addAttribute:b=>{Object.defineProperty(this,b,{get(){return this.getAttribute(b)},set(c){a.get(this).setAttributeValue(b,c)}})},addAttributes:b=>b.forEach(b=>a.get(this).addAttribute(b)),setAttributeValue:(b,c)=>{this.setAttribute(b,c),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=c)},addReadOnlyProperty:b=>{let c="object"==typeof b;if(!c&&"string"!=typeof b)return console.error("ERROR <chassis-options> Read-only property must be type \"object\" or \"string\"");let d={set(){a.get(this).throw("readonly",{prop:c?b.name:b})}};d.get=c&&b.hasOwnProperty("get")?b.get:function(){return a.get(this)[b]},Object.defineProperty(this,c?b.name:b,d)},addReadOnlyProperties:b=>b.forEach(b=>a.get(this).addReadOnlyProperty(b)),setReadOnlyPropertyValue:b=>a.get(this)[prop]=b,addBooleanAttribute:b=>{Object.defineProperty(this,b,{get(){return a.get(this).getBooleanAttributeValue(b)},set(c){a.get(this).setBooleanAttributeValue(b,c)}})},addBooleanAttributes:b=>b.forEach(b=>a.get(this).addBooleanAttribute(b)),getBooleanAttributeValue:a=>this.hasAttribute(a)&&"false"!==this.getAttribute(a),setBooleanAttributeValue:(b,c)=>{"boolean"==typeof c&&(c=c.toString());if(!["true","false","",null].includes(c))return console.error(`<${this.localName}> "${b}" attribute expected boolean but received "${c}"`),this.removeAttribute(b),void(a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1));switch(c){case"false":case null:this.removeAttribute(b),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!1);break;case"true":case"":this.setAttribute(b,""),a.get(this).sourceElement&&(a.get(this).sourceElement[b]=!0);break;default:}},addPrivateProperties:b=>{for(let c in b)a.get(this)[c]=b[c]},generateGuid:(a=null)=>{let b="10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(a^this.crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16));return a?`${a}_${b}`:b},emit:(b,c,d=null)=>d?d.dispatchEvent(a.get(this).newEvent(b,c)):void this.dispatchEvent(a.get(this).newEvent(b,c)),newEvent:(a,b)=>new CustomEvent(a,{detail:b}),throw:(a,b)=>{let c="ERROR <chassis-options> ";"readonly"===a?c+=`Cannot set read-only property "${b.prop}".`:c=c.trim();console.error(c)}}),a.get(this).addReadOnlyProperties([{name:"form",get(){return this.parentNode.form}},{name:"displayOptions",get(){return new(a.get(this).ChassisHTMLOptionsCollection())(this.options.map(a=>a.displayElement),this.selectedIndex,(b,c)=>{this.add(a.get(this).generateOptionObject(b),c)},a=>this.removeOptionByIndex(a))}},{name:"hoveredIndex",get(){return this.options.findIndex(a=>a.displayElement.hover)}},{name:"multiple",get(){return this.parentNode.multiple}},"options",{name:"selectedIndexes",get(){let a=[];for(let b of this.selectedOptions)a.push(b.index);return a}},{name:"selectedOptions",get(){let b=this.querySelectorAll("[selected]");return new(a.get(this).ChassisHTMLCollection())(b)}}]),a.get(this).addPrivateProperties({options:[],selectionStartIndex:null,lastSelectedIndex:null,cherryPicked:null,getCurrentSelection:()=>this.options.filter(a=>a.selected),selectedOptionsAreSequential:()=>{let a=Array.from(this.selectedOptions).map(a=>a.index);return a.every((b,c)=>c===a.length-1||b<a[c+1])},arrowDownHandler:b=>{if(!this.multiple){let{startIndex:a}=b.detail;return a===this.options.length-1?void 0:this.hoverOption(a+1)}let{lastSelectedIndex:c}=a.get(this);return c===this.options.length-1?void 0:a.get(this).emit("option.selected",{index:null===c?0:c+1,keyboard:!0,shiftKey:b.detail.shiftKey,ctrlKey:!1,metaKey:!1})},arrowUpHandler:b=>{if(!this.multiple){let{startIndex:a}=b.detail;return-1===a||0===a?void 0:this.hoverOption(a-1)}let{lastSelectedIndex:c}=a.get(this);return 0===c?void 0:a.get(this).emit("option.selected",{index:null===c?this.options.length-1:c-1,keyboard:!0,shiftKey:b.detail.shiftKey,ctrlKey:!1,metaKey:!1})},getSelectedOptionsAsArray:()=>Array.from(this.selectedOptions),selectedOptionsAreSequential:()=>{if(1===this.selectedOptions.length)return!0;let b=a.get(this).getSelectedOptionsAsArray().map(a=>a.index);return b.every((a,c)=>a===b[c+1]-1||c===b.length-1)},selectedOptionsContainsStartIndex:()=>{let b=a.get(this).getSelectedOptionsAsArray().map(a=>a.index);return b.some(b=>b===a.get(this).selectionStartIndex)},optionSelectionHandler:b=>{let{cherryPicked:c,emit:d,ChassisHTMLCollection:e,handleClickSelection:f,handleKeyboardSelection:g,Selection:h}=a.get(this);null===c&&(a.get(this).cherryPicked=new h([]));let{index:i,keyboard:j}=b.detail,k=a=>{let{beforeChange:b}=this.parentNode,c={options:a.options,previous:this.selectedOptions,next:new(e())(a.displayElements)},f=()=>(this.deselectAll(),a.selectAll(),d("options.selected",c,this.parentNode));return b&&"function"==typeof b?void b(this.selectedOptions,c.next,f):f()};return this.multiple?j?a.get(this).handleKeyboardSelection(b.detail,k):a.get(this).handleClickSelection(b.detail,k):k(new h([this.options[i]]))},handleClickSelection:(b,c)=>{let{cherryPicked:d,getCurrentSelection:e,lastSelectedIndex:f,Selection:g,selectionStartIndex:h}=a.get(this),{index:i,shiftKey:j,ctrlKey:k,metaKey:l}=b,m=this.options[i],n=e();if(j&&null!==f){a.get(this).lastSelectedIndex=i;let b=[i,h].sort();return c(new g(b[0]===b[1]?[m]:this.options.slice(b[0],b[1]+1)))}return k||l?(a.get(this).lastSelectedIndex=i,a.get(this).selectionStartIndex=i,a.get(this).cherryPicked.options=m.selected?n.filter(a=>a!==m):n,c(a.get(this).cherryPicked)):1!==n.length||i!==f?(a.get(this).lastSelectedIndex=i,a.get(this).selectionStartIndex=i,c(new g([m]))):void 0},handleKeyboardSelection:(b,c)=>{let{cherryPicked:d,getCurrentSelection:e,lastSelectedIndex:f,Selection:g,selectionStartIndex:h}=a.get(this),{index:i,shiftKey:j}=b,k=this.options[i],l=e();if(a.get(this).lastSelectedIndex=i,!j||0===l.length)return a.get(this).selectionStartIndex=i,c(new g([k]));// 1 option or more selected
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
}
