/** @jsx React.DOM */

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

  getInitialState: function() {
    return {
      selection: 1
    };
  },

  handleChange: function(data) {
    this.setState({selection: data.id});
  },

  render: function() {
    return (
      <Dropdown data={options} value={this.state.selection} onChange={this.handleChange} textField="name" valueField="id" duration={0} />
    );
  }
});
