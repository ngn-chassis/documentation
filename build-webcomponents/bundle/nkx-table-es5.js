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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NkxTable = function (_HTMLElement) {
  (0, _inherits3.default)(NkxTable, _HTMLElement);

  function NkxTable() {
    (0, _classCallCheck3.default)(this, NkxTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NkxTable.__proto__ || (0, _getPrototypeOf2.default)(NkxTable)).call(this));

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

  (0, _createClass3.default)(NkxTable, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._table = document.createElement('table');this._thead = document.createElement('thead');this._tbody = document.createElement('tbody');this._table.appendChild(this._thead);this._table.appendChild(this._tbody);this.appendChild(this._table);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr.toLowerCase()) {case '':
          break;default:
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
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";</style><slot></slot></template>';
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
  return NkxTable;
}(HTMLElement);

customElements.define('nkx-table', NkxTable);