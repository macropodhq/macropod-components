'use strict';

require('./button-group.scss');

const React = require('react');

module.exports = React.createClass({
  displayName: 'ButtonGroup',

  render() {
    return (
      <div className="ButtonGroup">
        {this.props.children}
      </div>
    );
  }
});
