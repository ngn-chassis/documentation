'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', _this.templateString);

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
      _this.fieldInputTypes = ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'];_this.toggleInputTypes = ['checkbox', 'radio'];_this.supportedTypes = ['field', 'toggle', 'select'];_this._input = null;
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this._guid = this._generateGuid();setTimeout(function () {
          var label = _this2.querySelector('label');var input = _this2.querySelector('input');var textarea = _this2.querySelector('textarea');var select = _this2.querySelector('select');label && _this2._initLabel(label);input && _this2._initInput(input);textarea && _this2._initInput(textarea);select && _this2._initSelectMenu(select);
        });
      }
    }, {
      key: '_generateGuid',
      value: function _generateGuid() {
        var _this3 = this;

        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input';

        return prefix + '_' + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
          return (c ^ _this3.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
      }
    }, {
      key: '_initInput',
      value: function _initInput(input) {
        input.slot = input.slot || 'input';this._input = input;input.id = this._guid;if (this.fieldInputTypes.indexOf(input.type) >= 0) {
          this.type = 'field';
        }if (this.toggleInputTypes.indexOf(input.type) >= 0) {
          this.type = 'toggle';
        }
      }
    }, {
      key: '_initLabel',
      value: function _initLabel(label) {
        this.label = label;label.slot = label.slot || 'label';label.htmlFor = this._guid;
      }
    }, {
      key: '_initSelectMenu',
      value: function _initSelectMenu(select) {
        this.type = 'select';if (!customElements.get('chassis-select')) {
          select.id = this._guid;select.slot = select.slot || 'input';select.setAttribute('role', 'menu');this._input = select;var titleEls = select.querySelectorAll('option[title]');titleEls.forEach(function (el) {
            return select.removeChild(el);
          });var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(select.options), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return;
        }var placeholder = document.createElement('chassis-select');placeholder.slot = 'input';var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(select.attributes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var attr = _step2.value;

            if (attr.specified) {
              placeholder.setAttribute(attr.name, attr.value);if (attr.name === 'autofocus') {
                select.removeAttribute(attr.name);
              }
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

        this.removeChild(select);placeholder.inject(select);this.appendChild(placeholder);this._input = placeholder;
      }
    }, {
      key: 'templateString',
      get: function get() {
        return '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:layout style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}:host([type=select]){flex-direction:column}chassis-control{display:flex;contain:layout style;max-width:100%}:host :after,:host :before,chassis-control *{box-sizing:border-box}chassis-control .hidden{display:none;visibility:hidden;opacity:0}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}chassis-control[type=select]{flex-direction:column}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>';
      }
    }, {
      key: 'input',
      get: function get() {
        return this._input;
      },
      set: function set(input) {
        if (this._input) {
          console.warn('Setting <chassis-control> child input programmatically is not allowed.');return;
        }this._input = input;
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