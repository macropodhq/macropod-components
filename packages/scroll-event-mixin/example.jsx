'use strict';

const React = require('react');

const ScrollEventMixin = require('./');

const scrollevent = ScrollEventMixin({
  interval: 100,
  timeout: 300
});

module.exports = React.createClass({
  displayName: 'ScrollEventMixinExample',

  mixins: [scrollevent],

  getInitialState() {
    return {
      content: 'You haven\'t scrolled yet.'
    };
  },

  onScrollStart() {
    this.setState({content: 'Yeah, you\'re scrolling.'});
  },

  onScrollEnd() {
    this.setState({content: 'You stopped scrolling. :('});
  },

  render() {
    return (
      <span>{this.state.content}</span>
    );
  }
});
