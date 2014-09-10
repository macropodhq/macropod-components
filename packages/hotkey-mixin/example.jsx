/** @jsx React.DOM */

var React = require('react');

var HotkeyMixin = require('./hotkey-mixin.js');

var hotkeys = HotkeyMixin({
  scope: 'example',
  keys: {
    'esc': 'test'
  }
});

var HotkeyMixinExample = React.createClass({
  mixins: [hotkeys],

  test: function(a) {
    this.refs.example.getDOMNode().value = 'YAY';
  },

  render: function() {
    return <input value="press escape" ref="example"/>
  }
});

module.exports = HotkeyMixinExample;
