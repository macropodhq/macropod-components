'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'TraySticky',

  propTypes: {
    onCalculateHeight: React.PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.onCalculateHeight(this.getDOMNode().getBoundingClientRect().height);
  },

  render() {
    return (
      <div className="Tray-Sticky">
        {this.props.children}
      </div>
    )
  }
});