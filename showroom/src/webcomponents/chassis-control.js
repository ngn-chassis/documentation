customElements.define("chassis-control",class extends ChassisElement(HTMLElement){constructor(){super(`<template><style>@charset "UTF-8"; :host{display:flex;contain:layout style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}:host([type=select]){flex-direction:column}chassis-control{display:flex;contain:layout style;max-width:100%}chassis-control *,chassis-control :after,chassis-control :before{box-sizing:border-box}chassis-control .hidden{display:none;visibility:hidden;opacity:0}chassis-control[type=field]){flex-direction:column}chassis-control[type=toggle]){align-items:center}chassis-control .label-wrapper{flex:1 1 auto;display:flex}chassis-control .input-wrapper{display:flex;align-items:center}chassis-control[type=toggle]) .input-wrapper{order:-1;justify-content:center}chassis-control[type=select]){flex-direction:column}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>`),this.UTIL.definePrivateProperties({fieldInputTypes:["color","date","datetime-local","email","file","hidden","image","month","number","password","range","reset","search","submit","tel","text","time","url","week","textarea"],toggleInputTypes:["checkbox","radio"],supportedTypes:["field","toggle","select"],input:null,initDatalist:(a,b)=>{if(this.type="field",!customElements.get("chassis-datalist")){console.dir(a),a.id=this.PRIVATE.guid,b.id=`${a.id}_datalist`,a.setAttribute("list",b.id),a.slot=a.slot||"input",this.PRIVATE.input=a;let c=b.querySelectorAll("option[title]");c.forEach(a=>select.removeChild(a));for(let a of b.options)a.hasAttribute("label")&&""===a.getAttribute("label").trim()&&a.removeAttribute("label");return}let c=document.createElement("chassis-datalist");c.slot="input";for(let d of b.attributes)d.specified&&(c.setAttribute(d.name,d.value),"autofocus"===d.name&&b.removeAttribute(d.name));this.removeChild(b),this.removeChild(a),c.inject(a,b,this.PRIVATE.guid),this.appendChild(c),this.PRIVATE.input=c},initInput:a=>{a.slot=a.slot||"input",this.PRIVATE.input=a,a.id=this.PRIVATE.guid,0<=this.PRIVATE.fieldInputTypes.indexOf(a.type)&&(this.type="field"),0<=this.PRIVATE.toggleInputTypes.indexOf(a.type)&&(this.type="toggle")},initLabel:a=>{this.label=a,a.slot=a.slot||"label",a.htmlFor=this.PRIVATE.guid,"select"===this.type&&this.label.addEventListener("click",()=>{this.input.focus()})},initDefaultSelect:a=>{a.id=this.PRIVATE.guid,a.slot=a.slot||"input",a.setAttribute("role","menu"),this.PRIVATE.input=a;let b=a.querySelectorAll("option[title]");b.forEach(b=>a.removeChild(b));for(let b of a.options)b.hasAttribute("label")&&""===b.getAttribute("label").trim()&&b.removeAttribute("label")},initMultipleSelectMenu:a=>(this.type="select",customElements.get("chassis-select")?void this.PRIVATE.initSelectSurrogate(a,document.createElement("chassis-select")):this.PRIVATE.initDefaultSelect(a)),initSelectSurrogate:(a,b)=>{b.slot="input",b.id=this.PRIVATE.guid;for(let c of a.attributes)c.specified&&(b.setAttribute(c.name,c.value),"autofocus"===c.name&&a.removeAttribute(c.name));this.removeChild(a),b.inject(a,this.querySelectorAll("label")),this.appendChild(b),this.PRIVATE.input=b},initSelectMenu:a=>(this.type="select",customElements.get("chassis-select")?void this.PRIVATE.initSelectSurrogate(a,document.createElement("chassis-select")):this.PRIVATE.initDefaultSelect(a)),observer:new MutationObserver((a,b)=>{let c=a.filter(a=>3!==a.addedNodes.item(0).nodeType);c.forEach((a,b,c)=>{let d=a.addedNodes.item(0);switch(d.nodeName){case"LABEL":return this.PRIVATE.initLabel(d);case"INPUT":if(void 0===c[b+1])return this.PRIVATE.initInput(d);let a=c[b+1].addedNodes.item(0);return a&&"DATALIST"===a.nodeName?this.PRIVATE.initDatalist(d,a):this.PRIVATE.initInput(d);case"TEXTAREA":return this.PRIVATE.initInput(d);case"SELECT":return d.multiple?this.PRIVATE.initMultipleSelectMenu(d):this.PRIVATE.initSelectMenu(d);default:}}),b.disconnect()})}),this.PRIVATE.observer.observe(this,{childList:!0})}static get observedAttributes(){return["disabled"]}get input(){return this.PRIVATE.input}set input(a){return this.input?void console.warn(`Setting <chassis-control> child input programmatically is not allowed.`):void(this.PRIVATE.input=a)}get type(){return this.getAttribute("type")}set type(a){this.setAttribute("type",a)}connectedCallback(){this.PRIVATE.guid=this.UTIL.generateGuid("control")}});