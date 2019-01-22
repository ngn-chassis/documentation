"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-tooltip',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{position:fixed;display:block}:host([hidden]){display:none}:host *,:host :after,:host :before{box-sizing:border-box}author-tooltip{position:fixed;display:block}author-tooltip[hidden]){display:none}author-tooltip *,author-tooltip :after,author-tooltip :before{box-sizing:border-box}</style><slot></slot></template>"));

    _this.UTIL.defineProperties({
      position: {
        private: true,
        default: []
      },
      positionValues: {
        readonly: true,
        private: true,
        default: ['left', 'center', 'right', 'top', 'bottom']
      }
    });

    _this.UTIL.defineAttributes({
      hidden: true,
      position: {
        default: 'center top',
        get: function get() {
          return _this.PRIVATE.position ? _this.PRIVATE.position.join(' ') : null;
        },
        set: function set(value) {
          var positionValues = _this.PRIVATE.positionValues;
          var array = value.trim().split(' ');
          _this.PRIVATE.position = array.filter(function (term) {
            var isValid = positionValues.includes(term);

            if (!isValid) {
              _this.UTIL.printToConsole("Invalid position value \"".concat(term, "\". Accepted values: ").concat(_this.PRIVATE.positionValues.join(', ')), 'error');
            }

            return isValid;
          });
        }
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.hide();

        if (!_this.hasAttribute('for')) {
          return _this.UTIL.throwError({
            message: "Missing required \"for\" attribute."
          });
        }

        _this.annotatedElement = document.getElementById(_this.getAttribute('for')) || null;

        if (!_this.annotatedElement) {
          return _this.UTIL.throwError({
            type: 'reference',
            message: "Could not find element #".concat(_this.getAttribute('for'), ". \"for\" attribute must be set to the id of the element to which to attach the tooltip.")
          });
        }

        _this.UTIL.registerListeners(_this.annotatedElement, {
          mouseenter: function mouseenter(evt) {
            return _this.show();
          },
          mouseleave: function mouseleave(evt) {
            return _this.hide();
          }
        });
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "hide",
    value: function hide() {
      this.setAttribute('hidden', '');
    }
  }, {
    key: "show",
    value: function show() {
      this.removeAttribute('hidden');
    }
  }, {
    key: "isHidden",
    get: function get() {
      return this.hasAttribute('hidden');
    }
  }, {
    key: "isVisible",
    get: function get() {
      return !this.isHidden;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['for', 'hidden', 'position'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));