'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
// true

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// true

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

// true

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// true

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

// true

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//import ScrollbarWrapper from 'react-scrollbars';

var _columnMcss = require('./column.mcss');

var _columnMcss2 = _interopRequireDefault(_columnMcss);

var ScrollbarWrapper = require('react-scrollbars').ScrollbarWrapper;

var Column = (function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    _get(Object.getPrototypeOf(Column.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Column, [{
    key: 'getSubTitle',
    value: function getSubTitle() {
      if (this.props.subTitle) {
        return _react2['default'].createElement(
          'span',
          { className: _columnMcss2['default'].subTitle },
          this.props.subTitle
        );
      }

      return null;
    }
  }, {
    key: 'getAction',
    value: function getAction() {
      if (this.props.action) {
        return _react2['default'].createElement(
          'span',
          { className: _columnMcss2['default'].action },
          this.props.action
        );
      }

      return null;
    }
  }, {
    key: 'getFooter',
    value: function getFooter() {
      if (this.props.footer) {
        return _react2['default'].createElement(
          'footer',
          { className: _columnMcss2['default'].footer },
          this.props.footer
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      // TODO: CHECK TITLE LENGTH?

      return _react2['default'].createElement(
        'div',
        { className: this.props.className || _columnMcss2['default'].Column },
        _react2['default'].createElement(
          'header',
          { className: _columnMcss2['default'].header },
          this.props.title,
          this.getSubTitle(),
          this.getAction()
        ),
        _react2['default'].createElement(
          ScrollbarWrapper,
          { className: _columnMcss2['default'].body, scrollbarThickness: 4 },
          this.props.children
        ),
        this.getFooter()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      title: _react2['default'].PropTypes.string.isRequired,
      subTitle: _react2['default'].PropTypes.string,
      action: _react2['default'].PropTypes.component,
      footer: _react2['default'].PropTypes.component
    },
    enumerable: true
  }]);

  return Column;
})(_react2['default'].Component);

exports['default'] = Column;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map