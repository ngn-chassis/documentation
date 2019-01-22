/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(4));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(8));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(0));

customElements.define('author-options',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-options{display:block;width:100%}author-options *,author-options :after,author-options :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoptions\"></slot><slot></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineProperties({
      cherryPicked: {
        private: true
      },
      form: {
        readonly: true,
        get: function get() {
          return _this.parentNode.form;
        }
      },
      displayOptions: {
        readonly: true,
        get: function get() {
          var ChassisHTMLOptionsCollection = _this.PRIVATE.generateChassisHTMLOptionsCollectionConstructor();

          var array = _this.options.map(function (option) {
            return option.displayElement;
          });

          var addFunction = function addFunction(element, before) {
            return _this.addOption(_this.PRIVATE.generateOptionObject(element), before);
          };

          var removeFunction = function removeFunction(index) {
            return _this.removeOptionByIndex(index);
          };

          return new ChassisHTMLOptionsCollection(array, _this.selectedIndex, addFunction, removeFunction);
        }
      },
      hoveredIndex: {
        readonly: true,
        get: function get() {
          return _this.options.findIndex(function (option) {
            return option.displayElement.hover;
          });
        }
      },
      lastSelectedIndex: {
        private: true
      },
      multiple: {
        readonly: true,
        get: function get() {
          return _this.parentNode.multiple;
        }
      },
      options: {
        readonly: true,
        default: []
      },
      selectedIndices: {
        readonly: true,
        get: function get() {
          var array = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.selectedOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      },
      selectedOptions: {
        readonly: true,
        get: function get() {
          var nodes = _this.querySelectorAll('[selected]');

          var ChassisHTMLCollection = _this.PRIVATE.generateChassisHTMLCollectionConstructor();

          return new ChassisHTMLCollection(nodes);
        }
      },
      Selection: {
        readonly: true,
        private: true,
        default:
        /*#__PURE__*/
        function () {
          function _default() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            (0, _classCallCheck2.default)(this, _default);
            this.options = options;
          }

          (0, _createClass2.default)(_default, [{
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
            key: "includes",
            value: function includes(option) {
              return this.options.includes(option);
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
          }, {
            key: "first",
            get: function get() {
              return this.options[0];
            }
          }, {
            key: "last",
            get: function get() {
              return this.options[this.options.length - 1];
            }
          }]);
          return _default;
        }()
      },
      selectionStartIndex: {
        private: true
      }
    });

    _this.UTIL.definePrivateMethods({
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

        var lastSelectedIndex = _this.PRIVATE.lastSelectedIndex;

        if (lastSelectedIndex === _this.options.length - 1) {
          return;
        }

        return _this.emit('option.selected', {
          index: lastSelectedIndex === null ? 0 : lastSelectedIndex + 1,
          keyboard: true,
          shiftKey: evt.detail.shiftKey,
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

        var lastSelectedIndex = _this.PRIVATE.lastSelectedIndex;

        if (lastSelectedIndex === 0) {
          return;
        }

        return _this.emit('option.selected', {
          index: lastSelectedIndex === null ? _this.options.length - 1 : lastSelectedIndex - 1,
          keyboard: true,
          shiftKey: evt.detail.shiftKey,
          ctrlKey: false,
          metaKey: false
        });
      },
      diffSelections: function diffSelections(comparator, comparable) {
        return comparator.filter(function (option) {
          return !comparable.includes(option);
        });
      },
      generateChassisHTMLCollectionConstructor: function generateChassisHTMLCollectionConstructor() {
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
                _this2[index] = node;

                if (node.id) {
                  _this2[node.id] = node;
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
                var _this3 = this;

                var index = 0;
                return {
                  next: function next() {
                    var result = {
                      value: _p.get(_this3).arr[index],
                      done: !(index in _p.get(_this3).arr)
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
      },
      generateChassisHTMLOptionsCollectionConstructor: function generateChassisHTMLOptionsCollectionConstructor() {
        var _p = new WeakMap();

        var ChassisHTMLOptionsCollection =
        /*#__PURE__*/
        function (_this$PRIVATE$Chassis) {
          (0, _inherits2.default)(ChassisHTMLOptionsCollection, _this$PRIVATE$Chassis);

          function ChassisHTMLOptionsCollection(arr) {
            var _this4;

            var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            var add = arguments.length > 2 ? arguments[2] : undefined;
            var remove = arguments.length > 3 ? arguments[3] : undefined;
            (0, _classCallCheck2.default)(this, ChassisHTMLOptionsCollection);
            _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChassisHTMLOptionsCollection).call(this, arr));
            _this4.selectedIndex = selectedIndex;
            _this4.add = add;
            _this4.remove = remove;

            _p.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this4)), {
              arr: arr
            });

            return _this4;
          }

          (0, _createClass2.default)(ChassisHTMLOptionsCollection, [{
            key: Symbol.toStringTag,
            value: function value() {
              return 'ChassisHTMLOptionsCollection';
            }
          }]);
          return ChassisHTMLOptionsCollection;
        }(_this.PRIVATE.ChassisHTMLCollection());

        return ChassisHTMLOptionsCollection;
      },
      generateOptgroup: function generateOptgroup(optgroup) {
        if (!customElements.get('author-optgroup')) {
          return _this.UTIL.throwError({
            type: 'dependency',
            vars: {
              name: 'author-optgroup'
            }
          });
        }

        var surrogate = document.createElement('author-optgroup');
        surrogate.id = _this.UTIL.generateGuid('optgroup');
        var label = optgroup.getAttribute('label');

        if (!label || label.trim() === '') {
          return _this.UTIL.throwError({
            message: '<optgroup> must have a label attribute!'
          });
        }

        surrogate.setAttribute('label', label);
        var options = optgroup.querySelectorAll('option');
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var option = _step2.value;

            _this.addOption(_this.PRIVATE.generateOptionObject(option), null, surrogate);
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

        return surrogate;
      },
      generateOptionObject: function generateOptionObject(sourceElement) {
        if (!customElements.get('author-option')) {
          return _this.UTIL.throwError({
            type: 'dependency',
            vars: {
              name: 'author-option'
            }
          });
        }

        var OptionConstructor = _this.PRIVATE.generateOptionConstructor();

        return new OptionConstructor((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _this.UTIL.generateGuid(), sourceElement, document.createElement('author-option'));
      },
      generateOptionConstructor: function generateOptionConstructor() {
        var _p = new WeakMap();

        var selectionHandler = _this.PRIVATE.optionSelectionHandler;
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

              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = sourceElement.attributes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var attr = _step3.value;

                  if (typeof attr.value === 'boolean') {
                    attr.value ? this.displayElement.setAttribute(attr.name, '') : this.displayElement.removeAttribute(attr.name);
                    continue;
                  }

                  this.displayElement.setAttribute(attr.name, attr.value);
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
      },
      getCurrentSelection: function getCurrentSelection() {
        return _this.options.filter(function (option) {
          return option.selected;
        });
      },
      handleClickSelection: function handleClickSelection(detail, cb) {
        var _this$PRIVATE = _this.PRIVATE,
            cherryPicked = _this$PRIVATE.cherryPicked,
            getCurrentSelection = _this$PRIVATE.getCurrentSelection,
            lastSelectedIndex = _this$PRIVATE.lastSelectedIndex,
            Selection = _this$PRIVATE.Selection,
            selectionStartIndex = _this$PRIVATE.selectionStartIndex;
        var index = detail.index,
            shiftKey = detail.shiftKey,
            ctrlKey = detail.ctrlKey,
            metaKey = detail.metaKey;
        var selectedOption = _this.options[index];

        if (shiftKey && lastSelectedIndex !== null) {
          _this.PRIVATE.lastSelectedIndex = index;

          _this.PRIVATE.cherryPicked.clear();

          var bounds = [index, selectionStartIndex].sort(function (a, b) {
            return a - b;
          });
          return cb(new Selection(bounds[0] === bounds[1] ? [selectedOption] : _this.options.slice(bounds[0], bounds[1] + 1)));
        }

        var currentSelection = getCurrentSelection();

        if (ctrlKey || metaKey) {
          _this.PRIVATE.lastSelectedIndex = index;
          _this.PRIVATE.selectionStartIndex = index;
          _this.PRIVATE.cherryPicked.options = selectedOption.selected ? currentSelection.filter(function (option) {
            return option !== selectedOption;
          }) : _this.options.filter(function (option) {
            return option === selectedOption || currentSelection.includes(option);
          });
          return cb(_this.PRIVATE.cherryPicked);
        }

        if (currentSelection.length === 1 && index === lastSelectedIndex) {
          return;
        }

        _this.PRIVATE.lastSelectedIndex = index;
        _this.PRIVATE.selectionStartIndex = index;

        _this.PRIVATE.cherryPicked.clear();

        return cb(new Selection([selectedOption]));
      },
      handleKeyboardSelection: function handleKeyboardSelection(detail, cb) {
        var _this$PRIVATE2 = _this.PRIVATE,
            cherryPicked = _this$PRIVATE2.cherryPicked,
            getCurrentSelection = _this$PRIVATE2.getCurrentSelection,
            lastSelectedIndex = _this$PRIVATE2.lastSelectedIndex,
            Selection = _this$PRIVATE2.Selection,
            selectionStartIndex = _this$PRIVATE2.selectionStartIndex;
        var index = detail.index,
            shiftKey = detail.shiftKey;
        var selectedOption = _this.options[index];
        var currentSelection = getCurrentSelection();
        _this.PRIVATE.lastSelectedIndex = index;

        if (!shiftKey || currentSelection.length === 0) {
          _this.PRIVATE.selectionStartIndex = index;

          _this.PRIVATE.cherryPicked.clear();

          return cb(new Selection([selectedOption]));
        } // 1 option or more selected


        if (currentSelection.length > 0) {
          var bounds = [index, selectionStartIndex].sort();
          var selection = new Selection(bounds[0] === bounds[1] ? [selectedOption] : _this.options.slice(bounds[0], bounds[1] + 1));

          if (cherryPicked.length > 0) {
            selection.options = _this.options.filter(function (option) {
              return selection.includes(option) || cherryPicked.includes(option);
            });
          }

          return cb(selection);
        }
      },
      optionSelectionHandler: function optionSelectionHandler(evt) {
        var _this$PRIVATE3 = _this.PRIVATE,
            cherryPicked = _this$PRIVATE3.cherryPicked,
            diffSelections = _this$PRIVATE3.diffSelections,
            getCurrentSelection = _this$PRIVATE3.getCurrentSelection,
            generateChassisHTMLCollectionConstructor = _this$PRIVATE3.generateChassisHTMLCollectionConstructor,
            handleClickSelection = _this$PRIVATE3.handleClickSelection,
            handleKeyboardSelection = _this$PRIVATE3.handleKeyboardSelection,
            Selection = _this$PRIVATE3.Selection;

        if (cherryPicked === null) {
          _this.PRIVATE.cherryPicked = new Selection([]);
        }

        var _evt$detail = evt.detail,
            index = _evt$detail.index,
            keyboard = _evt$detail.keyboard;

        var completeOperation = function completeOperation(selection) {
          var currentSelection = getCurrentSelection();
          var comparator = selection.length >= currentSelection.length ? selection.options : currentSelection;
          var diff = diffSelections(comparator, comparator === currentSelection ? selection.options : currentSelection);

          if (diff.length === 0) {
            return;
          }

          var beforeChange = _this.parentNode.beforeChange;
          var detail = {
            options: selection.options,
            previous: _this.selectedOptions,
            next: new (generateChassisHTMLCollectionConstructor())(selection.displayElements)
          };

          var cb = function cb() {
            _this.deselectAll();

            selection.selectAll();
            return _this.emit('options.selected', detail, _this.parentNode);
          };

          if (!(beforeChange && typeof beforeChange === 'function')) {
            return cb();
          }

          beforeChange(_this.selectedOptions, detail.next, cb);
        };

        if (!_this.multiple) {
          return completeOperation(new Selection([_this.options[index]]));
        }

        if (keyboard) {
          return _this.PRIVATE.handleKeyboardSelection(evt.detail, completeOperation);
        }

        return _this.PRIVATE.handleClickSelection(evt.detail, completeOperation);
      },
      parentStateChangeHandler: function parentStateChangeHandler(evt) {
        _this.emit('state.change', evt.detail);

        var _evt$detail2 = evt.detail,
            name = _evt$detail2.name,
            value = _evt$detail2.value;

        switch (name) {
          case 'multiple':
            if (!value && _this.selectedOptions.length > 0) {
              var index = _this.selectedIndex;

              _this.deselectAll();

              _this.emit('option.selected', {
                index: index
              });
            }

            break;

          default:
            return;
        }
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.PRIVATE.selectionStartIndex = _this.selectedIndex >= 0 ? _this.selectedIndex : 0;

        _this.parentNode.on('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      disconnected: function disconnected() {
        _this.parentNode.off('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      'keydown.arrowUp': _this.PRIVATE.arrowUpHandler,
      'keydown.arrowDown': _this.PRIVATE.arrowDownHandler,
      'option.selected': _this.PRIVATE.optionSelectionHandler
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "addOptgroup",
    value: function addOptgroup(optgroup) {
      var label = document.createElement('author-optgroup-label');
      label.innerHTML = optgroup.getAttribute('label');
      this.appendChild(label);
      this.appendChild(optgroup);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

      if (!customElements.get('author-option')) {
        return this.UTIL.throwError({
          type: 'dependency',
          vars: {
            name: 'author-option'
          }
        });
      }

      if (option instanceof Option) {
        option = this.PRIVATE.generateOptionObject(option);
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
    key: "addOptions",
    value: function addOptions(children) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var child = _step4.value;
          var isElement = child instanceof HTMLElement;

          switch (child.nodeName) {
            case 'OPTION':
              this.addOption(isElement ? this.PRIVATE.generateOptionObject(child) : child);
              continue;

            case 'OPTGROUP':
              this.addOptgroup(isElement ? this.PRIVATE.generateOptgroup(child) : child);
              continue;

            default:
              this.UTIL.printToConsole("".concat(child.nodeName.toLowerCase(), " is not a valid child element for <author-select>. Removing..."), 'warning');
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
    key: "clear",
    value: function clear() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
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
      var _this5 = this;

      var showPlaceholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.options.filter(function (option) {
        return option.selected;
      }).forEach(function (option, index, options) {
        _this5.deselect(option, index = options.length - 1 && showPlaceholder);
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
      var _this6 = this;

      this.options.forEach(function (option, index) {
        return _this6.unHoverOption(index);
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
      return this.selectedOptions.length > 0 ? this.selectedOptions.item(0).index : null;
    },
    set: function set(index) {
      this.emit('option.selected', {
        index: index
      });
    }
  }, {
    key: "selectionStartIndex",
    get: function get() {
      return this.PRIVATE.selectionStartIndex;
    },
    set: function set(value) {
      this.UTIL.throwError({
        type: 'readonly',
        message: "\"selectionStartIndex\" cannot be set manually."
      });
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ })
/******/ ]);
//# sourceMappingURL=author-options-es5-bundle.js.map