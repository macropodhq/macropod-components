/** @jsx React.DOM */

var React = require('react/addons');
require('./icon.scss');

module.exports = React.createClass({
  displayName: 'Icon',

  getDefaultProps: function() {
    return {
      type: 'arrow-down'
    };
  },

  componentDidMount: function() {
    this.getDOMNode().innerHTML = require('!raw!./svgs/icon-' + this.props.type + '.svg');
  },

  render: function() {
    var component = this.props.component || React.DOM.i;
    var props = {className: 'Icon'};

    return this.transferPropsTo(component(props));
  }
});
