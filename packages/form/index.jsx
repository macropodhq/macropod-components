/** @jsx React.DOM */

var React = require('react');

require('./index.scss');

module.exports = React.createClass({
  displayName: 'Form',

  render: function() {
    return this.transferPropsTo(
      <form className="Form">
        {this.props.children}
      </form>
    );
  },
});
