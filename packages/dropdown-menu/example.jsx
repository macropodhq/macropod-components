/** @jsx React.DOM */

var React = require('react');

var DropdownMenu = require('./');
var Button = require('../button');

var LoadingExample = React.createClass({
  getInitialState: function() {
    return {
      showMenu: false
    };
  },
  toggleMenu: function(e) {
    this.setState({showMenu: !this.state.showMenu});
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <Button ref="menuAnchor" onClick={this.toggleMenu}>
          My Fancy Menu
        </Button>
        <DropdownMenu className="DropdownMenu--account" anchor={this.refs.menuAnchor} visible={this.state.showMenu} close={this.toggleMenu}>
          <dl>
            <dt>Tasks</dt>
            <dd><a href="#">Reticulate Splines</a></dd>
            <dd><a href="#">Combobulate</a></dd>
            <dd><a href="#">Download the Internet</a></dd>
          </dl>
          <dl>
            <dd><a href="#">Renew Subscription</a></dd>
          </dl>
          <dl>
            <dd><a href="#">Log Out</a></dd>
          </dl>
        </DropdownMenu>
      </div>
    );
  }
});

module.exports = LoadingExample;