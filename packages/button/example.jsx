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
        <Button className="Button--huedemo">Has the ability to hack in variants</Button>
        <br/>
        <Button disabled>Can be disabled!</Button>
        <br/>
        <Button small>Can be small!</Button>
        <br/>
        <Button success>Can be success!</Button>
        <br/>
        <Button cancel>Can be cancel!</Button>
      </div>
    );
  }
});
