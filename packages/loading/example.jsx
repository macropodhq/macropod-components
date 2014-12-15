/** @jsx React.DOM */

var React = require('react');

var Loading = require('./');

module.exports = React.createClass({
  displayName: 'LoadingExample',

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
