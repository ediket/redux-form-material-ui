'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _TimePicker = require('old-material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_TimePicker2.default, function (_ref) {
  var _ref$input = _ref.input,
      onBlur = _ref$input.onBlur,
      inputProps = _objectWithoutProperties(_ref$input, ['onBlur']),
      defaultTime = _ref.defaultTime,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['input', 'defaultTime', 'onChange']);

  return _extends({}, inputProps, (0, _mapError2.default)(props), {
    onChange: function onChange(event, value) {
      inputProps.onChange(value);
      if (_onChange) {
        _onChange(value);
      }
    }
  });
});