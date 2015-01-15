/** @jsx React.DOM */

require('./button-group.scss');

var React = require('react');

module.exports = React.createClass({
  displayName: 'ButtonGroup',

  render: function() {
    return (
      <div className="ButtonGroup">
        {this.props.children}
      </div>
    );
  }
});
