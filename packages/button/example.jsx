/** @jsx React.DOM */

var React = require('react');

var Button = require('./');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  getInitialState: function() {
    return {
      count: 0
    };
  },

  handleClick: function(e) {
    this.setState({click: this.state.count++});
  },

  render: function() {
    return (
      <div>
        <Button onClick={this.handleClick}>What what?</Button>
        <br/>
        Clicked {this.state.count} time{this.state.count === 1 ? '' : 's'}
        <br/><br/>
        <Button type="huedemo">Has background-color support</Button>
        <br/>
        <Button type="huedemo" disabled>Can be disabled!</Button>
      </div>
    );
  }
});
