/** @jsx React.DOM */

var React = require('react');
require('./');

module.exports = React.createClass({
  displayName: 'TooltipExample',

  render: function() {
    return (
      <span data-tooltip="Tooltip!">Hover over me</span>
    );
  }
});
