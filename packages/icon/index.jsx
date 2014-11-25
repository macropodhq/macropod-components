/** @jsx React.DOM */

var React = require('react/addons');
require('./icon.scss');

var Icon = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'arrow-down',
      font: true,
      width: 32,
    };
  },

  componentDidMount: function() {
    if (!this.props.font) {
      var width = this.props.width;
      this.getDOMNode().innerHTML = require('./svgs/icon-' + this.props.type + '.svg');
      this.getDOMNode().firstElementChild.style.width = width + 'px';
    }
  },

  render: function() {
    var component = this.props.component || React.DOM.i;
    var props = {className: 'Icon'};

    if (this.props.font) {
      props['data-am-icon'] = this.props.type;
      props.style = {width: this.props.width};
    }

    return this.transferPropsTo(component(props));
  }
});

module.exports = Icon;
