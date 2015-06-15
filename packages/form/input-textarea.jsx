'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const TextareaAutosize = require('react-textarea-autosize');

require('./input-textarea.scss');
require('./input-text.scss');

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
        showLabel={this.props.showLabel}
        errorMessage={this.props.errorMessage}
      >
        <TextareaField
          {...this.props}
          ref="input"
          id={`Input--textarea--${camelCaseLabel}`}
          className={`Input Input--textarea Input--textarea--${camelCaseLabel}`}
        />
      </InputWrapper>
    );
  },
});
