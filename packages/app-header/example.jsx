/** @jsx React.DOM */

var React = require('react');

var AppHeader = require('./');

var Example = React.createClass({
  render: function() {
    return (
      <AppHeader 
        title="App Header"
        navRight={
          <span>
            <a href="#" className="AppHeader-link">Home</a>
            <a href="#" className="AppHeader-link">About</a>
            <a href="#" className="AppHeader-link">Contact</a>
          </span>
        }
      ></AppHeader>
    );
  }
});

module.exports = Example;
