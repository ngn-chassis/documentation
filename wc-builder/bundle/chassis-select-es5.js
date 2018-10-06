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

customElements.define('chassis-select', function () {
  var _private = new WeakMap();

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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}chassis-select{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}chassis-select chassis-options{position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}chassis-select[open] chassis-options{height:auto}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeselectedoption\"></slot><slot name=\"selectedoption\"></slot><slot name=\"afterselectedoption\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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

        _private.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          addPrivateProps: function addPrivateProps(props) {
            for (var prop in props) {
              _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = props[prop];
            }
          },
          addReadOnlyProp: function addReadOnlyProp(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).readonlyProperty(prop));
          },
          addReadOnlyProps: function addReadOnlyProps(props) {
            props.forEach(function (prop) {
              return _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProp(prop);
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
            if (!_private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            _this.setAttribute(attr, val);

            _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = val;
          },
          handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
            if (!_private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            if (value === 'false' && _this.hasAttribute(attr)) {
              _this.removeAttribute(attr);

              _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = _this.hasAttribute(attr);
          },
          handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
            if (!bool) {
              _this.removeAttribute(prop);

              _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = false;
              return;
            }

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
              _this.setAttribute(prop, '');

              _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = true;
            }
          },
          handlePropertyChange: function handlePropertyChange(prop, val) {
            _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = val;

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
              _this.setAttribute(prop, val);
            }
          },
          readonlyProperty: function readonlyProperty(name) {
            return {
              get: function get() {
                return _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[name];
              },
              set: function set() {
                return _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).throw('readonly', {
                  name: name
                });
              }
            };
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-select> ';

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

        _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProps(['form', 'labels', 'willValidate', 'type', 'validationMessage', 'validity']);

        _private.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProps({
          title: '',
          placeholder: '',
          arrowKeydownHandler: function arrowKeydownHandler(evt) {
            switch (evt[_this.keySource]) {
              case 38:
              case 'ArrowUp':
                evt.preventDefault();
                console.log('select previous option');
                break;

              case 40:
              case 'ArrowDown':
                evt.preventDefault();
                console.log('select next option');
                break;

              default:
                return;
            }
          },
          bodyClickHandler: function bodyClickHandler(evt) {
            if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
              return;
            }

            _this.removeAttribute('open');
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option, index) {
          _private.get(this).optionsEl.add(option, index);
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'autofocus':
            case 'disabled':
              _private.get(this).handleBooleanAttributeChange(attr, newValue);

              break;

            case 'name':
              _private.get(this).handleAttributeChange(attr, newValue);

              break;

            case 'open':
              this.isOpen ? this.open() : this.close();
              break;
          }
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          return _private.get(this).sourceEl.checkValidity();
        }
      }, {
        key: "clear",
        value: function clear() {
          _private.get(this).optionsEl.clear();
        }
      }, {
        key: "close",
        value: function close() {
          document.body.removeEventListener('click', _private.get(this).bodyClickHandler);
          document.body.removeEventListener('touchcancel', _private.get(this).bodyClickHandler);
          document.body.removeEventListener('touchend', _private.get(this).bodyClickHandler);

          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this.addEventListener('click', function (evt) {
            _this2.hasAttribute('open') ? _this2.removeAttribute('open') : _this2.setAttribute('open', '');
          });
          this.addEventListener('focus', function (evt) {
            _this2.addEventListener('keydown', _private.get(_this2).arrowKeydownHandler);
          });
          this.addEventListener('blur', function (evt) {
            _this2.removeEventListener('keydown', _private.get(_this2).arrowKeydownHandler);
          });
          setTimeout(function () {
            if (!_this2.hasAttribute('tabindex')) {
              _this2.setAttribute('tabindex', 0);
            }

            if (_this2.autofocus) {
              _this2.focus();
            }
          }, 0);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          _private.get(this).optionsEl.deselectAll();
        }
      }, {
        key: "inject",
        value: function inject(select) {
          _private.get(this).optionsEl = document.createElement('chassis-options');
          _private.get(this).sourceEl = select;
          _private.get(this).optionsEl.parent = this;
          _private.get(this).optionsEl.selectedOptionEl = document.createElement('chassis-selected-option');
          _private.get(this).optionsEl.selectedOptionEl.slot = 'selectedoption';
          this.appendChild(_private.get(this).optionsEl.selectedOptionEl);
          _private.get(this).optionsEl.slot = 'options';
          this.appendChild(_private.get(this).optionsEl);
          _private.get(this).placeholder = this.getAttribute('placeholder');

          if (select.children.length > 0) {
            _private.get(this).optionsEl.addChildren(select.children);

            _private.get(this).optionsEl.selectByIndex(this.selectedIndex);
          } else {
            this.deselectAll();
          }
        }
      }, {
        key: "item",
        value: function item(index) {
          return _private.get(this).optionsEl.item(index);
        }
      }, {
        key: "namedItem",
        value: function namedItem(id) {
          return _private.get(this).optionsEl.namedItem(id);
        }
      }, {
        key: "open",
        value: function open() {
          document.body.addEventListener('click', _private.get(this).bodyClickHandler);
          document.body.addEventListener('touchcancel', _private.get(this).bodyClickHandler);
          document.body.addEventListener('touchend', _private.get(this).bodyClickHandler);

          if (!this.isOpen) {
            this.isOpen = true;
          }
        }
      }, {
        key: "remove",
        value: function remove() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (index === null) {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
          }

          _private.get(this).optionsEl.removeOptionByIndex(index);
        }
      }, {
        key: "select",
        value: function select(index) {
          _private.get(this).optionsEl.selectByIndex(index);
        }
      }, {
        key: "setCustomValidity",
        value: function setCustomValidity(string) {
          _private.get(this).sourceEl.setCustomValidity(string);
        }
      }, {
        key: "autofocus",
        get: function get() {
          return _private.get(this).getBooleanPropertyValue('autofocus');
        },
        set: function set(bool) {
          _private.get(this).handleBooleanPropertyChange('autofocus', bool);
        }
      }, {
        key: "disabled",
        get: function get() {
          return _private.get(this).getBooleanPropertyValue('disabled');
        },
        set: function set(bool) {
          _private.get(this).handleBooleanPropertyChange('disabled', bool);
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.hasAttribute('open');
        },
        set: function set(bool) {
          bool ? this.setAttribute('open', '') : this.removeAttribute('open');
        }
      }, {
        key: "length",
        get: function get() {
          return _private.get(this).sourceEl.length;
        }
      }, {
        key: "name",
        get: function get() {
          return _private.get(this).sourceEl.name;
        },
        set: function set(name) {
          _private.get(this).handlePropertyChange('name', name);
        }
      }, {
        key: "options",
        get: function get() {
          return _private.get(this).optionsEl.displayOptions;
        },
        set: function set(value) {
          return _private.get(this).throw('readonly', {
            name: 'options'
          });
        }
      }, {
        key: "placeholder",
        get: function get() {
          return _private.get(this).placeholder;
        },
        set: function set(text) {
          _private.get(this).placeholder = text;
        }
      }, {
        key: "required",
        get: function get() {
          return _private.get(this).getBooleanPropertyValue('required');
        },
        set: function set(bool) {
          _private.get(this).handleBooleanPropertyChange('required', bool);
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return _private.get(this).optionsEl.selectedIndex;
        },
        set: function set(index) {
          if (index < 0) {
            return this.deselectAll();
          }

          _private.get(this).optionsEl.selectedIndex = index;
        }
      }, {
        key: "selectedOptions",
        get: function get() {
          return _private.get(this).optionsEl.selectedOptions;
        },
        set: function set(value) {
          return _private.get(this).throw('readonly', {
            name: 'selectedOptions'
          });
        }
      }, {
        key: "sourceElement",
        get: function get() {
          return _private.get(this).sourceEl;
        }
      }, {
        key: "value",
        get: function get() {
          return _private.get(this).sourceEl.value;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'disabled', 'name', 'open', 'tabindex'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());