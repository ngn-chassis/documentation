"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-optgroup',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-optgroup{contain:content;display:flex;flex-direction:column;max-width:100%}author-optgroup *,author-optgroup :after,author-optgroup :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoptgroup\"></slot><slot></slot><slot name=\"afteroptgroup\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.definePrivateMethods({
      optionSelectionHandler: function optionSelectionHandler(evt) {
        return _this.emit('option.selected', evt.detail, _this.parentNode);
      },
      parentStateChangeHandler: function parentStateChangeHandler(evt) {
        return _this.emit('state.change', evt.detail);
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.parentNode.on('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      disconnected: function disconnected() {
        _this.parentNode.off('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      'option.selected': _this.PRIVATE.optionSelectionHandler
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "options",
    get: function get() {
      return this.parentNode.options;
    }
  }, {
    key: "multiple",
    get: function get() {
      return this.parentNode.multiple;
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));