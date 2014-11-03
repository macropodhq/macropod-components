/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash');
var Layer = require('react-components/js/layered-component-mixin');
var Popover = require('../popover');
require('./dropdown-menu.scss');

var DropdownMenu = React.createClass({
 render: function() {
    return this.transferPropsTo(
      <Popover className="DropdownMenu">
        {this.props.children}
      </Popover>
    )
  }
});

module.exports = DropdownMenu;