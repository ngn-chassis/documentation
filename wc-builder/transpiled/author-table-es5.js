"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-table',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\";</style><slot></slot></template>"));

    _this.UTIL.definePrivateProperties({
      headers: null,
      rows: null,
      table: null,
      thead: null,
      tbody: null,
      addHeader: function addHeader(tr, label) {
        var th = document.createElement('th');
        th.insertAdjacentHTML('beforeend', label);
        tr.appendChild(th);
      },
      addRow: function addRow(data) {
        var tr = document.createElement('tr');

        _this.PRIVATE.headers.forEach(function (label) {
          var td = document.createElement('td');
          td.innerHTML = data[label];
          tr.appendChild(td);
        });

        _this.PRIVATE.tbody.appendChild(tr);
      }
    });

    _this.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), [{
      name: 'attribute.change',
      callback: function callback(evt) {
        var _evt$detail = evt.detail,
            attribute = _evt$detail.attribute,
            newValue = _evt$detail.newValue;

        switch (attribute.toLowerCase()) {
          case 'max-length':
            console.log("Max Length: " + newValue);
            break;
        }
      }
    }, {
      name: 'connected',
      callback: function callback() {
        _this.PRIVATE.table = document.createElement('table');
        _this.PRIVATE.thead = document.createElement('thead');
        _this.PRIVATE.tbody = document.createElement('tbody');

        _this.PRIVATE.table.appendChild(_this.PRIVATE.thead);

        _this.PRIVATE.table.appendChild(_this.PRIVATE.tbody);

        _this.appendChild(_this.PRIVATE.table);
      }
    }]);

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "render",
    value: function render(data) {
      var _this2 = this;

      this.PRIVATE.headers = data.headers;
      this.PRIVATE.rows = data.rows;

      if (data.hasOwnProperty('headers')) {
        var tr = document.createElement('tr');
        this.PRIVATE.headers.forEach(function (label) {
          return _this2.PRIVATE.addHeader(tr, label);
        });
        this.PRIVATE.thead.appendChild(tr);
      }

      this.PRIVATE.rows.forEach(function (row) {
        return _this2.PRIVATE.addRow(row);
      });
    }
  }, {
    key: "headers",
    get: function get() {
      return this.PRIVATE.headers;
    }
  }, {
    key: "rows",
    get: function get() {
      return this.PRIVATE.rows;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['max-length', 'sort-key', 'sort-order'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));