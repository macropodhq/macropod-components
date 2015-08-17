import React from 'react';
import cx from 'classnames';

import styles from './input-wrapper.mcss';

const PUBLIC_PROPS = {
  description: React.PropTypes.node,
  errorMessage: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  showLabel: React.PropTypes.bool.isRequired,
};

const InputWrapper = React.createClass({
  displayName: 'InputWrapper',

  propTypes: Object.assign({}, PUBLIC_PROPS, {
    children: React.PropTypes.node.isRequired,
    inputType: React.PropTypes.string.isRequired,
  }),

  getDefaultProps() {
    return {
      inputType: 'Generic',
      errorMessage: '',
      showLabel: true,
    };
  },

  statics: {
    publicProps: PUBLIC_PROPS,

    camelCase(string) {
      return string
          .replace(/\s(.)/g, $1 => $1.toUpperCase())
          .replace(/\s/g, '')
          .replace(/^(.)/, $1 => $1.toLowerCase());
    },

    normaliseProps(suppliedProps) {
      const props = Object.assign({}, suppliedProps);

      // Default placeholder is label
      if (typeof props.placeholder !== 'string' && props.label) {
        props.placeholder = props.label;
      }

      // Default label (as this is used for "fun" `camelCaseLabel` stuff later)
      if (!props.label) {
        props.showLabel = false; // don't show to users
        props.label = Math.round(Math.random() * Math.pow(256, 3)).toString(16);
      }

      return props;
    },
  },

  render() {
    const camelCaseLabel = InputWrapper.camelCase(this.props.label);
    const labelClass = cx({
      [styles.label]: !this.props.errorMessage,
      [styles.labelError]: !!this.props.errorMessage,
    });

    return (
      <div className={styles.Item}>
        {this.props.showLabel &&
          <label
            className={labelClass}
            htmlFor={`Input--${this.props.inputType}--${camelCaseLabel}`}
          >
            {this.props.label}
          </label>
        }
        {this.props.description &&
          <div className={styles.description}>
            {this.props.description}
          </div>
        }

        {this.props.children}

        {this.props.errorMessage &&
          <div className={styles.error}>
            {this.props.errorMessage}
          </div>
        }
      </div>
    );
  },
});

export default InputWrapper;
