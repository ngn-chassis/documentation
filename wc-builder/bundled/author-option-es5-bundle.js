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

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(6));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(0));

var _get2 = _interopRequireDefault(__webpack_require__(8));

var _inherits2 = _interopRequireDefault(__webpack_require__(10));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1));

customElements.define('author-option',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-option{contain:content;display:flex;flex-direction:column;max-width:100%}author-option *,author-option :after,author-option :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoption\"></slot><slot></slot><slot name=\"afteroption\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineAttributes({
      disabled: false,
      hover: false,
      id: '',
      label: '',
      selected: false,
      value: ''
    });

    _this.UTIL.defineProperties({
      defaultSelected: false,
      form: {
        readonly: true,
        private: true
      },
      index: {
        readonly: true,
        get: function get() {
          return _this.parentNode.options.findIndex(function (option) {
            return option.displayElement === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this));
          });
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      mouseButtonIsDown: function mouseButtonIsDown(evt) {
        var code = evt.buttons !== undefined ? evt.buttons : evt.nativeEvent.which;
        return code >= 1;
      },
      mousemoveHandler: function mousemoveHandler(evt) {
        return _this.emit('option.hovered', _this.index);
      },
      mouseoutHandler: function mouseoutHandler(evt) {
        return _this.hover = false;
      },
      mouseoverHandler: function mouseoverHandler(evt) {
        var mousedown = _this.PRIVATE.mouseButtonIsDown(evt);

        if (!(_this.parentNode.multiple && mousedown)) {
          _this.hover = true;
          return;
        }

        var shiftKey = evt.shiftKey,
            metaKey = evt.metaKey,
            ctrlKey = evt.ctrlKey;

        _this.PRIVATE.select(true, metaKey, ctrlKey, mousedown);
      },
      parentStateChangeHandler: function parentStateChangeHandler(evt) {
        var _evt$detail = evt.detail,
            name = _evt$detail.name,
            value = _evt$detail.value;

        switch (name) {
          case 'multiple':
            return _this.PRIVATE.setMode(value ? 'select-multiple' : 'select-one');

          default:
            return;
        }
      },
      setMode: function setMode(mode) {
        switch (mode) {
          case 'select-multiple':
            _this.off('mouseup', _this.PRIVATE.selectionHandler);

            _this.on('mousedown', _this.PRIVATE.selectionHandler);

            break;

          case 'select-one':
            _this.on('mouseup', _this.PRIVATE.selectionHandler);

            _this.off('mousedown', _this.PRIVATE.selectionHandler);

            break;

          default:
            return;
        }
      },
      select: function select() {
        var shiftKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var metaKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var ctrlKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var mousedown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
            index = _assertThisInitialize.index;

        _this.emit('option.selected', {
          index: index,
          shiftKey: shiftKey,
          metaKey: metaKey,
          ctrlKey: ctrlKey,
          mousedown: mousedown
        }, _this.parentNode);
      },
      selectionHandler: function selectionHandler(evt) {
        var shiftKey = evt.shiftKey,
            metaKey = evt.metaKey,
            ctrlKey = evt.ctrlKey;

        _this.PRIVATE.select(shiftKey, metaKey, ctrlKey);
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.parentNode.on('state.change', _this.PRIVATE.parentStateChangeHandler);

        _this.parentNode.multiple && _this.PRIVATE.setMode('select-multiple');
      },
      disconnected: function disconnected() {
        _this.off('mousedown', _this.PRIVATE.selectionHandler);

        _this.parentNode.off('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      mouseover: _this.PRIVATE.mouseoverHandler,
      mousemove: _this.PRIVATE.mousemoveHandler,
      mouseout: _this.PRIVATE.mouseoutHandler,
      mouseup: _this.PRIVATE.selectionHandler
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "remove",

    /**
     * @method remove
     * Remove this option from the DOM.
     * @override
     */
    value: function remove() {
      this.parentNode.options.splice(this.index, 1);
      (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
    }
  }, {
    key: "text",
    get: function get() {
      return this.innerHTML;
    },
    set: function set(content) {
      this.innerHTML = content;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled', 'hover', 'label', 'selected', 'value'];
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

var _typeof = __webpack_require__(7);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

var superPropBase = __webpack_require__(9);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

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
/* 11 */
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
//# sourceMappingURL=author-option-es5-bundle.js.map