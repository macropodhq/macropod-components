/** @jsx React.DOM */

var React = require('react');

var DropdownMenu = require('./');
var Button = require('../button');
require('./example.scss');

var LoadingExample = React.createClass({
  getInitialState: function() {
    return {
      showFirstMenu: false,
      showSecondMenu: false
    };
  },

  toggleFirstMenu: function(e) {
    this.setState({showFirstMenu: !this.state.showFirstMenu});
    e.preventDefault();
  },

  toggleSecondMenu: function(e) {
    this.setState({showSecondMenu: !this.state.showSecondMenu});
    e.preventDefault();
  },

  render: function() {
    return (
      <div className="DropdownMenuExample">
        <Button ref="firstMenuButton" onClick={this.toggleFirstMenu}>
          My Fancy Menu
        </Button>
        <DropdownMenu
          className="DropdownMenu--account"
          anchor={this.refs.firstMenuButton}
          visible={this.state.showFirstMenu}
          close={this.toggleFirstMenu}
          footer={
            <dl>
              <dd><a href="#">Footer</a></dd>
            </dl>
          }>
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
        <Button ref="secondMenuButton" onClick={this.toggleSecondMenu}>
          A menu without a footer
        </Button>
        <DropdownMenu
          className="DropdownMenu--account"
          anchor={this.refs.secondMenuButton}
          visible={this.state.showSecondMenu}
          close={this.toggleSecondMenu}>
          <dl>
            <dd><a href="#">New Universe</a></dd>
            <dd><a href="#">Open&hellip;</a></dd>
            <dd><a href="#">Save</a></dd>
          </dl>
        </DropdownMenu>
      </div>
    );
  }
});

module.exports = LoadingExample;