'use strict';

const React = require('react');

const Form = require('./');
const InputCheckbox = require('./input-checkbox');
const InputDateTime = require('./input-date-time');
const InputTag = require('./input-tag');
const InputText = require('./input-text');
const InputTextarea = require('./input-textarea');

const tagOptions = [
  {
    id: 1,
    name: 'Eggs',
  },
  {
    id: 2,
    name: 'Bacon',
  },
  {
    id: 3,
    name: 'Hash Browns',
  },
  {
    id: 4,
    name: 'Sausage',
  },
  {
    id: 5,
    name: 'Tomato',
  },
  {
    id: 6,
    name: 'Toast',
  },
  {
    id: 7,
    name: 'Quinoa',
  },
  {
    id: 8,
    name: 'Salmon',
  },
];

module.exports = React.createClass({
  displayName: 'FormExample',

  getInitialState() {
    return {
      checkboxChecked: false,
      dateTime: new Date().toISOString(),
      tags: [],
      text: '',
      textError: '',
      textarea: '',
      textareaAutosize: '',
      checkboxError: '',
      textInputError: '',
    };
  },

  handleCheckboxCheckedToggle() {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked,
      checkboxError: (this.state.checkboxChecked ? 'This checkbox must be ticked' : ''),
    });
  },

  handleDateTimeChange(dateTime) {
    this.setState({
      dateTime,
    });
  },

  handleTagChange(tags) {
    this.setState({
      tags,
    });
  },

  handleTextChange(evt) {
    this.setState({
      text: evt.target.value,
    });
  },

  handleTextErrorChange(evt) {
    this.setState({
      textError: evt.target.value,
      textInputError: (!evt.target.value ? 'This field must be filled out' : ''),
    });
  },

  handleTextareaChange(evt) {
    this.setState({
      textarea: evt.target.value,
    });
  },

  handleTextareaAutosizeChange(evt) {
    this.setState({
      textareaAutosize: evt.target.value,
    });
  },

  render() {
    return (
      <Form>

        <p>Pre-styled form elements with optional labels</p>

        <InputCheckbox
          label="InputCheckbox"
          checkboxLabel="This is the checkbox's label!"
          value={this.state.checkboxChecked}
          errorMessage={this.state.checkboxError}
          onChange={this.handleCheckboxCheckedToggle} />

        <InputDateTime
          label="InputDateTime"
          value={this.state.dateTime}
          onChange={this.handleDateTimeChange}
          defaultValue={new Date().toISOString()} />

        <InputTag
          label="InputTag"
          value={this.state.tags}
          onChange={this.handleTagChange}
          data={tagOptions}
          placeholder="Make some breakfast..."
          duration={0}
          textField="name"
          valueField="id" />

        <InputText
          label="InputText"
          placeholder="Input some text..."
          onChange={this.handleTextChange} />

        <InputText
          label="InputTextWithError"
          placeholder="Type something and then delete it to see an error message..."
          errorMessage={this.state.textInputError}
          onChange={this.handleTextErrorChange} />

        <InputTextarea
          label="InputTextarea"
          placeholder="Input some multiline text..."
          onChange={this.handleTextareaChange} />

        <InputTextarea
          label="InputTextareaWithAutoSizeProp"
          placeholder="Input some multiline text..."
          autoSize
          onChange={this.handleTextareaAutosizeChange} />

        <p>
          Checkbox Checked: {this.state.checkboxChecked ? 'Yes' : 'No'}<br/>
          Selected Date: {this.state.dateTime}<br/>
          {this.state.tags.length} Tag{this.state.tags.length !== 1 && 's'} Selected<br/>
          Text Field Value: {JSON.stringify(this.state.text)}<br/>
          Textarea Value: {JSON.stringify(this.state.textarea)}<br/>
          TextareAutosizea Value: {JSON.stringify(this.state.textareaAutosize)}
        </p>

      </Form>
    );
  },
});
