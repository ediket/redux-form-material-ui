'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _getMuiTheme = require('old-material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('old-material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require('old-material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _TextField3 = require('../TextField');

var _TextField4 = _interopRequireDefault(_TextField3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('TextField', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_TextField4.default.displayName).toBe('ReduxFormMaterialUITextField');
  });

  it('renders a TextField', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo', ref: 'component' }));
  });

  it('renders a TextField with no error when not touched', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo', ref: 'component' }));
  });

  it('renders a TextField with an error', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, {
      name: 'myText',
      value: 'Foo',
      errorText: 'FooError',
      ref: 'component'
    }));
  });

  it('renders a TextField with no warning when not touched', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, { name: 'myText', value: 'Foo', ref: 'component' }));
  });

  it('renders a TextField with an warning', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, {
      name: 'myText',
      value: 'Foo',
      errorText: 'FooWarning',
      ref: 'component'
    }));
  });

  it('should ignore defaultValue', function () {
    (0, _expect2.default)(new _TextField4.default({
      input: {
        name: 'myText',
        value: ''
      },
      defaultValue: '5',
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TextField2.default, {
      name: 'myText',
      value: '',
      errorText: 'FooWarning',
      ref: 'component'
    }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_TextField4.default, { name: 'myText' })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _TextField4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });

  it('focuses when field gets active prop', function () {});
});