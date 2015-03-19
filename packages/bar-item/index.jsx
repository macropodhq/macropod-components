'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'BarItem',

  getDefaultProps() {
    return {
      notLink: false
    };
  },

  render() {
    var style = {
      padding: 15,
      display: 'inline-block',
      color: 'rgba(255,255,255,0.5)',
      borderLeft: this.props.right ? '1px solid rgba(255, 255, 255, 0.2)' : 0,
      borderRight: this.props.left ? '1px solid rgba(255, 255, 255, 0.2)' : 0
    };

    return (
      <span className="BarItem" style={style}>
        {this.props.children}
      </span>
    );
  }
});