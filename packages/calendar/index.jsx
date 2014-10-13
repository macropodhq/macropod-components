/** @jsx React.DOM */

var React = require('react/addons');
var Widgets = require('react-widgets');

require('./calendar.scss');

// TODO: handle null date
var Calendar = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <Widgets.Calendar />
    );
  }
});

module.exports = Calendar;
