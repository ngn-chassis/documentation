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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(0));

customElements.define('author-pane-resize-handle',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;cursor:row-resize}:host *,:host :after,:host :before{box-sizing:border-box}:host-context(author-pane[horizontal]){cursor:col-resize}author-pane-resize-handle{display:flex;cursor:row-resize}author-pane-resize-handle *,author-pane-resize-handle :after,author-pane-resize-handle :before{box-sizing:border-box}author-pane-resize-handle-context(author-pane[horizontal]){cursor:col-resize}</style><slot></slot></template>"));

    _this.UTIL.defineProperties({
      initialized: {
        private: true,
        default: false
      },
      maxSize: {
        private: true,
        default: null
      },
      startPosition: {
        private: true,
        default: null
      },
      offset: {
        private: true,
        default: null
      }
    });

    _this.UTIL.definePrivateMethods({
      cleanupMouseEventHandlers: function cleanupMouseEventHandlers() {
        document.removeEventListener('mousemove', _this.PRIVATE.globalMousemoveHandler);
        document.removeEventListener('mouseup', _this.PRIVATE.globalMouseupHandler);
      },
      generatePercentage: function generatePercentage(value) {
        return "".concat(value / _this.parentNode.totalSize * 100, "%");
      },
      globalMousemoveHandler: function globalMousemoveHandler(evt) {
        var mousePosition = _this.PRIVATE.axis === 'x' ? evt.clientX : evt.clientY;

        if (mousePosition === _this.PRIVATE.startPosition) {
          return;
        }

        var totalSize = _this.parentNode.totalSize;
        var _this$PRIVATE = _this.PRIVATE,
            previousPane = _this$PRIVATE.previousPane,
            nextPane = _this$PRIVATE.nextPane,
            maxSize = _this$PRIVATE.maxSize,
            offset = _this$PRIVATE.offset,
            generatePercentage = _this$PRIVATE.generatePercentage,
            handleResize = _this$PRIVATE.handleResize;
        var previousSize = mousePosition - offset.previous - previousPane.dimensions.left;

        if (!previousSize || previousSize < 0) {
          previousSize = 0;
        }

        if (previousSize >= maxSize) {
          previousSize = maxSize;
        }

        nextPane.element.size = generatePercentage(maxSize - previousSize);
        previousPane.element.size = generatePercentage(previousSize);
      },
      globalMouseupHandler: function globalMouseupHandler(evt) {
        _this.PRIVATE.startPosition = null;
        _this.PRIVATE.offset = null;

        _this.PRIVATE.cleanupMouseEventHandlers();
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      disconnected: function disconnected() {
        return _this.PRIVATE.cleanupMouseEventHandlers();
      },
      initialize: function initialize() {
        if (_this.PRIVATE.initialized) {
          return;
        }

        _this.UTIL.defineProperties({
          axis: {
            private: true,
            readonly: true,
            get: function get() {
              return _this.parentNode.hasAttribute('horizontal') ? 'x' : 'y';
            }
          },
          dimensions: {
            private: true,
            readonly: true,
            get: function get() {
              return _this.getBoundingClientRect();
            }
          },
          previousPane: {
            private: true,
            readonly: true,
            get: function get() {
              var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
                  previousElementSibling = _assertThisInitialize.previousElementSibling;

              return {
                element: previousElementSibling,
                dimensions: previousElementSibling.getBoundingClientRect()
              };
            }
          },
          nextPane: {
            private: true,
            readonly: true,
            get: function get() {
              var _assertThisInitialize2 = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
                  nextElementSibling = _assertThisInitialize2.nextElementSibling;

              return {
                element: nextElementSibling,
                dimensions: nextElementSibling.getBoundingClientRect()
              };
            }
          }
        });

        _this.PRIVATE.initialized = true;
      },
      mousedown: function mousedown(evt) {
        var _this$PRIVATE2 = _this.PRIVATE,
            axis = _this$PRIVATE2.axis,
            dimensions = _this$PRIVATE2.dimensions,
            previousPane = _this$PRIVATE2.previousPane,
            nextPane = _this$PRIVATE2.nextPane;
        var startPosition, dimension, offsetReference;

        switch (axis) {
          case 'x':
            startPosition = evt.clientX;
            dimension = 'width';
            offsetReference = 'right';
            break;

          case 'y':
            startPosition = evt.clientY;
            dimension = 'height';
            offsetReference = 'bottom';
            break;
        }

        _this.PRIVATE.startPosition = startPosition;
        _this.PRIVATE.maxSize = previousPane.dimensions[dimension] + nextPane.dimensions[dimension];
        _this.PRIVATE.offset = {
          previous: _this.PRIVATE.startPosition - dimensions[axis],
          next: dimensions[offsetReference] - startPosition
        };
        document.addEventListener('mousemove', _this.PRIVATE.globalMousemoveHandler);
        document.addEventListener('mouseup', _this.PRIVATE.globalMouseupHandler);
      }
    });

    return _this;
  }

  return _class;
}(AuthorElement(HTMLElement)));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(5);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(8);

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
/* 8 */
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
//# sourceMappingURL=author-pane-resize-handle-es5-bundle.js.map