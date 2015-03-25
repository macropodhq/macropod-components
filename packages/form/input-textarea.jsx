'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');

require('./input-textarea.scss');

module.exports = React.createClass({
  displayName: 'InputTextarea',

  focusInput() {
    this.refs.input.getDOMNode().focus();
  },

  selectInputValue() {
    this.refs.input.getDOMNode().select();
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="Textarea"
        label={this.props.label}
        showLabel={this.props.showLabel}>
          <textarea {...this.props} ref="input" id={`Input--Textarea--${camelCaseLabel}`} className={`Input Input--Textarea Input--Textarea--${camelCaseLabel}`}></textarea>
      </InputWrapper>
    );
  },
});
