!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";var o=n(2),p=o(n(3)),r=o(n(4)),l=o(n(5)),s=o(n(7)),u=o(n(8)),a=o(n(0));customElements.define("author-options",function(e){function t(){var h;return(0,p.default)(this,t),(h=(0,l.default)(this,(0,s.default)(t).call(this,'<template><style>@charset "UTF-8"; :host{contain:content;display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-options{contain:content;display:block;width:100%}author-options *,author-options :after,author-options :before{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>'))).UTIL.defineProperties({cherryPickedOptions:{private:!0},form:{readonly:!0,get:function(){return h.parentNode.form}},displayOptions:{readonly:!0,get:function(){return new(h.PRIVATE.generateAuthorHTMLOptionsCollectionConstructor())(h.options.map(function(e){return e.displayElement}),h.selectedIndex,function(e,t){return h.addOption(h.PRIVATE.generateOptionObject(e),t)},function(e){return h.removeOptionByIndex(e)})}},hoveredIndex:{readonly:!0,get:function(){return h.options.findIndex(function(e){return e.displayElement.hover})}},lastSelectedIndex:{private:!0},multiple:{readonly:!0,get:function(){return h.parentNode.multiple}},options:{readonly:!0,default:[]},selectedIndices:{readonly:!0,get:function(){var e=[],t=!0,n=!1,o=void 0;try{for(var r,i=h.selectedOptions[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value;e.push(l.index)}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}return e}},selectedOptions:{readonly:!0,get:function(){var e=h.querySelectorAll("[selected]");return new(h.PRIVATE.generateAuthorHTMLCollectionConstructor())(e)}},Selection:{readonly:!0,private:!0,default:function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];(0,p.default)(this,t),this.options=e}return(0,r.default)(t,[{key:"append",value:function(e){this.options.push(e)}},{key:"clear",value:function(){this.options=[]}},{key:"includes",value:function(e){return this.options.includes(e)}},{key:"prepend",value:function(e){this.options.unshift(e)}},{key:"selectAll",value:function(){this.options.forEach(function(e){return e.selected=!0})}},{key:"displayElements",get:function(){return this.options.map(function(e){return e.displayElement})}},{key:"length",get:function(){return this.options.length}},{key:"first",get:function(){return this.options[0]}},{key:"last",get:function(){return this.options[this.options.length-1]}}]),t}()},selectionStartIndex:{private:!0}}),h.UTIL.definePrivateMethods({arrowDownHandler:function(e){if(h.multiple){var t=h.PRIVATE.lastSelectedIndex;if(t!==h.options.length-1)return h.emit("option.selected",{index:null===t?0:t+1,keyboard:!0,shiftKey:e.detail.shiftKey,ctrlKey:!1,metaKey:!1})}else{var n=e.detail.startIndex;switch(n){case h.options.length-1:return;default:return h.hoverOption(n+1)}}},arrowUpHandler:function(e){if(h.multiple){var t=h.PRIVATE.lastSelectedIndex;if(0!==t)return h.emit("option.selected",{index:null===t?h.options.length-1:t-1,keyboard:!0,shiftKey:e.detail.shiftKey,ctrlKey:!1,metaKey:!1})}else{var n=e.detail.startIndex;switch(n){case-1:case 0:return;default:return h.hoverOption(n-1)}}},diffSelections:function(e,t){return e.filter(function(e){return!t.includes(e)})},generateAuthorHTMLOptionsCollectionConstructor:function(){var i=new WeakMap;return function(e){function AuthorHTMLOptionsCollection(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,o=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0;return(0,p.default)(this,AuthorHTMLOptionsCollection),(t=(0,l.default)(this,(0,s.default)(AuthorHTMLOptionsCollection).call(this,e))).selectedIndex=n,t.add=o,t.remove=r,i.set((0,a.default)((0,a.default)(t)),{arr:e}),t}return(0,u.default)(AuthorHTMLOptionsCollection,e),(0,r.default)(AuthorHTMLOptionsCollection,[{key:Symbol.toStringTag,value:function(){return"AuthorHTMLOptionsCollection"}}]),AuthorHTMLOptionsCollection}(h.PRIVATE.generateAuthorHTMLCollectionConstructor())},generateOptgroup:function(e){if(!customElements.get("author-optgroup"))return h.UTIL.throwError({type:"dependency",vars:{name:"author-optgroup"}});var t=document.createElement("author-optgroup");t.id=h.UTIL.generateGuid("optgroup");var n=e.getAttribute("label");if(!n||""===n.trim())return h.UTIL.throwError({message:"<optgroup> must have a label attribute!"});t.setAttribute("label",n);var o=e.querySelectorAll("option"),r=!0,i=!1,l=void 0;try{for(var s,u=o[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var a=s.value;h.addOption(h.PRIVATE.generateOptionObject(a),null,t)}}catch(e){i=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw l}}return t},generateOptionObject:function(e){return customElements.get("author-option")?new(h.PRIVATE.generateOptionConstructor())((0,a.default)((0,a.default)(h)),h.UTIL.generateGuid(),e,document.createElement("author-option")):h.UTIL.throwError({type:"dependency",vars:{name:"author-option"}})},generateOptionConstructor:function(){var d=new WeakMap;return function(){function c(e,t,n,o){(0,p.default)(this,c),this.key=t,this.form=e.form,this.defaultSelected=n.selected,this.sourceElement=n,this.displayElement=o,this.displayElement.parent=e,this.displayElement.selected=n.selected,this.displayElement.defaultSelected=n.selected,this.displayElement.innerHTML=n.innerHTML;var r=!0,i=!1,l=void 0;try{for(var s,u=n.attributes[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var a=s.value;"boolean"!=typeof a.value?this.displayElement.setAttribute(a.name,a.value):a.value?this.displayElement.setAttribute(a.name,""):this.displayElement.removeAttribute(a.name)}}catch(e){i=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw l}}d.set(this,{attributes:{disabled:n.disabled,id:n.getAttribute("id"),label:n.getAttribute("label")||n.textContent.trim(),selected:n.selected,value:n.hasAttribute("value")?n.getAttribute("value").trim():null,text:n.text.trim()}})}return(0,r.default)(c,[{key:"remove",value:function(){this.sourceElement.remove(),this.displayElement.remove()}},{key:"setAttr",value:function(e,t){"boolean"==typeof(this.sourceElement[e]=t)?t?this.displayElement.setAttribute(e,""):this.displayElement.removeAttribute(e):this.displayElement.setAttribute(e,t),d.get(this).attributes[e]=t}},{key:"disabled",get:function(){return d.get(this).attributes.disabled},set:function(e){this.setAttr("disabled",e)}},{key:"index",get:function(){return this.sourceElement.index}},{key:"id",get:function(){return d.get(this).attributes.id},set:function(e){this.setAttr("id",e)}},{key:"selected",get:function(){return d.get(this).attributes.selected},set:function(e){this.setAttr("selected",e)}},{key:"label",get:function(){return d.get(this).attributes.label},set:function(e){this.setAttr("label",e)}},{key:"text",get:function(){return d.get(this).attributes.text},set:function(e){this.setAttr("text",e)}},{key:"value",get:function(){return d.get(this).attributes.value},set:function(e){this.setAttr("value",e)}}]),c}()},getCurrentSelection:function(){return h.options.filter(function(e){return e.selected})},handleClickSelection:function(e,t){var n=h.PRIVATE,o=(n.cherryPickedOptions,n.getCurrentSelection),r=n.lastSelectedIndex,i=n.Selection,l=n.selectionStartIndex,s=e.index,u=e.shiftKey,a=e.ctrlKey,c=e.metaKey,d=h.options[s];if(u&&null!==r){h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.cherryPickedOptions.clear();var p=[s,l].sort(function(e,t){return e-t});return t(new i(p[0]===p[1]?[d]:h.options.slice(p[0],p[1]+1)))}var f=o();return a||c?(h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPickedOptions.options=d.selected?f.filter(function(e){return e!==d}):h.options.filter(function(e){return e===d||f.includes(e)}),t(h.PRIVATE.cherryPickedOptions)):1!==f.length||s!==r?(h.PRIVATE.lastSelectedIndex=s,h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPickedOptions.clear(),t(new i([d]))):void 0},handleKeyboardSelection:function(e,t){var n=h.PRIVATE,o=n.cherryPickedOptions,r=n.getCurrentSelection,i=n.Selection,l=n.selectionStartIndex,s=e.index,u=e.shiftKey,a=h.options[s],c=r();if(h.PRIVATE.lastSelectedIndex=s,!u||0===c.length)return h.PRIVATE.selectionStartIndex=s,h.PRIVATE.cherryPickedOptions.clear(),t(new i([a]));if(0<c.length){var d=[s,l].sort(),p=new i(d[0]===d[1]?[a]:h.options.slice(d[0],d[1]+1));return 0<o.length&&(p.options=h.options.filter(function(e){return p.includes(e)||o.includes(e)})),t(p)}},optionSelectionHandler:function(e){var t=h.PRIVATE,n=t.cherryPickedOptions,l=t.diffSelections,s=t.getCurrentSelection,u=t.generateAuthorHTMLCollectionConstructor,o=(t.handleClickSelection,t.handleKeyboardSelection,t.Selection);null===n&&(h.PRIVATE.cherryPickedOptions=new o([]));var r=e.detail,i=r.index,a=r.keyboard,c=function(e){var t=s(),n=e.length>=t.length?e.options:t;if(0!==l(n,n===t?e.options:t).length){var o=h.parentNode.beforeChange,r={options:e.options,previous:h.selectedOptions,next:new(u())(e.displayElements)},i=function(){return h.deselectAll(),e.selectAll(),h.emit("options.selected",r,h.parentNode)};if(!o||"function"!=typeof o)return i();o(h.selectedOptions,r.next,i)}};return h.multiple?a?h.PRIVATE.handleKeyboardSelection(e.detail,c):h.PRIVATE.handleClickSelection(e.detail,c):c(new o([h.options[i]]))},parentStateChangeHandler:function(e){h.emit("state.change",e.detail);var t=e.detail,n=t.name,o=t.value;switch(n){case"multiple":if(!o&&0<h.selectedOptions.length){var r=h.selectedIndex;h.deselectAll(),h.emit("option.selected",{index:r})}break;default:return}}}),h.UTIL.registerListeners((0,a.default)((0,a.default)(h)),{connected:function(){h.PRIVATE.selectionStartIndex=0<=h.selectedIndex?h.selectedIndex:0,h.parentNode.on("state.change",h.PRIVATE.parentStateChangeHandler)},disconnected:function(){h.parentNode.off("state.change",h.PRIVATE.parentStateChangeHandler)},"keydown.arrowUp":h.PRIVATE.arrowUpHandler,"keydown.arrowDown":h.PRIVATE.arrowDownHandler,"option.selected":h.PRIVATE.optionSelectionHandler}),h}return(0,u.default)(t,e),(0,r.default)(t,[{key:"addOptgroup",value:function(e){var t=document.createElement("author-optgroup-label");t.innerHTML=e.getAttribute("label"),this.appendChild(t),this.appendChild(e)}},{key:"addOption",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;if(!customElements.get("author-option"))return this.UTIL.throwError({type:"dependency",vars:{name:"author-option"}});e instanceof Option&&(e=this.PRIVATE.generateOptionObject(e)),this.parentNode["".concat(e.index)]=e.displayElement,t?(n.insertBefore(e.displayElement,n.children.item(t)),this.options.splice(t,0,e),this.parentNode.sourceElement.add(e.sourceElement,t)):(n.appendChild(e.displayElement),this.options.push(e),this.parentNode.sourceElement[this.options.length-1]||this.parentNode.sourceElement.appendChild(e.sourceElement)),!e.selected||this.multiple||(this.selectedIndex=e.index)}},{key:"addOptions",value:function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value,s=l instanceof HTMLElement;switch(l.nodeName){case"OPTION":this.addOption(s?this.PRIVATE.generateOptionObject(l):l);continue;case"OPTGROUP":this.addOptgroup(s?this.PRIVATE.generateOptgroup(l):l);continue;default:this.UTIL.printToConsole("".concat(l.nodeName.toLowerCase()," is not a valid child element for <author-select>. Removing..."),"warning")}}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}},{key:"clear",value:function(){for(;this.lastChild;)this.removeChild(this.lastChild)}},{key:"deselect",value:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];"number"==typeof e&&(e=this.options[e]),e.selected=!1,this.parentNode.selectedOptionsElement.remove(e,t)}},{key:"deselectAll",value:function(){var o=this,r=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.filter(function(e){return e.selected}).forEach(function(e,t,n){o.deselect(e,n.length-1&&r)})}},{key:"hoverOption",value:function(e){this.unHoverAllOptions(),this.options[e].displayElement.hover=!0}},{key:"item",value:function(e){return this.options[e].displayElement}},{key:"namedItem",value:function(n){var e=this.options.filter(function(e){var t=e.sourceElement.attributes.getNamedItem("id");return t&&t.value===n});return e.length?e[e.length-1].displayElement:null}},{key:"removeOptionByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null===e||e>=this.options.length||this.options[e].remove()}},{key:"unHoverAllOptions",value:function(){var n=this;this.options.forEach(function(e,t){return n.unHoverOption(t)})}},{key:"unHoverOption",value:function(e){this.options[e].displayElement.hover=!1}},{key:"selectedIndex",get:function(){return 0<this.selectedOptions.length?this.selectedOptions.item(0).index:-1},set:function(e){this.emit("option.selected",{index:e})}},{key:"selectionStartIndex",get:function(){return this.PRIVATE.selectionStartIndex},set:function(e){this.UTIL.throwError({type:"readonly",message:'"selectionStartIndex" cannot be set manually.'})}}]),t}(AuthorElement(HTMLElement)))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,n){var o=n(6),r=n(0);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(e){return n(e)}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(e)}t.exports=o},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){var o=n(9);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(n,e){function o(e,t){return n.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}n.exports=o}]);