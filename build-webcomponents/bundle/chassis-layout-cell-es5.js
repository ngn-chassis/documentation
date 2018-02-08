'use strict';

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
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        setTimeout(function () {
          _this2.styleSheet = _this2.shadowRoot.styleSheets[0];_this2.styleSheet.insertRule(':host([size]) {}', _this2.styleSheet.cssRules.length);_this2.sizeRule = _this2.styleSheet.cssRules[_this2.styleSheet.cssRules.length - 1];if (_this2.hasAttribute('size')) {
            _this2.size = _this2.getAttribute('size');
          }
        }, 0);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, newValue, oldValue) {
        attr = attr.toLowerCase();if (newValue === oldValue) {
          return;
        }switch (attr) {case 'size':
            this.size = newValue;break;default:
            return;}
      }
    }, {
      key: 'templateString',
      get: function get() {
        return '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 auto}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host :after,:host :before,chassis-layout-cell *{box-sizing:border-box}chassis-layout-cell[stretch]{flex:1 1 auto}chassis-layout-cell[orientation=horizontal]{flex-direction:row}chassis-layout-cell[orientation=vertical]{flex-direction:column}</style><slot></slot></template>';
      }
    }, {
      key: 'size',
      get: function get() {
        return this.hasAttribute('size') ? this.getAttribute('size') : 'auto';
      },
      set: function set(val) {
        if (!this.sizeRule) {
          return;
        }this.sizeRule.style.setProperty('flex-basis', val); // console.log(this.sizeRule);
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