/** @jsx React.DOM */

var React = require('react/addons');
var Widgets = require('react-widgets');

require('./calendar-dropdown.scss');
require('../calendar/calendar.scss');

// TODO: handle null date
var CalendarDropdown = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <Widgets.DateTimePicker />
    );
  }
});

module.exports = CalendarDropdown;
