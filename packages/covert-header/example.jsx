/** @jsx React.DOM */

var React = require('react');

var CovertHeader = require('./');
var Button = require('../button');

var LoadingExample = React.createClass({
  getInitialState: function() {
    return {
      show: false
    }
  },

  toggleHeader: function() {
    this.setState({show: !this.state.show});
  },

  render: function() {
    return (
      <div>
        <Button onClick={this.toggleHeader}>{this.state.show ? 'Hide' : 'Show'}</Button>

        <CovertHeader style={{'display': this.state.show ? 'block' : 'none'}}>
          Scroll up, scroll down.
        </CovertHeader>
      </div>
    );
  }
});

module.exports = LoadingExample;