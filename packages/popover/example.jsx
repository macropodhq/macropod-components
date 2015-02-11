'use strict';

const React = require('react');

const Popover = require('./');
const Button = require('../button');

module.exports = React.createClass({
  displayName: 'PopoverExample',

  getInitialState() {
    return {
      showPopover: false
    };
  },

  toggleMenu(e) {
    this.setState({showPopover: !this.state.showPopover});
    e.preventDefault();
  },

  render() {
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
