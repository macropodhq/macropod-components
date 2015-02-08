'use strict';

var React = require('react/addons');
var Widgets = require('react-widgets');

require('./calendar.scss');

// TODO: handle null date
module.exports = React.createClass({
  displayName: 'Calendar',

  render() {
    return (
      <Widgets.Calendar {...this.props} />
    );
  }
});
