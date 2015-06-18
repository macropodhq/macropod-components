import React from 'react';

import Form from './';
import InputCheckbox from './input-checkbox';
import InputDateTime from './input-date-time';
import InputTag from './input-tag';
import InputText from './input-text';
import InputTextarea from './input-textarea';

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
      checkboxError: (this.state.checkboxChecked ? 'This checkbox must be checked' : ''),
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
          onChange={this.handleCheckboxCheckedToggle}
          description="This is a checkbox input. It also has validation which says it must be checked"
        />

        <InputDateTime
          label="InputDateTime"
          value={this.state.dateTime}
          onChange={this.handleDateTimeChange}
          defaultValue={new Date().toISOString()}
          description={
            <span>Here's a date input, this is using <a href="http://jquense.github.io/react-widgets/docs/#/datetime-picker" target="_blank">React Widgets' <code>DateTimePicker</code></a></span>
          }
        />

        <InputTag
          label="InputTag"
          value={this.state.tags}
          onChange={this.handleTagChange}
          data={tagOptions}
          placeholder="Make some breakfast..."
          duration={0}
          textField="name"
          valueField="id"
          description={
            <span>This is a tag input, it's using <a href="http://jquense.github.io/react-widgets/docs/#/multiselect" target="_blank">React Widgets' <code>MultiSelect</code></a></span>
          }
        />

        <InputText
          label="InputText"
          placeholder="Input some text..."
          onChange={this.handleTextChange}
          description="Here's a nice text input"
        />

        <InputText
          label="InputTextWithError"
          placeholder="Type something and then delete it to see an error message..."
          errorMessage={this.state.textInputError}
          onChange={this.handleTextErrorChange}
          description="Here's a text input showing validation behaviour!"
        />

        <InputTextarea
          label="InputTextarea"
          placeholder="Input some multiline text..."
          onChange={this.handleTextareaChange}
          description="Here's a standard text area"
        />

        <InputTextarea
          label="InputTextareaWithAutoSizeProp"
          placeholder="Input some multiline text..."
          autoSize
          onChange={this.handleTextareaAutosizeChange}
          description="Here's an automatically sizing text area"
        />

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
