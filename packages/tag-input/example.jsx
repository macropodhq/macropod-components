'use strict';

const React = require('react');
const TagInput = require('./');

module.exports = React.createClass({
  displayName: 'TagInputExample',

  getInitialState() {
    return {
      value: [],
      options: [
        {
          id: 1,
          name: 'Eggs',
        },
        {
          id: 2,
          name: 'Bacon',
        },
        {
          id: 3,
          name: 'Hash Browns',
        },
        {
          id: 4,
          name: 'Sausage',
        },
        {
          id: 5,
          name: 'Tomato',
        },
        {
          id: 6,
          name: 'Toast',
        },
        {
          id: 7,
          name: 'Quinoa',
        },
        {
          id: 8,
          name: 'Salmon',
        },
      ],
    };
  },

  handleChange(selection) {
    this.setState({
      value: selection,
    });
  },

  handleCreate(value) {
    if (typeof value === 'string' && value.length > 0) {
      const newValue = {
        id: this.state.options.length + 2,
        name: value,
      };

      const options = this.state.options.slice(0);
      options.push(newValue);

      this.setState({options: options});

      value = this.state.value.slice(0);
      value.push(newValue);

      this.handleChange(value);
    }
  },

  render() {
    return (
      <TagInput
        onChange={this.handleChange}
        data={this.state.options}
        placeholder="Make some breakfast..."
        duration={0}
        textField="name"
        valueField="id"
        value={this.state.value}
        onCreate={this.handleCreate} />
    );
  },
});
