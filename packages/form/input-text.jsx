import React from 'react';
import cx from 'classnames';
import InputWrapper from './input-wrapper';

import styles from '../../style/input.mcss';

export default React.createClass({
  displayName: 'InputText',

  propTypes: Object.assign({}, InputWrapper.publicProps, {
    autoComplete: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
    onChange: React.PropTypes.func,
    type: React.PropTypes.string.isRequired,
    error: React.PropTypes.bool,
  }),

  getDefaultProps() {
    return Object.assign({}, InputWrapper.getDefaultProps(), {
      type: 'text',
      onChange: () => {},
      error: false,
    });
  },

  autoCompleteOn() {
    return ('' + this.props.autoComplete).toLowerCase() !== 'off';
  },

  enableUnmanagedChangeHandler() {
    if (this.autoCompleteOn() && typeof this.handleUnmanagedChange.intervalId === 'undefined') {
      this.handleUnmanagedChange.intervalId = setInterval(this.handleUnmanagedChange, 100);
    }
  },

  disableUnmanagedChangeHandler() {
    if (typeof this.handleUnmanagedChange.intervalId !== 'undefined') {
      clearInterval(this.handleUnmanagedChange.intervalId);
      delete this.handleUnmanagedChange.intervalId;
    }
  },

  componentDidMount() {
    this.enableUnmanagedChangeHandler();
  },

  componentWillUnmount() {
    this.disableUnmanagedChangeHandler();
  },

  componentWillReceiveProps() {
    if (this.autoCompleteOn()) {
      this.enableUnmanagedChangeHandler();
    } else {
      this.disableUnmanagedChangeHandler();
    }
  },

  handleUnmanagedChange() {
    const target = this.refs.input.getDOMNode();
    const lastValue = this.handleUnmanagedChange.lastValue;

    if (target.value !== this.handleUnmanagedChange.lastValue) {
      this.handleUnmanagedChange.lastValue = target.value;

      if (typeof lastValue !== 'undefined') {
        this.props.onChange({
          currentTarget: target,
          target,
          timeStamp: Date.now(),
        });
      }
    }
  },

  handleChange(evt) {
    this.props.onChange(evt);

    if (this.autoCompleteOn()) {
      this.handleUnmanagedChange.lastValue = evt.target.value;
    }
  },

  focusInput() {
    this.refs.input.getDOMNode().focus();
  },

  selectInputValue() {
    this.refs.input.getDOMNode().select();
  },

  render() {
    const normalisedProps = InputWrapper.normaliseProps(this.props);
    const camelCaseLabel = InputWrapper.camelCase(normalisedProps.label);

    const inputClass = cx({
      [styles.Input]: !this.props.className,
      'error': this.props.errorMessage,
      [this.props.className]: this.props.className,
    });

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="text"
      >
        <input
          {...normalisedProps}
          onChange={this.handleChange}
          ref="input"
          type={normalisedProps.type}
          id={`Input--text--${camelCaseLabel}`}
          className={inputClass}
        />
      </InputWrapper>
    );
  },
});
