'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _Slider = require('old-material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _getMuiTheme = require('old-material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('old-material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _Slider3 = require('../Slider');

var _Slider4 = _interopRequireDefault(_Slider3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('Slider', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_Slider4.default.displayName).toBe('ReduxFormMaterialUISlider');
  });

  it('renders a Slider', function () {
    (0, _expect2.default)(new _Slider4.default({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Slider2.default, { name: 'mySlider', value: 0.5, onChange: _lodash2.default, ref: 'component' }));
  });

  it('should ignore defaultValue', function () {
    (0, _expect2.default)(new _Slider4.default({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: _lodash2.default
      },
      defaultValue: 0.8
    }).render()).toEqualJSX(_react2.default.createElement(_Slider2.default, { name: 'mySlider', value: 0.5, onChange: _lodash2.default, ref: 'component' }));
  });

  it('ignores errors', function () {
    (0, _expect2.default)(new _Slider4.default({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: _lodash2.default
      },
      meta: {
        touched: true,
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Slider2.default, { name: 'mySlider', value: 0.5, onChange: _lodash2.default, ref: 'component' }));
  });

  it('ignores warnings', function () {
    (0, _expect2.default)(new _Slider4.default({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: _lodash2.default
      },
      meta: {
        touched: true,
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Slider2.default, { name: 'mySlider', value: 0.5, onChange: _lodash2.default, ref: 'component' }));
  });

  it('maps onChange properly', function () {
    var onChange = (0, _expect.createSpy)();
    var fieldOnChange = (0, _expect.createSpy)();

    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_Slider4.default, {
        name: 'mySlider',
        input: { onChange: onChange, value: 0.5 },
        onChange: fieldOnChange
      })
    ));

    var slider = _testUtils2.default.findRenderedComponentWithType(dom, _Slider2.default);

    (0, _expect2.default)(onChange).toNotHaveBeenCalled();
    (0, _expect2.default)(fieldOnChange).toNotHaveBeenCalled();

    slider.props.onChange(undefined, 0.9);

    (0, _expect2.default)(onChange).toHaveBeenCalled().toHaveBeenCalledWith(0.9);

    (0, _expect2.default)(fieldOnChange).toHaveBeenCalled().toHaveBeenCalledWith(0.9);
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_Slider4.default, { input: { name: 'mySlider' } })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _Slider4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});