'use strict';

var React = require('react');

var Dropdown = require('./');

var options = [
  {
    id: 1,
    name: 'Google'
  },
  {
    id: 2,
    name: 'Yahoo'
  },
  {
    id: 3,
    name: 'Bing'
  },
  {
    id: 4,
    name: 'DuckDuckGo'
  }
];

module.exports = React.createClass({
  displayName: 'DropdownExample',

  getInitialState() {
    return {
      selection: 1
    };
  },

  handleChange(data) {
    this.setState({selection: data.id});
  },

  render() {
    return (
      <Dropdown data={options} value={this.state.selection} onChange={this.handleChange} textField="name" valueField="id" duration={0} />
    );
  }
});
