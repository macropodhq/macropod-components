import React from 'react';
import InputWrapper from './input-wrapper';
import TextareaAutosize from 'react-textarea-autosize';

import './input-textarea.scss';

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
    this.refs.input.getDOMNode().focus();
  },

  selectInputValue() {
    this.refs.input.getDOMNode().select();
  },

  render() {
    const normalisedProps = InputWrapper.normaliseProps(this.props);
    const camelCaseLabel = InputWrapper.camelCase(normalisedProps.label);
    const TextareaField = this.props.autoSize ? TextareaAutosize : 'textarea';

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="Textarea"
      >
        <TextareaField
          {...normalisedProps}
          ref="input"
          id={`Input--Textarea--${camelCaseLabel}`}
          className={`Input Input--Textarea Input--Textarea--${camelCaseLabel}`}
        />
      </InputWrapper>
    );
  },
});
