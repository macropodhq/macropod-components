'use strict';

const React = require('react');

const InputText = require('../form/input-text');
const InputTextarea = require('../form/input-textarea');
const InputCheckbox = require('../form/input-checkbox');

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

  handleTitleChange(event) {
    this.setState({
      promptTitle: event.target.value
    });
  },

  handleContentChange(event) {
    this.setState({
      promptContent: event.target.value
    });
  },

  handleDefaultValueChange(event) {
    this.setState({
      promptDefaultValue: event.target.value
    });
  },

  handleCancelableChange(event) {
    this.setState({
      promptCancelable: event.target.checked
    });
  },

  handleValidateInputChange(event) {
    this.setState({
      promptValidateInput: event.target.checked
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
        <InputText 
          onChange={this.handleTitleChange}
          value={this.state.promptTitle}
          showLabel={false}
          placeholder="prompt title" />

        <InputTextarea
          onChange={this.handleContentChange}
          value={this.state.promptContent}
          showLabel={false}
          placeholder="prompt content" />

        <InputText 
          onChange={this.handleDefaultValueChange}
          value={this.state.promptDefaultValue}
          showLabel={false}
          placeholder="prompt default value" />

        <InputCheckbox 
          onChange={this.handleCancelableChange}
          checked={this.state.promptCancelable}
          showLabel={false}
          checkboxLabel="Cancelable" />

        <InputCheckbox 
          onChange={this.handleValidateInputChange}
          checked={this.state.promptValidateInput}
          showLabel={false}
          checkboxLabel="Validate (require even lengthed input)" />

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
