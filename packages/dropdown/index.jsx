/** @jsx React.DOM */

var React = require('react/addons');

var Widgets = require('react-widgets');

require('./dropdown.scss');

module.exports = React.createClass({
  displayName: 'Dropdown',

  render: function() {
    return this.transferPropsTo(<Widgets.DropDownlist />);
  }
});
