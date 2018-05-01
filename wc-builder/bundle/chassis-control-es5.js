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

customElements.define('chassis-control', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:layout style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}:host([type=select]){flex-direction:column}chassis-control{display:flex;contain:layout style;max-width:100%}:host :after,:host :before,chassis-control *{box-sizing:border-box}chassis-control .hidden{display:none;visibility:hidden;opacity:0}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}chassis-control[type=select]{flex-direction:column}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>');

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
      _private.get(_this).fieldInputTypes = ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'];_private.get(_this).toggleInputTypes = ['checkbox', 'radio'];_private.get(_this).supportedTypes = ['field', 'toggle', 'select'];_private.get(_this).input = null;_private.get(_this).initDatalist = function (input, datalist) {
        _this.type = 'field';if (!customElements.get('chassis-datalist')) {
          // Setup defaults
          return;
        }var placeholder = document.createElement('chassis-datalist');placeholder.slot = 'input';var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(datalist.attributes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            if (attr.specified) {
              placeholder.setAttribute(attr.name, attr.value);if (attr.name === 'autofocus') {
                datalist.removeAttribute(attr.name);
              }
            }
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

        _this.removeChild(datalist);_this.removeChild(input);placeholder.inject(input, datalist, _private.get(_this).guid);_this.appendChild(placeholder);_private.get(_this).input = placeholder;
      };_private.get(_this).initInput = function (input) {
        input.slot = input.slot || 'input';_private.get(_this).input = input;input.id = _private.get(_this).guid;if (_private.get(_this).fieldInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'field';
        }if (_private.get(_this).toggleInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'toggle';
        }
      };_private.get(_this).initLabel = function (label) {
        _this.label = label;label.slot = label.slot || 'label';label.htmlFor = _private.get(_this).guid;if (_this.type === 'select') {
          _this.label.addEventListener('click', function (evt) {
            _this.input.focus();
          });
        }
      };_private.get(_this).initSelectMenu = function (select) {
        _this.type = 'select';if (!customElements.get('chassis-select')) {
          select.id = _private.get(_this).guid;select.slot = select.slot || 'input';select.setAttribute('role', 'menu');_private.get(_this).input = select;var titleEls = select.querySelectorAll('option[title]');titleEls.forEach(function (el) {
            return select.removeChild(el);
          });var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(select.options), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var option = _step2.value;

              if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                option.removeAttribute('label');
              }
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

          return;
        }var placeholder = document.createElement('chassis-select');placeholder.slot = 'input';placeholder.id = _private.get(_this).guid;var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(select.attributes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var attr = _step3.value;

            if (attr.specified) {
              placeholder.setAttribute(attr.name, attr.value);if (attr.name === 'autofocus') {
                select.removeAttribute(attr.name);
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        _this.removeChild(select);placeholder.inject(select);_this.appendChild(placeholder);_private.get(_this).input = placeholder;
      };
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        _private.get(this).guid = _private.get(this).generateGuid('control');setTimeout(function () {
          var label = _this2.querySelector('label');var input = _this2.querySelector('input');var textarea = _this2.querySelector('textarea');var select = _this2.querySelector('select');var datalist = _this2.querySelector('datalist');textarea && _private.get(_this2).initInput(textarea);select && _private.get(_this2).initSelectMenu(select);if (input) {
            if (datalist) {
              _private.get(_this2).initDatalist(input, datalist);
            } else {
              _private.get(_this2).initInput(input);
            }
          }label && _private.get(_this2).initLabel(label);
        });
      }
    }, {
      key: 'input',
      get: function get() {
        return _private.get(this).input;
      },
      set: function set(input) {
        if (this.input) {
          console.warn('Setting <chassis-control> child input programmatically is not allowed.');return;
        }_private.get(this).input = input;
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      },
      set: function set(value) {
        this.setAttribute('type', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['disabled'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());