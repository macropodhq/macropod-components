'use strict';

const React = require('react');
const CalendarDropdown = require('../calendar-dropdown');
const InputWrapper = require('./input-wrapper');

require('./input-date-time.scss');

module.exports = React.createClass({
  displayName: 'InputDateTime',

  getDefaultProps() {
    return {
      defaultValue: new Date().toISOString(),
      label: '',
    };
  },

  onChange(date) {
    this.props.onChange(date.toISOString());
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);
    const defaultValue = new Date(this.props.defaultValue);

    return (
      <InputWrapper
        inputType="DateTime"
        label={this.props.label}
        showLabel={this.props.showLabel}>
        <CalendarDropdown
          id={`Input--DateTime--${camelCaseLabel}`}
          className={'Input--CalendarDropdown'}
          disabled={this.props.disabled}
          onChange={this.onChange}
          defaultValue={defaultValue}
          format="d MMM yyyy h:mm tt"
        />
      </InputWrapper>
    );
  },
});
