"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-selected-options', function () {
  var _ = new WeakMap();

  return (
    /*#__PURE__*/
    function (_HTMLElement) {
      (0, _inherits2.default)(_class, _HTMLElement);

      function _class() {
        var _this;

        (0, _classCallCheck2.default)(this, _class);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
        _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

        _this.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-selected-options{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-selected-options *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforecontents\"></slot><div class=\"contents\"><slot id=\"contents\"></slot></div><slot name=\"aftercontents\"></slot><div class=\"beforeend\"><slot name=\"beforeend\"></slot></div></template>");
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

        _.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          addPrivateProps: function addPrivateProps(props) {
            for (var prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = props[prop];
            }
          },
          addReadOnlyProp: function addReadOnlyProp(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).readonlyProperty(prop));
          },
          addReadOnlyProps: function addReadOnlyProps(props) {
            props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProp(prop);
            });
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          handleAttributeChange: function handleAttributeChange(attr, val) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            _this.setAttribute(attr, val);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = val;
          },
          handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            if (value === 'false' && _this.hasAttribute(attr)) {
              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = _this.hasAttribute(attr);
          },
          handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
            if (!bool) {
              _this.removeAttribute(prop);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = false;
              return;
            }

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
              _this.setAttribute(prop, '');

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = true;
            }
          },
          handlePropertyChange: function handlePropertyChange(prop, val) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = val;

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
              _this.setAttribute(prop, val);
            }
          },
          readonlyProperty: function readonlyProperty(name) {
            return {
              get: function get() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[name];
              },
              set: function set() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).throw('readonly', {
                  name: name
                });
              }
            };
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-selected-options> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.name, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _this.parent = null;
        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).contentsEl = _this.shadowRoot.querySelector('#contents');
        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options = [];

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateList = function () {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).contentsEl.innerHTML = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.map(function (option) {
            return option.displayElement.text;
          }).join(', ');
        };

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option) {
          if (this.parent.multiple) {
            _.get(this).options.push(option);
          } else {
            _.get(this).options = [option];
          }

          this.update();
        }
      }, {
        key: "remove",
        value: function remove(option) {
          _.get(this).options.splice(_.get(this).options.indexOf(option), 1);

          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          if (_.get(this).options.length > 0) {
            return _.get(this).generateList();
          }

          if (this.parent.placeholder) {
            _.get(this).contentsEl.innerHTML = this.parent.placeholder;
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          _.get(this).options = [];
          this.update();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this._appendCaret();

          this.addEventListener('mousedown', function (evt) {
            if (_this2.parent.isOpen) {
              return _this2.parent.removeAttribute('open');
            }

            _this2.parent.setAttribute('open', '');
          });
        }
      }, {
        key: "_appendCaret",
        value: function _appendCaret() {
          var xmlns = 'http://www.w3.org/2000/svg';
          var width = 24;
          var height = 24;
          var caret = document.createElementNS(xmlns, 'svg');
          caret.slot = 'beforeend';
          caret.setAttributeNS(null, 'width', width);
          caret.setAttributeNS(null, 'height', height);
          caret.setAttributeNS(null, 'viewBox', "0 0 ".concat(width, " ").concat(height));
          caret.setAttributeNS(null, 'fill', 'none');
          caret.setAttributeNS(null, 'stroke', 'currentColor');
          caret.setAttributeNS(null, 'stroke-width', '3');
          caret.setAttributeNS(null, 'stroke-linecap', 'square');
          caret.setAttributeNS(null, 'stroke-linejoin', 'miter');
          var shape = document.createElementNS(xmlns, 'polyline');
          shape.setAttributeNS(null, 'points', '6 9 12 15 18 9');
          caret.appendChild(shape);
          this.appendChild(caret);
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());