/** @jsx React.DOM */

var React = require('react');

var ScrollEventMixin = require('./');

var scrollevent = ScrollEventMixin({
  interval: 100,
  timeout: 300
});

var ScrollEventMixinExample = React.createClass({
  mixins: [scrollevent],

  getInitialState: function() {
    return {
      content: 'Let\'s play a game'
    };
  },

  onScrollStart: function() {
    this.setState({content: 'Yeah, you\'re scrolling.'});
  },

  onScrollEnd: function() {
    this.setState({content: 'Stop staring at me and start scrolling, freak.'});
  },

  render: function() {
    return (
      <p>{this.state.content}</p>
    );
  }
});

module.exports = ScrollEventMixinExample;
