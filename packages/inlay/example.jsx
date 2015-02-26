'use strict';

const React = require('react');

const Inlay = require('./');

module.exports = React.createClass({
  displayName: 'SubjectInlayExample',

  render() {
    return (
      <div>
        I like to say <Inlay>blah</Inlay>
      </div>
    );
  }
});
