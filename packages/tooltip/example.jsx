'use strict';

const React = require('react');
require('./');

module.exports = React.createClass({
  displayName: 'TooltipExample',

  render() {
    return (
      <span data-tooltip="Tooltip!">Hover over me</span>
    );
  }
});
