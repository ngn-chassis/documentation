"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-option', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  contain: content;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\nchassis-option {\n  contain: content;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n\nchassis-option *,\nchassis-option *:before,\nchassis-option *:after {\n  box-sizing: border-box;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoption\"></slot><slot></slot><slot name=\"afteroption\"></slot><slot name=\"beforeend\"></slot></template>");
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
              return console.error('ERROR <chassis-option> Read-only property must be type "object" or "string"');
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
            var message = 'ERROR <chassis-option> ';

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

        _this.defaultSelected = false;

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttributes(['id', 'label', 'value']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttributes(['disabled', 'hover', 'selected']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperties(['form', {
          name: 'index',
          get: function get() {
            var _this2 = this;

            return this.parentNode.options.findIndex(function (option) {
              return option.displayElement === _this2;
            });
          }
        }]);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          form: null,
          mouseButtonDown: function mouseButtonDown(evt) {
            var code = evt.buttons !== undefined ? evt.buttons : evt.nativeEvent.which;
            return code >= 1;
          },
          mousemoveHandler: function mousemoveHandler(evt) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('option.hovered', _this.index);
          },
          mouseoutHandler: function mouseoutHandler(evt) {
            return _this.hover = false;
          },
          mouseoverHandler: function mouseoverHandler(evt) {
            var mousedown = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).mouseButtonDown(evt);

            if (!(_this.parentNode.multiple && mousedown)) {
              _this.hover = true;
              return;
            }

            var shiftKey = evt.shiftKey,
                metaKey = evt.metaKey,
                ctrlKey = evt.ctrlKey;

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).select(shiftKey, metaKey, ctrlKey, mousedown);
          },
          select: function select() {
            var shiftKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var metaKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var ctrlKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var mousedown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
                index = _assertThisInitialize.index;

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('option.selected', {
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

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).select(shiftKey, metaKey, ctrlKey);
          },
          parentStateChangeHandler: function parentStateChangeHandler(evt) {
            var _evt$detail = evt.detail,
                name = _evt$detail.name,
                value = _evt$detail.value;

            switch (name) {
              case 'multiple':
                if (value) {
                  _this.removeEventListener('mouseup', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionHandler);

                  _this.addEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionHandler);
                } else {
                  _this.addEventListener('mouseup', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionHandler);

                  _this.removeEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionHandler);
                }

                break;

              default:
                return;
            }
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'disabled':
            case 'selected':
            case 'hovered':
              return _.get(this).setBooleanAttributeValue(attr, newValue);

            case 'label':
            case 'value':
              return _.get(this).setAttributeValue(attr, newValue);

            default:
              return;
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.addEventListener('mouseover', _.get(this).mouseoverHandler);
          this.addEventListener('mousemove', _.get(this).mousemoveHandler);
          this.addEventListener('mouseout', _.get(this).mouseoutHandler);
          this.addEventListener('mouseup', _.get(this).selectionHandler);
          this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.removeEventListener('mouseover', _.get(this).mouseoverHandler);
          this.removeEventListener('mousemove', _.get(this).mousemoveHandler);
          this.removeEventListener('mouseout', _.get(this).mouseoutHandler);
          this.removeEventListener('mouseup', _.get(this).selectionHandler);
          this.removeEventListener('mousedown', _.get(this).selectionHandler);
          this.displayElement.removeEventListener('mousedown', _p.get(this).multipleMousedownHandler);
          this.displayElement.removeEventListener('mouseup', _p.get(this).multipleMouseupHandler);
          this.displayElement.removeEventListener('mouseup', _p.get(this).mouseupHandler);
          this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler);
        }
        /**
         * @method remove
         * Remove this option from the DOM.
         * @override
         */

      }, {
        key: "remove",
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
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());