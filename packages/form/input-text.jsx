'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');

require('./input-text.scss');

module.exports = React.createClass({
  displayName: 'InputText',

  getDefaultProps() {
    return {
      label: '',
      type: 'text',
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

    return (
      <InputWrapper
        inputType={this.props.type}
        label={this.props.label}
        showLabel={this.props.showLabel}>
          <input {...this.props} ref="input" type={this.props.type} id={`Input--text--${camelCaseLabel}`} className={`Input Input--text Input--text--${camelCaseLabel}`} />
      </InputWrapper>
    );
  },
});
