'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');

require('./input-text.pcss');

module.exports = React.createClass({
  displayName: 'InputText',

  propTypes: {
    label: React.PropTypes.node,
    type: React.PropTypes.string.isRequired,
    autoComplete: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
  },

  getDefaultProps() {
    return {
      label: '',
      type: 'text',
    };
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

  componentWillReceiveProps(nextProps) {
    if (this.autoCompleteOn()) {
      this.enableUnmanagedChangeHandler();
    } else {
      this.disableUnmanagedChangeHandler();
    }
  },

  handleUnmanagedChange() {
    const target = this.refs.input.getDOMNode();

    if (target.value !== this.handleUnmanagedChange.lastValue) {
      if (typeof this.handleUnmanagedChange.lastValue !== 'undefined' && this.props.onChange instanceof Function) {
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
    if (this.props.onChange instanceof Function) {
      this.props.onChange(evt);
    }

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
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType={this.props.type}
        label={this.props.label}
        showLabel={this.props.showLabel}
        errorMessage={this.props.errorMessage}
      >
        <input
          {...this.props}
          onChange={this.handleChange}
          ref="input"
          type={this.props.type}
          id={`Input--text--${camelCaseLabel}`}
          className={`Input Input--text Input--text--${camelCaseLabel}`}
        />
      </InputWrapper>
    );
  },
});
