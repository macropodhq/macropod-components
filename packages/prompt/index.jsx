'use strict';

const React = require('react/addons');

const Alert = require('../alert');
const InputText = require('../form/input-text');

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
      valid: true,
    };
  },

  componentDidMount() {
    this.refs.promptInput.focusInput();
    this.refs.promptInput.selectInputValue();
    this.setState({
      valid: this.props.validateInput(this.props.defaultValue),
    });
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
      validateInput: () => true,
    };
  },

  handleKeyUp(event) {
    if (this.state.valid && event.keyCode === 13) {
      this.props.onOk(this.state.value);
    }
  },

  handleCancel(evt) {
    evt.preventDefault();
    this.props.onCancel(this.state.value);
  },

  handleOk(evt) {
    evt.preventDefault();
    this.props.onOk(this.state.value);
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

        <InputText
          label={this.props.content}
          onChange={this.handleValueChange}
          onKeyUp={this.handleKeyUp}
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          ref="promptInput"
        />
      </Alert>
    );
  },
});
