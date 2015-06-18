import React from 'react';
import InputWrapper from './input-wrapper';

import './input-text.scss';

export default React.createClass({
  displayName: 'InputText',

  propTypes: Object.assign({}, InputWrapper.publicProps, {
    autoComplete: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
    onChange: React.PropTypes.function,
    type: React.PropTypes.string.isRequired,
  }),

  getDefaultProps() {
    return Object.assign({}, InputWrapper.getDefaultProps(), {
      type: 'text',
      onChange: () => {},
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

    if (target.value !== this.handleUnmanagedChange.lastValue) {
      if (typeof this.handleUnmanagedChange.lastValue !== 'undefined') {
        this.props.onChange({
          currentTarget: target,
          target,
          timeStamp: Date.now(),
        });
      }

      this.handleUnmanagedChange.lastValue = target.value;
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
          className={`Input Input--text Input--text--${camelCaseLabel}`}
        />
      </InputWrapper>
    );
  },
});
