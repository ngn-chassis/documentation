'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

customElements.define('chassis-datalist', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}chassis-datalist{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host :after,:host :before,chassis-datalist *{box-sizing:border-box}chassis-datalist chassis-options{position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}chassis-datalist[open] chassis-options{height:auto}</style><slot name="afterbegin"></slot><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot><slot name="beforedatalist"></slot><slot name="datalist"></slot><slot name="afterdatalist"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');

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

      _private.set(_this, {
        addPrivateProps: function addPrivateProps(props) {
          for (var prop in props) {
            _private.get(_this)[prop] = props[prop];
          }
        },

        addReadOnlyProp: function addReadOnlyProp(prop) {
          (0, _defineProperty2.default)(_this, prop, _private.get(_this).readonlyProperty(prop));
        },

        addReadOnlyProps: function addReadOnlyProps(props) {
          props.forEach(function (prop) {
            return _private.get(_this).addReadOnlyProp(prop);
          });
        },

        generateGuid: function generateGuid() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });

          return prefix ? prefix + '_' + id : id;
        },

        getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
          return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
        },

        handleAttributeChange: function handleAttributeChange(attr, val) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          _this.setAttribute(attr, val);
          _private.get(_this).sourceEl[attr] = val;
        },

        handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          var acceptableValues = ['true', 'false', '', null];

          if (!acceptableValues.includes(value)) {
            console.error('<' + _this.localName + '> "' + attr + '" attribute expected boolean but received "' + value + '"');
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          if (value === 'false' && _this.hasAttribute(attr)) {
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          _private.get(_this).sourceEl[attr] = _this.hasAttribute(attr);
        },

        handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
          if (!bool) {
            _this.removeAttribute(prop);
            _private.get(_this).sourceEl[prop] = false;
            return;
          }

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
            _this.setAttribute(prop, '');
            _private.get(_this).sourceEl[prop] = true;
          }
        },

        handlePropertyChange: function handlePropertyChange(prop, val) {
          _private.get(_this).sourceEl[prop] = val;

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
            _this.setAttribute(prop, val);
          }
        },

        readonlyProperty: function readonlyProperty(name) {
          return {
            get: function get() {
              return _private.get(_this).sourceEl[name];
            },
            set: function set() {
              return _private.get(_this).throw('readonly', { name: name });
            }
          };
        },

        throw: function _throw(type, vars) {
          var message = 'ERROR <chassis-datalist> ';

          switch (type) {
            case 'readonly':
              message += 'Cannot set read-only property "' + vars.name + '".';
              break;

            default:
              message = message.trim();
          }

          console.error(message);
        }
      });
      _this.clickCount = 0;_private.get(_this).addReadOnlyProp('options');_private.get(_this).options = [];_private.get(_this).find = function (query) {
        return _private.get(_this).options.filter(function (option) {
          var value = _this.hasAttribute('case-sensitive') ? option.sourceElement.value : option.sourceElement.value.toLowerCase();var text = _this.hasAttribute('case-sensitive') ? option.sourceElement.text : option.sourceElement.text.toLowerCase();query = _this.hasAttribute('case-sensitive') ? query : query.toLowerCase();return value.indexOf(query) >= 0 || text.indexOf(query) >= 0;
        });
      };_private.get(_this).clear = function () {
        _private.get(_this).options.forEach(function (option) {
          return option.displayElement.style.display = 'none';
        });
      };_private.get(_this).showAllOptions = function () {
        _private.get(_this).options.forEach(function (option) {
          return option.displayElement.style.display = '';
        });
      };_private.get(_this).clickHandler = function (evt) {
        _this.clickCount++;if (_this.clickCount === 2) {
          _private.get(_this).showAllOptions();_this.open();
        }
      };_private.get(_this).keydownHandler = function (evt) {
        if (!_this.isOpen) {
          _private.get(_this).showAllOptions();return _this.open();
        }switch (evt[_this.keySource]) {case 27:case 'Escape':
            _private.get(_this).clear();_this.close();break;case 38:case 'ArrowUp':
            evt.preventDefault();console.log('select previous option');break;case 40:case 'ArrowDown':
            evt.preventDefault();console.log('select next option');break;default:
            return;}
      };_private.get(_this).inputHandler = function (evt) {
        _private.get(_this).clear();var query = _private.get(_this).inputEl.value;if (!query) {
          return;
        }var results = _private.get(_this).find(query);if (results.length) {
          results.forEach(function (result) {
            return result.displayElement.style.display = '';
          });_this.setAttribute('open', '');return;
        }if (_this.hasAttribute('open')) {
          _this.removeAttribute('open');
        }_private.get(_this).clear();
      };_private.get(_this).bodyClickHandler = function (evt) {
        if (evt.target === _this || _this.contains(evt.target)) {
          return;
        }_this.removeAttribute('open');
      };_private.get(_this).getOptionById = function (id) {
        var options = _private.get(_this).options;var option = void 0;for (var i = 0; i < options.length; i++) {
          if (options[i].id === id) {
            option = options[i];break;
          }
        }return option;
      };_private.get(_this).generateOptionObject = function (optionEl) {
        if (!customElements.get('chassis-option')) {
          console.error('chassis-datalist requires chassis-option. Please include it in this document\'s <head> element.');return;
        }var obj = { id: _private.get(_this).generateGuid('option'), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(optionEl.attributes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            obj.attributes[attr.name] = attr.value;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
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

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        _private.get(this).inputEl.addEventListener('focus', function (evt) {
          _this2.addEventListener('keydown', _private.get(_this2).keydownHandler);
        });_private.get(this).inputEl.addEventListener('input', _private.get(this).inputHandler);_private.get(this).inputEl.addEventListener('click', _private.get(this).clickHandler);_private.get(this).inputEl.addEventListener('blur', function (evt) {
          _this2.clickCount = 0;_this2.removeEventListener('keydown', _private.get(_this2).keydownHandler);
        });setTimeout(function () {
          if (!_this2.hasAttribute('tabindex')) {
            _this2.setAttribute('tabindex', 0);
          }if (_this2.autofocus) {
            _this2.focus();
          }
        }, 0);
      }
    }, {
      key: 'addChildren',
      value: function addChildren(children) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            this.addOption(child instanceof HTMLElement ? _private.get(this).generateOptionObject(child) : child);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
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
      key: 'addOption',
      value: function addOption(option, index) {
        var _this3 = this;

        var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _private.get(this).optionsEl;

        if (!customElements.get('chassis-option')) {
          console.error('chassis-datalist requires chassis-option. Please include it in this document\'s <head> element.');return;
        }if (!option.hasOwnProperty('id')) {
          option.id = _private.get(this).generateGuid('option');
        }if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
          var sourceEl = document.createElement('option');if (option.hasOwnProperty('innerHTML')) {
            sourceEl.innerHTML = option.innerHTML;
          }if (option.hasOwnProperty('label')) {
            sourceEl.innerHTML = option.label;
          }if (option.hasOwnProperty('value')) {
            sourceEl.value = option.value;
          }if (option.hasOwnProperty('disabled')) {
            sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled;
          }option.sourceElement = sourceEl;
        }var label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim();var value = option.sourceElement.getAttribute('value');var disabled = option.sourceElement.disabled;var chassisOption = document.createElement('chassis-option');chassisOption.style.display = 'none';chassisOption.key = option.id;chassisOption.innerHTML = option.sourceElement.innerHTML;dest.appendChild(chassisOption);chassisOption.addEventListener('click', function (evt) {
          return _this3.select(chassisOption.key);
        });option = { attributes: { disabled: disabled, label: label, value: value }, id: option.id, displayElement: chassisOption, sourceElement: option.sourceElement };if (index) {
          this['' + index] = option.sourceElement;_private.get(this).options.splice(index, 0, option);return;
        }this['' + _private.get(this).options.length] = option.sourceElement;_private.get(this).options.push(option);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        attr = attr.toLowerCase();if (newValue === oldValue) {
          return;
        }switch (attr) {case 'autofocus':case 'disabled':
            console.log(attr); // _private.get(this).handleBooleanAttributeChange(attr, newValue)
            break;case 'name':
            console.log(attr); // _private.get(this).handleAttributeChange(attr, newValue)
            break;case 'open':
            this.isOpen ? this.open() : this.close();break;}
      }
    }, {
      key: 'close',
      value: function close() {
        document.body.removeEventListener('click', _private.get(this).bodyClickHandler);document.body.removeEventListener('touchcancel', _private.get(this).bodyClickHandler);document.body.removeEventListener('touchend', _private.get(this).bodyClickHandler);if (this.isOpen) {
          this.isOpen = false;
        }
      }
    }, {
      key: 'open',
      value: function open() {
        document.body.addEventListener('click', _private.get(this).bodyClickHandler);document.body.addEventListener('touchcancel', _private.get(this).bodyClickHandler);document.body.addEventListener('touchend', _private.get(this).bodyClickHandler);if (!this.isOpen) {
          this.isOpen = true;
        }
      }
    }, {
      key: 'inject',
      value: function inject(input, datalist, guid) {
        _private.get(this).sourceEl = datalist;_private.get(this).inputEl = input;_private.get(this).inputEl.slot = 'input';_private.get(this).inputEl.id = guid;this.appendChild(_private.get(this).inputEl);_private.get(this).optionsEl = document.createElement('chassis-options');_private.get(this).optionsEl.slot = 'options';this.appendChild(_private.get(this).optionsEl);this.addChildren(datalist.options);
      }
    }, {
      key: 'select',
      value: function select(id) {
        var option = _private.get(this).getOptionById(id);if (option) {
          option.sourceElement.selected = true;_private.get(this).inputEl.value = option.displayElement.innerHTML;_private.get(this).selectedOption = option;_private.get(this).options.forEach(function (option) {
            return option.displayElement.removeAttribute('selected');
          });option.displayElement.setAttribute('selected', '');this.dispatchEvent(new Event('input', { bubbles: true }));this.close();
        }
      }
    }, {
      key: 'isOpen',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(bool) {
        bool ? this.setAttribute('open', '') : this.removeAttribute('open');
      }
    }, {
      key: 'value',
      get: function get() {
        return _private.get(this).inputEl.value;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['autofocus', 'case-sensitive', 'disabled', 'name', 'open', 'tabindex'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());