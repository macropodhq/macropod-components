'use strict';

var React = require('react');

var CovertHeader = require('./');
var Button = require('../button');

module.exports = React.createClass({
  displayName: 'CovertHeaderExample',

  getInitialState() {
    return {
      show: false
    };
  },

  toggleHeader() {
    this.setState({show: !this.state.show});
  },

  render() {
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
