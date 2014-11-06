/** @jsx React.DOM */

var React = require('react');

var Loading = require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <div>
        <Loading />
        <Loading type='circle' />
        <Loading size='small' />
        <Loading type='circle' size='small' />
      </div>
    );
  }
});

module.exports = LoadingExample;
