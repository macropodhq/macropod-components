/** @jsx React.DOM */

require('./style');

var React = require('react');

var ButtonComponent = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'default'
    };
  },

  render: function() {
    var buttonClass = 'Button Button--' + this.props.type;

    return (
      this.transferPropsTo(<button className={buttonClass}>{this.props.children}</button>)
    );
  }
});
module.exports = ButtonComponent;
