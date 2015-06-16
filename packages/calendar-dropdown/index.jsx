'use strict';

const React = require('react/addons');
const Widgets = require('react-widgets');

// require('./calendar-dropdown.pcss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'CalendarDropdown',

  getDefaultProps() {
    return {
      footer: false,
    };
  },

  render() {
    return (
      <Widgets.DateTimePicker {...this.props} />
    );
  },
});
