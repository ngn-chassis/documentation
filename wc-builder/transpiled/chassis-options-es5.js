"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-options', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoptions\"></slot><slot></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
            var message = 'ERROR <chassis-options> ';

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
        _this.selectedOptionsEl = null;
        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options = [];

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateDisplayOptionElement = function (option) {
          var chassisOption = document.createElement('chassis-option');

          if (option.attributes.id) {
            chassisOption.id = option.attributes.id;
          }

          if (option.sourceElement.hasAttribute('label')) {
            chassisOption.setAttribute('label', option.sourceElement.getAttribute('label'));
          }

          if (option.attributes.value) {
            chassisOption.setAttribute('value', option.attributes.value);
          }

          if (option.attributes.disabled) {
            chassisOption.setAttribute('disabled', '');
          }

          chassisOption.defaultSelected = option.attributes.selected;
          chassisOption.key = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid();
          chassisOption.addEventListener('click', function (evt) {
            return _this.selectByKey(chassisOption.key);
          });
          chassisOption.innerHTML = option.sourceElement.innerHTML;
          return chassisOption;
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateSourceOptionElement = function (option) {
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

          return sourceEl;
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).ChassisHTMLCollection = function () {
          var _p = new WeakMap();

          return (
            /*#__PURE__*/
            function () {
              function ChassisHTMLCollection(arr) {
                var _this2 = this;

                (0, _classCallCheck2.default)(this, ChassisHTMLCollection);

                _p.set(this, {
                  arr: arr
                });

                arr.forEach(function (node, index) {
                  return _this2[index] = node;
                });
              }

              (0, _createClass2.default)(ChassisHTMLCollection, [{
                key: "item",
                value: function item(index) {
                  return _p.get(this).arr[index];
                }
              }, {
                key: "namedItem",
                value: function namedItem(name) {
                  var matches = _p.get(this).arr.filter(function (item) {
                    return item.id === name || item.name === name;
                  });

                  return matches.length > 0 ? matches[0] : null;
                }
              }, {
                key: "length",
                get: function get() {
                  return _p.get(this).arr.length;
                }
              }]);
              return ChassisHTMLCollection;
            }()
          );
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).ChassisOptionsCollection = function () {
          var _p = new WeakMap();

          return (
            /*#__PURE__*/
            function (_$get$ChassisHTMLColl) {
              (0, _inherits2.default)(ChassisOptionsCollection, _$get$ChassisHTMLColl);

              function ChassisOptionsCollection(arr) {
                var _this3;

                var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                var add = arguments.length > 2 ? arguments[2] : undefined;
                var remove = arguments.length > 3 ? arguments[3] : undefined;
                (0, _classCallCheck2.default)(this, ChassisOptionsCollection);
                _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChassisOptionsCollection).call(this, arr));
                _this3.selectedIndex = selectedIndex;
                _this3.add = add;
                _this3.remove = remove;
                return _this3;
              }

              return ChassisOptionsCollection;
            }(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).ChassisHTMLCollection())
          );
        };

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {}
      }, {
        key: "add",
        value: function add(option) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

          if (!customElements.get('chassis-option')) {
            console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
            return;
          }

          if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
            option.sourceElement = _.get(this).generateSourceOptionElement(option);
          }

          option = {
            attributes: {
              disabled: option.sourceElement.disabled,
              id: option.sourceElement.getAttribute('id'),
              label: option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim(),
              selected: option.sourceElement.hasAttribute('selected'),
              value: option.sourceElement.getAttribute('value')
            },
            sourceElement: option.sourceElement
          };

          var chassisOption = _.get(this).generateDisplayOptionElement(option);

          chassisOption.parent = dest;
          option.displayElement = chassisOption;
          option.key = chassisOption.key;

          if (index) {
            dest.insertBefore(chassisOption, dest.children.item(index));
            this.parent["".concat(index)] = option.displayElement;
            this.options.splice(index, 0, option);
            this.parent.sourceElement.add(option.sourceElement, index);

            if (option.attributes.selected) {
              this.selectByIndex(index);
            }

            return;
          }

          dest.appendChild(chassisOption);
          this.parent["".concat(this.options.length)] = option.displayElement;
          this.options.push(option);

          if (!this.parent.sourceElement[this.options.length - 1]) {
            this.parent.sourceElement.appendChild(option.sourceElement);
          }

          if (option.attributes.selected) {
            this.selectByKey(option.key);
          }
        }
      }, {
        key: "addChildren",
        value: function addChildren(children) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;
              var isElement = child instanceof HTMLElement;

              switch (child.nodeName) {
                case 'OPTION':
                  this.add(isElement ? this.generateOptionObject(child) : child);
                  break;

                case 'OPTGROUP':
                  this.addOptgroup(isElement ? this.generateOptgroup(child) : child);
                  break;

                default:
                  console.warn("".concat(child.nodeName.toLowerCase(), " is not a valid child element for <chassis-select>. Removing..."));
                  break;
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
        }
      }, {
        key: "addOptgroup",
        value: function addOptgroup(optgroup) {
          var label = document.createElement('chassis-optgroup-label');
          label.innerHTML = optgroup.getAttribute('label');
          this.appendChild(label);
          this.appendChild(optgroup);
        }
      }, {
        key: "clear",
        value: function clear() {
          while (this.lastChild) {
            this.removeChild(this.lastChild);
          }
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this.parent.sourceElement.selectedIndex = -1;
          this.selectedOptionsEl.contents = this.parent.placeholder;
          this.selectedOptionsEl.setAttribute('placeholder', '');
          this.options.forEach(function (option) {
            option.displayElement.removeAttribute('selected');
            option.sourceElement.selected = false;
          });
        }
      }, {
        key: "generateOptgroup",
        value: function generateOptgroup(optgroup) {
          if (!customElements.get('chassis-optgroup')) {
            console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.");
            return;
          }

          var fauxOptgroup = document.createElement('chassis-optgroup');
          fauxOptgroup.id = _.get(this).generateGuid('optgroup');
          var label = optgroup.getAttribute('label');

          if (!label || label.trim() === '') {
            console.error('<optgroup> must have a label attribute!');
            return;
          }

          fauxOptgroup.setAttribute('label', label);
          var options = optgroup.querySelectorAll('option');
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var option = _step2.value;
              this.add(this.generateOptionObject(option), null, fauxOptgroup);
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

          return fauxOptgroup;
        }
      }, {
        key: "generateOptionObject",
        value: function generateOptionObject(optionEl) {
          if (!customElements.get('chassis-option')) {
            console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
            return;
          }

          var obj = {
            id: _.get(this).generateGuid(),
            attributes: {},
            sourceElement: optionEl
          };
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = optionEl.attributes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var attr = _step3.value;
              obj.attributes[attr.name] = attr.value;
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

          return obj;
        }
      }, {
        key: "getOptionByKey",
        value: function getOptionByKey(key) {
          var option;

          for (var i = 0; i < this.options.length; i++) {
            if (this.options[i].key === key) {
              option = this.options[i];
              break;
            }
          }

          return option;
        }
      }, {
        key: "item",
        value: function item(index) {
          return this.options[index].displayElement;
        }
      }, {
        key: "namedItem",
        value: function namedItem(value) {
          var query = this.options.filter(function (option) {
            var id = option.sourceElement.attributes.getNamedItem('id');
            return id && id.value === value;
          });

          if (!query.length) {
            return null;
          }

          return query[query.length - 1].displayElement;
        }
        /**
         * @method removeOptionByIndex
         * @param  {Number}  [index=null]
         * Index of option to remove
         * @param  {Boolean} [destroy=true]
         */

      }, {
        key: "removeOptionByIndex",
        value: function removeOptionByIndex() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (index === null || index >= this.options.length) {
            return;
          }

          var option = this.options[index];
          option.sourceElement.remove();
          destroy && option.displayElement.remove();
          this.options.splice(index, 1);
        }
        /**
         * [select description]
         * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
         */

      }, {
        key: "select",
        value: function select(option) {
          if (option === this.selectedOption) {
            return;
          }

          if (!this.parent.multiple) {
            this.deselectAll();
          }

          option.sourceElement.selected = true;
          option.displayElement.setAttribute('selected', '');
          this.selectedOptionsEl.add(option);
          this.selectedOptionsEl.removeAttribute('placeholder');
          this.dispatchChangeEvent();
        }
      }, {
        key: "selectByKey",
        value: function selectByKey(key) {
          var option = this.getOptionByKey(key);

          if (!option) {
            console.error("Invalid option key \"".concat(key, "\""));
            return this.deselectAll();
          }

          this.select(option);
        }
      }, {
        key: "selectByIndex",
        value: function selectByIndex(index) {
          var option = this.options[index];

          if (!option) {
            if (index >= 0) {
              return console.error("No option at index ".concat(index));
            }

            return this.deselectAll();
          }

          this.select(option);
        }
      }, {
        key: "form",
        get: function get() {
          return this.parent.form;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'form'
          });
        }
      }, {
        key: "displayOptions",
        get: function get() {
          var _this4 = this;

          return new (_.get(this).ChassisOptionsCollection())(this.options.map(function (option) {
            return option.displayElement;
          }), this.selectedIndex, function (element, before) {
            _this4.add(_this4.generateOptionObject(element), before);
          }, function (index) {
            return _this4.removeOptionByIndex(index);
          });
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'displayOptions'
          });
        }
      }, {
        key: "options",
        get: function get() {
          return _.get(this).options;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'options'
          });
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          var _this5 = this;

          return this.options.findIndex(function (option) {
            return option.displayElement === _this5.selectedOptions.item(0);
          });
        },
        set: function set(index) {
          this.selectByIndex(index);
        }
      }, {
        key: "selectedOptions",
        get: function get() {
          var nodes = this.querySelectorAll('[selected]');
          return new (_.get(this).ChassisHTMLCollection())(nodes);
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'selectedOptions'
          });
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());