'use strict';

const React = require('react');

const Link = require('./');

module.exports = React.createClass({
  displayName: 'LinkExample',

  getInitialState() {
    return {
      count: 0
    };
  },

  handleClick() {
    this.setState({click: this.state.count++});
  },

  render() {
    return (
      <div>
        <Link onClick={this.handleClick}>Click Me!</Link> <br/>
        <Link onClick={this.handleClick} small>Click Me!</Link> <br/>
        <Link onClick={this.handleClick} fill>Click Me!</Link>
        <Link onClick={this.handleClick} fillCenter>Click Me!</Link>
        <br/>
        You've clicked {this.state.count} link{this.state.count === 1 ? '' : 's'}
      </div>
    );
  }
});
