'use strict';

const React = require('react');

require('./input-wrapper.scss');

const InputWrapper = React.createClass({
  displayName: 'InputWrapper',

  propTypes: {
    inputType: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    showLabel: React.PropTypes.bool.isRequired
  },

  getDefaultProps() {
    return {
      showLabel: true
    };
  },

  statics: {
    camelCase(string) {
      return string
          .replace(/\s(.)/g, $1 => $1.toUpperCase())
          .replace(/\s/g, '')
          .replace(/^(.)/, $1 => $1.toLowerCase());
    }
  },

  render() {
    let camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <div className={`Form-item Form-item--${camelCaseLabel}`}>
        {this.props.showLabel && <label className="Form-item-label" htmlFor={`Input--${this.props.inputType}--${camelCaseLabel}`}>{this.props.label}</label>}
        {this.props.children}
      </div>
    );
  },
});

module.exports = InputWrapper;
