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
      content: 'Let\'s play a game'
    };
  },

  onScrollStart() {
    this.setState({content: 'Yeah, you\'re scrolling.'});
  },

  onScrollEnd() {
    this.setState({content: 'Stop staring at me and start scrolling, freak.'});
  },

  render() {
    return (
      <p>{this.state.content}</p>
    );
  }
});
