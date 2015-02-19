'use strict';

const React = require('react/addons');

const Modal = require('../modal');
const Button = require('../button');

require('./alert.scss');

const noop = () => {};

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

  getInitialState() {
    return {};
  },

  getDefaultProps() {
    return {
      onCancel: noop,
      onOk: noop,
      cancelable: false,
      title: 'Please enter a value',
      children: '',
      cancelText: 'Cancel',
      okText: 'OK',
      okDisabled: false,
    };
  },

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.onOk();
    }
  },

  handleCancel() {
    this.props.onCancel();
    return false;
  },

  handleOk() {
    this.props.onOk();
    return false;
  },

  render() {
    return (
      <Modal dialogClassName="Alert" onClose={this.handleCancel} title={this.props.title} closeButton={true}>
        <div className="Alert-body">
          {this.props.children}
          <div className="Alert-actions">
            {this.props.cancelable && <Button skeleton type="cancel" onClick={this.handleCancel}>{this.props.cancelText}</Button>}
            <Button onClick={this.handleOk} disabled={this.props.okDisabled}>{this.props.okText}</Button>
          </div>
        </div>
      </Modal>
    );
  },
});
