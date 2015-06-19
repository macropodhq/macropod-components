'use strict';

const React = require('react');

const Button = require('./');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  getInitialState() {
    return {
      count: 0,
    };
  },

  handleClick() {
    this.setState({click: this.state.count++});
  },

  render() {
    return (
      <div className="ButtonExample">
        <Button onClick={this.handleClick}>Default</Button><br />
        <Button success onClick={this.handleClick}>Success</Button><br />
        <Button danger onClick={this.handleClick}>Danger</Button><br />
        <Button disabled onClick={this.handleClick}>Disabled (default)</Button><br />
        <Button cancel onClick={this.handleClick}>Cancel</Button><br />
        <Button skeleton onClick={this.handleClick}>Skeleton (no border, outline or background)</Button><br />
        <Button small onClick={this.handleClick}>Small</Button><br />
        <Button className="Button--custom" onClick={this.handleClick}>Custom</Button>
        <br/>
        You've clicked {this.state.count} button{this.state.count === 1 ? '' : 's'}
      </div>
    );
  },
});
