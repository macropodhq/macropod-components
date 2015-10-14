import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import InputWrapper from './input-wrapper';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './input-textarea.mcss';

export default React.createClass({
  displayName: 'InputTextarea',

  propTypes: Object.assign({}, InputWrapper.publicProps, {
    autoSize: React.PropTypes.bool.isRequired,
  }),

  getDefaultProps() {
    return {
      autoSize: false,
    };
  },

  focusInput() {
    ReactDOM.findDOMNode(this.refs.input).focus();
  },

  selectInputValue() {
    ReactDOM.findDOMNode(this.refs.input).select();
  },

  render() {
    const normalisedProps = InputWrapper.normaliseProps(this.props);
    const camelCaseLabel = InputWrapper.camelCase(normalisedProps.label);
    const TextareaField = this.props.autoSize ? TextareaAutosize : 'textarea';

    const textareaClass = cx({
      [styles.Textarea]: !this.props.className,
      'error': this.props.errorMessage,
      [this.props.className]: this.props.className,
    });

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="Textarea"
      >
        <TextareaField
          {...normalisedProps}
          ref="input"
          id={`Input--Textarea--${camelCaseLabel}`}
          className={textareaClass}
        />
      </InputWrapper>
    );
  },
});
