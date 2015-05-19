'use strict';

const React = require('react');

const AppHeader = require('./');

module.exports = React.createClass({
  displayName: 'AppHeaderExample',

  statics: {
    wide: true,
  },

  render() {
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
  },
});
