/** @jsx React.DOM */

var React = require('react/addons');

var Modal = require('../modal');
var Button = require('../button');

require('./alert.scss');

var Alert = React.createClass({
  propType: {
    onCancel: React.PropTypes.func,
    onOk: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.renderable,
    cancelable: React.PropTypes.boolean,
    cancelText: React.PropTypes.string,
    okText: React.PropTypes.string,
  },

  getInitialState: function() {
    return {};
  },

  getDefaultProps: function() {
    return {
      onCancel: function() {},
      onOk: function() {},
      cancelable: false,
      title: "Please enter a value",
      children: "",
      cancelText: "Cancel",
      okText: "OK",
    };
  },

  handleKeyUp: function(event) {
    if (event.keyCode == 13) {
      this.props.onOk();
    }
  },

  handleCancel: function() {
    this.props.onCancel();
    return false;
  },

  handleOk: function(event) {
    this.props.onOk();
    return false;
  },

  render: function() {
    return (
      <Modal dialogClassName="Alert" onClose={this.handleCancel} title={this.props.title} closeButton={true}>
        <div className="Alert-body">
          {this.props.children}
          <div className="Alert-actions">
            {this.props.cancelable && <Button onClick={this.handleCancel}>{this.props.cancelText}</Button>}
            <Button onClick={this.handleOk}>{this.props.okText}</Button>
          </div>
        </div>
      </Modal>
    );
  },
});

module.exports = Alert;
