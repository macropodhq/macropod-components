'use strict';

const React = require('react');

const DropdownMenu = require('./');
const Button = require('../button');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'DropdownMenuExample',

  getInitialState() {
    return {
      showFirstMenu: false,
      showSecondMenu: false
    };
  },

  toggleFirstMenu(e) {
    this.setState({showFirstMenu: !this.state.showFirstMenu});
    e.preventDefault();
  },

  toggleSecondMenu(e) {
    this.setState({showSecondMenu: !this.state.showSecondMenu});
    e.preventDefault();
  },

  toggleThirdMenu(e) {
    this.setState({showThirdMenu: !this.state.showThirdMenu});
    e.preventDefault();
  },

  render() {
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
        <Button ref="thirdMenuButton" onClick={this.toggleThirdMenu}>
          This is a really long button for testing right aligned dropdown menus
        </Button>
        <DropdownMenu
          className="DropdownMenu--account"
          anchor={this.refs.thirdMenuButton}
          visible={this.state.showThirdMenu}
          close={this.toggleThirdMenu}
          align="right">
          <dl>
            <dd><a href="#">Stepping to the right</a></dd>
          </dl>
        </DropdownMenu>
      </div>
    );
  }
});
