"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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
              return console.error('ERROR <chassis-select> Read-only property must be type "object" or "string"');
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
          emit: function emit(name, detail) {
            var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (target) {
              return target.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
            }

            _this.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
          },
          newEvent: function newEvent(name, detail) {
            return new CustomEvent(name, {
              detail: detail
            });
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-select> ';

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

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperties(['form', {
          name: 'hoveredIndex',
          get: function get() {
            return this.optionsElement.hoveredIndex;
          }
        }, 'labels', {
          name: 'options',
          get: function get() {
            return this.optionsElement.displayOptions;
          }
        }, 'optionsElement', {
          name: 'selectedOptions',
          get: function get() {
            return this.optionsElement ? this.optionsElement.selectedOptions : null;
          }
        }, 'selectedOptionsElement', 'sourceElement', {
          name: 'type',
          get: function get() {
            return this.multiple ? 'select-multiple' : 'select-one';
          }
        }, 'willValidate', 'validationMessage', 'validity']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttributes(['name', 'placeholder']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttributes(['autofocus', 'disabled', 'multiple', 'open', 'required']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          injected: false,
          title: '',
          arrowKeydownHandler: function arrowKeydownHandler(evt) {
            var startIndex = _this.hoveredIndex > -1 ? _this.hoveredIndex : _this.selectedIndex > -1 ? _this.selectedIndex : -1;

            switch (evt[_this.keySource]) {
              case 13:
              case 'Enter':
              case 32:
              case ' ':
                evt.preventDefault();

                if (!_this.multiple) {
                  if (!_this.open && (evt[_this.keySource] === 32 || evt[_this.keySource] === ' ')) {
                    _this.open = true;
                    return;
                  }

                  if (_this.hoveredIndex === _this.selectedIndex || _this.hoveredIndex === -1) {
                    _this.open = false;
                    return;
                  }
                }

                return;
              // return this.optionsElement.select(this.hoveredIndex, evt.shiftKey, evt.ctrlKey, evt.metaKey)

              case 38:
              case 'ArrowUp':
                evt.preventDefault();

                if (!_this.multiple) {
                  if (!_this.open) {
                    _this.open = true;
                    return;
                  }

                  switch (startIndex) {
                    case -1:
                    case 0:
                      return;

                    default:
                      return _this.optionsElement.hoverOption(startIndex - 1);
                  }
                }

                if (_this.selectedIndex === 0) {
                  return;
                }

                if (!evt.shiftKey) {
                  return _this.optionsElement.select(_this.optionsElement.selectionStartIndex - 1);
                }

                if (_this.selectedOptions.length === 1) {
                  return _this.optionsElement.select(_this.selectedIndex - 1, evt.shiftKey, null, null, _this.selectedIndex);
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = _this.selectedOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;
                    console.log(option);
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

                return;

                if (!evt.shiftKey) {
                  return _this.optionsElement.select(_this.selectedOptions[_this.selectedOptions.length - 1].index);
                }

                if (_this.optionsElement.selectionStartIndex < _this.selectedIndex) {
                  return _this.optionsElement.deselect(_this.selectedOptions[_this.selectedOptions.length - 1].index);
                }

                return _this.optionsElement.select(_this.selectedIndex - 1, evt.shiftKey);

              case 40:
              case 'ArrowDown':
                evt.preventDefault();

                if (!_this.multiple) {
                  if (!_this.open) {
                    _this.open = true;
                    return;
                  }

                  switch (startIndex) {
                    case _this.options.length - 1:
                      return;

                    default:
                      return _this.optionsElement.hoverOption(startIndex + 1);
                  }
                }

                if (_this.selectedIndex === _this.length - 1) {
                  return;
                }

                if (_this.selectedOptions.length === 1) {
                  return _this.optionsElement.select(_this.selectedOptions[_this.selectedOptions.length - 1].index + 1, evt.shiftKey, null, null, _this.selectedIndex);
                }

                if (!evt.shiftKey) {
                  if (_this.selectedOptions.length === 1) {
                    return _this.optionsElement.select(_this.selectedIndex + 1);
                  }
                }

                if (_this.optionsElement.selectionStartIndex > _this.selectedIndex) {
                  return _this.optionsElement.deselect(_this.selectedIndex);
                }

                return _this.optionsElement.select(_this.selectedOptions[_this.selectedOptions.length - 1].index + 1, evt.shiftKey);

              default:
                return;
            }
          },
          blurHandler: function blurHandler(evt) {
            return _this.removeEventListener('keydown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).arrowKeydownHandler);
          },
          bodyMousedownHandler: function bodyMousedownHandler(evt) {
            if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
              return;
            }

            _this.open = false;
          },
          focusHandler: function focusHandler(evt) {
            return _this.addEventListener('keydown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).arrowKeydownHandler);
          },
          middleware: {
            beforeChange: null,
            afterChange: null
          },
          optionSelectionHandler: function optionSelectionHandler(evt) {
            evt.stopPropagation();

            var afterChange = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).middleware.afterChange;

            if (_this.open) {
              _this.removeAttribute('open');
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('options.selected', evt.detail, _this.selectedOptionsElement);

            if (afterChange && typeof afterChange === 'function') {
              afterChange(evt.detail.previous, _this.selectedOptions);
            }
          },
          stateChangeHandler: function stateChangeHandler(evt) {
            var _evt$detail = evt.detail,
                name = _evt$detail.name,
                value = _evt$detail.value;

            switch (name) {
              case 'open':
                if (!value) {
                  document.body.removeEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                  document.body.removeEventListener('touchcancel', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                  document.body.removeEventListener('touchend', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                  return;
                }

                if (_this.multiple) {
                  console.warn('WARNING <chassis-select multiple> cannot be opened.');
                  return _this.removeAttribute('open');
                }

                _this.optionsElement.unHoverAllOptions();

                document.body.addEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                document.body.addEventListener('touchcancel', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                document.body.addEventListener('touchend', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
                break;

              case 'multiple':
                if (value && _this.hasAttribute('open')) {
                  _this.removeAttribute('open');
                }

                break;

              default:
                return;
            }
          },
          throwSizeAttributeWarning: function throwSizeAttributeWarning() {
            console.warn('WARNING <chassis-select> "size" attribute is not supported. Please use CSS to set the height of the options panel instead.');
          },
          toggleHandler: function toggleHandler(evt) {
            return _this.open = !_this.open;
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option, index) {
          this.optionsElement.add(option, index);
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'multiple':
              return _.get(this).emit('state.change', {
                name: 'multiple',
                value: this.multiple
              });

            case 'open':
              return _.get(this).emit('state.change', {
                name: 'open',
                value: this.open
              });

            case 'placeholder':
              this.placeholder = newValue;

              if (this.selectedOptionsElement) {
                this.selectedOptionsElement.update();
              }

              break;

            case 'size':
              return _.get(this).throwSizeAttributeWarning();

            default:
              return;
          }
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          return this.sourceElement.checkValidity();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.optionsElement.clear();
          this.selectedOptionsElement.clear();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this.addEventListener('blur', _.get(this).blurHandler);
          this.addEventListener('focus', _.get(this).focusHandler);
          this.addEventListener('state.change', _.get(this).stateChangeHandler);
          this.addEventListener('toggle', _.get(this).toggleHandler);
          this.addEventListener('options.selected', _.get(this).optionSelectionHandler);
          setTimeout(function () {
            if (!_this2.hasAttribute('tabindex')) {
              _this2.setAttribute('tabindex', 0);
            }

            _this2.autofocus && _this2.focus();
            _this2.placeholder = _this2.getAttribute('placeholder'); // TEMP

            _this2.parentNode.parentNode.insertBefore(_.get(_this2).sourceElement, _this2.nextSibling);
          }, 0);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.removeEventListener('blur', _.get(this).blurHandler);
          this.removeEventListener('focus', _.get(this).focusHandler);
          this.addEventListener('state.change', _.get(this).stateChangeHandler);
          this.removeEventListener('toggle', _.get(this).toggleHandler);
          this.removeEventListener('options.selected', _.get(this).optionSelectionHandler);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this.optionsElement.deselectAll();
        }
      }, {
        key: "inject",
        value: function inject(select, labels) {
          // Prevent re-injections
          if (_.get(this).injected) {
            return;
          }

          var optionsElement = document.createElement('chassis-options');
          optionsElement.slot = 'options';
          var selectedOptionsElement = document.createElement('chassis-selected-options');
          selectedOptionsElement.slot = 'selectedoptions';
          Object.assign(_.get(this), {
            sourceElement: select,
            optionsElement: optionsElement,
            selectedOptionsElement: selectedOptionsElement,
            labels: labels
          });
          this.appendChild(_.get(this).optionsElement);
          this.appendChild(_.get(this).selectedOptionsElement);

          if (select.children.length > 0) {
            this.optionsElement.addChildren(select.children);
          }

          _.get(this).injected = true;
        }
      }, {
        key: "item",
        value: function item(index) {
          return this.optionsElement.item(index);
        }
      }, {
        key: "namedItem",
        value: function namedItem(id) {
          return this.optionsElement.namedItem(id);
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

          return this.optionsElement.querySelectorAll('[selected]');
        }
      }, {
        key: "remove",
        value: function remove() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (index === null) {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
          }

          this.optionsElement.removeOptionByIndex(index);
        }
        /**
         * @method select
         * @param  {Number || Array} index
         */
        // select (index) {
        //   this.optionsElement.select(index)
        // }

      }, {
        key: "setCustomValidity",
        value: function setCustomValidity(string) {
          this.sourceElement.setCustomValidity(string);
        }
      }, {
        key: Symbol.toStringTag,
        value: function value() {
          return 'ChassisSelectElement';
        }
      }, {
        key: "afterChange",
        get: function get() {
          return _.get(this).middleware.afterChange;
        },
        set: function set(func) {
          _.get(this).middleware.afterChange = func.bind(this);
        }
      }, {
        key: "beforeChange",
        get: function get() {
          return _.get(this).middleware.beforeChange;
        },
        set: function set(func) {
          _.get(this).middleware.beforeChange = func.bind(this);
        }
      }, {
        key: "length",
        get: function get() {
          return this.options.length;
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this.optionsElement ? this.optionsElement.selectedIndex : null;
        },
        set: function set(index) {
          if (index < 0) {
            return this.deselectAll();
          }

          this.optionsElement.selectedIndex = index;
        }
      }, {
        key: "size",
        get: function get() {
          _.get(this).throwSizeAttributeWarning();

          return null;
        },
        set: function set(value) {
          _.get(this).throwSizeAttributeWarning();
        }
      }, {
        key: "value",
        get: function get() {
          if (this.selectedOptions.length === 0) {
            return null;
          }

          var selectedOption = this.selectedOptions.item(0);
          return selectedOption ? selectedOption.value || selectedOption.text : null;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'placeholder', 'tabindex', 'size'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());