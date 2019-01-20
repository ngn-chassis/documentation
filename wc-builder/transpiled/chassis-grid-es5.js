"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('chassis-grid',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:grid}:host([inline]){display:inline-grid}chassis-grid{display:grid}chassis-grid[inline]){display:inline-grid}</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      columns: {
        set: function set(value) {
          return _this.PRIVATE.updateColumns(value);
        }
      },
      rows: {
        set: function set(value) {
          return _this.PRIVATE.updateRows(value);
        }
      },
      gutter: {
        default: 'none',
        set: function set(value) {
          return _this.PRIVATE.updateGutter();
        }
      }
    });

    _this.UTIL.definePrivateProperties({
      columnsRule: null,
      rowsRule: null,
      gutterRule: null,
      observer: new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var addedNodes = mutation.addedNodes,
              removedNodes = mutation.removedNodes,
              type = mutation.type;

          switch (type) {
            case 'childList':
              return _this.PRIVATE.resetZIndexes();

            default:
              return;
          }
        });
      }),
      resetZIndexes: function resetZIndexes() {
        console.log('resetting z-indexes');
      },
      updateGutter: function updateGutter() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('gutter').trim();

        if (!_this.PRIVATE.gutterRule) {
          return;
        }

        _this.PRIVATE.gutterRule.style.setProperty('grid-gap', value);
      },
      updateColumns: function updateColumns() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('columns').trim();

        if (!_this.children.length || !_this.PRIVATE.columnsRule) {
          return;
        }

        _this.PRIVATE.columnsRule.style.setProperty('grid-template-columns', _this.PRIVATE.getProcessedGridTemplateValue(value));
      },
      updateRows: function updateRows() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getAttribute('rows').trim();

        if (!_this.children.length || !_this.PRIVATE.rowsRule) {
          return;
        }

        _this.PRIVATE.rowsRule.style.setProperty('grid-template-rows', _this.PRIVATE.getProcessedGridTemplateValue(value));
      },
      getProcessedGridTemplateValue: function getProcessedGridTemplateValue(value) {
        if (!isNaN(value)) {
          var quantity = parseInt(value);
          var array = [];

          for (var i = 0; i < quantity; i++) {
            array.push('1fr');
          }

          value = array.join(' ');
        }

        return value;
      }
    });

    _this.PRIVATE.observer.observe((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      attributes: false,
      childList: true,
      characterData: false
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.UTIL.definePrivateProperties({
        styleSheet: this.shadowRoot.styleSheets[0]
      });
      var styleSheet = this.PRIVATE.styleSheet;
      var sheetLength = this.PRIVATE.styleSheet.cssRules.length;
      styleSheet.insertRule(':host([gutter]) {}', sheetLength);
      this.PRIVATE.gutterRule = styleSheet.cssRules[sheetLength];
      styleSheet.insertRule(':host([columns]) {}', sheetLength);
      this.PRIVATE.columnsRule = styleSheet.cssRules[sheetLength];
      styleSheet.insertRule(':host([rows]) {}', sheetLength);
      this.PRIVATE.rowsRule = styleSheet.cssRules[sheetLength];
      setTimeout(function () {
        if (_this2.hasAttribute('gutter')) {
          _this2.PRIVATE.updateGutter();
        }

        if (_this2.hasAttribute('columns')) {
          _this2.PRIVATE.updateColumns();
        }

        if (_this2.hasAttribute('rows')) {
          _this2.PRIVATE.updateRows();
        }
      }, 0);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['columns', 'rows', 'gutter'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));