!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=109)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(27)("wks"),o=n(18),i=n(4).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(4),o=n(0),i=n(12),u=n(10),s=function(t,e,n){var c,a,f,l=t&s.F,p=t&s.G,d=t&s.S,h=t&s.P,y=t&s.B,v=t&s.W,b=p?o:o[e]||(o[e]={}),g=b.prototype,m=p?r:d?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(a=!l&&m&&void 0!==m[c])&&c in b||(f=a?m[c]:n[c],b[c]=p&&"function"!=typeof m[c]?n[c]:y&&a?i(f,r):v&&m[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[c]=f,t&s.R&&g&&!g[c]&&u(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(53),i=n(33),u=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(9),o=n(20);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(37),o=n(35);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(54);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports={}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(18)("meta"),o=n(2),i=n(6),u=n(9).f,s=0,c=Object.isExtensible||function(){return!0},a=!n(7)(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&f(t),t}}},function(t,e,n){var r=n(35);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(9).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(51),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(12),o=n(62),i=n(61),u=n(3),s=n(30),c=n(48),a={},f={};(e=t.exports=function(t,e,n,l,p){var d,h,y,v,b=p?function(){return t}:c(t),g=r(n,l,e?2:1),m=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(d=s(t.length);d>m;m++)if((v=e?g(u(h=t[m])[0],h[1]):g(t[m]))===a||v===f)return v}else for(y=b.call(t);!(h=y.next()).done;)if((v=o(y,g,h.value,e))===a||v===f)return v}).BREAK=a,e.RETURN=f},function(t,e,n){var r=n(12),o=n(37),i=n(16),u=n(30),s=n(66);t.exports=function(t,e){var n=1==t,c=2==t,a=3==t,f=4==t,l=6==t,p=5==t||l,d=e||s;return function(e,s,h){for(var y,v,b=i(e),g=o(b),m=r(s,h,3),O=u(g.length),x=0,E=n?d(e,O):c?d(e,0):void 0;O>x;x++)if((p||x in g)&&(v=m(y=g[x],x,b),t))if(n)E[x]=v;else if(v)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:E.push(y)}else if(f)return!1;return l?-1:a||f?f:E}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4),o=n(0),i=n(34),u=n(25),s=n(9).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(27)("keys"),o=n(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(3),o=n(102),i=n(26),u=n(28)("IE_PROTO"),s=function(){},c=function(){var t,e=n(52)("iframe"),r=i.length;for(e.style.display="none",n(99).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){t.exports=n(10)},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){n(106);for(var r=n(4),o=n(10),i=n(13),u=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var a=s[c],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e){},function(t,e,n){var r=n(14),o=n(20),i=n(11),u=n(33),s=n(6),c=n(53),a=Object.getOwnPropertyDescriptor;e.f=n(8)?a:function(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(51),o=n(26).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(86)),o=u(n(84)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){t.exports={default:n(95),__esModule:!0}},function(t,e,n){var r=n(96),o=n(1)("iterator"),i=n(13);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(98)(!0);n(55)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(6),o=n(16),i=n(28)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(6),o=n(11),i=n(101)(!1),u=n(28)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(2),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(8)&&!n(7)(function(){return 7!=Object.defineProperty(n(52)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(34),o=n(5),i=n(32),u=n(10),s=n(6),c=n(13),a=n(103),f=n(17),l=n(50),p=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,y,v,b,g){a(n,e,y);var m,O,x,E=function(t){if(!d&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",w="values"==v,S=!1,k=t.prototype,j=k[p]||k["@@iterator"]||v&&k[v],A=j||E(v),P=v?w?E("entries"):A:void 0,M="Array"==e&&k.entries||j;if(M&&(x=l(M.call(new t)))!==Object.prototype&&x.next&&(f(x,_,!0),r||s(x,p)||u(x,p,h)),w&&j&&"values"!==j.name&&(S=!0,A=function(){return j.call(this)}),r&&!g||!d&&!S&&k[p]||u(k,p,A),c[e]=A,c[_]=h,v)if(m={values:w?A:E("values"),keys:b?A:E("keys"),entries:P},g)for(O in m)O in k||i(k,O,m[O]);else o(o.P+o.F*(d||S),e,m);return m}},function(t,e,n){"use strict";var r=n(5),o=n(54),i=n(12),u=n(21);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,s,c=arguments[1];return o(this),(e=void 0!==c)&&o(c),void 0==t?new this:(n=[],e?(r=0,s=i(c,arguments[2],2),u(t,!1,function(t){n.push(s(t,r++))})):u(t,!1,n.push,n),new this(n))}})}},function(t,e,n){n(56)("WeakMap")},function(t,e,n){"use strict";var r=n(5);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){n(58)("WeakMap")},function(t,e,n){"use strict";var r=n(4),o=n(5),i=n(15),u=n(7),s=n(10),c=n(41),a=n(21),f=n(40),l=n(2),p=n(17),d=n(9).f,h=n(22)(0),y=n(8);t.exports=function(t,e,n,v,b,g){var m=r[t],O=m,x=b?"set":"add",E=O&&O.prototype,_={};return y&&"function"==typeof O&&(g||E.forEach&&!u(function(){(new O).entries().next()}))?(O=e(function(e,n){f(e,O,t,"_c"),e._c=new m,void 0!=n&&a(n,b,e[x],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in E&&(!g||"clear"!=t)&&s(O.prototype,t,function(n,r){if(f(this,O,t),!e&&g&&!l(n))return"get"==t&&void 0;var o=this._c[t](0===n?0:n,r);return e?this:o})}),g||d(O.prototype,"size",{get:function(){return this._c.size}})):(O=v.getConstructor(e,t,b,x),c(O.prototype,n),i.NEED=!0),p(O,t),_[t]=O,o(o.G+o.W+o.F,_),g||v.setStrong(O,t,b),O}},function(t,e,n){var r=n(13),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(41),o=n(15).getWeak,i=n(3),u=n(2),s=n(40),c=n(21),a=n(22),f=n(6),l=n(39),p=a(5),d=a(6),h=0,y=function(t){return t._l||(t._l=new v)},v=function(){this.a=[]},b=function(t,e){return p(t.a,function(t){return t[0]===e})};v.prototype={get:function(t){var e=b(this,t);if(e)return e[1]},has:function(t){return!!b(this,t)},set:function(t,e){var n=b(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var a=t(function(t,r){s(t,a,e,"_i"),t._t=e,t._i=h++,t._l=void 0,void 0!=r&&c(r,n,t[i],t)});return r(a.prototype,{delete:function(t){if(!u(t))return!1;var n=o(t);return!0===n?y(l(this,e)).delete(t):n&&f(n,this._i)&&delete n[this._i]},has:function(t){if(!u(t))return!1;var n=o(t);return!0===n?y(l(this,e)).has(t):n&&f(n,this._i)}}),a},def:function(t,e,n){var r=o(i(e),!0);return!0===r?y(t).set(e,n):r[t._i]=n,t},ufstore:y}},function(t,e,n){"use strict";var r=n(19),o=n(23),i=n(14),u=n(16),s=n(37),c=Object.assign;t.exports=!c||n(7)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,a=1,f=o.f,l=i.f;c>a;)for(var p,d=s(arguments[a++]),h=f?r(d).concat(f(d)):r(d),y=h.length,v=0;y>v;)l.call(d,p=h[v++])&&(n[p]=d[p]);return n}:c},function(t,e,n){var r=n(2),o=n(45),i=n(1)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(65);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){"use strict";var r,o=n(22)(0),i=n(32),u=n(15),s=n(64),c=n(63),a=n(2),f=n(7),l=n(39),p=u.getWeak,d=Object.isExtensible,h=c.ufstore,y={},v=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(a(t)){var e=p(t);return!0===e?h(l(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(l(this,"WeakMap"),t,e)}},g=t.exports=n(60)("WeakMap",v,b,c,!0,!0);f(function(){return 7!=(new g).set((Object.freeze||Object)(y),7).get(y)})&&(s((r=c.getConstructor(v,"WeakMap")).prototype,b),u.NEED=!0,o(["delete","has","get","set"],function(t){var e=g.prototype,n=e[t];i(e,t,function(e,o){if(a(e)&&!d(e)){this._f||(this._f=new r);var i=this._f[t](e,o);return"set"==t?this:i}return n.call(this,e,o)})}))},function(t,e,n){n(42),n(38),n(67),n(59),n(57),t.exports=n(0).WeakMap},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){var r=n(5);r(r.S,"Object",{create:n(31)})},function(t,e,n){n(70);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){var r=n(2),o=n(3),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(12)(Function.call,n(43).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(5);r(r.S,"Object",{setPrototypeOf:n(73).set})},function(t,e,n){n(74),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(76)),o=u(n(72)),i=u(n(46));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){n(24)("observable")},function(t,e,n){n(24)("asyncIterator")},function(t,e,n){var r=n(11),o=n(44).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(19),o=n(23),i=n(14);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),c=i.f,a=0;s.length>a;)c.call(t,u=s[a++])&&e.push(u);return e}},function(t,e,n){"use strict";var r=n(4),o=n(6),i=n(8),u=n(5),s=n(32),c=n(15).KEY,a=n(7),f=n(27),l=n(17),p=n(18),d=n(1),h=n(25),y=n(24),v=n(81),b=n(45),g=n(3),m=n(11),O=n(33),x=n(20),E=n(31),_=n(80),w=n(43),S=n(9),k=n(19),j=w.f,A=S.f,P=_.f,M=r.Symbol,T=r.JSON,L=T&&T.stringify,C=d("_hidden"),N=d("toPrimitive"),I={}.propertyIsEnumerable,R=f("symbol-registry"),F=f("symbols"),B=f("op-symbols"),H=Object.prototype,W="function"==typeof M,G=r.QObject,D=!G||!G.prototype||!G.prototype.findChild,K=i&&a(function(){return 7!=E(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(H,e);r&&delete H[e],A(t,e,n),r&&t!==H&&A(H,e,r)}:A,V=function(t){var e=F[t]=E(M.prototype);return e._k=t,e},q=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},z=function(t,e,n){return t===H&&z(B,e,n),g(t),e=O(e,!0),g(n),o(F,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=E(n,{enumerable:x(0,!1)})):(o(t,C)||A(t,C,x(1,{})),t[C][e]=!0),K(t,e,n)):A(t,e,n)},U=function(t,e){g(t);for(var n,r=v(e=m(e)),o=0,i=r.length;i>o;)z(t,n=r[o++],e[n]);return t},J=function(t){var e=I.call(this,t=O(t,!0));return!(this===H&&o(F,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,C)&&this[C][t])||e)},Y=function(t,e){if(t=m(t),e=O(e,!0),t!==H||!o(F,e)||o(B,e)){var n=j(t,e);return!n||!o(F,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=P(m(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==C||e==c||r.push(e);return r},X=function(t){for(var e,n=t===H,r=P(n?B:m(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(H,e)||i.push(F[e]);return i};W||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(B,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),K(this,t,x(1,n))};return i&&D&&K(H,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",function(){return this._k}),w.f=Y,S.f=z,n(44).f=_.f=Q,n(14).f=J,n(23).f=X,i&&!n(34)&&s(H,"propertyIsEnumerable",J,!0),h.f=function(t){return V(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),$=0;Z.length>$;)d(Z[$++]);for(var tt=k(d.store),et=0;tt.length>et;)y(tt[et++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){D=!0},useSimple:function(){D=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,e){return void 0===e?E(t):U(E(t),e)},defineProperty:z,defineProperties:U,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),T&&u(u.S+u.F*(!W||a(function(){var t=M();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return"function"==typeof(e=r[1])&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,L.apply(T,r)}}}),M.prototype[N]||n(10)(M.prototype,N,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(82),n(42),n(79),n(78),t.exports=n(0).Symbol},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){n(49),n(38),t.exports=n(25).f("iterator")},function(t,e,n){t.exports={default:n(85),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(46),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(47),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(5),o=n(0),i=n(7);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(16),o=n(50);n(90)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){n(91),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){t.exports={default:n(92),__esModule:!0}},function(t,e,n){var r=n(5);r(r.S+r.F*!n(8),"Object",{defineProperty:n(9).f})},function(t,e,n){n(94);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(36),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(3),o=n(48);t.exports=n(0).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(29),o=n(35);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),c=r(n),a=s.length;return c<0||c>=a?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):i:t?s.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(11),o=n(30),i=n(100);t.exports=function(t){return function(e,n,u){var s,c=r(e),a=o(c.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(9),o=n(3),i=n(19);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,c=0;s>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";var r=n(31),o=n(20),i=n(17),u={};n(10)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(105),o=n(104),i=n(13),u=n(11);t.exports=n(55)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){n(38),n(49),t.exports=n(97)},function(t,e,n){t.exports={default:n(107),__esModule:!0}},function(t,e,n){"use strict";var r,o=p(n(108)),i=p(n(47)),u=p(n(93)),s=p(n(89)),c=p(n(88)),a=p(n(87)),f=p(n(77)),l=p(n(69));function p(t){return t&&t.__esModule?t:{default:t}}customElements.define("chassis-options",(r=new l.default,function(t){function e(){(0,s.default)(this,e);var t=(0,a.default)(this,(e.__proto__||(0,u.default)(e)).call(this));t.keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",t.attachShadow({mode:"open"});var n=document.createElement("div");n.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');var o=n.querySelector("template");"content"in o?t.shadowRoot.appendChild(o.content.cloneNode(!0)):o.childNodes.forEach(function(e){t.shadowRoot.appendChild(e.cloneNode(!0))}),o=null,t.crypto=null;try{t.crypto=crypto}catch(e){t.crypto=msCrypto}return r.set(t,{addPrivateProps:function(e){for(var n in e)r.get(t)[n]=e[n]},addReadOnlyProp:function(e){(0,i.default)(t,e,r.get(t).readonlyProperty(e))},addReadOnlyProps:function(e){e.forEach(function(e){return r.get(t).addReadOnlyProp(e)})},generateGuid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^t.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e?e+"_"+n:n},getBooleanPropertyValue:function(e){return t.hasAttribute(e)&&"false"!==t.getAttribute(e)},handleAttributeChange:function(e,n){r.get(t).sourceEl&&(t.setAttribute(e,n),r.get(t).sourceEl[e]=n)},handleBooleanAttributeChange:function(e,n){if(r.get(t).sourceEl)return["true","false","",null].includes(n)?"false"===n&&t.hasAttribute(e)?(t.removeAttribute(e),void(r.get(t).sourceEl[e]=!1)):void(r.get(t).sourceEl[e]=t.hasAttribute(e)):(console.error("<"+t.localName+'> "'+e+'" attribute expected boolean but received "'+n+'"'),t.removeAttribute(e),void(r.get(t).sourceEl[e]=!1))},handleBooleanPropertyChange:function(e,n){if(!n)return t.removeAttribute(e),void(r.get(t).sourceEl[e]=!1);t.hasAttribute(e)&&"true"===t.getAttribute(e)||(t.setAttribute(e,""),r.get(t).sourceEl[e]=!0)},handlePropertyChange:function(e,n){r.get(t).sourceEl[e]=n,t.hasAttribute(e)&&t.getAttribute(e)===n||t.setAttribute(e,n)},readonlyProperty:function(e){return{get:function(){return r.get(t).sourceEl[e]},set:function(){return r.get(t).throw("readonly",{name:e})}}},throw:function(t,e){var n="ERROR <chassis-options> ";switch(t){case"readonly":n+='Cannot set read-only property "'+e.name+'".';break;default:n=n.trim()}console.error(n)}}),t.parent=null,t.selectedOption=null,t.selectedOptionEl=null,r.get(t).options=[],t}return(0,f.default)(e,t),(0,c.default)(e,[{key:"connectedCallback",value:function(){}},{key:"add",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;if(customElements.get("chassis-option")){if(!(t.hasOwnProperty("sourceElement")&&t.sourceElement instanceof HTMLElement)){var i=document.createElement("option");t.hasOwnProperty("innerHTML")&&(i.innerHTML=t.innerHTML),t.hasOwnProperty("label")&&(i.innerHTML=t.label),t.hasOwnProperty("value")&&(i.value=t.value),t.hasOwnProperty("disabled")&&(i.disabled="boolean"==typeof t.disabled&&t.disabled),t.sourceElement=i}var u=t.sourceElement.disabled,s=t.sourceElement.getAttribute("id"),c=t.sourceElement.getAttribute("label")||t.sourceElement.textContent.trim(),a=t.sourceElement.hasAttribute("selected"),f=t.sourceElement.getAttribute("value"),l=document.createElement("chassis-option");if(s&&(l.id=s),l.label=c,t.sourceElement.hasAttribute("label")&&l.setAttribute("label",t.sourceElement.getAttribute("label")),l.value=f,f&&l.setAttribute("value",f),l.disabled=u,u&&l.setAttribute("disabled",""),l.defaultSelected=a,l.key=r.get(this).generateGuid(),l.addEventListener("click",function(t){return n.selectByKey(l.key)}),l.innerHTML=t.sourceElement.innerHTML,l.parent=o,t={attributes:{disabled:u,id:s,label:c,selected:a,value:f},key:l.key,displayElement:l,sourceElement:t.sourceElement},e)return o.insertBefore(l,o.children.item(e)),this.parent[""+e]=t.displayElement,this.options.splice(e,0,t),this.parent.sourceEl.add(t.sourceElement,e),void(a&&this.selectByIndex(e));o.appendChild(l),this.parent[""+this.options.length]=t.displayElement,this.options.push(t),this.parent.sourceElement[this.options.length-1]||this.parent.sourceElement.appendChild(t.sourceElement),a&&this.selectByKey(t.key)}else console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")}},{key:"addChildren",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,u=(0,o.default)(t);!(e=(i=u.next()).done);e=!0){var s=i.value,c=s instanceof HTMLElement;switch(s.nodeName){case"OPTION":this.add(c?this.generateOptionObject(s):s);break;case"OPTGROUP":this.addOptgroup(c?this.generateOptgroup(s):s);break;default:console.warn(s.nodeName.toLowerCase()+" is not a valid child element for <chassis-select>. Removing...")}}}catch(t){n=!0,r=t}finally{try{!e&&u.return&&u.return()}finally{if(n)throw r}}}},{key:"addOptgroup",value:function(t){var e=document.createElement("chassis-optgroup-label");e.innerHTML=t.getAttribute("label"),this.appendChild(e),this.appendChild(t)}},{key:"clear",value:function(){for(;this.lastChild;)this.removeChild(this.lastChild)}},{key:"deselectAll",value:function(){this.selectedOption=null,this.parent.sourceElement.selectedIndex=-1,this.selectedOptionEl.contents=this.parent.placeholder,this.selectedOptionEl.setAttribute("placeholder","")}},{key:"generateOptgroup",value:function(t){if(customElements.get("chassis-optgroup")){var e=document.createElement("chassis-optgroup");e.id=r.get(this).generateGuid("optgroup");var n=t.getAttribute("label");if(n&&""!==n.trim()){e.setAttribute("label",n);var i=t.querySelectorAll("option"),u=!0,s=!1,c=void 0;try{for(var a,f=(0,o.default)(i);!(u=(a=f.next()).done);u=!0){var l=a.value;this.add(this.generateOptionObject(l),null,e)}}catch(t){s=!0,c=t}finally{try{!u&&f.return&&f.return()}finally{if(s)throw c}}return e}console.error("<optgroup> must have a label attribute!")}else console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.")}},{key:"generateOptionObject",value:function(t){if(customElements.get("chassis-option")){var e={id:r.get(this).generateGuid(),attributes:{},sourceElement:t},n=!0,i=!1,u=void 0;try{for(var s,c=(0,o.default)(t.attributes);!(n=(s=c.next()).done);n=!0){var a=s.value;e.attributes[a.name]=a.value}}catch(t){i=!0,u=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw u}}return e}console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")}},{key:"getOptionByKey",value:function(t){for(var e=void 0,n=0;n<this.options.length;n++)if(this.options[n].key===t){e=this.options[n];break}return e}},{key:"item",value:function(t){return this.options[t].displayElement}},{key:"namedItem",value:function(t){var e=this.options.filter(function(e){var n=e.sourceElement.attributes.getNamedItem("id");return n&&n.value===t});return e.length?e[e.length-1].displayElement:null}},{key:"removeOptionByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null!==t){var n=this.options[t];n.sourceElement.remove(),e&&n.displayElement.remove(),this.options.splice(t,1)}}},{key:"select",value:function(t){t!==this.selectedOption&&(t.sourceElement.selected=!0,this.selectedOptionEl.contents=t.displayElement.innerHTML,this.selectedOption=t,this.options.forEach(function(t){return t.displayElement.removeAttribute("selected")}),t.displayElement.setAttribute("selected",""),this.selectedOptionEl.removeAttribute("placeholder"),this.dispatchEvent(new Event("change",{bubbles:!0})))}},{key:"selectByKey",value:function(t){var e=this.getOptionByKey(t);if(!e)return console.error('Invalid option key "'+t+'"'),this.deselectAll();this.select(e)}},{key:"selectByIndex",value:function(t){var e=this.options[t];if(!e)return t>=0?console.error("No option at index "+t):this.deselectAll();this.select(e)}},{key:"form",get:function(){return this.parent.form},set:function(t){return r.get(this).throw("readonly",{name:"form"})}},{key:"displayOptions",get:function(){return this.options.map(function(t){return t.displayElement})},set:function(t){return r.get(this).throw("readonly",{name:"displayOptions"})}},{key:"options",get:function(){return r.get(this).options},set:function(t){return r.get(this).throw("readonly",{name:"options"})}},{key:"selectedIndex",get:function(){return this.options.indexOf(this.selectedOption)},set:function(t){this.selectByIndex(t)}},{key:"selectedOptions",get:function(){var t=[];return this.selectedOption&&t.push(this.selectedOption.displayElement),t},set:function(t){return r.get(this).throw("readonly",{name:"selectedOptions"})}}]),e}(HTMLElement)))}]);
//# sourceMappingURL=chassis-options-es5-bundle.js.map