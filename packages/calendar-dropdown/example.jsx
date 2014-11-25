/** @jsx React.DOM */

var React = require('react');

var CalendarDropdown = require('./');

var CalendarDropdownExample = module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedDate: new Date(),
    };
  },

  handleChange: function(selectedDate) {
    this.setState({
      selectedDate: selectedDate,
    });
  },

  render: function() {
    return (
      <div>
        <div><strong>selected date:</strong> {this.state.selectedDate ? this.state.selectedDate.toISOString() : 'none'}</div>
        <CalendarDropdown onChange={this.handleChange} value={this.state.selectedDate} />
      </div>
    );
  }
});