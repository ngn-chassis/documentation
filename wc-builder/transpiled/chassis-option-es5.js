"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-option', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-option{contain:content;display:flex;flex-direction:column;max-width:100%}:host :after,:host :before,chassis-option *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoption\"></slot><slot></slot><slot name=\"afteroption\"></slot><slot name=\"beforeend\"></slot></template>");
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
            var message = 'ERROR <chassis-option> ';

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
        _this.defaultSelected = false; // this.addEventListener('click', evt => {
        //   console.log('chassis-option');
        // })

        _this.addEventListener('mouseover', function (evt) {
          if (_this.parent.mousedown) {
            return console.log('select me');
          }

          _this.parent.hoverOption(_this.index);
        });

        _this.addEventListener('mousemove', function (evt) {
          return _this.parent.hoverOption(_this.index);
        });

        _this.addEventListener('mouseout', function (evt) {
          return _this.parent.unHoverOption(_this.index);
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'disabled':
            case 'selected':
            case 'hovered':
              return _.get(this).handleBooleanAttributeChange(attr, newValue);

            case 'label':
            case 'value':
              return _.get(this).handleAttributeChange(attr, newValue);

            default:
              return;
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {}
        /**
         * @method remove
         * Remove this option from the DOM.
         * @override
         */

      }, {
        key: "remove",
        value: function remove() {
          var native = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.parent.options.splice(this.index, 1);
          (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
        }
      }, {
        key: "disabled",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('disabled');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('disabled', bool);
        }
      }, {
        key: "form",
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'form'
          });
        }
      }, {
        key: "index",
        get: function get() {
          var _this2 = this;

          return this.parent.options.findIndex(function (option) {
            return option.displayElement === _this2;
          });
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'index'
          });
        }
      }, {
        key: "label",
        get: function get() {
          return _.get(this).sourceEl.label;
        },
        set: function set(label) {
          _.get(this).handlePropertyChange('label', label);
        }
      }, {
        key: "selected",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('selected');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('selected', bool);
        }
      }, {
        key: "text",
        get: function get() {
          return this.innerHTML;
        },
        set: function set(content) {
          this.innerHTML = content;
        }
      }, {
        key: "value",
        get: function get() {
          return _.get(this).sourceEl.value;
        },
        set: function set(value) {
          _.get(this).handlePropertyChange('value', value);
        }
      }, {
        key: "hovered",
        get: function get() {
          return this.hasAttribute('hover');
        },
        set: function set(bool) {
          bool ? this.setAttribute('hover', '') : this.removeAttribute('hover');
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['disabled', 'hovered', 'label', 'selected', 'value'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());