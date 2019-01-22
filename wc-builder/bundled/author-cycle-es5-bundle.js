/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

var _typeof2 = _interopRequireDefault(__webpack_require__(0));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(6));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(8));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1));

customElements.define('author-cycle',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([mode=custom]))>::slotted(:not([selected])){display:none!important}author-cycle{display:block}author-cycle *,author-cycle :after,author-cycle :before{box-sizing:border-box}author-cycle:not([mode=custom])) > :not([selected]){display:none!important}</style><slot></slot></template>"));

    _this.UTIL.defineProperties({
      dummyEl: {
        private: true,
        default: document.createElement('div')
      }
    });

    _this.UTIL.definePrivateMethods({
      getChildIndex: function getChildIndex(child) {
        return [].slice.call(_this.children).indexOf(child);
      },
      getNextSelectedChild: function getNextSelectedChild(child) {
        var nextIndex = _this.PRIVATE.getChildIndex(child);

        return {
          element: child,
          index: nextIndex
        };
      },
      hideChild: function hideChild(child) {
        return child.removeAttribute('selected', '');
      },
      beforeChangeCallback: function beforeChangeCallback(child, previousSelection) {
        if (_this.selectedIndex >= 0) {
          _this.PRIVATE.hideChild(_this.children.item(_this.selectedIndex || 0));
        }

        child.setAttribute('selected', '');

        _this.dispatchEvent(new CustomEvent('change', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            previousSelection: previousSelection,
            currentSelection: _this.selected
          }
        }));
      },
      showChild: function showChild(child) {
        var _this$PRIVATE = _this.PRIVATE,
            beforeChangeCallback = _this$PRIVATE.beforeChangeCallback,
            getNextSelectedChild = _this$PRIVATE.getNextSelectedChild,
            hideChild = _this$PRIVATE.hideChild;
        var previousSelection = _this.selected;
        var nextSelection = getNextSelectedChild(child);

        var beforechangeHandler = function beforechangeHandler(evt) {
          _this.removeEventListener('beforechange', beforechangeHandler);

          if (evt.defaultPrevented) {
            return;
          }

          beforeChangeCallback(child, previousSelection);
        };

        _this.addEventListener('beforechange', beforechangeHandler);

        var beforechangeEvent = new CustomEvent('beforechange', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            currentSelection: _this.selected,
            nextSelection: nextSelection,
            next: function next() {
              if (!this.defaultPrevented) {
                return console.warn("<".concat(this.localName, "> Calling \"next()\" in \"beforechange\" event will not do anything unless the event's default behavior is canceled. (use Event.preventDefault())"));
              }

              beforeChangeCallback(child, previousSelection);
            }
          }
        });
        beforechangeEvent.detail.next = beforechangeEvent.detail.next.bind(beforechangeEvent);

        _this.dispatchEvent(beforechangeEvent);
      },
      showChildByIndex: function showChildByIndex(index) {
        if (_this.selectedIndex === index || index >= _this.children.length || index < 0) {
          return;
        }

        _this.PRIVATE.showChild(_this.children.item(index));
      },
      showChildBySelector: function showChildBySelector(query) {
        var nodes = _this.querySelectorAll(query);

        if (!nodes.length) {
          return;
        }

        if (nodes.length > 1) {
          console.warn("<".concat(_this.localName, "> found multiple nodes matching \"").concat(query, "\". Displaying first result..."));
        }

        _this.PRIVATE.showChild(nodes.item(0));
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.UTIL.monitorChildren(function (mutations) {
          mutations.forEach(function (mutation) {
            var addedNodes = mutation.addedNodes,
                removedNodes = mutation.removedNodes,
                type = mutation.type;

            switch (type) {
              case 'childList':
                if (removedNodes.length > 0 && !_this.selectedElement) {
                  return _this.previous();
                }

                break;
            }
          });
        });
      },
      rendered: function rendered() {
        for (var index in _this.children) {
          if (!_this.children.hasOwnProperty(index)) {
            continue;
          }

          var child = _this.children.item(index);

          if ((0, _typeof2.default)(child) !== 'object') {
            continue;
          }

          if (child !== _this.selectedElement) {
            _this.PRIVATE.hideChild(child);
          }
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "hideAll",

    /**
     * @method hideAll
     * Deactivate all pages.
     */
    value: function hideAll() {
      for (var index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue;
        }

        var child = this.children.item(index);

        if ((0, _typeof2.default)(child) !== 'object') {
          continue;
        }

        this.PRIVATE.hideChild(child);
      }
    }
  }, {
    key: "indexOf",
    value: function indexOf(child) {
      return this.PRIVATE.getChildIndex(child);
    }
    /**
     * @method insertAdjacentHTML
     * Override this.prototype.insertAdjacentHTML and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentHTML() on web components
     * in Firefox and IE11.
     * @override
     */

  }, {
    key: "insertAdjacentHTML",
    value: function insertAdjacentHTML(position, text) {
      switch (position) {
        case 'beforebegin':
        case 'afterend':
          return HTMLElement.prototype.insertAdjacentHTML.call(this, position, text);

        default:
          var dummyEl = this.PRIVATE.dummyEl;
          dummyEl.insertAdjacentHTML(position, text);
          var node = dummyEl.children.item(0);

          while (dummyEl.firstChild) {
            dummyEl.removeChild(dummyEl.firstChild);
          }

          return position === 'beforeend' ? this.appendChild(node) : this.insertBefore(node, this.firstElementChild);
      }
    }
    /**
     * @method insertAdjacentElement
     * Override this.prototype.insertAdjacentElement and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentElement() on web components
     * in Firefox and IE11.
     * @param {string} position (beforebegin, afterbegin, beforeend, afterend)
     * @param {HTMLElement} node
     * Node to which to insert adjacent HTML
     * @override
     */

  }, {
    key: "insertAdjacentElement",
    value: function insertAdjacentElement(position, node) {
      switch (position) {
        case 'beforeend':
          return this.appendChild(node);

        case 'afterbegin':
          return this.insertBefore(node, this.firstElementChild);

        default:
          return HTMLElement.prototype.insertAdjacentElement.call(this, position, node);
      }
    }
    /**
     * @method first
     * A helper method to display the first child element.
     */

  }, {
    key: "first",
    value: function first() {
      this.show(0);
    }
    /**
     * @method last
     * A helper method to display the last child element.
     */

  }, {
    key: "last",
    value: function last() {
      this.show(this.children.length - 1);
    }
    /**
     * @method next
     * Deactivate the currently selected child element and activate the one
     * immediately adjacent to it.
     * @param {function} callback
     * Executed when the operation is complete.
     */

  }, {
    key: "next",
    value: function next(callback) {
      this.show(this.selectedIndex === this.children.length - 1 ? 0 : this.selectedIndex + 1);
      callback && callback(this.selectedElement);
    }
    /**
     * @method previous
     * Deactivate the currently selected child element and activate the one
     * immediately preceding it.
     * @param {function} callback
     * Executed when the operation is complete.
     */

  }, {
    key: "previous",
    value: function previous(callback) {
      this.show(this.selectedIndex === 0 ? this.children.length - 1 : this.selectedIndex - 1);
      callback && callback(this.selectedElement);
    }
    /**
     * @method show
     * Deselect the currently selected element and select a different one.
     * @param {number | string | HTMLElement} query
     * 1-based index,
     * Element selector string, or
     * HTMLElement to select
     */

  }, {
    key: "show",
    value: function show(query) {
      if (query === null) {
        if (!this.selectedIndex) {
          this.PRIVATE.showChildByIndex(0);
        }

        return;
      }

      switch ((0, _typeof2.default)(query).toLowerCase()) {
        case 'number':
          return this.PRIVATE.showChildByIndex(query);

        case 'string':
          return isNaN(parseInt(query)) ? this.PRIVATE.showChildBySelector(query) : this.PRIVATE.showChildByIndex(parseInt(query));

        default:
          return query instanceof HTMLElement ? this.PRIVATE.showChild(query) : this.UTIL.throwError({
            type: 'reference',
            message: "Invalid query \"".concat(query, "\"")
          });
      }
    }
  }, {
    key: "selected",

    /**
     * @typedef {Object} SelectedElementProperties
     * @property {HTMLElement} element The currently selected page.
     * @property {Number} index The zero-based index of the currently selected page.
     */

    /**
     * @property selected
     * Get information about the currently selected element.
     * @return {SelectedElementProperties}
     */
    get: function get() {
      return {
        element: this.selectedElement,
        index: this.selectedIndex
      };
    }
    /**
     * @property selectedElement
     * The currently selected element.
     * @return {HTMLElement}
     */

  }, {
    key: "selectedElement",
    get: function get() {
      return this.selectedIndex === null ? null : this.children.item(this.selectedIndex);
    }
    /**
     * @property selectedIndex
     * The zero-based index of the currently selected element.
     * @return {Number}
     */

  }, {
    key: "selectedIndex",
    get: function get() {
      for (var index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue;
        }

        var child = this.children.item(index);

        if ((0, _typeof2.default)(child) !== 'object') {
          continue;
        }

        if (child.hasAttribute('selected')) {
          return parseInt(index);
        }
      }

      return null;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['mode'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(0);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ })
/******/ ]);
//# sourceMappingURL=author-cycle-es5-bundle.js.map