'use strict';

var React = require('react');

var Button = require('../button');
var Modal = require('./');

module.exports = React.createClass({
  displayName: 'ModalExample',

  getInitialState() {
    return {
      showModal: false,
    };
  },

  handleClick() {
    this.setState({
      showModal: true,
    });
  },

  handleClose() {
    this.setState({
      showModal: false,
    });
  },

  render() {

    return (
      <div>
        <Button onClick={this.handleClick}>Serve up one with all the trimmings</Button>
        {this.state.showModal &&
          <Modal ref="modal" onClose={this.handleClose} 
            closeButton="true"
            maxWidth="400px"
            maxHeight="100%"
            title={
              "Header"
            }
            footer={
              <Button>save</Button>
            }>
            <div className="Modal-body">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.

Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </div>
          </Modal>
        }
      </div>
    );
  }
});
