'use strict';

const React = require('react');

const style = {
  item: {
    margin: 0,
    padding: '3px 0',
    overflow: 'hidden',
  },
}

module.exports = React.createClass({
  displayName: 'TrayItem',

  getDefaultProps() {
    return {
      style: {},
    };
  },

  getStyle() {
    return Object.assign({}, style.item, this.props.style);
  },

  render() {
    return (
      <dd className="Tray-Item" style={style.item}>
        {this.props.children}
      </dd>
    )
  }
});