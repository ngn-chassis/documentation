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

customElements.define('author-control',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;contain:style;max-width:100%}:host([type=field]){flex-direction:column}:host([type=select]){flex-direction:column}:host([type=toggle]){align-items:center}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}author-control{display:flex;contain:style;max-width:100%}author-control[type=field]){flex-direction:column}author-control[type=select]){flex-direction:column}author-control[type=toggle]){align-items:center}author-control *,author-control :after,author-control :before{box-sizing:border-box}author-control .hidden{display:none;visibility:hidden;opacity:0}author-control .label-wrapper{flex:1 1 auto;display:flex}author-control .input-wrapper{display:flex;align-items:center}author-control[type=toggle]) .input-wrapper{order:-1;justify-content:center}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabelwrapper\"></slot><div class=\"label-wrapper\"><slot name=\"beforelabel\"></slot><slot name=\"label\"></slot><slot name=\"afterlabel\"></slot></div><slot name=\"afterlabelwrapper\"></slot><slot name=\"beforeinputwrapper\"></slot><div class=\"input-wrapper\"><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot></div><slot name=\"afterinputwrapper\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineAttributes({
      type: ''
    });

    _this.UTIL.defineProperties({
      input: {
        private: true
      },
      fieldInputTypes: {
        readonly: true,
        private: true,
        default: ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea']
      },
      toggleInputTypes: {
        readonly: true,
        private: true,
        default: ['checkbox', 'radio']
      },
      supportedTypes: {
        readonly: true,
        private: true,
        default: ['field', 'toggle', 'select']
      }
    });

    _this.UTIL.definePrivateMethods({
      initDatalist: function initDatalist(input, datalist) {
        _this.type = 'select';

        if (!customElements.get('author-datalist')) {
          console.dir(input);
          input.id = _this.PRIVATE.guid;
          datalist.id = "".concat(input.id, "_datalist");
          input.setAttribute('list', datalist.id);
          input.slot = input.slot || 'input'; // select.setAttribute('role', 'menu')

          _this.PRIVATE.input = input;
          var titleEls = datalist.querySelectorAll('option[title]');
          titleEls.forEach(function (el) {
            return select.removeChild(el);
          });
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = datalist.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var option = _step.value;

              if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                option.removeAttribute('label');
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return;
        }

        var surrogate = document.createElement('author-datalist');
        surrogate.slot = 'input';
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = datalist.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var attr = _step2.value;

            if (attr.specified) {
              surrogate.setAttribute(attr.name, attr.value);

              if (attr.name === 'autofocus') {
                datalist.removeAttribute(attr.name);
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this.removeChild(datalist);

        _this.removeChild(input);

        surrogate.inject(input, datalist, _this.PRIVATE.guid);

        _this.appendChild(surrogate);

        _this.PRIVATE.input = surrogate;
      },
      initInput: function initInput(input) {
        input.slot = input.slot || 'input';
        _this.PRIVATE.input = input;
        input.id = _this.PRIVATE.guid;

        if (_this.PRIVATE.fieldInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'field';
        }

        if (_this.PRIVATE.toggleInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'toggle';
        }
      },
      initLabel: function initLabel(label) {
        _this.label = label;
        label.slot = label.slot || 'label';
        label.htmlFor = _this.PRIVATE.guid;

        if (_this.type === 'select') {
          _this.label.addEventListener('click', function (evt) {
            _this.input.focus();
          });
        }
      },
      initDefaultSelect: function initDefaultSelect(select) {
        select.id = _this.PRIVATE.guid;
        select.slot = select.slot || 'input';
        select.setAttribute('role', 'menu');
        _this.PRIVATE.input = select; // Purge incompatible attributes

        var titleEls = select.querySelectorAll('option[title]');
        titleEls.forEach(function (el) {
          return select.removeChild(el);
        });
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = select.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var option = _step3.value;

            if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
              option.removeAttribute('label');
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      },
      initMultipleSelectMenu: function initMultipleSelectMenu(select) {
        _this.type = 'select';

        if (!customElements.get('author-select')) {
          return _this.PRIVATE.initDefaultSelect(select);
        }

        _this.PRIVATE.initSelectSurrogate(select, document.createElement('author-select'));
      },
      initSelectSurrogate: function initSelectSurrogate(original, surrogate) {
        surrogate.slot = 'input';
        surrogate.id = _this.PRIVATE.guid;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = original.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var attr = _step4.value;

            if (attr.specified) {
              surrogate.setAttribute(attr.name, attr.value);

              if (attr.name === 'autofocus') {
                original.removeAttribute(attr.name);
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        _this.removeChild(original);

        surrogate.inject(original, _this.querySelectorAll('label'));

        _this.appendChild(surrogate);

        _this.PRIVATE.input = surrogate;
      },
      initSelectMenu: function initSelectMenu(select) {
        _this.type = 'select';

        if (!customElements.get('author-select')) {
          return _this.PRIVATE.initDefaultSelect(select);
        }

        _this.PRIVATE.initSelectSurrogate(select, document.createElement('author-select'));
      }
    });

    _this.UTIL.monitorChildren(function (mutations, observer) {
      var filtered = mutations.filter(function (record) {
        return record.addedNodes.item(0).nodeType !== 3;
      });
      filtered.forEach(function (record, index, array) {
        var node = record.addedNodes.item(0);

        switch (node.nodeName) {
          case 'LABEL':
            return _this.PRIVATE.initLabel(node);

          case 'INPUT':
            // Check if there is an additional element adjacent to the input
            if (array[index + 1] === void 0) {
              return _this.PRIVATE.initInput(node);
            }

            var adjacentElement = array[index + 1].addedNodes.item(0);

            if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
              return _this.PRIVATE.initInput(node);
            }

            return _this.PRIVATE.initDatalist(node, adjacentElement);

          case 'TEXTAREA':
            return _this.PRIVATE.initInput(node);

          case 'SELECT':
            if (!node.multiple) {
              return _this.PRIVATE.initSelectMenu(node);
            }

            return _this.PRIVATE.initMultipleSelectMenu(node);

          default:
            return;
        }
      });
      observer.disconnect();
    });

    _this.UTIL.registerListener((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'connected', function () {
      _this.PRIVATE.guid = _this.UTIL.generateGuid('control');
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "input",
    get: function get() {
      return this.PRIVATE.input;
    },
    set: function set(input) {
      if (this.input) {
        return console.warn("Setting <".concat(this.localName, "> child input programmatically is not allowed."));
      }

      this.PRIVATE.input = input;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled'];
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
//# sourceMappingURL=author-control-es5-bundle.js.map