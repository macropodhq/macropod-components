'use strict';

const React = require('react');

const Loading = require('./');

module.exports = React.createClass({
  displayName: 'LoadingExample',

  render() {
    return (
      <div>
        <Loading />
        <Loading size="medium" />
        <Loading size="small" />
      </div>
    );
  },
});
