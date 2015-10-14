'use strict';

const React = require('react/addons');
const Widgets = require('react-widgets');
const moment = require('moment')
const momentLocalizer = require('react-widgets-moment-localizer')

Widgets.setDateLocalizer(momentLocalizer(moment));

require('./calendar.scss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'Calendar',

  render() {
    return (
      <Widgets.Calendar {...this.props} />
    );
  },
});
