/** @jsx React.DOM */

var React = require('react');

var Loading = require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <div>
        <Loading />
        <Loading size='small' />
      </div>
    );
  }
});

module.exports = LoadingExample;
