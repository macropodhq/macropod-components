'use strict';

const React = require('react');
const Router = require('react-router');

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
      route: false,
    };
  },

  render() {
    var className = new SuitClassSet(this.constructor.displayName);

    className.addModifier({
      'small': this.props.small,
      'fill': this.props.fill,
      'fillCenter': this.props.fillCenter,
    });

    className = className.toString() + (this.props.className ? ` ${this.props.className}` : '');

    if (this.props.route) {
      return (
        <Router.Link {...this.props} className={className}>
          {this.props.children}
        </Router.Link>
      );
    } else {
      return (
        <a {...this.props} className={className}>
          {this.props.children}
        </a>
      );
    }
  }
});
