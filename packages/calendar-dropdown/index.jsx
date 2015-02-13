'use strict';

const React = require('react/addons');
const Widgets = require('react-widgets');

require('./calendar-dropdown.scss');
require('../calendar/calendar.scss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'CalendarDropdown',

  render() {
    return (
      <Widgets.DateTimePicker {...this.props} />
    );
  }
});
