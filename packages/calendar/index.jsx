'use strict';

const React = require('react/addons');
const Widgets = require('react-widgets');

require('./calendar.pcss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'Calendar',

  render() {
    return (
      <Widgets.Calendar {...this.props} />
    );
  },
});
