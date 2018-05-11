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

customElements.define('nkx-table', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";</style><slot></slot></template>');

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
          var message = 'ERROR <nkx-table> ';

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
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        this._table = document.createElement('table');this._thead = document.createElement('thead');this._tbody = document.createElement('tbody');this._table.appendChild(this._thead);this._table.appendChild(this._tbody);this.appendChild(this._table);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr.toLowerCase()) {case 'max-length':
            console.log("Max Length: " + newValue);break;default:
            return;}
      }
    }, {
      key: '_addHeader',
      value: function _addHeader(tr, label) {
        var th = document.createElement('th');th.insertAdjacentHTML('beforeend', label);tr.appendChild(th);
      }
    }, {
      key: '_addRow',
      value: function _addRow(data) {
        var tr = document.createElement('tr');this._headers.forEach(function (label) {
          var td = document.createElement('td');td.innerHTML = data[label];tr.appendChild(td);
        });this._tbody.appendChild(tr);
      }
    }, {
      key: 'render',
      value: function render(data) {
        var _this2 = this;

        this._headers = data.headers;this._rows = data.rows;if (data.hasOwnProperty('headers')) {
          var tr = document.createElement('tr');this._headers.forEach(function (label) {
            return _this2._addHeader(tr, label);
          });this._thead.appendChild(tr);
        }this._rows.forEach(function (row) {
          return _this2._addRow(row);
        });
      }
    }, {
      key: 'headers',
      get: function get() {
        return this._headers;
      }
    }, {
      key: 'rows',
      get: function get() {
        return this._rows;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['max-length', 'sort-key', 'sort-order'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());