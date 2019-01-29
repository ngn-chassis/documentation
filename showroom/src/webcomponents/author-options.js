customElements.define("author-options",class extends AuthorElement(HTMLElement){constructor(){super(`<template><style>@charset "UTF-8"; :host{contain:content;display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-options{contain:content;display:block;width:100%}author-options *,author-options :after,author-options :before{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`),this.UTIL.defineProperties({cherryPickedOptions:{private:!0},form:{readonly:!0,get:()=>this.parentNode.form},displayOptions:{readonly:!0,get:()=>{let AuthorHTMLOptionsCollection=this.PRIVATE.generateAuthorHTMLOptionsCollectionConstructor(),a=this.options.map(a=>a.displayElement);return new AuthorHTMLOptionsCollection(a,this.selectedIndex,(a,b)=>this.addOption(this.PRIVATE.generateOptionObject(a),b),a=>this.removeOptionByIndex(a))}},hoveredIndex:{readonly:!0,get:()=>this.options.findIndex(a=>a.displayElement.hover)},lastSelectedIndex:{private:!0},multiple:{readonly:!0,get:()=>this.parentNode.multiple},options:{readonly:!0,default:[]},selectedIndices:{readonly:!0,get:()=>{let a=[];for(let b of this.selectedOptions)a.push(b.index);return a}},selectedOptions:{readonly:!0,get:()=>{let a=this.querySelectorAll("[selected]"),AuthorHTMLCollection=this.PRIVATE.generateAuthorHTMLCollectionConstructor();return new AuthorHTMLCollection(a)}},Selection:{readonly:!0,private:!0,default:class{constructor(a=[]){this.options=a}get displayElements(){return this.options.map(a=>a.displayElement)}get length(){return this.options.length}get first(){return this.options[0]}get last(){return this.options[this.options.length-1]}append(a){this.options.push(a)}clear(){this.options=[]}includes(a){return this.options.includes(a)}prepend(a){this.options.unshift(a)}selectAll(){this.options.forEach(a=>a.selected=!0)}}},selectionStartIndex:{private:!0}}),this.UTIL.definePrivateMethods({arrowDownHandler:a=>{if(!this.multiple){let{startIndex:b}=a.detail;return b===this.options.length-1?void 0:this.hoverOption(b+1)}let{lastSelectedIndex:b}=this.PRIVATE;return b===this.options.length-1?void 0:this.emit("option.selected",{index:null===b?0:b+1,keyboard:!0,shiftKey:a.detail.shiftKey,ctrlKey:!1,metaKey:!1})},arrowUpHandler:a=>{if(!this.multiple){let{startIndex:b}=a.detail;return-1===b||0===b?void 0:this.hoverOption(b-1)}let{lastSelectedIndex:b}=this.PRIVATE;return 0===b?void 0:this.emit("option.selected",{index:null===b?this.options.length-1:b-1,keyboard:!0,shiftKey:a.detail.shiftKey,ctrlKey:!1,metaKey:!1})},diffSelections:(a,b)=>a.filter(a=>!b.includes(a)),generateAuthorHTMLCollectionConstructor(){let a=new WeakMap;return class{constructor(b){a.set(this,{arr:b}),b.forEach((a,b)=>{this[b]=a,a.id&&(this[a.id]=a)})}get length(){return a.get(this).arr.length}item(b){return a.get(this).arr[b]}namedItem(b){let c=a.get(this).arr.filter(a=>a.id===b||a.name===b);return 0<c.length?c[0]:null}[Symbol.iterator](){let b=0;return{next:()=>{let c={value:a.get(this).arr[b],done:!(b in a.get(this).arr)};return b++,c}}}[Symbol.toStringTag](){return"AuthorHTMLCollection"}}},generateAuthorHTMLOptionsCollectionConstructor:()=>{let a=new WeakMap,AuthorHTMLOptionsCollection=class extends this.PRIVATE.generateAuthorHTMLCollectionConstructor(){constructor(b,c=-1,d,e){super(b),this.selectedIndex=c,this.add=d,this.remove=e,a.set(this,{arr:b})}[Symbol.toStringTag](){return"AuthorHTMLOptionsCollection"}};return AuthorHTMLOptionsCollection},generateOptgroup:a=>{if(!customElements.get("author-optgroup"))return this.UTIL.throwError({type:"dependency",vars:{name:"author-optgroup"}});let b=document.createElement("author-optgroup");b.id=this.UTIL.generateGuid("optgroup");let c=a.getAttribute("label");if(!c||""===c.trim())return this.UTIL.throwError({message:"<optgroup> must have a label attribute!"});b.setAttribute("label",c);let d=a.querySelectorAll("option");for(let c of d)this.addOption(this.PRIVATE.generateOptionObject(c),null,b);return b},generateOptionObject:a=>{if(!customElements.get("author-option"))return this.UTIL.throwError({type:"dependency",vars:{name:"author-option"}});let b=this.PRIVATE.generateOptionConstructor();return new b(this,this.UTIL.generateGuid(),a,document.createElement("author-option"))},generateOptionConstructor:()=>{let a=new WeakMap;return class{constructor(b,c,d,e){this.key=c,this.form=b.form,this.defaultSelected=d.selected,this.sourceElement=d,this.displayElement=e,this.displayElement.parent=b,this.displayElement.selected=d.selected,this.displayElement.defaultSelected=d.selected,this.displayElement.innerHTML=d.innerHTML;for(let a of d.attributes){if("boolean"==typeof a.value){a.value?this.displayElement.setAttribute(a.name,""):this.displayElement.removeAttribute(a.name);continue}this.displayElement.setAttribute(a.name,a.value)}a.set(this,{attributes:{disabled:d.disabled,id:d.getAttribute("id"),label:d.getAttribute("label")||d.textContent.trim(),selected:d.selected,value:d.hasAttribute("value")?d.getAttribute("value").trim():null,text:d.text.trim()}})}get disabled(){return a.get(this).attributes.disabled}set disabled(a){this.setAttr("disabled",a)}get index(){return this.sourceElement.index}get id(){return a.get(this).attributes.id}set id(a){this.setAttr("id",a)}get selected(){return a.get(this).attributes.selected}set selected(a){this.setAttr("selected",a)}get label(){return a.get(this).attributes.label}set label(a){this.setAttr("label",a)}get text(){return a.get(this).attributes.text}set text(a){this.setAttr("text",a)}get value(){return a.get(this).attributes.value}set value(a){this.setAttr("value",a)}remove(){this.sourceElement.remove(),this.displayElement.remove()}setAttr(b,c){this.sourceElement[b]=c,"boolean"==typeof c?c?this.displayElement.setAttribute(b,""):this.displayElement.removeAttribute(b):this.displayElement.setAttribute(b,c),a.get(this).attributes[b]=c}}},getCurrentSelection:()=>this.options.filter(a=>a.selected),handleClickSelection:(a,b)=>{let{cherryPickedOptions:c,getCurrentSelection:d,lastSelectedIndex:e,Selection:f,selectionStartIndex:g}=this.PRIVATE,{index:h,shiftKey:i,ctrlKey:j,metaKey:k}=a,l=this.options[h];if(i&&null!==e){this.PRIVATE.lastSelectedIndex=h,this.PRIVATE.cherryPickedOptions.clear();let a=[h,g].sort((c,a)=>c-a);return b(new f(a[0]===a[1]?[l]:this.options.slice(a[0],a[1]+1)))}let m=d();return j||k?(this.PRIVATE.lastSelectedIndex=h,this.PRIVATE.selectionStartIndex=h,this.PRIVATE.cherryPickedOptions.options=l.selected?m.filter(a=>a!==l):this.options.filter(a=>a===l||m.includes(a)),b(this.PRIVATE.cherryPickedOptions)):1!==m.length||h!==e?(this.PRIVATE.lastSelectedIndex=h,this.PRIVATE.selectionStartIndex=h,this.PRIVATE.cherryPickedOptions.clear(),b(new f([l]))):void 0},handleKeyboardSelection:(a,b)=>{let{cherryPickedOptions:c,getCurrentSelection:d,Selection:e,selectionStartIndex:f}=this.PRIVATE,{index:g,shiftKey:h}=a,i=this.options[g],j=d();if(this.PRIVATE.lastSelectedIndex=g,!h||0===j.length)return this.PRIVATE.selectionStartIndex=g,this.PRIVATE.cherryPickedOptions.clear(),b(new e([i]));if(0<j.length){let a=[g,f].sort(),d=new e(a[0]===a[1]?[i]:this.options.slice(a[0],a[1]+1));return 0<c.length&&(d.options=this.options.filter(a=>d.includes(a)||c.includes(a))),b(d)}},optionSelectionHandler:a=>{let{cherryPickedOptions:b,diffSelections:c,getCurrentSelection:d,generateAuthorHTMLCollectionConstructor:e,handleClickSelection:f,handleKeyboardSelection:g,Selection:h}=this.PRIVATE;null===b&&(this.PRIVATE.cherryPickedOptions=new h([]));let{index:i,keyboard:j}=a.detail,k=a=>{let b=d(),f=a.length>=b.length?a.options:b,g=c(f,f===b?a.options:b);if(0===g.length)return;let{beforeChange:h}=this.parentNode,i={options:a.options,previous:this.selectedOptions,next:new(e())(a.displayElements)},j=()=>(this.deselectAll(),a.selectAll(),this.emit("options.selected",i,this.parentNode));return h&&"function"==typeof h?void h(this.selectedOptions,i.next,j):j()};return this.multiple?j?this.PRIVATE.handleKeyboardSelection(a.detail,k):this.PRIVATE.handleClickSelection(a.detail,k):k(new h([this.options[i]]))},parentStateChangeHandler:a=>{this.emit("state.change",a.detail);let{name:b,value:c}=a.detail;switch(b){case"multiple":if(!c&&0<this.selectedOptions.length){let a=this.selectedIndex;this.deselectAll(),this.emit("option.selected",{index:a})}break;default:}}}),this.UTIL.registerListeners(this,{connected:()=>{this.PRIVATE.selectionStartIndex=0<=this.selectedIndex?this.selectedIndex:0,this.parentNode.on("state.change",this.PRIVATE.parentStateChangeHandler)},disconnected:()=>{this.parentNode.off("state.change",this.PRIVATE.parentStateChangeHandler)},"keydown.arrowUp":this.PRIVATE.arrowUpHandler,"keydown.arrowDown":this.PRIVATE.arrowDownHandler,"option.selected":this.PRIVATE.optionSelectionHandler})}get selectedIndex(){return 0<this.selectedOptions.length?this.selectedOptions.item(0).index:null}set selectedIndex(a){this.emit("option.selected",{index:a})}get selectionStartIndex(){return this.PRIVATE.selectionStartIndex}set selectionStartIndex(a){this.UTIL.throwError({type:"readonly",message:`"selectionStartIndex" cannot be set manually.`})}addOptgroup(a){let b=document.createElement("author-optgroup-label");b.innerHTML=a.getAttribute("label"),this.appendChild(b),this.appendChild(a)}addOption(a,b=null,c=this){return customElements.get("author-option")?(a instanceof Option&&(a=this.PRIVATE.generateOptionObject(a)),this.parentNode[`${a.index}`]=a.displayElement,b?(c.insertBefore(a.displayElement,c.children.item(b)),this.options.splice(b,0,a),this.parentNode.sourceElement.add(a.sourceElement,b)):(c.appendChild(a.displayElement),this.options.push(a),!this.parentNode.sourceElement[this.options.length-1]&&this.parentNode.sourceElement.appendChild(a.sourceElement)),a.selected&&!this.multiple)?void(this.selectedIndex=a.index):void 0:this.UTIL.throwError({type:"dependency",vars:{name:"author-option"}})}addOptions(a){for(let b of a){let a=b instanceof HTMLElement;switch(b.nodeName){case"OPTION":this.addOption(a?this.PRIVATE.generateOptionObject(b):b);continue;case"OPTGROUP":this.addOptgroup(a?this.PRIVATE.generateOptgroup(b):b);continue;default:this.UTIL.printToConsole(`${b.nodeName.toLowerCase()} is not a valid child element for <author-select>. Removing...`,"warning");}}}clear(){for(;this.lastChild;)this.removeChild(this.lastChild)}deselect(a,b=!0){"number"==typeof a&&(a=this.options[a]),a.selected=!1,this.parentNode.selectedOptionsElement.remove(a,b)}deselectAll(a=!0){this.options.filter(a=>a.selected).forEach((b,c,d)=>{this.deselect(b,c=d.length-1&&a)})}hoverOption(a){this.unHoverAllOptions(),this.options[a].displayElement.hover=!0}item(a){return this.options[a].displayElement}namedItem(a){let b=this.options.filter(b=>{let c=b.sourceElement.attributes.getNamedItem("id");return c&&c.value===a});return b.length?b[b.length-1].displayElement:null}removeOptionByIndex(a=null){null===a||a>=this.options.length||this.options[a].remove()}unHoverAllOptions(){this.options.forEach((a,b)=>this.unHoverOption(b))}unHoverOption(a){this.options[a].displayElement.hover=!1}});