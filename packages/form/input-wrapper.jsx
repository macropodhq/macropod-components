'use strict';

const React = require('react');

require('./input-wrapper.pcss');

const InputWrapper = React.createClass({
  displayName: 'InputWrapper',

  propTypes: {
    inputType: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    showLabel: React.PropTypes.bool.isRequired,
    errorMessage: React.PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return {
      showLabel: true,
      errorMessage: '',
    };
  },

  statics: {
    camelCase(string) {
      return string
          .replace(/\s(.)/g, $1 => $1.toUpperCase())
          .replace(/\s/g, '')
          .replace(/^(.)/, $1 => $1.toLowerCase());
    },
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);
    const errorClass = (this.props.errorMessage ? 'Form-item--error' : '');


    return (
      <div className={`Form-item Form-item--${camelCaseLabel} ${errorClass}`}>
        {this.props.showLabel && <label className="Form-item-label" htmlFor={`Input--${this.props.inputType}--${camelCaseLabel}`}>{this.props.label}</label>}
        {this.props.children}
        {this.props.errorMessage && <div className="Form-item-error">{this.props.errorMessage}</div>}
      </div>
    );
  },
});

module.exports = InputWrapper;
