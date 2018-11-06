"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-datalist', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}chassis-datalist{display:inline-block;max-width:100%}:host :after,:host :before,chassis-datalist *{box-sizing:border-box}chassis-datalist chassis-options{height:0;overflow:hidden}chassis-datalist[open] chassis-options{height:auto}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot><slot name=\"beforedatalist\"></slot><slot name=\"datalist\"></slot><slot name=\"afterdatalist\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
          sourceElement: null,
          addAttribute: function addAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return this.getAttribute(prop);
              },
              set: function set(value) {
                _.get(this).setAttributeValue(prop, value);
              }
            });
          },
          addAttributes: function addAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttribute(prop);
            });
          },
          setAttributeValue: function setAttributeValue(attr, val) {
            _this.setAttribute(attr, val);

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = val;
            }
          },
          addReadOnlyProperty: function addReadOnlyProperty(prop) {
            var custom = (0, _typeof2.default)(prop) === 'object';

            if (!custom && typeof prop !== 'string') {
              return console.error('ERROR <chassis-datalist> Read-only property must be type "object" or "string"');
            }

            var props = {
              set: function set() {
                _.get(this).throw('readonly', {
                  prop: custom ? prop.name : prop
                });
              }
            };

            if (custom && prop.hasOwnProperty('get')) {
              props.get = prop.get;
            } else {
              props.get = function () {
                return _.get(this)[prop];
              };
            }

            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), custom ? prop.name : prop, props);
          },
          addReadOnlyProperties: function addReadOnlyProperties(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty(prop);
            });
          },
          setReadOnlyPropertyValue: function setReadOnlyPropertyValue(value) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = value;
          },
          addBooleanAttribute: function addBooleanAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return _.get(this).getBooleanAttributeValue(prop);
              },
              set: function set(value) {
                _.get(this).setBooleanAttributeValue(prop, value);
              }
            });
          },
          addBooleanAttributes: function addBooleanAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttribute(prop);
            });
          },
          getBooleanAttributeValue: function getBooleanAttributeValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          setBooleanAttributeValue: function setBooleanAttributeValue(attr, value) {
            if (typeof value === 'boolean') {
              value = value.toString();
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
              }

              return;
            }

            switch (value) {
              case 'false':
              case null:
                _this.removeAttribute(attr);

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
                }

                break;

              case 'true':
              case '':
                _this.setAttribute(attr, '');

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = true;
                }

                break;

              default:
                return;
            }
          },
          addPrivateProperties: function addPrivateProperties(props) {
            for (var _prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[_prop] = props[_prop];
            }
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-datalist> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.prop, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _this.clickCount = 0;

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty('options');

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options = [];

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).find = function (query) {
          return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.filter(function (option) {
            var value = _this.hasAttribute('case-sensitive') ? option.sourceElement.value : option.sourceElement.value.toLowerCase();
            var text = _this.hasAttribute('case-sensitive') ? option.sourceElement.text : option.sourceElement.text.toLowerCase();
            query = _this.hasAttribute('case-sensitive') ? query : query.toLowerCase();
            return value.indexOf(query) >= 0 || text.indexOf(query) >= 0;
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear = function () {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.forEach(function (option) {
            return option.displayElement.style.display = 'none';
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions = function () {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.forEach(function (option) {
            return option.displayElement.style.display = '';
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clickHandler = function (evt) {
          _this.clickCount++;

          if (_this.clickCount === 2) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions();

            _this.open();
          }
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).keydownHandler = function (evt) {
          if (!_this.isOpen) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions();

            return _this.open();
          }

          switch (evt[_this.keySource]) {
            case 27:
            case 'Escape':
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();

              _this.close();

              break;

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
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).inputHandler = function (evt) {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();

          var query = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).inputEl.value;

          if (!query) {
            return;
          }

          var results = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).find(query);

          if (results.length) {
            results.forEach(function (result) {
              return result.displayElement.style.display = '';
            });

            _this.setAttribute('open', '');

            return;
          }

          if (_this.hasAttribute('open')) {
            _this.removeAttribute('open');
          }

          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyClickHandler = function (evt) {
          if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
            return;
          }

          _this.removeAttribute('open');
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).getOptionById = function (id) {
          var options = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options;

          var option;

          for (var i = 0; i < options.length; i++) {
            if (options[i].id === id) {
              option = options[i];
              break;
            }
          }

          return option;
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateOptionObject = function (optionEl) {
          if (!customElements.get('chassis-option')) {
            console.error("chassis-datalist requires chassis-option. Please include it in this document's <head> element.");
            return;
          }

          var obj = {
            id: _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid('option'),
            attributes: {},
            sourceElement: optionEl
          };
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = optionEl.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var attr = _step.value;
              obj.attributes[attr.name] = attr.value;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return obj;
        };

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          _.get(this).inputEl.addEventListener('focus', function (evt) {
            _this2.addEventListener('keydown', _.get(_this2).keydownHandler);
          });

          _.get(this).inputEl.addEventListener('input', _.get(this).inputHandler);

          _.get(this).inputEl.addEventListener('click', _.get(this).clickHandler);

          _.get(this).inputEl.addEventListener('blur', function (evt) {
            _this2.clickCount = 0;

            _this2.removeEventListener('keydown', _.get(_this2).keydownHandler);
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
        key: "addChildren",
        value: function addChildren(children) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;
              this.addOption(child instanceof HTMLElement ? _.get(this).generateOptionObject(child) : child);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "addOption",
        value: function addOption(option, index) {
          var _this3 = this;

          var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.get(this).optionsEl;

          if (!customElements.get('chassis-option')) {
            console.error("chassis-datalist requires chassis-option. Please include it in this document's <head> element.");
            return;
          }

          if (!option.hasOwnProperty('id')) {
            option.id = _.get(this).generateGuid('option');
          }

          if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
            var sourceEl = document.createElement('option');

            if (option.hasOwnProperty('innerHTML')) {
              sourceEl.innerHTML = option.innerHTML;
            }

            if (option.hasOwnProperty('label')) {
              sourceEl.innerHTML = option.label;
            }

            if (option.hasOwnProperty('value')) {
              sourceEl.value = option.value;
            }

            if (option.hasOwnProperty('disabled')) {
              sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled;
            }

            option.sourceElement = sourceEl;
          }

          var label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim();
          var value = option.sourceElement.getAttribute('value');
          var disabled = option.sourceElement.disabled;
          var chassisOption = document.createElement('chassis-option');
          chassisOption.style.display = 'none';
          chassisOption.key = option.id;
          chassisOption.innerHTML = option.sourceElement.innerHTML;
          dest.appendChild(chassisOption);
          chassisOption.addEventListener('click', function (evt) {
            return _this3.select(chassisOption.key);
          });
          option = {
            attributes: {
              disabled: disabled,
              label: label,
              value: value
            },
            id: option.id,
            displayElement: chassisOption,
            sourceElement: option.sourceElement
          };

          if (index) {
            this["".concat(index)] = option.sourceElement;

            _.get(this).options.splice(index, 0, option);

            return;
          }

          this["".concat(_.get(this).options.length)] = option.sourceElement;

          _.get(this).options.push(option);
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
              console.log(attr); // _.get(this).setBooleanAttributeValue(attr, newValue)

              break;

            case 'name':
              console.log(attr); // _.get(this).setAttributeValue(attr, newValue)

              break;

            case 'open':
              this.isOpen ? this.open() : this.close();
              break;
          }
        }
      }, {
        key: "close",
        value: function close() {
          document.body.removeEventListener('click', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchend', _.get(this).bodyClickHandler);

          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      }, {
        key: "open",
        value: function open() {
          document.body.addEventListener('click', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchend', _.get(this).bodyClickHandler);

          if (!this.isOpen) {
            this.isOpen = true;
          }
        }
      }, {
        key: "inject",
        value: function inject(input, datalist, guid) {
          _.get(this).sourceEl = datalist;
          _.get(this).inputEl = input;
          _.get(this).inputEl.slot = 'input';
          _.get(this).inputEl.id = guid;
          this.appendChild(_.get(this).inputEl);
          _.get(this).optionsEl = document.createElement('chassis-options');
          _.get(this).optionsEl.slot = 'options';
          this.appendChild(_.get(this).optionsEl);
          this.addChildren(datalist.options);
        }
      }, {
        key: "select",
        value: function select(id) {
          var option = _.get(this).getOptionById(id);

          if (option) {
            option.sourceElement.selected = true;
            _.get(this).inputEl.value = option.displayElement.innerHTML;
            _.get(this).selectedOption = option;

            _.get(this).options.forEach(function (option) {
              return option.displayElement.removeAttribute('selected');
            });

            option.displayElement.setAttribute('selected', '');
            this.dispatchEvent(new Event('input', {
              bubbles: true
            }));
            this.close();
          }
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
        key: "value",
        get: function get() {
          return _.get(this).inputEl.value;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'case-sensitive', 'disabled', 'name', 'open', 'tabindex'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());