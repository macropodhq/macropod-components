'use strict';

const React = require('react/addons');

const Alert = require('../alert');

require('./prompt.scss');

const noop = () => {};

module.exports = React.createClass({
  displayName: 'Prompt',

  propType: {
    onCancel: React.PropTypes.func,
    onOk: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.node.isRequired,
    cancelable: React.PropTypes.boolean,
    defaultValue: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    cancelText: React.PropTypes.string,
    okText: React.PropTypes.string,
    validateInput: React.PropTypes.func,
  },

  getInitialState() {
    return {
      value: '',
    };
  },

  componentDidMount() {
    this.refs.promptInput.getDOMNode().focus();
  },

  getDefaultProps() {
    return {
      onCancel: noop,
      onOk: noop,
      cancelable: true,
      defaultValue: '',
      placeholder: '',
      title: 'Please enter a value',
      content: '',
      cancelText: 'Cancel',
      okText: 'OK',
      validateInput: () => true
    };
  },

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.handleOk(this.state.value);
    }
  },

  handleCancel() {
    this.props.onCancel(this.state.value);
  },

  handleOk() {
    if (this.props.validateInput(this.state.value)) {
      this.props.onOk(this.state.value);
    }
  },

  handleValueChange(evt) {
    this.setState({
      value: evt.target.value,
    });
  },

  render() {
    return (
      <Alert
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        cancelable={this.props.cancelable}
        title={this.props.title}
        cancelText={this.props.cancelText}
        okText={this.props.okText}
        okDisabled={!this.props.validateInput(this.state.value)}>
        <p>{this.props.content}</p>
        <input type="text" ref="promptInput" onChange={this.handleValueChange} onKeyDown={this.handleKeyDown} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder} />
      </Alert>
    );
  },
});
