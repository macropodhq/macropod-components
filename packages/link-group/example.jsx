'use strict';

const React = require('react');

const LinkGroup = require('./');
const Link = require('../link');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  render() {
    return (
      <LinkGroup>
        <Link route to="link-group" query={{left: true}} default>Left</Link>
        <Link route to="link-group" query={{middle: true}}>Middle</Link>
        <Link route to="link-group" query={{right: true}}>Right</Link>
      </LinkGroup>
    );
  },
});
