'use strict';

const React = require('react');
require('./');

module.exports = React.createClass({
  displayName: 'TooltipExample',

  render() {
    return (
      <div>
        <span data-tooltip="Tooltip!">Hover over me (right tooltip)</span> <br />
        <span data-tooltip-left="Tooltip!">Hover over me (left tooltip)</span>
      </div>
    );
  }
});
