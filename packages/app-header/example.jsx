/** @jsx React.DOM */

var React = require('react');

var AppHeader = require('./');

var Example = React.createClass({
  render: function() {
    return (
      <AppHeader title="App Header">
        <a href="#" className="AppHeader-brand-navigation-link">Home</a>
        <a href="#" className="AppHeader-brand-navigation-link">About</a>
        <a href="#" className="AppHeader-brand-navigation-link">Contact</a>
      </AppHeader>
    );
  }
});

module.exports = Example;
