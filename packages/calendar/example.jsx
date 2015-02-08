'use strict';

var React = require('react');

var Calendar = require('./');

module.exports = React.createClass({
  displayName: 'CalendarExample',

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
        <Calendar onChange={this.handleChange} value={this.state.selectedDate} />
      </div>
    );
  }
});
