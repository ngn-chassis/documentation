!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";var r=n(2),f=r(n(3)),o=r(n(4)),l=r(n(5)),s=r(n(7)),a=r(n(8)),u=r(n(0));customElements.define("author-options",function(e){function t(){var h;return(0,f.default)(this,t),(h=(0,l.default)(this,(0,s.default)(t).call(this,'<template><style>@charset "UTF-8"; :host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-options{display:block;width:100%}author-options *,author-options :after,author-options :before{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>'))).UTIL.defineProperties({cherryPicked:{private:!0},form:{readonly:!0,get:function(){return h.parentNode.form}},displayOptions:{readonly:!0,get:function(){return new(h.PRIVATE.generateChassisHTMLOptionsCollectionConstructor())(h.options.map(function(e){return e.displayElement}),h.selectedIndex,function(e,t){return h.addOption(h.PRIVATE.generateOptionObject(e),t)},function(e){return h.removeOptionByIndex(e)})}},hoveredIndex:{readonly:!0,get:function(){return h.options.findIndex(function(e){return e.displayElement.hover})}},lastSelectedIndex:{private:!0},multiple:{readonly:!0,get:function(){return h.parentNode.multiple}},options:{readonly:!0,default:[]},selectedIndices:{readonly:!0,get:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,i=h.selectedOptions[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;e.push(l.index)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return e}},selectedOptions:{readonly:!0,get:function(){var e=h.querySelectorAll("[selected]");return new(h.PRIVATE.generateChassisHTMLCollectionConstructor())(e)}},Selection:{readonly:!0,private:!0,default:function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];(0,f.default)(this,t),this.options=e}return(0,o.default)(t,[{key:"append",value:function(e){this.options.push(e)}},{key:"clear",value:function(){this.options=[]}},{key:"includes",value:function(e){return this.options.includes(e)}},{key:"prepend",value:function(e){this.options.unshift(e)}},{key:"selectAll",value:function(){this.options.forEach(function(e){return e.selected=!0})}},{key:"displayElements",get:function(){return this.options.map(function(e){return e.displayElement})}},{key:"length",get:function(){return this.options.length}},{key:"first",get:function(){return this.options[0]}},{key:"last",get:function(){return this.options[this.options.length-1]}}]),t}()},selectionStartIndex:{private:!0}}),h.UTIL.definePrivateMethods({arrowDownHandler:function(e){if(h.multiple){var t=h.PRIVATE.lastSelectedIndex;if(t!==h.options.length-1)return h.emit("option.selected",{index:null===t?0:t+1,keyboard:!0,shiftKey:e.detail.shiftKey,ctrlKey:!1,metaKey:!1})}else{var n=e.detail.startIndex;switch(n){case h.options.length-1:return;default:return h.hoverOption(n+1)}}},arrowUpHandler:function(e){if(h.multiple){var t=h.PRIVATE.lastSelectedIndex;if(0!==t)return h.emit("option.selected",{index:null===t?h.options.length-1:t-1,keyboard:!0,shiftKey:e.detail.shiftKey,ctrlKey:!1,metaKey:!1})}else{var n=e.detail.startIndex;switch(n){case-1:case 0:return;default:return h.hoverOption(n-1)}}},diffSelections:function(e,t){return e.filter(function(e){return!t.includes(e)})},generateChassisHTMLCollectionConstructor:function(){var r=new WeakMap;return function(){function ChassisHTMLCollection(e){var n=this;(0,f.default)(this,ChassisHTMLCollection),r.set(this,{arr:e}),e.forEach(function(e,t){(n[t]=e).id&&(n[e.id]=e)})}return(0,o.default)(ChassisHTMLCollection,[{key:"item",value:function(e){return r.get(this).arr[e]}},{key:"namedItem",value:function(t){var e=r.get(this).arr.filter(function(e){return e.id===t||e.name===t});return 0<e.length?e[0]:null}},{key:Symbol.iterator,value:function(){var t=this,n=0;return{next:function(){var e={value:r.get(t).arr[n],done:!(n in r.get(t).arr)};return n++,e}}}},{key:Symbol.toStringTag,value:function(){return"ChassisHTMLCollection"}},{key:"length",get:function(){return r.get(this).arr.length}}]),ChassisHTMLCollection}()},generateChassisHTMLOptionsCollectionConstructor:function(){var i=new WeakMap;return function(e){function ChassisHTMLOptionsCollection(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0;return(0,f.default)(this,ChassisHTMLOptionsCollection),(t=(0,l.default)(this,(0,s.default)(ChassisHTMLOptionsCollection).call(this,e))).selectedIndex=n,t.add=r,t.remove=o,i.set((0,u.default)((0,u.default)(t)),{arr:e}),t}return(0,a.default)(ChassisHTMLOptionsCollection,e),(0,o.default)(ChassisHTMLOptionsCollection,[{key:Symbol.toStringTag,value:function(){return"ChassisHTMLOptionsCollection"}}]),ChassisHTMLOptionsCollection}(h.PRIVATE.ChassisHTMLCollection())},generateOptgroup:function(e){if(!customElements.get("author-optgroup"))return h.UTIL.throwError({type:"dependency",vars:{name:"author-optgroup"}});var t=document.createElement("author-optgroup");t.id=h.UTIL.generateGuid("optgroup");var n=e.getAttribute("label");if(!n||""===n.trim())return h.UTIL.throwError({message:"<optgroup> must have a label attribute!"});t.setAttribute("label",n);var r=e.querySelectorAll("option"),o=!0,i=!1,l=void 0;try{for(var s,a=r[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var u=s.value;h.addOption(h.PRIVATE.generateOptionObject(u),null,t)}}catch(e){i=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw l}}return t},generateOptionObject:function(e){return customElements.get("author-option")?new(h.PRIVATE.generateOptionConstructor())((0,u.default)((0,u.default)(h)),h.UTIL.generateGuid(),e,document.createElement("author-option")):h.UTIL.throwError({type:"dependency",vars:{name:"author-option"}})},generateOptionConstructor:function(){var d=new WeakMap;h.PRIVATE.optionSelectionHandler;return function(){function c(e,t,n,r){(0,f.default)(this,c),this.key=t,this.form=e.form,this.defaultSelected=n.selected,this.sourceElement=n,this.displayElement=r,this.displayElement.parent=e,this.displayElement.selected=n.selected,this.displayElement.defaultSelected=n.selected,this.displayElement.innerHTML=n.innerHTML;var o=!0,i=!1,l=void 0;try{for(var s,a=n.attributes[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var u=s.value;"boolean"!=typeof u.value?this.displayElement.setAttribute(u.name,u.value):u.value?this.displayElement.setAttribute(u.name,""):this.displayElement.removeAttribute(u.name)}}catch(e){i=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw l}}d.set(this,{attributes:{disabled:n.disabled,id:n.getAttribute("id"),label:n.getAttribute("label")||n.textContent.trim(),selected:n.selected,value:n.hasAttribute("value")?n.getAttribute("value").trim():null,text:n.text.trim()}})}return(0,o.default)(c,[{key:"remove",value:function(){this.sourceElement.remove(),this.displayElement.remove()}},{key:"setAttr",value:function(e,t){"boolean"==typeof(this.sourceElement[e]=t)?t?this.displayElement.setAttribute(e,""):this.displayElement.removeAttribute(e):this.displayElement.setAttribute(e,t),d.get(this).attributes[e]=t}},{key:"disabled",get:function(){return d.get(this).attributes.disabled},set:function(e){this.setAttr("disabled",e)}},{key:"index",get:function(){return this.sourceElement.index}},{key:"id",get:function(){return d.get(this).attributes.id},set:function(e){this.setAttr("id",e)}},{key:"selected",get:function(){return d.get(this).attributes.selected},set:function(e){this.setAttr("selected",e)}},{key:"label",get:function(){return d.get(this).attributes.label},set:function(e){this.setAttr("label",e)}},{key:"text",get:function(){return d.get(this).attributes.text},set:function(e){this.setAttr("text",e)}},{key:"value",get:function(){return d.get(this).attributes.value},set:function(e){this.setAttr("value",e)}}]),c}()},getCurrentSelection:function(){return h.options.filter(function(e){return e.selected})},handleClickSelection:function(e,t){var n=h.PRIVATE,r=(n.cherryPicked,n.getCurrentSelection),o=n.lastSelectedIndex,i=n.Selection,l=n.selectionStartIndex,s=e.index,a=e.shiftKey,u=e.ctrlKey,c=e.metaKey,d=h.options[s];if(a&&null!==o){h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.cherryPicked.clear();var f=[s,l].sort(function(e,t){return e-t});return t(new i(f[0]===f[1]?[d]:h.options.slice(f[0],f[1]+1)))}var p=r();return u||c?(h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPicked.options=d.selected?p.filter(function(e){return e!==d}):h.options.filter(function(e){return e===d||p.includes(e)}),t(h.PRIVATE.cherryPicked)):1!==p.length||s!==o?(h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPicked.clear(),t(new i([d]))):void 0},handleKeyboardSelection:function(e,t){var n=h.PRIVATE,r=n.cherryPicked,o=n.getCurrentSelection,i=(n.lastSelectedIndex,n.Selection),l=n.selectionStartIndex,s=e.index,a=e.shiftKey,u=h.options[s],c=o();if(h.PRIVATE.lastSelectedIndex=s,!a||0===c.length)return h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPicked.clear(),t(new i([u]));if(0<c.length){var d=[s,l].sort(),f=new i(d[0]===d[1]?[u]:h.options.slice(d[0],d[1]+1));return 0<r.length&&(f.options=h.options.filter(function(e){return f.includes(e)||r.includes(e)})),t(f)}},optionSelectionHandler:function(e){var t=h.PRIVATE,n=t.cherryPicked,l=t.diffSelections,s=t.getCurrentSelection,a=t.generateChassisHTMLCollectionConstructor,r=(t.handleClickSelection,t.handleKeyboardSelection,t.Selection);null===n&&(h.PRIVATE.cherryPicked=new r([]));var o=e.detail,i=o.index,u=o.keyboard,c=function(e){var t=s(),n=e.length>=t.length?e.options:t;if(0!==l(n,n===t?e.options:t).length){var r=h.parentNode.beforeChange,o={options:e.options,previous:h.selectedOptions,next:new(a())(e.displayElements)},i=function(){return h.deselectAll(),e.selectAll(),h.emit("options.selected",o,h.parentNode)};if(!r||"function"!=typeof r)return i();r(h.selectedOptions,o.next,i)}};return h.multiple?u?h.PRIVATE.handleKeyboardSelection(e.detail,c):h.PRIVATE.handleClickSelection(e.detail,c):c(new r([h.options[i]]))},parentStateChangeHandler:function(e){h.emit("state.change",e.detail);var t=e.detail,n=t.name,r=t.value;switch(n){case"multiple":if(!r&&0<h.selectedOptions.length){var o=h.selectedIndex;h.deselectAll(),h.emit("option.selected",{index:o})}break;default:return}}}),h.UTIL.registerListeners((0,u.default)((0,u.default)(h)),{connected:function(){h.PRIVATE.selectionStartIndex=0<=h.selectedIndex?h.selectedIndex:0,h.parentNode.on("state.change",h.PRIVATE.parentStateChangeHandler)},disconnected:function(){h.parentNode.off("state.change",h.PRIVATE.parentStateChangeHandler)},"keydown.arrowUp":h.PRIVATE.arrowUpHandler,"keydown.arrowDown":h.PRIVATE.arrowDownHandler,"option.selected":h.PRIVATE.optionSelectionHandler}),h}return(0,a.default)(t,e),(0,o.default)(t,[{key:"addOptgroup",value:function(e){var t=document.createElement("author-optgroup-label");t.innerHTML=e.getAttribute("label"),this.appendChild(t),this.appendChild(e)}},{key:"addOption",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;if(!customElements.get("author-option"))return this.UTIL.throwError({type:"dependency",vars:{name:"author-option"}});e instanceof Option&&(e=this.PRIVATE.generateOptionObject(e)),this.parentNode["".concat(e.index)]=e.displayElement,t?(n.insertBefore(e.displayElement,n.children.item(t)),this.options.splice(t,0,e),this.parentNode.sourceElement.add(e.sourceElement,t)):(n.appendChild(e.displayElement),this.options.push(e),this.parentNode.sourceElement[this.options.length-1]||this.parentNode.sourceElement.appendChild(e.sourceElement)),!e.selected||this.multiple||(this.selectedIndex=e.index)}},{key:"addOptions",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value,s=l instanceof HTMLElement;switch(l.nodeName){case"OPTION":this.addOption(s?this.PRIVATE.generateOptionObject(l):l);continue;case"OPTGROUP":this.addOptgroup(s?this.PRIVATE.generateOptgroup(l):l);continue;default:this.UTIL.printToConsole("".concat(l.nodeName.toLowerCase()," is not a valid child element for <author-select>. Removing..."),"warning")}}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"clear",value:function(){for(;this.lastChild;)this.removeChild(this.lastChild)}},{key:"deselect",value:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];"number"==typeof e&&(e=this.options[e]),e.selected=!1,this.parentNode.selectedOptionsElement.remove(e,t)}},{key:"deselectAll",value:function(){var r=this,o=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.filter(function(e){return e.selected}).forEach(function(e,t,n){r.deselect(e,n.length-1&&o)})}},{key:"hoverOption",value:function(e){this.unHoverAllOptions(),this.options[e].displayElement.hover=!0}},{key:"item",value:function(e){return this.options[e].displayElement}},{key:"namedItem",value:function(n){var e=this.options.filter(function(e){var t=e.sourceElement.attributes.getNamedItem("id");return t&&t.value===n});return e.length?e[e.length-1].displayElement:null}},{key:"removeOptionByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null===e||e>=this.options.length||this.options[e].remove()}},{key:"unHoverAllOptions",value:function(){var n=this;this.options.forEach(function(e,t){return n.unHoverOption(t)})}},{key:"unHoverOption",value:function(e){this.options[e].displayElement.hover=!1}},{key:"selectedIndex",get:function(){return 0<this.selectedOptions.length?this.selectedOptions.item(0).index:null},set:function(e){this.emit("option.selected",{index:e})}},{key:"selectionStartIndex",get:function(){return this.PRIVATE.selectionStartIndex},set:function(e){this.UTIL.throwError({type:"readonly",message:'"selectionStartIndex" cannot be set manually.'})}}]),t}(AuthorElement(HTMLElement)))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){var r=n(6),o=n(0);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){var r=n(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r}]);