/** @jsx React.DOM */

require('./button.scss');

var React = require('react');

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'default'
    };
  },

  render: function() {
    var buttonClass = 'Button Button--' + this.props.type;

    return (
      this.transferPropsTo(<button className={buttonClass}><span className="Button-internal">{this.props.children}</span></button>)
    );
  }
});

module.exports = Button;
