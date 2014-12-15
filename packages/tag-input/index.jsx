/** @jsx React.DOM */

var React = require('react/addons');

var Widgets = require('react-widgets');

require('./tag-input.scss');

module.exports = React.createClass({
  displayName: 'TagInput',

  render: function() {
    return this.transferPropsTo(<Widgets.Select />);
  }
});
