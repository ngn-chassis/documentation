customElements.define("author-cycle",class extends AuthorElement(HTMLElement){constructor(){super(`<template><style>@charset "UTF-8"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([mode=custom]))>::slotted(:not([selected])){display:none!important}author-cycle{display:block}author-cycle *,author-cycle :after,author-cycle :before{box-sizing:border-box}author-cycle:not([mode=custom])) > :not([selected]){display:none!important}</style><slot></slot></template>`),this.UTIL.defineProperties({dummyEl:{private:!0,default:document.createElement("div")}}),this.UTIL.definePrivateMethods({getChildIndex:a=>[].slice.call(this.children).indexOf(a),getNextSelectedChild:a=>{let b=this.PRIVATE.getChildIndex(a);return{element:a,index:b}},hideChild:a=>a.removeAttribute("selected",""),beforeChangeCallback:(a,b)=>{0<=this.selectedIndex&&this.PRIVATE.hideChild(this.children.item(this.selectedIndex||0)),a.setAttribute("selected",""),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:{previousSelection:b,currentSelection:this.selected}}))},showChild:a=>{let{beforeChangeCallback:b,getNextSelectedChild:c,hideChild:d}=this.PRIVATE,e=this.selected,f=c(a),g=c=>{this.removeEventListener("beforechange",g);c.defaultPrevented||b(a,e)};this.addEventListener("beforechange",g);let h=new CustomEvent("beforechange",{bubbles:!0,cancelable:!0,composed:!0,detail:{currentSelection:this.selected,nextSelection:f,next(){return this.defaultPrevented?void b(a,e):console.warn(`<${this.localName}> Calling "next()" in "beforechange" event will not do anything unless the event's default behavior is canceled. (use Event.preventDefault())`)}}});h.detail.next=h.detail.next.bind(h),this.dispatchEvent(h)},showChildByIndex:a=>{this.selectedIndex===a||a>=this.children.length||0>a||this.PRIVATE.showChild(this.children.item(a))},showChildBySelector:a=>{let b=this.querySelectorAll(a);b.length&&(1<b.length&&console.warn(`<${this.localName}> found multiple nodes matching "${a}". Displaying first result...`),this.PRIVATE.showChild(b.item(0)))}}),this.UTIL.registerListeners(this,{connected:()=>{this.UTIL.monitorChildren(a=>{a.forEach(a=>{let{addedNodes:b,removedNodes:c,type:d}=a;switch(d){case"childList":if(0<c.length&&!this.selectedElement)return this.previous();}})})},rendered:()=>{for(let a in this.children){if(!this.children.hasOwnProperty(a))continue;let b=this.children.item(a);"object"==typeof b&&b!==this.selectedElement&&this.PRIVATE.hideChild(b)}}})}static get observedAttributes(){return["mode"]}get selected(){return{element:this.selectedElement,index:this.selectedIndex}}get selectedElement(){return null===this.selectedIndex?null:this.children.item(this.selectedIndex)}get selectedIndex(){for(let a in this.children){if(!this.children.hasOwnProperty(a))continue;let b=this.children.item(a);if("object"==typeof b&&b.hasAttribute("selected"))return parseInt(a)}return null}hideAll(){for(let a in this.children){if(!this.children.hasOwnProperty(a))continue;let b=this.children.item(a);"object"==typeof b&&this.PRIVATE.hideChild(b)}}indexOf(a){return this.PRIVATE.getChildIndex(a)}insertAdjacentHTML(a,b){switch(a){case"beforebegin":case"afterend":return HTMLElement.prototype.insertAdjacentHTML.call(this,a,b);default:let{dummyEl:c}=this.PRIVATE;c.insertAdjacentHTML(a,b);let d=c.children.item(0);for(;c.firstChild;)c.removeChild(c.firstChild);return"beforeend"===a?this.appendChild(d):this.insertBefore(d,this.firstElementChild);}}insertAdjacentElement(a,b){return"beforeend"===a?this.appendChild(b):"afterbegin"===a?this.insertBefore(b,this.firstElementChild):HTMLElement.prototype.insertAdjacentElement.call(this,a,b)}first(){this.show(0)}last(){this.show(this.children.length-1)}next(a){this.show(this.selectedIndex===this.children.length-1?0:this.selectedIndex+1),a&&a(this.selectedElement)}previous(a){this.show(0===this.selectedIndex?this.children.length-1:this.selectedIndex-1),a&&a(this.selectedElement)}show(a){if(null===a)return void(this.selectedIndex||this.PRIVATE.showChildByIndex(0));switch((typeof a).toLowerCase()){case"number":return this.PRIVATE.showChildByIndex(a);case"string":return isNaN(parseInt(a))?this.PRIVATE.showChildBySelector(a):this.PRIVATE.showChildByIndex(parseInt(a));default:return a instanceof HTMLElement?this.PRIVATE.showChild(a):this.UTIL.throwError({type:"reference",message:`Invalid query "${a}"`});}}});