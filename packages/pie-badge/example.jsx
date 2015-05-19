'use strict';

const React = require('react');

const PieBadge = require('./');

module.exports = React.createClass({
  displayName: 'PieBadgeExample',

  render() {
    return (
      <div>
        <PieBadge />
        <PieBadge total="10" complete="1" />
        <PieBadge total="6" complete="1" />
        <PieBadge total="5" complete="2" />
        <PieBadge total="8" complete="4" />
        <PieBadge total="6" complete="4" />
        <PieBadge total="5" complete="5" />
      </div>
    );
  },
});
