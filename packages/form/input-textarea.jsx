'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const TextareaAutosize = require('react-textarea-autosize');

require('./input-textarea.scss');

module.exports = React.createClass({
  displayName: 'InputTextarea',

  getDefaultProps() {
    return {
      label: '',
    };    
  },

  focusInput() {
    this.refs.input.getDOMNode().focus();
  },

  selectInputValue() {
    this.refs.input.getDOMNode().select();
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);
    const TextareaField = this.props.autoSize ? TextareaAutosize : 'textarea';

    return (
      <InputWrapper
        inputType="Textarea"
        label={this.props.label}
        showLabel={this.props.showLabel}>
          <TextareaField {...this.props} ref="input" id={`Input--Textarea--${camelCaseLabel}`} className={`Input Input--Textarea Input--Textarea--${camelCaseLabel}`}></TextareaField>
      </InputWrapper>
    );
  },
});
