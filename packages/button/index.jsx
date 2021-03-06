'use strict';

const React = require('react/addons');
const cx = require('classnames');
const _ = require('lodash');

import styles from './button.mcss';

const validTypes = [
  'submit',
  'reset',
  'button',
];

module.exports = React.createClass({
  displayName: 'Button',

  propTypes: {
    small: React.PropTypes.bool,
    skeleton: React.PropTypes.bool,
    success: React.PropTypes.bool,
    cancel: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    type(props, propName) {
      if (
        propName in props &&
        !_.contains(validTypes, props[propName])
      ) {
        // type is deprecated because it overlaps with the built in html attribute
        return new Error(`Button type \`${props[propName]}\` is deprecated. Only ${validTypes.join(', ')} are valid. Please extend the component instead.`);
      }
    },
  },

  getDefaultProps() {
    return {
      small: false,
      skeleton: false,
      success: false,
      cancel: false,
      danger: false,
    };
  },

  render() {
    const buttonClass = cx({
      [styles.Button]: !this.props.className,
      'small': !!this.props.small,
      'skeleton': !!this.props.skeleton,
      'success': !!this.props.success,
      'cancel': !!this.props.cancel,
      'danger': !!this.props.danger,
      [this.props.type]: !!this.props.type,
      [this.props.className]: this.props.className,
    });

    return (
      <button
        {...this.props}
        className={buttonClass}
        onTouchStart={() => {}}
      >
        {this.props.children}
      </button>
    );
  },
});
