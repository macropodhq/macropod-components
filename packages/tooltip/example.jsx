'use strict';

const React = require('react');
require('./');

module.exports = React.createClass({
  displayName: 'TooltipExample',

  render() {
    return (
      <div style={{cursor: 'default'}}>
        <p><span data-tooltip="Tooltip!">Hover over me (right tooltip)</span></p>
        <p><span data-tooltip-left="Tooltip!">Hover over me (left tooltip)</span></p>
      </div>
    );
  }
});
