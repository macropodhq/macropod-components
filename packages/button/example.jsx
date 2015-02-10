'use strict';

var React = require('react');

var Button = require('./');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

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
        <Button onClick={this.handleClick}>What what?</Button>
        <Button className="Button--huedemo" onClick={this.handleClick}>Accepts a <code>className</code>, and accepts any <code>background-color</code></Button>
        <Button success onClick={this.handleClick}>Can indicate success</Button>
        <Button cancel onClick={this.handleClick}>Can indicate danger or cancel</Button>
        <Button disabled onClick={this.handleClick}>Can be disabled</Button>
        <Button small onClick={this.handleClick}>Can be small</Button>
        <br/>
        You've clicked {this.state.count} button{this.state.count === 1 ? '' : 's'}
      </div>
    );
  }
});
