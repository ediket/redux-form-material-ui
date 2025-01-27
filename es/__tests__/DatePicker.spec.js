'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _DatePicker = require('old-material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _getMuiTheme = require('old-material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('old-material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _DatePicker3 = require('../DatePicker');

var _DatePicker4 = _interopRequireDefault(_DatePicker3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('DatePicker', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_DatePicker4.default.displayName).toBe('ReduxFormMaterialUIDatePicker');
  });

  it('renders a DatePicker with no value', function () {
    (0, _expect2.default)(new _DatePicker4.default({
      input: {
        name: 'myDatePicker',
        onChange: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_DatePicker2.default, { name: 'myDatePicker', onChange: _lodash2.default, ref: 'component' }));
  });

  it('renders a DatePicker with a value', function () {
    var value = new Date('2016-01-01');
    (0, _expect2.default)(new _DatePicker4.default({
      input: {
        name: 'myDatePicker',
        onChange: _lodash2.default,
        value: value
      }
    }).render()).toEqualJSX(_react2.default.createElement(_DatePicker2.default, {
      name: 'myDatePicker',
      onChange: _lodash2.default,
      value: value,
      ref: 'component'
    }));
  });

  it('renders a DatePicker with an error', function () {
    var value = new Date('2016-01-01');
    (0, _expect2.default)(new _DatePicker4.default({
      input: {
        name: 'myDatePicker',
        value: value
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_DatePicker2.default, {
      name: 'myDatePicker',
      value: value,
      errorText: 'FooError',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('renders a DatePicker with an warning', function () {
    var value = new Date('2016-01-01');
    (0, _expect2.default)(new _DatePicker4.default({
      input: {
        name: 'myDatePicker',
        value: value
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_DatePicker2.default, {
      name: 'myDatePicker',
      value: value,
      errorText: 'FooWarning',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('should ignore defaultDate', function () {
    var defaultDate = new Date('2016-01-01');
    (0, _expect2.default)(new _DatePicker4.default({
      input: {
        name: 'myDatePicker'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      },
      defaultDate: defaultDate
    }).render()).toEqualJSX(_react2.default.createElement(_DatePicker2.default, {
      name: 'myDatePicker',
      errorText: 'FooWarning',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('maps onChange properly', function () {
    var onChange = (0, _expect.createSpy)();
    var first = new Date('2016-01-01');
    var second = new Date('2016-02-29');

    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_DatePicker4.default, {
        input: { name: 'myDatePicker', onChange: onChange, value: first }
      })
    ));

    var datePicker = _testUtils2.default.findRenderedComponentWithType(dom, _DatePicker2.default);
    (0, _expect2.default)(onChange).toNotHaveBeenCalled();
    datePicker.props.onChange(undefined, second);
    (0, _expect2.default)(onChange).toHaveBeenCalled().toHaveBeenCalledWith(second);
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_DatePicker4.default, {
        input: { name: 'myDatePicker', onChange: _lodash2.default }
      })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _DatePicker4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});