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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-select{display:inline-block;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeselectedoptions\"></slot><slot name=\"selectedoptions\"></slot><slot name=\"afterselectedoptions\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
        }); // this.addEventListener('click', evt => {
        //   console.log('chassis-select');
        // })


        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProps(['form', 'labels', 'willValidate', 'type', 'validationMessage', 'validity']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProps({
          placeholder: '',
          title: '',
          arrowKeydownHandler: function arrowKeydownHandler(evt) {
            var startIndex = _this.hoveredIndex > -1 ? _this.hoveredIndex : _this.selectedIndex > -1 ? _this.selectedIndex : -1;

            switch (evt[_this.keySource]) {
              case 13:
              case 'Enter':
              case 32:
              case ' ':
                evt.preventDefault();
                return _this.select(_this.hoveredIndex);

              case 38:
              case 'ArrowUp':
                evt.preventDefault();

                if (!_this.multiple && !_this.isOpen) {
                  return _this.open();
                }

                switch (startIndex) {
                  case -1:
                  case 0:
                    return;

                  default:
                    return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).optionsEl.hoverOption(startIndex - 1);
                }

                break;

              case 40:
              case 'ArrowDown':
                evt.preventDefault();

                if (!_this.multiple && !_this.isOpen) {
                  return _this.open();
                }

                switch (startIndex) {
                  case _this.options.length - 1:
                    return;

                  default:
                    return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).optionsEl.hoverOption(startIndex + 1);
                }

                break;

              default:
                return;
            }
          },
          bodyClickHandler: function bodyClickHandler(evt) {
            if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
              return;
            }

            console.log('hey');

            _this.removeAttribute('open');
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option, index) {
          _.get(this).optionsEl.add(option, index);
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
              return _.get(this).handleBooleanAttributeChange(attr, newValue);

            case 'multiple':
              _.get(this).handleBooleanAttributeChange(attr, newValue);

              if (!newValue && this.selectedOptions) {
                var index = this.selectedIndex;
                this.deselectAll();
                this.select(index);
              }

              break;

            case 'name':
              return _.get(this).handleAttributeChange(attr, newValue);

            case 'open':
              if (this.multiple) {
                return;
              }

              return this.isOpen ? this.open() : this.close();
          }
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          return _.get(this).sourceEl.checkValidity();
        }
      }, {
        key: "clear",
        value: function clear() {
          _.get(this).optionsEl.clear();
        }
      }, {
        key: "close",
        value: function close() {
          if (this.multiple) {
            return;
          }

          document.body.removeEventListener('click', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchend', _.get(this).bodyClickHandler);

          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this.addEventListener('focus', function (evt) {
            _this2.addEventListener('keydown', _.get(_this2).arrowKeydownHandler);
          });
          this.addEventListener('blur', function (evt) {
            _this2.removeEventListener('keydown', _.get(_this2).arrowKeydownHandler);
          });
          document.body.addEventListener('mouseup', function (evt) {
            return _.get(_this2).optionsEl.mousedown = false;
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
          _.get(this).optionsEl.deselectAll();
        }
      }, {
        key: "inject",
        value: function inject(select) {
          Object.assign(_.get(this), {
            sourceEl: select,
            optionsEl: document.createElement('chassis-options'),
            placeholder: this.getAttribute('placeholder')
          });

          var _$get = _.get(this),
              optionsEl = _$get.optionsEl;

          optionsEl.parent = this;
          this.selectedOptionsEl = document.createElement('chassis-selected-options');
          this.selectedOptionsEl.parent = this;
          this.selectedOptionsEl.slot = 'selectedoptions';
          this.appendChild(this.selectedOptionsEl);
          optionsEl.slot = 'options';
          this.appendChild(optionsEl);

          if (select.children.length > 0) {
            optionsEl.addChildren(select.children);
            this.select(this.selectedIndex);
          } else {
            this.deselectAll();
          }
        }
      }, {
        key: "item",
        value: function item(index) {
          return _.get(this).optionsEl.item(index);
        }
      }, {
        key: "namedItem",
        value: function namedItem(id) {
          return _.get(this).optionsEl.namedItem(id);
        }
      }, {
        key: "open",
        value: function open() {
          if (this.multiple) {
            return;
          }

          document.body.addEventListener('click', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchend', _.get(this).bodyClickHandler);

          if (!this.isOpen) {
            this.isOpen = true;
          }
        }
        /**
         * method querySelector
         * @param  {string} selector
         * @return {HTMLElement}
         * @override
         */

      }, {
        key: "querySelector",
        value: function querySelector(selector) {
          if (selector !== ':checked') {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "querySelector", this).call(this, selector);
          }

          return this.selectedOptions.length > 0 ? this.selectedOptions[0] : null;
        }
        /**
         * method querySelectorAll
         * @param  {string} selector
         * @return {NodeList}
         * @override
         */

      }, {
        key: "querySelectorAll",
        value: function querySelectorAll(selector) {
          if (selector !== ':checked') {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "querySelectorAll", this).call(this, selector);
          }

          return _.get(this).optionsEl.querySelectorAll('[selected]');
        }
      }, {
        key: "remove",
        value: function remove() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (index === null) {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
          }

          _.get(this).optionsEl.removeOptionByIndex(index);
        }
      }, {
        key: "select",
        value: function select(index) {
          _.get(this).optionsEl.select(index);
        }
      }, {
        key: "setCustomValidity",
        value: function setCustomValidity(string) {
          _.get(this).sourceEl.setCustomValidity(string);
        }
      }, {
        key: "autofocus",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('autofocus');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('autofocus', bool);
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
        key: "hoveredIndex",
        get: function get() {
          return _.get(this).optionsEl.hoveredIndex;
        },
        set: function set(index) {
          return _.get(this).throw('readonly', {
            name: 'hoveredIndex'
          });
        }
      }, {
        key: "isOpen",
        get: function get() {
          if (this.multiple) {
            return null;
          }

          return this.hasAttribute('open');
        },
        set: function set(bool) {
          if (this.multiple) {
            return;
          }

          bool ? this.setAttribute('open', '') : this.removeAttribute('open');
        }
      }, {
        key: "length",
        get: function get() {
          return _.get(this).sourceEl.length;
        }
      }, {
        key: "multiple",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('multiple');
        },
        set: function set(bool) {
          if (bool && this.hasAttribute('open')) {
            this.removeAttribute('open');
          }

          _.get(this).handleBooleanPropertyChange('multiple', bool);
        }
      }, {
        key: "name",
        get: function get() {
          return _.get(this).sourceEl.name;
        },
        set: function set(name) {
          _.get(this).handlePropertyChange('name', name);
        }
      }, {
        key: "options",
        get: function get() {
          return _.get(this).optionsEl.displayOptions;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'options'
          });
        }
      }, {
        key: "placeholder",
        get: function get() {
          return _.get(this).placeholder;
        },
        set: function set(text) {
          _.get(this).placeholder = text;
        }
      }, {
        key: "required",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('required');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('required', bool);
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return _.get(this).optionsEl ? _.get(this).optionsEl.selectedIndex : null;
        },
        set: function set(index) {
          if (index < 0) {
            return this.deselectAll();
          }

          _.get(this).optionsEl.selectedIndex = index;
        }
      }, {
        key: "selectedOptions",
        get: function get() {
          return _.get(this).optionsEl ? _.get(this).optionsEl.selectedOptions : null;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'selectedOptions'
          });
        }
      }, {
        key: "sourceElement",
        get: function get() {
          return _.get(this).sourceEl;
        }
      }, {
        key: "value",
        get: function get() {
          return _.get(this).sourceEl.value;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'tabindex'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());