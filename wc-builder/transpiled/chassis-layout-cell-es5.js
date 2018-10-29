"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-layout-cell', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 auto}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host :after,:host :before,chassis-layout-cell *{box-sizing:border-box}chassis-layout-cell[stretch]{flex:1 1 auto}chassis-layout-cell[orientation=horizontal]{flex-direction:row}chassis-layout-cell[orientation=vertical]{flex-direction:column}</style><slot></slot></template>");
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
          addPrivateProps: function addPrivateProps(props) {
            for (var prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = props[prop];
            }
          },
          addReadOnlyProp: function addReadOnlyProp(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).readonlyProperty(prop));
          },
          addReadOnlyProps: function addReadOnlyProps(props) {
            props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProp(prop);
            });
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          handleAttributeChange: function handleAttributeChange(attr, val) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            _this.setAttribute(attr, val);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = val;
          },
          handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            if (value === 'false' && _this.hasAttribute(attr)) {
              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = _this.hasAttribute(attr);
          },
          handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
            if (!bool) {
              _this.removeAttribute(prop);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = false;
              return;
            }

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
              _this.setAttribute(prop, '');

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = true;
            }
          },
          handlePropertyChange: function handlePropertyChange(prop, val) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = val;

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
              _this.setAttribute(prop, val);
            }
          },
          readonlyProperty: function readonlyProperty(name) {
            return {
              get: function get() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[name];
              },
              set: function set() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).throw('readonly', {
                  name: name
                });
              }
            };
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-layout-cell> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.name, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          children: [],
          styleSheet: null,
          sizeRule: null,
          size: null
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          setTimeout(function () {
            _.get(_this2).styleSheet = _this2.shadowRoot.styleSheets[0];

            var sheetLength = _.get(_this2).styleSheet.cssRules.length;

            _.get(_this2).styleSheet.insertRule(':host([size]) {}', sheetLength);

            _.get(_this2).sizeRule = _.get(_this2).styleSheet.cssRules[sheetLength];

            if (_this2.hasAttribute('size')) {
              _this2.size = _this2.getAttribute('size');
            }
          }, 0);
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'size':
              if (_.get(this).size !== newValue) {
                this.size = newValue;
              }

              break;

            default:
              return;
          }
        }
      }, {
        key: "size",
        get: function get() {
          return this.hasAttribute('size') ? this.getAttribute('size') : 'auto';
        },
        set: function set(val) {
          if (!_.get(this).sizeRule) {
            return;
          }

          _.get(this).size = val;

          _.get(this).sizeRule.style.setProperty('flex-basis', val);

          this.setAttribute('size', val);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['size'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());