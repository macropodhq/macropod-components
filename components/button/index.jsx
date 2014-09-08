/** @jsx React.DOM */

require('./style');

var React = require("react");

module.exports = React.createClass({
  render: function() {
    var buttonClass = 'Button Button--' + (this.props.type || 'default');

    return (
      this.transferPropsTo(<button className={buttonClass}>{this.props.children}</button>)
    )
  }
});
