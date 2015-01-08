/** @jsx React.DOM */

var React = require('react');

var DateFormatter = require('./');

module.exports = React.createClass({
  displayName: 'DateTime-example',

  render: function() {
    return (
      <div>
        <h3>Date</h3>
        {DateFormatter.date(Date.now())}
        <h3>Date and Time</h3>
        {DateFormatter.dateTime(Date.now())}
        <h3>Time</h3>
        {DateFormatter.time(Date.now())}
        <h3>Custom (DD/MM/YYYY)</h3>
        {DateFormatter.custom(Date.now(), 'DD/MM/YYYY')}
      </div>
    );
  }
});
