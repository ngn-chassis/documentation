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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(3));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(7));

var _createClass2 = _interopRequireDefault(__webpack_require__(8));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(9));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));

var _inherits2 = _interopRequireDefault(__webpack_require__(12));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(0));

customElements.define('author-form',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\";</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      novalidate: false
    });

    _this.UTIL.defineProperties({
      validationHandlersApplied: {
        private: true,
        default: false
      },
      sourceElement: {
        private: true,
        readonly: true,
        default: document.createElement('form')
      },
      isValid: {
        readonly: true,
        get: function get() {
          return _this.invalidFields.length === 0;
        }
      },
      controls: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control');
        }
      },
      elements: {
        readonly: true,
        get: function get() {
          var AuthorHTMLFormControlsCollection = _this.PRIVATE.generateAuthorHTMLFormControlsCollectionConstructor();

          var elements = _this.querySelectorAll('author-control, author-fieldset, fieldset, button');

          var arr = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

              if (element.localName === 'author-control') {
                element = element.input;
              }

              arr.push(element);
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

          return new AuthorHTMLFormControlsCollection(arr);
        }
      },
      resetButtons: {
        get: function get() {
          return _this.querySelectorAll('button[type="reset"]');
        }
      },
      submitButtons: {
        get: function get() {
          return _this.querySelectorAll('button[type="submit"]');
        }
      },
      invalidFields: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control[invalid]');
        }
      },
      validFields: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control:not([invalid])');
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      generateAuthorHTMLFormControlsCollectionConstructor: function generateAuthorHTMLFormControlsCollectionConstructor() {
        var _p = new WeakMap();

        var AuthorHTMLFormControlsCollection =
        /*#__PURE__*/
        function (_this$PRIVATE$generat) {
          (0, _inherits2.default)(AuthorHTMLFormControlsCollection, _this$PRIVATE$generat);

          function AuthorHTMLFormControlsCollection(arr) {
            var _this2;

            (0, _classCallCheck2.default)(this, AuthorHTMLFormControlsCollection);
            _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthorHTMLFormControlsCollection).call(this, arr));

            _p.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)), {
              arr: arr
            });

            return _this2;
          }

          (0, _createClass2.default)(AuthorHTMLFormControlsCollection, [{
            key: Symbol.toStringTag,
            value: function value() {
              return "AuthorHTMLFormControlsCollection";
            }
          }, {
            key: "length",
            get: function get() {
              return _p.get(this).arr.length;
            }
          }]);
          return AuthorHTMLFormControlsCollection;
        }(_this.PRIVATE.generateAuthorHTMLCollectionConstructor());

        return AuthorHTMLFormControlsCollection;
      },
      validationHandler: function validationHandler(evt) {
        var attribute = evt.detail.attribute;

        if (attribute === 'invalid') {
          if (_this.invalidFields.length > 0) {
            _this.setAttribute('invalid', '');
          } else {
            _this.removeAttribute('invalid');
          }
        }
      },
      applyValidationHandlers: function applyValidationHandlers() {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this.controls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var control = _step2.value;
            control.on('attribute.changed', _this.PRIVATE.validationHandler);
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

        _this.PRIVATE.validationHandlersApplied = true;
      },
      removeValidationHandlers: function removeValidationHandlers() {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this.controls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var control = _step3.value;
            control.off('attribute.changed', _this.PRIVATE.validationHandler);
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

        _this.PRIVATE.validationHandlersApplied = false;
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      'attribute.changed': function attributeChanged(evt) {
        var attribute = evt.detail.attribute;

        switch (attribute) {
          case 'novalidate':
            if (_this.novalidate) {
              _this.removeAttribute('invalid');

              if (_this.PRIVATE.validationHandlersApplied) {
                _this.PRIVATE.removeValidationHandlers();
              }
            } else {
              if (_this.invalidFields.length > 0) {
                _this.setAttribute('invalid', '');
              }

              if (!_this.PRIVATE.validationHandlersApplied) {
                _this.PRIVATE.applyValidationHandlers();
              }
            }

            break;
        }
      },
      rendered: function rendered() {
        if (!_this.novalidate && !_this.PRIVATE.validationHandlersApplied) {
          _this.PRIVATE.applyValidationHandlers();
        }

        if (_this.submitButtons.length > 0) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _this.submitButtons[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var submitButton = _step4.value;

              _this.UTIL.registerListener(submitButton, 'click', function (evt) {
                evt.preventDefault();

                if (_this.novalidate || _this.isValid) {
                  return _this.submit();
                }

                _this.emit('invalid', {
                  invalidFields: _this.invalidFields
                });
              });
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
        }

        if (_this.resetButtons.length > 0) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _this.resetButtons[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var resetButton = _step5.value;

              _this.UTIL.registerListener(resetButton, 'click', function (evt) {
                evt.preventDefault();

                _this.reset();
              });
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "reset",
    value: function reset() {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.controls[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var control = _step6.value;
          var input = control.input;

          switch (input.localName) {
            case 'input':
            case 'textarea':
              input.value = control.initialValue;
              break;

            case 'author-select':
            case 'select':
              // input.selectedIndex = control.initialValue
              break;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      this.emit('submit', {
        invalidFields: this.invalidFields,
        data: this.data
      });
    }
  }, {
    key: "data",
    get: function get() {
      var data = {};
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.controls.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _step7$value = (0, _slicedToArray2.default)(_step7.value, 2),
              index = _step7$value[0],
              control = _step7$value[1];

          var _control$input = control.input,
              name = _control$input.name,
              value = _control$input.value;

          if (!name) {
            this.UTIL.printToConsole('Input is missing "name" attribute.', 'warning');
            name = index;
          }

          data[name] = value;
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return data;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['novalidate'];
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
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(4);

var iterableToArrayLimit = __webpack_require__(5);

var nonIterableRest = __webpack_require__(6);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

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
/* 13 */
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
//# sourceMappingURL=author-form-es5-bundle.js.map