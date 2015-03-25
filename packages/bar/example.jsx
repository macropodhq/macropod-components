'use strict';

const React = require('react');

const Bar = require('./');
const Icon = require('../icon');

module.exports = React.createClass({
  displayName: 'BarExample',

  statics: {
    wide: true,
  },

  render() {
    const linkStyle = {
      color: 'inherit'
    };

    return (
      <Bar>
        <Bar.Item left>
          <a href="#" style={linkStyle}>
            <Icon type="home" />
          </a>
        </Bar.Item>
        <Bar.Item center>Account</Bar.Item>
        <Bar.Item right>
          <a href="#" style={linkStyle}>
            <Icon type="settings" />
          </a>
        </Bar.Item>
        <Bar.Item right>
          <a href="#" style={linkStyle}>
            <Icon type="user" />
          </a>
        </Bar.Item>
      </Bar>
    );
  }
});

