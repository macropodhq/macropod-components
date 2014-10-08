/** @jsx React.DOM */

var React = require('react');

var Loading = require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <div>
        <Loading mainColor='#000' secondaryColor='#333' />
        <Loading mainColor='#000' secondaryColor='#333' size='small' />
        <Loading mainColor='#6ca0c1' secondaryColor='#232735' />
      </div>
    );
  }
});

module.exports = LoadingExample;
