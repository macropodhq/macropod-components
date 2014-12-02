/** @jsx React.DOM */

var React = require('react/addons');

var Alert = require('../alert');
var Button = require('../button');

require('./prompt.scss');

var Prompt = React.createClass({
  propType: {
    onCancel: React.PropTypes.func,
    onOk: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.renderable.isRequired,
    cancelable: React.PropTypes.boolean,
    defaultValue: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    cancelText: React.PropTypes.string,
    okText: React.PropTypes.string,
  },

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    this.refs.promptInput.getDOMNode().focus();
  },

  getDefaultProps: function() {
    return {
      onCancel: function() {},
      onOk: function() {},
      cancelable: true,
      defaultValue: "",
      placeholder: "",
      title: "Please enter a value",
      content: "",
      cancelText: "Cancel",
      okText: "OK",
    };
  },

  handleKeyUp: function(event) {
    if (event.keyCode == 13) {
      this.props.onOk(this.state.value);
    }
  },

  handleCancel: function() {
    this.props.onCancel(this.state.value);
    return false;
  },

  handleOk: function(event) {
    this.props.onOk(this.state.value);
    return false;
  },

  handleValueChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <Alert
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        cancelable={this.props.cancelable}
        title={this.props.title}
        cancelText={this.props.cancelText}
        okText={this.props.okText}>
        <p>{this.props.content}</p>
        <input type="text" ref="promptInput" onChange={this.handleValueChange} onKeyUp={this.handleKeyUp} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder} />
      </Alert>
    );
  },
});

module.exports = Prompt;
