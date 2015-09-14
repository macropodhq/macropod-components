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

var _indexJsx = require('./index.jsx');

var _indexJsx2 = _interopRequireDefault(_indexJsx);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _card = require('../card');

var _card2 = _interopRequireDefault(_card);

var _formInputText = require('../form/input-text');

var _formInputText2 = _interopRequireDefault(_formInputText);

var _exampleMcss = require('./example.mcss');

var _exampleMcss2 = _interopRequireDefault(_exampleMcss);

var ColumnExample = (function (_React$Component) {
  _inherits(ColumnExample, _React$Component);

  function ColumnExample() {
    _classCallCheck(this, ColumnExample);

    _get(Object.getPrototypeOf(ColumnExample.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ColumnExample, [{
    key: 'getFooter',
    value: function getFooter() {
      return _react2['default'].createElement(
        'div',
        { className: _exampleMcss2['default'].footer },
        _react2['default'].createElement(_formInputText2['default'], {
          className: _exampleMcss2['default'].InputText,
          placeholder: 'Create new task',
          onChange: function () {}
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _exampleMcss2['default'].container },
        _react2['default'].createElement(
          _indexJsx2['default'],
          {
            className: _exampleMcss2['default'].Column,
            title: 'Backlog',
            subTitle: '9',
            action: _react2['default'].createElement(_icon2['default'], { type: 'settings-filled' })
          },
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' })
        ),
        _react2['default'].createElement(
          _indexJsx2['default'],
          {
            className: _exampleMcss2['default'].ColumnWithFooter,
            title: 'Backlog',
            subTitle: '9',
            action: _react2['default'].createElement(_icon2['default'], { type: 'settings-filled' }),
            footer: this.getFooter()
          },
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' }),
          _react2['default'].createElement(_card2['default'], { className: _exampleMcss2['default'].Card, title: 'some task' })
        )
      );
    }
  }]);

  return ColumnExample;
})(_react2['default'].Component);

exports['default'] = ColumnExample;
module.exports = exports['default'];
//# sourceMappingURL=example.js.map