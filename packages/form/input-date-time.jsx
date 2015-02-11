'use strict';

const React = require('react');
const CalendarDropdown = require('../calendar-dropdown');
const InputWrapper = require('./input-wrapper');
const moment = require('moment');

require('./input-date-time.scss');

module.exports = React.createClass({
  displayName: 'InputDateTime',

  getDefaultProps() {
    return {
      defaultValue: moment().toISOString()
    };
  },

  onChange(date) {
    this.props.onChange(moment(date).toISOString());
  },

  render() {
    let camelCaseLabel = InputWrapper.camelCase(this.props.label);
    let defaultValue = new Date(this.props.defaultValue);

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
