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
        {this.state.count}
      </div>
    );
  }
});
