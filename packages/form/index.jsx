/** @jsx React.DOM */

var React = require('react');

require('./index.scss');

module.exports = React.createClass({
  displayName: 'Form',

  render: function() {
    return (
      <form {...this.props} className="Form">
        {this.props.children}
      </form>
    );
  },
});
