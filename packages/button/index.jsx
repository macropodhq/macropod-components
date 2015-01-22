/** @jsx React.DOM */

require('./button.scss');

var React = require('react');

module.exports = React.createClass({
  displayName: 'Button',

  getDefaultProps: function() {
    return {
      type: 'default'
    };
  },

  render: function() {
    var buttonClass = 'Button Button--' + this.props.type;

    return (
      <button {...this.props} className={buttonClass}>{this.props.children}</button>
    );
  }
});
