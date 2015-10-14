'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const InputWrapper = require('./input-wrapper');

import styles from './input-checkbox.mcss';

module.exports = React.createClass({
  displayName: 'InputCheckbox',

  getDefaultProps() {
    return {
      label: '',
    };
  },

  focusInput() {
    ReactDOM.findDOMNode(this.refs.input).focus();
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
            className={this.props.className || styles.Checkbox}
          />
          {this.props.checkboxLabel}
        </label>
      </InputWrapper>
    );
  },
});
