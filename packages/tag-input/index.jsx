/** @jsx React.DOM */

var React = require('react/addons');

var Widgets = require('react-widgets');

require('./tag-input.scss');

var TagInput = React.createClass({
  render: function() {
    return this.transferPropsTo(<Widgets.Select />);
  }
});

module.exports = TagInput;
