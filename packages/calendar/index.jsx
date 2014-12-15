/** @jsx React.DOM */

var React = require('react/addons');
var Widgets = require('react-widgets');

require('./calendar.scss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'Calendar',

  render: function() {
    return this.transferPropsTo(
      <Widgets.Calendar />
    );
  }
});
