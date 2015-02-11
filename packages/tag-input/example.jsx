'use strict';

const React = require('react');

const TagInput = require('./');

const options = [
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

module.exports = React.createClass({
  displayName: 'TagInputExample',

  getInitialState() {
    return {
      value: null
    };
  },

  handleChange(selection) {
    this.setState({
      value: selection
    });
  },

  render() {
    return (
      <TagInput onChange={this.handleChange} data={options} placeholder="Make some breakfast..." duration={0} textField="name" valueField="id" value={this.state.value}/>
    );
  }
});
