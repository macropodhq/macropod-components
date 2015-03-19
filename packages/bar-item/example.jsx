'use strict';

const React = require('react');

const BarItem = require('./');
const Icon = require('../icon');

module.exports = React.createClass({
  displayName: 'BaritemExample',

  render() {
    return (
      <div style={{
        backgroundColor: 'grey'
      }}>
        <BarItem left><Icon type="user" /></BarItem>
        <BarItem left><Icon type="user-female" /></BarItem>
        <BarItem left><Icon type="users" /></BarItem>
      </div>
    );
  }
});

