'use strict';

require('./button-group.scss');

const React = require('react');

module.exports = React.createClass({
  displayName: 'ButtonGroup',

  getDefaultProps() {
    return {
      style: {},
    };
  },

  render() {
    return (
      <div className="ButtonGroup" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});
