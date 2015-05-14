'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');

module.exports = React.createClass({
  displayName: 'InputCheckbox',

  getDefaultProps() {
    return {
      label: '',
    };
  },

  focusInput() {
    this.refs.input.getDOMNode().focus();
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="checkbox"
        label={this.props.label}
        showLabel={this.props.showLabel}
        errorMessage={this.props.errorMessage}
      >
        <label>
          <input
            {...this.props}
            ref="input"
            type="checkbox"
            id={`Input--checkbox--${camelCaseLabel}`}
            className={`Input Input--checkbox Input--checkbox--${camelCaseLabel}`}
          />
          {this.props.checkboxLabel}
        </label>
      </InputWrapper>
    );
  },
});
