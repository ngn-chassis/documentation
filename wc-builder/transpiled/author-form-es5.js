"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-form',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\";</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      novalidate: false
    });

    _this.UTIL.defineProperties({
      validationHandlersApplied: {
        private: true,
        default: false
      },
      sourceElement: {
        private: true,
        readonly: true,
        default: document.createElement('form')
      },
      isValid: {
        readonly: true,
        get: function get() {
          return _this.invalidFields.length === 0;
        }
      },
      controls: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control');
        }
      },
      elements: {
        readonly: true,
        get: function get() {
          var AuthorHTMLFormControlsCollection = _this.PRIVATE.generateAuthorHTMLFormControlsCollectionConstructor();

          var elements = _this.querySelectorAll('author-control, author-fieldset, fieldset, button');

          var arr = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

              if (element.localName === 'author-control') {
                element = element.input;
              }

              arr.push(element);
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

          return new AuthorHTMLFormControlsCollection(arr);
        }
      },
      resetButtons: {
        get: function get() {
          return _this.querySelectorAll('button[type="reset"]');
        }
      },
      submitButtons: {
        get: function get() {
          return _this.querySelectorAll('button[type="submit"]');
        }
      },
      invalidFields: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control[invalid]');
        }
      },
      validFields: {
        readonly: true,
        get: function get() {
          return _this.querySelectorAll('author-control:not([invalid])');
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      generateAuthorHTMLFormControlsCollectionConstructor: function generateAuthorHTMLFormControlsCollectionConstructor() {
        var _p = new WeakMap();

        var AuthorHTMLFormControlsCollection =
        /*#__PURE__*/
        function (_this$PRIVATE$generat) {
          (0, _inherits2.default)(AuthorHTMLFormControlsCollection, _this$PRIVATE$generat);

          function AuthorHTMLFormControlsCollection(arr) {
            var _this2;

            (0, _classCallCheck2.default)(this, AuthorHTMLFormControlsCollection);
            _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthorHTMLFormControlsCollection).call(this, arr));

            _p.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)), {
              arr: arr
            });

            return _this2;
          }

          (0, _createClass2.default)(AuthorHTMLFormControlsCollection, [{
            key: Symbol.toStringTag,
            value: function value() {
              return "AuthorHTMLFormControlsCollection";
            }
          }, {
            key: "length",
            get: function get() {
              return _p.get(this).arr.length;
            }
          }]);
          return AuthorHTMLFormControlsCollection;
        }(_this.PRIVATE.generateAuthorHTMLCollectionConstructor());

        return AuthorHTMLFormControlsCollection;
      },
      validationHandler: function validationHandler(evt) {
        var attribute = evt.detail.attribute;

        if (attribute === 'invalid') {
          if (_this.invalidFields.length > 0) {
            _this.setAttribute('invalid', '');
          } else {
            _this.removeAttribute('invalid');
          }
        }
      },
      applyValidationHandlers: function applyValidationHandlers() {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this.controls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var control = _step2.value;
            control.on('attribute.changed', _this.PRIVATE.validationHandler);
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

        _this.PRIVATE.validationHandlersApplied = true;
      },
      removeValidationHandlers: function removeValidationHandlers() {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this.controls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var control = _step3.value;
            control.off('attribute.changed', _this.PRIVATE.validationHandler);
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

        _this.PRIVATE.validationHandlersApplied = false;
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      'attribute.changed': function attributeChanged(evt) {
        var attribute = evt.detail.attribute;

        switch (attribute) {
          case 'novalidate':
            if (_this.novalidate) {
              _this.removeAttribute('invalid');

              if (_this.PRIVATE.validationHandlersApplied) {
                _this.PRIVATE.removeValidationHandlers();
              }
            } else {
              if (_this.invalidFields.length > 0) {
                _this.setAttribute('invalid', '');
              }

              if (!_this.PRIVATE.validationHandlersApplied) {
                _this.PRIVATE.applyValidationHandlers();
              }
            }

            break;
        }
      },
      rendered: function rendered() {
        if (!_this.novalidate && !_this.PRIVATE.validationHandlersApplied) {
          _this.PRIVATE.applyValidationHandlers();
        }

        if (_this.submitButtons.length > 0) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _this.submitButtons[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var submitButton = _step4.value;

              _this.UTIL.registerListener(submitButton, 'click', function (evt) {
                evt.preventDefault();

                if (_this.novalidate || _this.isValid) {
                  return _this.submit();
                }

                _this.emit('invalid', {
                  invalidFields: _this.invalidFields
                });
              });
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

        if (_this.resetButtons.length > 0) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _this.resetButtons[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var resetButton = _step5.value;

              _this.UTIL.registerListener(resetButton, 'click', function (evt) {
                evt.preventDefault();

                _this.reset();
              });
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "reset",
    value: function reset() {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.controls[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var control = _step6.value;
          var input = control.input;

          switch (input.localName) {
            case 'input':
            case 'textarea':
              input.value = control.initialValue;
              break;

            case 'author-select':
            case 'select':
              // input.selectedIndex = control.initialValue
              break;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      this.emit('submit', {
        invalidFields: this.invalidFields,
        data: this.data
      });
    }
  }, {
    key: "data",
    get: function get() {
      var data = {};
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.controls.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _step7$value = (0, _slicedToArray2.default)(_step7.value, 2),
              index = _step7$value[0],
              control = _step7$value[1];

          var _control$input = control.input,
              name = _control$input.name,
              value = _control$input.value;

          if (!name) {
            this.UTIL.printToConsole('Input is missing "name" attribute.', 'warning');
            name = index;
          }

          data[name] = value;
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return data;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['novalidate'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));