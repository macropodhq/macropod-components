'use strict';

var React = require('react/addons');

var Alert = require('../alert');
var Button = require('../button');

require('./prompt.scss');

var noop = () => {};

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
      valid: true
    };
  },

  componentDidMount() {
    this.refs.promptInput.getDOMNode().focus();
    this.setState({
      valid: this.props.validateInput(this.props.defaultValue),
    });
  },

  getDefaultProps() {
    return {
      onCancel: noop,
      onOk: noop,
      cancelable: true,
      defaultValue: "",
      placeholder: "",
      title: "Please enter a value",
      content: "",
      cancelText: "Cancel",
      okText: "OK",
      validateInput: () => true
    };
  },

  handleKeyUp(event) {
    if (this.state.valid && event.keyCode == 13) {
      this.props.onOk(this.state.value);
    }
  },

  handleCancel() {
    this.props.onCancel(this.state.value);
    return false;
  },

  handleOk(event) {
    this.props.onOk(this.state.value);
    return false;
  },

  handleValueChange(event) {
    this.setState({
      value: event.target.value,
      valid: this.props.validateInput(event.target.value),
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
        okDisabled={!this.state.valid}>
        <p>{this.props.content}</p>
        <input type="text" ref="promptInput" onChange={this.handleValueChange} onKeyUp={this.handleKeyUp} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder} />
      </Alert>
    );
  },
});
