'use strict';

const React = require('react');

const DeleteButton = require('./');

module.exports = React.createClass({
  displayName: 'DeleteButtonExample',

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
      <div>
        <DeleteButton onClick={this.handleClick}/>
        <br/>
        You've clicked {this.state.count} button{this.state.count === 1 ? '' : 's'}
      </div>
    );
  },
});
