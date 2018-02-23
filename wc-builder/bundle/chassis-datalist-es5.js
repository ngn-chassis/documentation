'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

customElements.define('chassis-datalist', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}:host([disabled]:not([disabled*=false])){pointer-events:none}chassis-datalist{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host :after,:host :before,chassis-datalist *{box-sizing:border-box}chassis-datalist chassis-options{position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}chassis-datalist[open] chassis-options{height:auto}chassis-datalist[disabled]:not([disabled*=false]){pointer-events:none}</style></template>');

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
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'option';

          return prefix + '_' + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });
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
          var message = 'ERROR <chassis-select> ';

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
      _private.get(_this).addReadOnlyProp('options');_private.get(_this).options = [];_private.get(_this).arrowKeydownHandler = function (evt) {
        switch (evt.keyCode) {case 38:
            evt.preventDefault();console.log('select previous option');break;case 40:
            evt.preventDefault();console.log('select next option');break;default:
            return;}
      };_private.get(_this).bodyClickHandler = function (evt) {
        if (evt.target === _this || _this.contains(evt.target)) {
          return;
        }_this.removeAttribute('open');
      };_private.get(_this).generateOptionObject = function (optionEl) {
        if (!customElements.get('chassis-option')) {
          console.error('chassis-datalist requires chassis-option. Please include it in this document\'s <head> element.');return;
        }var obj = { id: _private.get(_this).generateGuid(), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(optionEl.attributes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            obj.attributes[attr.name] = attr.value;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return obj;
      };
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        console.log(_private);
      }
    }, {
      key: 'addChildren',
      value: function addChildren(children) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            this.addOption(child instanceof HTMLElement ? _private.get(this).generateOptionObject(child) : child);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        attr = attr.toLowerCase();if (newValue === oldValue) {
          return;
        }switch (attr) {case 'autofocus':case 'disabled':
            console.log(attr); // _private.get(this).handleBooleanAttributeChange(attr, newValue)
            break;case 'name':
            console.log(attr); // _private.get(this).handleAttributeChange(attr, newValue)
            break;}
      }
    }, {
      key: 'inject',
      value: function inject(datalist) {
        _private.get(this).sourceEl = datalist;_private.get(this).optionsEl = document.createElement('chassis-options');_private.get(this).optionsEl.slot = 'options';this.appendChild(_private.get(this).optionsEl);this.addChildren(datalist.options);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['autofocus', 'disabled', 'name', 'tabindex'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());