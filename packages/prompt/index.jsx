/** @jsx React.DOM */

var React = require('react/addons');

var Modal = require('../modal');
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

  handleCancel: function(event) {
    event.preventDefault();
    this.props.onCancel();
  },

  handleOk: function(event) {
    event.preventDefault();
    this.props.onOk(this.state.value);
  },

  handleValueChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <div className="Prompt">
        <Modal onClose={this.handleCancel}>
          <div className="Prompt-header">
            {this.props.cancelable && <a href="#" onClick={this.handleCancel}>×</a>}
            <h3>{this.props.title}</h3>
          </div>
          <div className="Prompt-body">
            <p>{this.props.content}</p>
            <input type="text" ref="promptInput" onChange={this.handleValueChange} value={this.state.value} onKeyUp={this.handleKeyUp} defaultValue={this.props.defaultValue} />
            <div className="Prompt-actions">
              {this.props.cancelable && <Button onClick={this.handleCancel}>{this.props.cancelText}</Button>}
              <Button onClick={this.handleOk}>{this.props.okText}</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
});

module.exports = Prompt;
