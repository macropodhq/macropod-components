/** @jsx React.DOM */

var React = require('react/addons');
require('./icon.scss');

var Icon = React.createClass({
  render: function() {
    var component = this.props.component || React.DOM.i;
    return this.transferPropsTo(<component data-am-icon={this.props.type}/>)
  }
});

module.exports = Icon;
