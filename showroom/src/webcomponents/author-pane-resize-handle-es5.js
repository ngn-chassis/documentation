!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";var o=n(2),r=o(n(3)),i=o(n(4)),u=o(n(6)),a=o(n(7)),l=o(n(0));customElements.define("author-pane-resize-handle",function(e){function t(){var s;return(0,r.default)(this,t),(s=(0,i.default)(this,(0,u.default)(t).call(this,'<template><style>@charset "UTF-8"; :host{display:flex;cursor:row-resize}:host *,:host :after,:host :before{box-sizing:border-box}:host-context(author-pane[horizontal]){cursor:col-resize}author-pane-resize-handle{display:flex;cursor:row-resize}author-pane-resize-handle *,author-pane-resize-handle :after,author-pane-resize-handle :before{box-sizing:border-box}author-pane-resize-handle-context(author-pane[horizontal]){cursor:col-resize}</style><slot></slot></template>'))).UTIL.defineProperties({initialized:{private:!0,default:!1},maxSize:{private:!0,default:null},startPosition:{private:!0,default:null},offset:{private:!0,default:null}}),s.UTIL.definePrivateMethods({cleanupMouseEventHandlers:function(){document.removeEventListener("mousemove",s.PRIVATE.globalMousemoveHandler),document.removeEventListener("mouseup",s.PRIVATE.globalMouseupHandler)},generatePercentage:function(e){return"".concat(e/s.parentNode.totalSize*100,"%")},globalMousemoveHandler:function(e){var t="x"===s.PRIVATE.axis?e.clientX:e.clientY;if(t!==s.PRIVATE.startPosition){s.parentNode.totalSize;var n=s.PRIVATE,o=n.previousPane,r=n.nextPane,i=n.maxSize,u=n.offset,a=n.generatePercentage,l=(n.handleResize,t-u.previous-o.dimensions.left);(!l||l<0)&&(l=0),i<=l&&(l=i),r.element.size=a(i-l),o.element.size=a(l)}},globalMouseupHandler:function(e){s.PRIVATE.startPosition=null,s.PRIVATE.offset=null,s.PRIVATE.cleanupMouseEventHandlers()}}),s.UTIL.registerListeners((0,l.default)((0,l.default)(s)),{disconnected:function(){return s.PRIVATE.cleanupMouseEventHandlers()},initialize:function(){s.PRIVATE.initialized||(s.UTIL.defineProperties({axis:{private:!0,readonly:!0,get:function(){return s.parentNode.hasAttribute("horizontal")?"x":"y"}},dimensions:{private:!0,readonly:!0,get:function(){return s.getBoundingClientRect()}},previousPane:{private:!0,readonly:!0,get:function(){var e=(0,l.default)((0,l.default)(s)).previousElementSibling;return{element:e,dimensions:e.getBoundingClientRect()}}},nextPane:{private:!0,readonly:!0,get:function(){var e=(0,l.default)((0,l.default)(s)).nextElementSibling;return{element:e,dimensions:e.getBoundingClientRect()}}}}),s.PRIVATE.initialized=!0)},mousedown:function(e){var t,n,o,r=s.PRIVATE,i=r.axis,u=r.dimensions,a=r.previousPane,l=r.nextPane;switch(i){case"x":t=e.clientX,n="width",o="right";break;case"y":t=e.clientY,n="height",o="bottom"}s.PRIVATE.startPosition=t,s.PRIVATE.maxSize=a.dimensions[n]+l.dimensions[n],s.PRIVATE.offset={previous:s.PRIVATE.startPosition-u[i],next:u[o]-t},document.addEventListener("mousemove",s.PRIVATE.globalMousemoveHandler),document.addEventListener("mouseup",s.PRIVATE.globalMouseupHandler)}}),s}return(0,a.default)(t,e),t}(AuthorElement(HTMLElement)))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var o=n(5),r=n(0);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(e){return n(e)}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(e)}t.exports=o},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){var o=n(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(n,e){function o(e,t){return n.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}n.exports=o}]);