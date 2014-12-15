/** @jsx React.DOM */

var React = require('react');

var HotkeyMixin = require('./');

var hotkeys = HotkeyMixin({
  scope: 'example',
  keys: {
    'esc': 'test'
  }
});

module.exports = React.createClass({
  displayName: 'HotkeyMixinExample',

  mixins: [hotkeys],

  test: function(a) {
    this.refs.example.getDOMNode().value = 'YAY';
  },

  render: function() {
    return <input value="press escape" ref="example"/>
  }
});
