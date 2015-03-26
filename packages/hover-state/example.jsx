'use strict';

const React = require('react/addons');
const attachHoverState = require('./');

const style = {
  base: {
    width: 100,
    height: 100,
    background: 'red',
  },

  hover: {
    background: 'blue',
  },
}

module.exports = React.createClass({
  displayName: 'HoverMixinExample',

  getInitialState() {
    return {
      hover: false
    };
  },

  getStyle() {
    return Object.assign(
      {},
      style.base,
      this.state.hover ? style.hover : null
    );
  },

  render() {
    return (
      <div {...attachHoverState(this)} style={this.getStyle()} />
    );
  }
});
