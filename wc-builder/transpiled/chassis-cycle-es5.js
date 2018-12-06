"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset \"UTF-8\"; :host {\n  display: block;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\n:host(:not([mode=\"custom\"])) > ::slotted(:not([selected])) {\n  display: none !important;\n}\n\nchassis-cycle {\n  display: block;\n}\n\nchassis-cycle *,\nchassis-cycle *:before,\nchassis-cycle *:after {\n  box-sizing: border-box;\n}\n\nchassis-cycle:not([mode=\"custom\"])) > :not([selected] {\n  display: none !important;\n}</style><slot></slot></template>");
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
          getNextSelectedChild: function getNextSelectedChild(child) {
            var nextIndex = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).getChildIndex(child);

            return {
              element: child,
              index: nextIndex
            };
          },
          hideChild: function hideChild(child) {
            return child.removeAttribute('selected', '');
          },
          showChild: function showChild(child) {
            var _$get = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))),
                getChildIndex = _$get.getChildIndex,
                getNextSelectedChild = _$get.getNextSelectedChild,
                hideChild = _$get.hideChild,
                middleWare = _$get.middleWare;

            var previous = _this.selected;
            var next = getNextSelectedChild(child);

            _this.dispatchEvent(new CustomEvent('change', {
              detail: {
                selected: _this.selected,
                next: next
              }
            }));

            var completeChange = function completeChange() {
              if (_this.selectedIndex >= 0) {
                hideChild(_this.children.item(_this.selectedIndex || 0));
              }

              child.setAttribute('selected', '');

              _this.dispatchEvent(new CustomEvent('changed', {
                detail: {
                  previous: previous,
                  selected: _this.selected
                }
              }));

              if (middleWare.afterChange && typeof middleWare.afterChange === 'function') {
                middleWare.afterChange(previous, _this.selected);
              }
            };

            if (middleWare.beforeChange && typeof middleWare.beforeChange === 'function') {
              middleWare.beforeChange(_this.selected, next, completeChange);
            } else {
              completeChange();
            }
          },
          showChildByIndex: function showChildByIndex(index) {
            if (_this.selectedIndex === index || index >= _this.children.length || index < 0) {
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
                  if (removedNodes.length > 0 && !_this2.selectedElement) {
                    return _this2.previous();
                  }

                  break;

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

              if (child !== _this2.selectedElement) {
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
          console.warn("<chassis-cycle> \"hide()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage selected elements.");

          _.get(this).hideChild(child);
        }
        /**
         * @method hideActive
         * Deactivate the currently selected page.
         * @deprecated
         */

      }, {
        key: "hideActive",
        value: function hideActive() {
          console.warn("<chassis-cycle> \"hideActive()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage selected elements.");

          _.get(this).hideChild(this.selectedElement);
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
              _.get(this).showChildByIndex(0);
            }

            return;
          }

          switch ((0, _typeof2.default)(query).toLowerCase()) {
            case 'number':
              return _.get(this).showChildByIndex(query);

            case 'string':
              return isNaN(parseInt(query)) ? _.get(this).showChildBySelector(query) : _.get(this).showChildByIndex(parseInt(query));

            default:
              return query instanceof HTMLElement ? _.get(this).showChild(query) : console.error("<chassis-cycle>: Invalid query \"".concat(query, "\""));
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
         * Information about the currently selected page.
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
         * The currently selected page.
         * @return {HTMLElement}
         */

      }, {
        key: "selectedElement",
        get: function get() {
          return this.selectedIndex === null ? null : this.children.item(this.selectedIndex);
        }
        /**
         * @property selectedIndex
         * The zero-based index of the currently selected page.
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