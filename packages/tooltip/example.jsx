/** @jsx React.DOM */

var React = require('react');
require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <span data-tooltip="Tooltip!">Hover over me</span>
    );
  }
});

module.exports = LoadingExample;