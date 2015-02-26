'use strict';

const React = require('react');

const SuitClassSet = require('../suit-class-set');

require('./style.scss');

module.exports = React.createClass({
  displayName: 'Link',
  
  propTypes: {
    small: React.PropTypes.bool,
    fill: React.PropTypes.bool,
    fillCenter: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
  },

  getDefaultProps() {
    return {
      small: false,
      fill: false,
      fillCenter: false,
    };
  },

  render() {
    const className = new SuitClassSet(this.constructor.displayName);

    className.addModifier({
      'small': this.props.small,
      'fill': this.props.fill,
      'fillCenter': this.props.fillCenter,
    });

    return (
      <a
        {...this.props}
        className={
          className.toString() +
          (this.props.className ? ` ${this.props.className}` : '')
        }
      >
        {this.props.children}
      </a>
    );
  }
});
