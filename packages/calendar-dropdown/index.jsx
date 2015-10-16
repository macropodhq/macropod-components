'use strict';

const React = require('react');
const Widgets = require('react-widgets');
const moment = require('moment');
const momentLocalizer = require('../../util/english-localizer');

Widgets.setDateLocalizer(momentLocalizer(moment));
require('./calendar-dropdown.scss');

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
