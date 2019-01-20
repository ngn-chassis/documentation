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

var _createClass2 = _interopRequireDefault(__webpack_require__(4));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(8));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(0));

customElements.define('chassis-grid',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:grid}:host([inline]){display:inline-grid}chassis-grid{display:grid}chassis-grid[inline]){display:inline-grid}</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      columns: {
        set: function set(value) {
          return _this.PRIVATE.updateColumns(value);
        }
      },
      rows: {
        set: function set(value) {
          return _this.PRIVATE.updateRows(value);
        }
      },
      gutter: {
        default: 'none',
        set: function set(value) {
          return _this.PRIVATE.updateGutter();
        }
      }
    });

    _this.UTIL.definePrivateProperties({
      columnsRule: null,
      rowsRule: null,
      gutterRule: null,
      observer: new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var addedNodes = mutation.addedNodes,
              removedNodes = mutation.removedNodes,
              type = mutation.type;

          switch (type) {
            case 'childList':
              return _this.PRIVATE.resetZIndexes();

            default:
              return;
          }
        });
      }),
      resetZIndexes: function resetZIndexes() {
        console.log('resetting z-indexes');
      },
      updateGutter: function updateGutter() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('gutter').trim();

        if (!_this.PRIVATE.gutterRule) {
          return;
        }

        _this.PRIVATE.gutterRule.style.setProperty('grid-gap', value);
      },
      updateColumns: function updateColumns() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('columns').trim();

        if (!_this.children.length || !_this.PRIVATE.columnsRule) {
          return;
        }

        _this.PRIVATE.columnsRule.style.setProperty('grid-template-columns', _this.PRIVATE.getProcessedGridTemplateValue(value));
      },
      updateRows: function updateRows() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('rows').trim();

        if (!_this.children.length || !_this.PRIVATE.rowsRule) {
          return;
        }

        _this.PRIVATE.rowsRule.style.setProperty('grid-template-rows', _this.PRIVATE.getProcessedGridTemplateValue(value));
      },
      getProcessedGridTemplateValue: function getProcessedGridTemplateValue(value) {
        if (!isNaN(value)) {
          var quantity = parseInt(value);
          var array = [];

          for (var i = 0; i < quantity; i++) {
            array.push('1fr');
          }

          value = array.join(' ');
        }

        return value;
      }
    });

    _this.PRIVATE.observer.observe((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      attributes: false,
      childList: true,
      characterData: false
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.UTIL.definePrivateProperties({
        styleSheet: this.shadowRoot.styleSheets[0]
      });
      var styleSheet = this.PRIVATE.styleSheet;
      var sheetLength = this.PRIVATE.styleSheet.cssRules.length;
      styleSheet.insertRule(':host([gutter]) {}', sheetLength);
      this.PRIVATE.gutterRule = styleSheet.cssRules[sheetLength];
      styleSheet.insertRule(':host([columns]) {}', sheetLength);
      this.PRIVATE.columnsRule = styleSheet.cssRules[sheetLength];
      styleSheet.insertRule(':host([rows]) {}', sheetLength);
      this.PRIVATE.rowsRule = styleSheet.cssRules[sheetLength];
      setTimeout(function () {
        if (_this2.hasAttribute('gutter')) {
          _this2.PRIVATE.updateGutter();
        }

        if (_this2.hasAttribute('columns')) {
          _this2.PRIVATE.updateColumns();
        }

        if (_this2.hasAttribute('rows')) {
          _this2.PRIVATE.updateRows();
        }
      }, 0);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['columns', 'rows', 'gutter'];
    }
  }]);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
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
//# sourceMappingURL=chassis-grid-es5-bundle.js.map