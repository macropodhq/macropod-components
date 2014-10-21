/** @jsx React.DOM */

var React = require('react/addons');

var Widgets = require('react-widgets');

require('./dropdown.scss');

var Dropdown = React.createClass({
  render: function() {
    return this.transferPropsTo(<Widgets.DropDownlist />);
  }
});

module.exports = Dropdown;
