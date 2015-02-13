'use strict';

const React = require('react');

const CalendarDropdown = require('./');

module.exports = React.createClass({
  displayName: 'CalendarDropdownExample',

  getInitialState() {
    return {
      selectedDate: new Date(),
    };
  },

  handleChange(selectedDate) {
    this.setState({
      selectedDate: selectedDate,
    });
  },

  render() {
    return (
      <div>
        <div><strong>selected date:</strong> {this.state.selectedDate ? this.state.selectedDate.toISOString() : 'none'}</div>
        <CalendarDropdown onChange={this.handleChange} value={this.state.selectedDate} />
      </div>
    );
  }
});
