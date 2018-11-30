"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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
        var _$get$addPrivatePrope;

        var _this;

        (0, _classCallCheck2.default)(this, _class);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
        _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

        _this.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  display: block;\n  width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\nchassis-options {\n  display: block;\n  width: 100%;\n}\n\nchassis-options *,\nchassis-options *:before,\nchassis-options *:after {\n  box-sizing: border-box;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoptions\"></slot><slot></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
              return console.error('ERROR <chassis-options> Read-only property must be type "object" or "string"');
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
            var message = 'ERROR <chassis-options> ';

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

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperties([{
          name: 'form',
          get: function get() {
            return this.parentNode.form;
          }
        }, {
          name: 'displayOptions',
          get: function get() {
            var _this2 = this;

            return new (_.get(this).ChassisHTMLOptionsCollection())(this.options.map(function (option) {
              return option.displayElement;
            }), this.selectedIndex, function (element, before) {
              _this2.add(_.get(_this2).generateOptionObject(element), before);
            }, function (index) {
              return _this2.removeOptionByIndex(index);
            });
          }
        }, {
          name: 'hoveredIndex',
          get: function get() {
            return this.options.findIndex(function (option) {
              return option.displayElement.hover;
            });
          }
        }, {
          name: 'multiple',
          get: function get() {
            return this.parentNode.multiple;
          }
        }, 'options', {
          name: 'selectedIndexes',
          get: function get() {
            var array = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.selectedOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var option = _step.value;
                array.push(option.index);
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

            return array;
          }
        }, {
          name: 'selectedOptions',
          get: function get() {
            var nodes = this.querySelectorAll('[selected]');
            return new (_.get(this).ChassisHTMLCollection())(nodes);
          }
        }]);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties((_$get$addPrivatePrope = {
          options: [],
          selectionStartIndex: -1,
          cherryPickedOptions: [],
          selectedOptionsAreSequential: function selectedOptionsAreSequential() {
            var array = Array.from(_this.selectedOptions).map(function (option) {
              return option.index;
            });
            return array.every(function (index, i) {
              return i === array.length - 1 || index < array[i + 1];
            });
          },
          // TODO: Handle cases where
          // selectionStartIndex !== this.selectedOptions.item(this.selectedOptions.length - 1).index
          // && selectionStartIndex !== this.selectedOptions.item(0).index
          // This happens if there is an active selection with > 1 options,
          // and ctrlKey || metaKey is used to select an option outside the range of
          // this.selectedOptions, or to deselect an option within this.selectedOptions
          arrowDownHandler: function arrowDownHandler(evt) {
            if (!_this.multiple) {
              var startIndex = evt.detail.startIndex;

              switch (startIndex) {
                case _this.options.length - 1:
                  return;

                default:
                  return _this.hoverOption(startIndex + 1);
              }

              return;
            }

            if (_this.selectedOptions.length === 1 && _this.selectedIndex === _this.options.length - 1) {
              return;
            }

            var shiftKey = evt.detail.shiftKey;
            var index = _this.selectedIndex + 1;

            if (_this.selectedOptions.length === 0) {
              index = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex === 0 ? 0 : _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex + 1;
            }

            if (_this.selectedOptions.length > 1) {
              if (_this.selectedIndex === _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex) {
                index = _this.selectedOptions.item(_this.selectedOptions.length - 1).index + 1;
              }

              if (_this.selectedIndex < _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex) {
                if (_this.selectedIndex === _this.options.length - 1) {
                  return;
                }
              }
            }

            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('option.selected', {
              index: index,
              shiftKey: shiftKey,
              ctrlKey: false,
              metaKey: false
            });
          },
          arrowUpHandler: function arrowUpHandler(evt) {
            if (!_this.multiple) {
              var startIndex = evt.detail.startIndex;

              switch (startIndex) {
                case -1:
                case 0:
                  return;

                default:
                  return _this.hoverOption(startIndex - 1);
              }

              return;
            }

            if (_this.selectedOptions.length === 1 && _this.selectedIndex === 0) {
              return;
            }

            var index = _this.selectedIndex - 1;
            var shiftKey = evt.detail.shiftKey;

            if (_this.selectedOptions.length === 0) {
              index = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex === -1 ? _this.options.length - 1 : _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex - 1;
            }

            if (_this.selectedOptions.length > 1) {
              if (_this.selectedIndex === _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex) {
                index = _this.selectedOptions.item(_this.selectedOptions.length - 1).index - 1;
              }

              if (_this.selectedIndex < _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex && _this.selectedIndex === 0) {
                return;
              }
            }

            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('option.selected', {
              index: index,
              shiftKey: shiftKey,
              ctrlKey: false,
              metaKey: false
            });
          }
        }, (0, _defineProperty2.default)(_$get$addPrivatePrope, "selectedOptionsAreSequential", function selectedOptionsAreSequential() {
          var optionIndexes = Array.from(_this.selectedOptions).map(function (option) {
            return option.index;
          });
          return optionIndexes.every(function (index, i) {
            return index === optionIndexes[i + 1] - 1 || i === optionIndexes.length - 1;
          });
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "optionSelectionHandler", function optionSelectionHandler(evt) {
          var _$get = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))),
              ChassisHTMLCollection = _$get.ChassisHTMLCollection,
              cherryPickedOptions = _$get.cherryPickedOptions,
              emit = _$get.emit,
              Selection = _$get.Selection,
              selectedOptionsAreSequential = _$get.selectedOptionsAreSequential,
              selectionStartIndex = _$get.selectionStartIndex;

          var _evt$detail = evt.detail,
              index = _evt$detail.index,
              shiftKey = _evt$detail.shiftKey,
              metaKey = _evt$detail.metaKey,
              ctrlKey = _evt$detail.ctrlKey,
              newStartIndex = _evt$detail.newStartIndex;
          var option = _this.options[index];
          var selection = new Selection();

          var applyMiddleware = function applyMiddleware(next) {
            var beforeChange = _this.parentNode.beforeChange;
            var detail = {
              options: selection.options,
              previous: _this.selectedOptions,
              next: new (ChassisHTMLCollection())(selection.displayElements),
              shiftKey: shiftKey,
              metaKey: metaKey,
              ctrlKey: ctrlKey
            };

            var cb = function cb() {
              _this.deselectAll();

              selection.selectAll();
              return emit('options.selected', detail, _this.parentNode);
            };

            if (!(beforeChange && typeof beforeChange === 'function')) {
              return cb();
            }

            beforeChange(_this.selectedOptions, detail.next, cb);
          };

          if (_this.multiple) {
            if (shiftKey) {
              if (option.selected) {
                if (_this.selectedOptions.length === 1) {
                  return;
                }

                if (selectedOptionsAreSequential() && index !== selectionStartIndex) {
                  if (_this.selectedOptions.length === 2) {
                    return;
                  }

                  var indexAtOuterBound = index === _this.selectedOptions.item(_this.selectedOptions.length - 1).index || index === _this.selectedIndex;

                  if (indexAtOuterBound) {
                    return;
                  }
                }
              }

              var bounds = [index, selectionStartIndex].sort();
              selection.options = bounds[0] === bounds[1] ? [option] : _this.options.slice(bounds[0], bounds[1] + 1);
              return applyMiddleware();
            }

            if (metaKey || ctrlKey) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex = index;
              selection.options = _this.options.filter(function (option) {
                return option.index === index ? !option.selected : option.selected;
              });
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).cherryPickedOptions = selection.options;
              return applyMiddleware();
            }
          } else if (index === _this.selectedIndex) {
            return;
          }

          selection.options = [option];
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).selectionStartIndex = index;
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).cherryPickedOptions = [];
          applyMiddleware();
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "parentStateChangeHandler", function parentStateChangeHandler(evt) {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('state.change', evt.detail);

          var _evt$detail2 = evt.detail,
              name = _evt$detail2.name,
              value = _evt$detail2.value;

          switch (name) {
            case 'multiple':
              if (!value && _this.selectedOptions.length > 0) {
                var index = _this.selectedIndex;

                _this.deselectAll();

                _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('option.selected', {
                  index: index
                });
              }

              break;

            default:
              return;
          }
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "Selection",
        /*#__PURE__*/
        function () {
          function Selection() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            (0, _classCallCheck2.default)(this, Selection);
            this.options = options;
          }

          (0, _createClass2.default)(Selection, [{
            key: "append",
            value: function append(option) {
              this.options.push(option);
            }
          }, {
            key: "clear",
            value: function clear() {
              this.options = [];
            }
          }, {
            key: "prepend",
            value: function prepend(option) {
              this.options.unshift(option);
            }
          }, {
            key: "selectAll",
            value: function selectAll() {
              this.options.forEach(function (option) {
                return option.selected = true;
              });
            }
          }, {
            key: "displayElements",
            get: function get() {
              return this.options.map(function (option) {
                return option.displayElement;
              });
            }
          }, {
            key: "length",
            get: function get() {
              return this.options.length;
            }
          }]);
          return Selection;
        }()), (0, _defineProperty2.default)(_$get$addPrivatePrope, "OptionConstructor", function OptionConstructor() {
          var _p = new WeakMap();

          var selectionHandler = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).optionSelectionHandler;

          return (
            /*#__PURE__*/
            function () {
              function ChassisOptionObject(parent, key, sourceElement, displayElement) {
                (0, _classCallCheck2.default)(this, ChassisOptionObject);
                this.key = key;
                this.form = parent.form;
                this.defaultSelected = sourceElement.selected;
                this.sourceElement = sourceElement;
                this.displayElement = displayElement;
                this.displayElement.parent = parent;
                this.displayElement.selected = sourceElement.selected;
                this.displayElement.defaultSelected = sourceElement.selected;
                this.displayElement.innerHTML = sourceElement.innerHTML; // Add additional attributes

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = sourceElement.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var attr = _step2.value;

                    if (typeof attr.value === 'boolean') {
                      attr.value ? this.displayElement.setAttribute(attr.name, '') : this.displayElement.removeAttribute(attr.name);
                      continue;
                    }

                    this.displayElement.setAttribute(attr.name, attr.value);
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

                _p.set(this, {
                  attributes: {
                    disabled: sourceElement.disabled,
                    id: sourceElement.getAttribute('id'),
                    label: sourceElement.getAttribute('label') || sourceElement.textContent.trim(),
                    selected: sourceElement.selected,
                    value: sourceElement.hasAttribute('value') ? sourceElement.getAttribute('value').trim() : null,
                    text: sourceElement.text.trim()
                  }
                });
              }

              (0, _createClass2.default)(ChassisOptionObject, [{
                key: "remove",
                value: function remove() {
                  this.sourceElement.remove();
                  this.displayElement.remove();
                }
              }, {
                key: "setAttr",
                value: function setAttr(name, value) {
                  this.sourceElement[name] = value;

                  if (typeof value === 'boolean') {
                    value ? this.displayElement.setAttribute(name, '') : this.displayElement.removeAttribute(name);
                  } else {
                    this.displayElement.setAttribute(name, value);
                  }

                  _p.get(this).attributes[name] = value;
                }
              }, {
                key: "disabled",
                get: function get() {
                  return _p.get(this).attributes.disabled;
                },
                set: function set(bool) {
                  this.setAttr('disabled', bool);
                }
              }, {
                key: "index",
                get: function get() {
                  return this.sourceElement.index;
                }
              }, {
                key: "id",
                get: function get() {
                  return _p.get(this).attributes.id;
                },
                set: function set(id) {
                  this.setAttr('id', id);
                }
              }, {
                key: "selected",
                get: function get() {
                  return _p.get(this).attributes.selected;
                },
                set: function set(bool) {
                  this.setAttr('selected', bool);
                }
              }, {
                key: "label",
                get: function get() {
                  return _p.get(this).attributes.label;
                },
                set: function set(label) {
                  this.setAttr('label', label);
                }
              }, {
                key: "text",
                get: function get() {
                  return _p.get(this).attributes.text;
                },
                set: function set(text) {
                  this.setAttr('text', text);
                }
              }, {
                key: "value",
                get: function get() {
                  return _p.get(this).attributes.value;
                },
                set: function set(value) {
                  this.setAttr('value', value);
                }
              }]);
              return ChassisOptionObject;
            }()
          );
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "generateOptionObject", function generateOptionObject(sourceElement) {
          if (!customElements.get('chassis-option')) {
            console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
            return;
          }

          return new (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).OptionConstructor())((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid(), sourceElement, document.createElement('chassis-option'));
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "generateSourceOptionElement", function generateSourceOptionElement(option) {
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
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "generateOptgroup", function generateOptgroup(optgroup) {
          if (!customElements.get('chassis-optgroup')) {
            console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.");
            return;
          }

          var surrogate = document.createElement('chassis-optgroup');
          surrogate.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid('optgroup');
          var label = optgroup.getAttribute('label');

          if (!label || label.trim() === '') {
            console.error('<optgroup> must have a label attribute!');
            return;
          }

          surrogate.setAttribute('label', label);
          var options = optgroup.querySelectorAll('option');
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var option = _step3.value;

              _this.add(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateOptionObject(option), null, surrogate);
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

          return surrogate;
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "ChassisHTMLCollection", function ChassisHTMLCollection() {
          var _p = new WeakMap();

          return (
            /*#__PURE__*/
            function () {
              function ChassisHTMLCollection(arr) {
                var _this3 = this;

                (0, _classCallCheck2.default)(this, ChassisHTMLCollection);

                _p.set(this, {
                  arr: arr
                });

                arr.forEach(function (node, index) {
                  _this3[index] = node;

                  if (node.id) {
                    _this3[node.id] = node;
                  }
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
                key: Symbol.iterator,
                value: function value() {
                  var _this4 = this;

                  var index = 0;
                  return {
                    next: function next() {
                      var result = {
                        value: _p.get(_this4).arr[index],
                        done: !(index in _p.get(_this4).arr)
                      };
                      index++;
                      return result;
                    }
                  };
                }
              }, {
                key: Symbol.toStringTag,
                value: function value() {
                  return 'ChassisHTMLCollection';
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
        }), (0, _defineProperty2.default)(_$get$addPrivatePrope, "ChassisHTMLOptionsCollection", function ChassisHTMLOptionsCollection() {
          var _p = new WeakMap();

          var ChassisHTMLOptionsCollection =
          /*#__PURE__*/
          function (_$get$ChassisHTMLColl) {
            (0, _inherits2.default)(ChassisHTMLOptionsCollection, _$get$ChassisHTMLColl);

            function ChassisHTMLOptionsCollection(arr) {
              var _this5;

              var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
              var add = arguments.length > 2 ? arguments[2] : undefined;
              var remove = arguments.length > 3 ? arguments[3] : undefined;
              (0, _classCallCheck2.default)(this, ChassisHTMLOptionsCollection);
              _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChassisHTMLOptionsCollection).call(this, arr));
              _this5.selectedIndex = selectedIndex;
              _this5.add = add;
              _this5.remove = remove;

              _p.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this5)), {
                arr: arr
              });

              return _this5;
            }

            (0, _createClass2.default)(ChassisHTMLOptionsCollection, [{
              key: Symbol.toStringTag,
              value: function value() {
                return 'ChassisHTMLOptionsCollection';
              }
            }]);
            return ChassisHTMLOptionsCollection;
          }(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).ChassisHTMLCollection());

          return ChassisHTMLOptionsCollection;
        }), _$get$addPrivatePrope));

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

          if (!customElements.get('chassis-option')) {
            console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
            return;
          }

          if (option instanceof Option) {
            option = _.get(this).generateOptionObject(option);
          }

          this.parentNode["".concat(option.index)] = option.displayElement;

          if (index) {
            dest.insertBefore(option.displayElement, dest.children.item(index));
            this.options.splice(index, 0, option);
            this.parentNode.sourceElement.add(option.sourceElement, index);
          } else {
            dest.appendChild(option.displayElement);
            this.options.push(option);

            if (!this.parentNode.sourceElement[this.options.length - 1]) {
              this.parentNode.sourceElement.appendChild(option.sourceElement);
            }
          }

          if (option.selected) {
            if (!this.multiple) {
              this.selectedIndex = option.index;
              return;
            }
          }
        }
      }, {
        key: "addChildren",
        value: function addChildren(children) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var child = _step4.value;
              var isElement = child instanceof HTMLElement;

              switch (child.nodeName) {
                case 'OPTION':
                  this.add(isElement ? _.get(this).generateOptionObject(child) : child);
                  break;

                case 'OPTGROUP':
                  this.addOptgroup(isElement ? _.get(this).generateOptgroup(child) : child);
                  break;

                default:
                  console.warn("".concat(child.nodeName.toLowerCase(), " is not a valid child element for <chassis-select>. Removing..."));
                  break;
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
        key: "connectedCallback",
        value: function connectedCallback() {
          this.addEventListener('keydown.arrowUp', _.get(this).arrowUpHandler);
          this.addEventListener('keydown.arrowDown', _.get(this).arrowDownHandler);
          this.addEventListener('option.selected', _.get(this).optionSelectionHandler);
          this.parentNode.addEventListener('state.change', _.get(this).parentStateChangeHandler);
          _.get(this).selectionStartIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0;
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.removeEventListener('keydown.arrowUp', _.get(this).arrowUpHandler);
          this.removeEventListener('keydown.arrowDown', _.get(this).arrowDownHandler);
          this.removeEventListener('option.selected', _.get(this).optionSelectionHandler);
          this.parentNode.removeEventListener('state.change', _.get(this).parentStateChangeHandler);
        }
      }, {
        key: "deselect",
        value: function deselect(option) {
          var updateList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (typeof option === 'number') {
            option = this.options[option];
          }

          option.selected = false;
          this.parentNode.selectedOptionsElement.remove(option, updateList);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          var _this6 = this;

          var showPlaceholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.options.filter(function (option) {
            return option.selected;
          }).forEach(function (option, index, options) {
            _this6.deselect(option, index = options.length - 1 && showPlaceholder);
          });
        }
      }, {
        key: "hoverOption",
        value: function hoverOption(index) {
          this.unHoverAllOptions();
          this.options[index].displayElement.hover = true;
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

          if (index === null || index >= this.options.length) {
            return;
          }

          this.options[index].remove();
        }
      }, {
        key: "unHoverAllOptions",
        value: function unHoverAllOptions() {
          var _this7 = this;

          this.options.forEach(function (option, index) {
            return _this7.unHoverOption(index);
          });
        }
      }, {
        key: "unHoverOption",
        value: function unHoverOption(index) {
          this.options[index].displayElement.hover = false;
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          if (this.selectedOptions.length === 0) {
            return;
          }

          return this.selectedOptions.item(0).index;
        },
        set: function set(index) {
          _.get(this).emit('option.selected', {
            index: index
          });
        }
      }, {
        key: "selectionStartIndex",
        get: function get() {
          return _.get(this).selectionStartIndex;
        },
        set: function set(value) {
          console.warn("WARNING <chassis-select> selectionStartIndex cannot be set manually.");
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());