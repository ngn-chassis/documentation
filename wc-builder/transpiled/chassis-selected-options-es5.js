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

customElements.define('chassis-selected-options', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  contain: content;\n  display: flex;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\nchassis-selected-options {\n  contain: content;\n  display: flex;\n  max-width: 100%;\n}\n\nchassis-selected-options *,\nchassis-selected-options *:before,\nchassis-selected-options *:after {\n  box-sizing: border-box;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforecontents\"></slot><div class=\"contents\"><slot id=\"contents\"></slot></div><slot name=\"aftercontents\"></slot><div class=\"beforeend\"><slot name=\"beforeend\"></slot></div></template>");
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
              return console.error('ERROR <chassis-selected-options> Read-only property must be type "object" or "string"');
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
            var message = 'ERROR <chassis-selected-options> ';

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
          contentsEl: _this.shadowRoot.querySelector('#contents'),
          options: [],
          appendCaret: function appendCaret() {
            var xmlns = 'http://www.w3.org/2000/svg';
            var width = 24;
            var height = 24;
            var caret = document.createElementNS(xmlns, 'svg');
            caret.slot = 'beforeend';
            caret.setAttributeNS(null, 'width', width);
            caret.setAttributeNS(null, 'height', height);
            caret.setAttributeNS(null, 'viewBox', "0 0 ".concat(width, " ").concat(height));
            caret.setAttributeNS(null, 'fill', 'none');
            caret.setAttributeNS(null, 'stroke', 'currentColor');
            caret.setAttributeNS(null, 'stroke-width', '3');
            caret.setAttributeNS(null, 'stroke-linecap', 'square');
            caret.setAttributeNS(null, 'stroke-linejoin', 'miter');
            var shape = document.createElementNS(xmlns, 'polyline');
            shape.setAttributeNS(null, 'points', '6 9 12 15 18 9');
            caret.appendChild(shape);

            _this.appendChild(caret);
          },
          optionSelectionHandler: function optionSelectionHandler(evt) {
            evt.stopPropagation();

            _this.clear(evt.detail.length === 0);

            evt.detail.forEach(function (option, index) {
              return _this.add(option, index === evt.detail.length - 1);
            });
          },
          parentStateChangeHandler: function parentStateChangeHandler(evt) {
            var _evt$detail = evt.detail,
                name = _evt$detail.name,
                value = _evt$detail.value;

            switch (name) {
              case 'multiple':
                if (!value) {
                  return _this.addEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).mousedownHandler);
                }

                return _this.removeEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).mousedownHandler);

              default:
                return;
            }
          },
          mousedownHandler: function mousedownHandler(evt) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('toggle', null, _this.parentNode);
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option) {
          var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          _.get(this).options.push(option);

          update && this.update();
        }
      }, {
        key: "remove",
        value: function remove(option) {
          var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          _.get(this).options.splice(_.get(this).options.indexOf(option), 1);

          update && this.update();
        }
      }, {
        key: "clear",
        value: function clear() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          _.get(this).options = [];
          update && this.update();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _.get(this).appendCaret();

          this.update();
          this.addEventListener('mousedown', _.get(this).mousedownHandler);
          this.addEventListener('options.selected', _.get(this).optionSelectionHandler);
          this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.removeEventListener('mousedown', _.get(this).mousedownHandler);
          this.addEventListener('options.selected', _.get(this).optionSelectionHandler);
          this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler);
        }
      }, {
        key: "update",
        value: function update() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.get(this).options;

          if (options !== _.get(this).options) {
            _.get(this).options = options;
          }

          _.get(this).contentsEl.innerHTML = options.length > 0 ? this.list : this.parentNode.placeholder || '';
        }
      }, {
        key: "list",
        get: function get() {
          return _.get(this).options.map(function (option) {
            return option.displayElement.text;
          }).join(', ');
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());