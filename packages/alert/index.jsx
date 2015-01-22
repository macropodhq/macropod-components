/** @jsx React.DOM */

var React = require('react/addons');

var Modal = require('../modal');
var Button = require('../button');

require('./alert.scss');

module.exports = React.createClass({
  displayName: 'Alert',

  propType: {
    onCancel: React.PropTypes.func,
    onOk: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.node,
    cancelable: React.PropTypes.boolean,
    cancelText: React.PropTypes.string,
    okText: React.PropTypes.string,
    okDisabled: React.PropTypes.boolean,
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
      okDisabled: false,
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
            {this.props.cancelable && <Button type="cancel" onClick={this.handleCancel}>{this.props.cancelText}</Button>}
            <Button onClick={this.handleOk} disabled={this.props.okDisabled}>{this.props.okText}</Button>
          </div>
        </div>
      </Modal>
    );
  },
});
