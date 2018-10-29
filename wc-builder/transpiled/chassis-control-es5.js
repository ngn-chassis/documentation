"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-control', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:flex;contain:layout style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}:host([type=select]){flex-direction:column}chassis-control{display:flex;contain:layout style;max-width:100%}:host :after,:host :before,chassis-control *{box-sizing:border-box}chassis-control .hidden{display:none;visibility:hidden;opacity:0}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control .label-wrapper{flex:1 1 auto;display:flex}chassis-control .input-wrapper{display:flex;align-items:center}chassis-control[type=toggle] .input-wrapper{order:-1;justify-content:center}chassis-control[type=select]{flex-direction:column}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabelwrapper\"></slot><div class=\"label-wrapper\"><slot name=\"beforelabel\"></slot><slot name=\"label\"></slot><slot name=\"afterlabel\"></slot></div><slot name=\"afterlabelwrapper\"></slot><slot name=\"beforeinputwrapper\"></slot><div class=\"input-wrapper\"><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot></div><slot name=\"afterinputwrapper\"></slot><slot name=\"beforeend\"></slot></template>");
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
            var message = 'ERROR <chassis-control> ';

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

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProps({
          fieldInputTypes: ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'],
          toggleInputTypes: ['checkbox', 'radio'],
          supportedTypes: ['field', 'toggle', 'select'],
          input: null,
          initDatalist: function initDatalist(input, datalist) {
            _this.type = 'field';

            if (!customElements.get('chassis-datalist')) {
              console.dir(input);
              input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
              datalist.id = "".concat(input.id, "_datalist");
              input.setAttribute('list', datalist.id);
              input.slot = input.slot || 'input'; // select.setAttribute('role', 'menu')

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
              var titleEls = datalist.querySelectorAll('option[title]');
              titleEls.forEach(function (el) {
                return select.removeChild(el);
              });
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = datalist.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var option = _step.value;

                  if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                    option.removeAttribute('label');
                  }
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
            }

            var surrogate = document.createElement('chassis-datalist');
            surrogate.slot = 'input';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = datalist.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attr = _step2.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    datalist.removeAttribute(attr.name);
                  }
                }
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

            _this.removeChild(datalist);

            _this.removeChild(input);

            surrogate.inject(input, datalist, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid);

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initInput: function initInput(input) {
            input.slot = input.slot || 'input';
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
            input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).fieldInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'field';
            }

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).toggleInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'toggle';
            }
          },
          initLabel: function initLabel(label) {
            _this.label = label;
            label.slot = label.slot || 'label';
            label.htmlFor = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_this.type === 'select') {
              _this.label.addEventListener('click', function (evt) {
                _this.input.focus();
              });
            }
          },
          initDefaultSelect: function initDefaultSelect(select) {
            select.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            select.slot = select.slot || 'input';
            select.setAttribute('role', 'menu');
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = select;
            var titleEls = select.querySelectorAll('option[title]');
            titleEls.forEach(function (el) {
              return select.removeChild(el);
            });
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = select.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var option = _step3.value;

                if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                  option.removeAttribute('label');
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          },
          initSelectSurrogate: function initSelectSurrogate(original, surrogate) {
            surrogate.slot = 'input';
            surrogate.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = original.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var attr = _step4.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    original.removeAttribute(attr.name);
                  }
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this.removeChild(original);

            surrogate.inject(original);

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initSelectMenu: function initSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          },
          initMultipleSelectMenu: function initMultipleSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          _.get(this).guid = _.get(this).generateGuid('control');
          var observer = new MutationObserver(function (mutations, observer) {
            var filtered = mutations.filter(function (record) {
              return record.addedNodes.item(0).nodeType !== 3;
            });
            filtered.forEach(function (record, index, array) {
              var node = record.addedNodes.item(0);

              switch (node.nodeName) {
                case 'LABEL':
                  return _.get(_this2).initLabel(node);

                case 'INPUT':
                  // Check if there is an additional element adjacent to the input
                  if (array[index + 1] === void 0) {
                    return _.get(_this2).initInput(node);
                  }

                  var adjacentElement = array[index + 1].addedNodes.item(0);

                  if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
                    return _.get(_this2).initInput(node);
                  }

                  return _.get(_this2).initDatalist(node, adjacentElement);

                case 'TEXTAREA':
                  return _.get(_this2).initInput(node);

                case 'SELECT':
                  if (!node.multiple) {
                    return _.get(_this2).initSelectMenu(node);
                  }

                  return _.get(_this2).initMultipleSelectMenu(node);

                default:
                  return;
              }
            });
            observer.disconnect();
          });
          observer.observe(this, {
            childList: true
          });
        }
      }, {
        key: "input",
        get: function get() {
          return _.get(this).input;
        },
        set: function set(input) {
          if (this.input) {
            console.warn("Setting <chassis-control> child input programmatically is not allowed.");
            return;
          }

          _.get(this).input = input;
        }
      }, {
        key: "type",
        get: function get() {
          return this.getAttribute('type');
        },
        set: function set(value) {
          this.setAttribute('type', value);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['disabled'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());