/** @jsx React.DOM */

var React = require('react');

var Popover = require('./');
var Button = require('../button');

module.exports = React.createClass({
  displayName: 'PopoverExample',

  getInitialState: function() {
    return {
      showPopover: false
    };
  },

  toggleMenu: function(e) {
    this.setState({showPopover: !this.state.showPopover});
    e.preventDefault();
  },

  render: function() {
    return (
      <div>
        <Button ref="popoverAnchor" onClick={this.toggleMenu}>
          Show
        </Button>
        <Popover anchor={this.refs.popoverAnchor} visible={this.state.showPopover} close={this.toggleMenu}>
          Surprise!
        </Popover>
      </div>
    );
  }
});
