'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

customElements.define('chassis-layout-cell', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 auto}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host :after,:host :before,chassis-layout-cell *{box-sizing:border-box}chassis-layout-cell[stretch]{flex:1 1 auto}chassis-layout-cell[orientation=horizontal]{flex-direction:row}chassis-layout-cell[orientation=vertical]{flex-direction:column}</style><slot></slot></template>');

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

      _private.set(_this, {
        addReadOnlyProp: function addReadOnlyProp(prop) {
          (0, _defineProperty2.default)(_this, prop, _private.get(_this).readonlyProperty(prop));
        },

        addReadOnlyProps: function addReadOnlyProps(props) {
          props.forEach(function (prop) {
            return _private.get(_this).addReadOnlyProp(prop);
          });
        },

        generateGuid: function generateGuid() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });

          return prefix ? prefix + '_' + id : id;
        },

        getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
          return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
        },

        handleAttributeChange: function handleAttributeChange(attr, val) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          _this.setAttribute(attr, val);
          _private.get(_this).sourceEl[attr] = val;
        },

        handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          var acceptableValues = ['true', 'false', '', null];

          if (!acceptableValues.includes(value)) {
            console.error('<' + _this.localName + '> "' + attr + '" attribute expected boolean but received "' + value + '"');
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          if (value === 'false' && _this.hasAttribute(attr)) {
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          _private.get(_this).sourceEl[attr] = _this.hasAttribute(attr);
        },

        handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
          if (!bool) {
            _this.removeAttribute(prop);
            _private.get(_this).sourceEl[prop] = false;
            return;
          }

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
            _this.setAttribute(prop, '');
            _private.get(_this).sourceEl[prop] = true;
          }
        },

        handlePropertyChange: function handlePropertyChange(prop, val) {
          _private.get(_this).sourceEl[prop] = val;

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
            _this.setAttribute(prop, val);
          }
        },

        readonlyProperty: function readonlyProperty(name) {
          return {
            get: function get() {
              return _private.get(_this).sourceEl[name];
            },
            set: function set() {
              return _private.get(_this).throw('readonly', { name: name });
            }
          };
        },

        throw: function _throw(type, vars) {
          var message = 'ERROR <chassis-layout-cell> ';

          switch (type) {
            case 'readonly':
              message += 'Cannot set read-only property "' + vars.name + '".';
              break;

            default:
              message = message.trim();
          }

          console.error(message);
        }
      });
      _private.set(_this, { children: [], styleSheet: null, sizeRule: null, size: null });
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        setTimeout(function () {
          _private.get(_this2).styleSheet = _this2.shadowRoot.styleSheets[0];var sheetLength = _private.get(_this2).styleSheet.cssRules.length;_private.get(_this2).styleSheet.insertRule(':host([size]) {}', sheetLength);_private.get(_this2).sizeRule = _private.get(_this2).styleSheet.cssRules[sheetLength];if (_this2.hasAttribute('size')) {
            _this2.size = _this2.getAttribute('size');
          }
        }, 0);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        attr = attr.toLowerCase();if (newValue === oldValue) {
          return;
        }switch (attr) {case 'size':
            if (_private.get(this).size !== newValue) {
              this.size = newValue;
            }break;default:
            return;}
      }
    }, {
      key: 'size',
      get: function get() {
        return this.hasAttribute('size') ? this.getAttribute('size') : 'auto';
      },
      set: function set(val) {
        if (!_private.get(this).sizeRule) {
          return;
        }_private.get(this).size = val;_private.get(this).sizeRule.style.setProperty('flex-basis', val);this.setAttribute('size', val);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['size'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());