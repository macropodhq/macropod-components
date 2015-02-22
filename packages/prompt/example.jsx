'use strict';

const React = require('react');

const Button = require('../button');
const Prompt = require('./');

module.exports = React.createClass({
  displayName: 'PromptExample',

  getInitialState() {
    return {
      showPrompt: false,
      promptState: 'Not yet shown',
      promptTitle: 'I just need to know!',
      promptContent: 'How much wood would a Woodchuck chuck if a Woodchuck could chuck wood?',
      promptDefaultValue: 'A lot!',
      promptCancelable: true,
      promptValidateInput: true,
      promptValue: ''
    };
  },

  handleClick() {
    this.setState({
      showPrompt: true,
    });
  },

  handleCancel() {
    this.setState({
      promptValue: '',
      showPrompt: false,
      promptState: 'Canceled',
    });
  },

  handleOk(value) {
    this.setState({
      promptValue: value,
      showPrompt: false,
      promptState: 'Completed',
    });
  },

  handleTitleChange(evt) {
    this.setState({
      promptTitle: evt.target.value
    });
  },

  handleContentChange(evt) {
    this.setState({
      promptContent: event.target.value
    });
  },

  handleDefaultValueChange(evt) {
    this.setState({
      promptDefaultValue: evt.target.value
    });
  },

  handleCancelableChange(evt) {
    this.setState({
      promptCancelable: evt.target.checked
    });
  },

  handleValidateInputChange(evt) {
    this.setState({
      promptValidateInput: evt.target.checked
    });
  },

  validateInput(value) {
    if (this.state.promptValidateInput === false) {
      return true;
    }
    return value.length > 0 && value.length % 2 === 0;
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleTitleChange} value={this.state.promptTitle} />
        <br />
        <textarea onChange={this.handleContentChange} value={this.state.promptContent} />
        <br />
        <input type="text" onChange={this.handleDefaultValueChange} value={this.state.promptDefaultValue} />
        <br />
        <label><input type="checkbox" onChange={this.handleCancelableChange} checked={this.state.promptCancelable}></input> Cancelable</label>
        <br />
        <label><input type="checkbox" onChange={this.handleValidateInputChange} checked={this.state.promptValidateInput}></input> Validate (require even lengthed input)</label>
        <br />
        <Button onClick={this.handleClick}>Show Prompt</Button>

        <br />
        Prompt State: <strong>{this.state.promptState}</strong>
        <br />
        Prompt Value: <strong>{this.state.promptValue}</strong>

        {this.state.showPrompt &&
          <Prompt
            cancelable={this.state.promptCancelable}
            title={this.state.promptTitle}
            content={this.state.promptContent}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            defaultValue={this.state.promptDefaultValue}
            validateInput={this.validateInput}
          />
        }
      </div>
    );
  }
});
