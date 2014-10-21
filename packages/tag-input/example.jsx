/** @jsx React.DOM */

var React = require('react');

var TagInput = require('./');

var options = [
  {
    id: 1,
    name: 'Eggs'
  },
  {
    id: 2,
    name: 'Bacon'
  },
  {
    id: 3,
    name: 'Hash Browns'
  },
  {
    id: 4,
    name: 'Sausage'
  },
  {
    id: 5,
    name: 'Tomato'
  },
  {
    id: 6,
    name: 'Toast'
  },
  {
    id: 7,
    name: 'Quinoa'
  },
  {
    id: 8,
    name: 'Salmon'
  }
];

var TagInputExample = React.createClass({
  getInitialState: function() {
    return {
      value: null
    };
  },
  handleChange: function(selection) {
    this.setState({
      value: selection
    });
  },
  render: function() {
    return (
      <TagInput onChange={this.handleChange} data={options} placeholder="Make some breakfast..." duration={0} textField="name" valueField="id" value={this.state.value}/>
    );
  }
});

module.exports = TagInputExample;
