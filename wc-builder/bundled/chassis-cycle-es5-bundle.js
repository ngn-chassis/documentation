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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(10));

customElements.define('chassis-cycle', function () {
  var _ = new WeakMap();

  return (
    /*#__PURE__*/
    function (_HTMLElement) {
      (0, _inherits2.default)(_class, _HTMLElement);

      function _class() {
        var _this;

        (0, _classCallCheck2.default)(this, _class);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
        _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

        _this.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([mode=custom]))>::slotted(:not([active])){display:none!important}chassis-cycle{display:block}:host :after,:host :before,chassis-cycle *{box-sizing:border-box}</style><slot></slot></template>");
        var template = container.querySelector('template');

        if ('content' in template) {
          _this.shadowRoot.appendChild(template.content.cloneNode(true));
        } else {
          template.childNodes.forEach(function (child) {
            _this.shadowRoot.appendChild(child.cloneNode(true));
          });
        }

        template = null;
        _this.crypto = null;

        try {
          _this.crypto = crypto;
        } catch (e) {
          _this.crypto = msCrypto;
        }

        _.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          sourceElement: null,
          addAttribute: function addAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return this.getAttribute(prop);
              },
              set: function set(value) {
                _.get(this).setAttributeValue(prop, value);
              }
            });
          },
          addAttributes: function addAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttribute(prop);
            });
          },
          setAttributeValue: function setAttributeValue(attr, val) {
            _this.setAttribute(attr, val);

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = val;
            }
          },
          addReadOnlyProperty: function addReadOnlyProperty(prop) {
            var custom = (0, _typeof2.default)(prop) === 'object';

            if (!custom && typeof prop !== 'string') {
              return console.error('ERROR <chassis-cycle> Read-only property must be type "object" or "string"');
            }

            var props = {
              set: function set() {
                _.get(this).throw('readonly', {
                  prop: custom ? prop.name : prop
                });
              }
            };

            if (custom && prop.hasOwnProperty('get')) {
              props.get = prop.get;
            } else {
              props.get = function () {
                return _.get(this)[prop];
              };
            }

            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), custom ? prop.name : prop, props);
          },
          addReadOnlyProperties: function addReadOnlyProperties(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty(prop);
            });
          },
          setReadOnlyPropertyValue: function setReadOnlyPropertyValue(value) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = value;
          },
          addBooleanAttribute: function addBooleanAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return _.get(this).getBooleanAttributeValue(prop);
              },
              set: function set(value) {
                _.get(this).setBooleanAttributeValue(prop, value);
              }
            });
          },
          addBooleanAttributes: function addBooleanAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttribute(prop);
            });
          },
          getBooleanAttributeValue: function getBooleanAttributeValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          setBooleanAttributeValue: function setBooleanAttributeValue(attr, value) {
            if (typeof value === 'boolean') {
              value = value.toString();
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
              }

              return;
            }

            switch (value) {
              case 'false':
              case null:
                _this.removeAttribute(attr);

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
                }

                break;

              case 'true':
              case '':
                _this.setAttribute(attr, '');

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = true;
                }

                break;

              default:
                return;
            }
          },
          addPrivateProperties: function addPrivateProperties(props) {
            for (var _prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[_prop] = props[_prop];
            }
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          emit: function emit(name, detail) {
            var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (target) {
              return target.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
            }

            _this.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
          },
          newEvent: function newEvent(name, detail) {
            return new CustomEvent(name, {
              detail: detail
            });
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-cycle> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.prop, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          dummyEl: document.createElement('div'),
          middleWare: {
            beforeChange: null,
            afterChange: null
          },
          getChildIndex: function getChildIndex(child) {
            return [].slice.call(_this.children).indexOf(child);
          },
          getNextActiveChild: function getNextActiveChild(child) {
            var nextIndex = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).getChildIndex(child);

            return {
              element: child,
              index: nextIndex,
              page: nextIndex + 1
            };
          },
          hideChild: function hideChild(child) {
            return child.removeAttribute('active', '');
          },
          showChild: function showChild(child) {
            var _$get = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))),
                getChildIndex = _$get.getChildIndex,
                getNextActiveChild = _$get.getNextActiveChild,
                hideChild = _$get.hideChild,
                middleWare = _$get.middleWare;

            var previous = _this.active;
            var next = getNextActiveChild(child);

            _this.dispatchEvent(new CustomEvent('page-change', {
              detail: {
                active: _this.active,
                next: next
              }
            }));

            var completeChange = function completeChange() {
              if (_this.activeIndex >= 0) {
                hideChild(_this.children.item(_this.activeIndex || 0));
              }

              child.setAttribute('active', '');

              _this.dispatchEvent(new CustomEvent('page-changed', {
                detail: {
                  previous: previous,
                  active: _this.active
                }
              }));

              if (middleWare.afterChange && typeof middleWare.afterChange === 'function') {
                middleWare.afterChange(previous, _this.active);
              }
            };

            if (middleWare.beforeChange && typeof middleWare.beforeChange === 'function') {
              middleWare.beforeChange(_this.active, next, completeChange);
            } else {
              completeChange();
            }
          },
          showChildByIndex: function showChildByIndex(index) {
            if (_this.activeIndex === index || index >= _this.children.length || index < 0) {
              return;
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showChild(_this.children.item(index));
          },
          showChildBySelector: function showChildBySelector(query) {
            var nodes = _this.querySelectorAll(query);

            if (!nodes.length) {
              return;
            }

            if (nodes.length > 1) {
              console.warn("<chassis-cycle> found multiple nodes matching \"".concat(query, "\". Displaying first result..."));
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showChild(nodes.item(0));
          },
          replaceDeprecatedAttributes: function replaceDeprecatedAttributes(child) {
            if (child.hasAttribute('selected')) {
              console.warn("<chassis-cycle> 'selected' attribute is deprecated. Please use 'active' instead.");
              child.removeAttribute('selected');

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showChild(child);
            }
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              var addedNodes = mutation.addedNodes,
                  removedNodes = mutation.removedNodes,
                  type = mutation.type;

              switch (type) {
                case 'childList':
                  if (removedNodes.length > 0 && !_this2.activeElement) {
                    return _this2.previous();
                  }

                  if (addedNodes.length === 0 || addedNodes.item(0).nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }

                  var node = addedNodes.item(0);

                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }

                  _.get(_this2).replaceDeprecatedAttributes(node);

                  break;
                // return node.hasAttribute('active') ? _.get(this).showChild(node) : _.get(this).hideChild(node)

                default:
                  return;
              }
            });
          });
          observer.observe(this, {
            attributes: false,
            childList: true,
            characterData: false
          });
          setTimeout(function () {
            for (var index in _this2.children) {
              if (!_this2.children.hasOwnProperty(index)) {
                continue;
              }

              var child = _this2.children.item(index);

              if ((0, _typeof2.default)(child) !== 'object') {
                continue;
              }

              _.get(_this2).replaceDeprecatedAttributes(child);

              if (child !== _this2.activeElement) {
                _.get(_this2).hideChild(child);
              }
            }
          }, 0);
        }
        /**
         * @method hide
         * Deactivate a page.
         * @deprecated
         */

      }, {
        key: "hide",
        value: function hide(child) {
          console.warn("<chassis-cycle> \"hide()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage active/inactive pages.");

          _.get(this).hideChild(child);
        }
        /**
         * @method hideActive
         * Deactivate the currently active page.
         * @deprecated
         */

      }, {
        key: "hideActive",
        value: function hideActive() {
          console.warn("<chassis-cycle> \"hideActive()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage active/inactive pages.");

          _.get(this).hideChild(this.activeElement);
        }
        /**
         * @method hideAll
         * Deactivate all pages.
         */

      }, {
        key: "hideAll",
        value: function hideAll() {
          for (var index in this.children) {
            if (!this.children.hasOwnProperty(index)) {
              continue;
            }

            var child = this.children.item(index);

            if ((0, _typeof2.default)(child) !== 'object') {
              continue;
            }

            _.get(this).hideChild(child);
          }
        }
      }, {
        key: "indexOf",
        value: function indexOf(child) {
          return _.get(this).getChildIndex(child);
        }
      }, {
        key: "pageNumberOf",
        value: function pageNumberOf(child) {
          return _.get(this).getChildIndex(child) + 1;
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
              _.get(this).dummyEl.insertAdjacentHTML(position, text);

              var node = _.get(this).dummyEl.children.item(0);

              while (_.get(this).dummyEl.firstChild) {
                _.get(this).dummyEl.removeChild(_.get(this).dummyEl.firstChild);
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
          this.show(1);
        }
        /**
         * @method last
         * A helper method to display the last child element.
         */

      }, {
        key: "last",
        value: function last() {
          this.show(this.children.length);
        }
        /**
         * @method next
         * Deactivate the currently active child element and activate the one
         * immediately adjacent to it.
         * @param {function} callback
         * Executed when the operation is complete.
         */

      }, {
        key: "next",
        value: function next(callback) {
          this.show(this.activePage === this.children.length ? 1 : this.activePage + 1);
          callback && callback(this.activeElement);
        }
        /**
         * @method previous
         * Deactivate the currently active child element and activate the one
         * immediately preceding it.
         * @param {function} callback
         * Executed when the operation is complete.
         */

      }, {
        key: "previous",
        value: function previous(callback) {
          this.show(this.activePage === 1 ? this.children.length : this.activePage - 1);
          callback && callback(this.activeElement);
        }
        /**
         * @method show
         * Deactive the currently active element activate a different one.
         * @param {number | string | HTMLElement} query
         * 1-based index,
         * Element selector string, or
         * HTMLElement to make active
         */

      }, {
        key: "show",
        value: function show(query) {
          if (!query) {
            return _.get(this).showChildByIndex(0);
          }

          switch ((0, _typeof2.default)(query).toLowerCase()) {
            case 'number':
              return _.get(this).showChildByIndex(query - 1);

            case 'string':
              return isNaN(parseInt(query)) ? _.get(this).showChildBySelector(query) : _.get(this).showChildByIndex(parseInt(query) - 1);

            default:
              return query instanceof HTMLElement ? _.get(this).showChild(query) : console.error("<chassis-cycle>: Invalid query \"".concat(query, "\""));
          }
        }
      }, {
        key: "active",

        /**
         * @typedef {Object} ActiveElementProperties
         * @property {HTMLElement} element The currently active page.
         * @property {Number} index The zero-based index of the currently active page.
         * @property {Number} page The 1-based index of the currently active page.
         */

        /**
         * @property active
         * Information about the currently active page.
         * @return {ActiveElementProperties}
         */
        get: function get() {
          return {
            element: this.activeElement,
            index: this.activeIndex,
            page: this.activePage
          };
        }
        /**
         * @property activeElement
         * The currently active page.
         * @return {HTMLElement}
         */

      }, {
        key: "activeElement",
        get: function get() {
          return this.activeIndex === null ? null : this.children.item(this.activeIndex);
        }
        /**
         * @property activePage
         * The 1-based index of the currently active page.
         * @return {Number}
         */

      }, {
        key: "activePage",
        get: function get() {
          return this.activeIndex + 1;
        }
        /**
         * @property activeIndex
         * The zero-based index of the currently active page.
         * @return {Number}
         */

      }, {
        key: "activeIndex",
        get: function get() {
          for (var index in this.children) {
            if (!this.children.hasOwnProperty(index)) {
              continue;
            }

            var child = this.children.item(index);

            if ((0, _typeof2.default)(child) !== 'object') {
              continue;
            }

            if (child.hasAttribute('active')) {
              return parseInt(index);
            }
          }

          return null;
        }
        /**
         * @property selected
         * The current active section.
         * @return {HTMLElement}
         * @deprecated
         */

      }, {
        key: "selected",
        get: function get() {
          console.warn("<chassis-cycle> 'selected' property is deprecated. Please use 'activeElement' instead.");
          return this.activeElement;
        }
        /**
         * @property selectedIndex
         * The index number of the current active section.
         * @return {Number}
         * @deprecated
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          console.warn("<chassis-cycle> 'selectedIndex' property is deprecated. Please use 'activeIndex' for zero-based indexing or 'activePage' for 1-based indexing instead.");
          return this.activePage;
        }
      }, {
        key: "beforeChange",
        set: function set(func) {
          _.get(this).middleWare.beforeChange = func.bind(this);
        }
      }, {
        key: "afterChange",
        set: function set(func) {
          _.get(this).middleWare.afterChange = func.bind(this);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['mode'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(0);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(3);

var setPrototypeOf = __webpack_require__(0);

var isNativeFunction = __webpack_require__(11);

var construct = __webpack_require__(12);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(0);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ })
/******/ ]);
//# sourceMappingURL=chassis-cycle-es5-bundle.js.map