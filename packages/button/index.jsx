'use strict';

require('./button.scss');

var React = require('react/addons');
var classSet = React.addons.classSet;
var _ = require('lodash-node');

var validTypes = [
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
    };
  },

  render() {
    var classes = {
      'Button': true,
      'Button--small': this.props.small,
      'Button--skeleton': this.props.skeleton,
      'Button--success': this.props.success,
      'Button--cancel': this.props.cancel,
    };

    classes[`Button--${this.props.type}`] = !!this.props.type;
    classes[this.props.className] = !!this.props.className;

    var buttonClass = classSet(classes);

    return (
      <button {...this.props} className={buttonClass}>{this.props.children}</button>
    );
  }
});
