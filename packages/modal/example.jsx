/** @jsx React.DOM */

var React = require('react');

var Button = require('../button');
var Modal = require('./');

var ModalExample = module.exports = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
    };
  },

  handleClick: function() {
    this.setState({
      showModal: true,
    });
  },

  handleClose: function() {
    this.setState({
      showModal: false,
    });
  },

  render: function() {
    return (
      <div>
        <Button onClick={this.handleClick}>I choose you, MODAL!</Button>
        {this.state.showModal &&
          <Modal ref="modal" onClose={this.handleClose}>
            <Button onClick={this.handleClose}>Close me!</Button>
          </Modal>
        }
      </div>
    );
  }
});
