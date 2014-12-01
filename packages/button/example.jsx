/** @jsx React.DOM */

var React = require('react');

var Button = require('./');

var ButtonExample = module.exports = React.createClass({
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
        <Button disabled={true}>Can't click me</Button>
      </div>
    );
  }
});
