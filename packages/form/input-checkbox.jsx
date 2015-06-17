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
    const normalisedProps = InputWrapper.normaliseProps(this.props);
    const camelCaseLabel = InputWrapper.camelCase(normalisedProps.label);

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="checkbox"
      >
        <label>
          <input
            {...normalisedProps}
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
