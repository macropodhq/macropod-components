'use strict';

const React = require('react');
const Router = require('react-router');
const cx = require('classnames');

import styles from './link.mcss';

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
    const linkClass = cx({
      [styles.Link]: true,
      [styles['Link--small']]: this.props.small,
      [styles['Link--fill']]: this.props.fill,
      [styles['Link--fillCenter']]: this.props.fillCenter,
      [this.props.className]: this.props.className,
    });

    if (this.props.route) {
      return (
        <Router.Link {...this.props} className={linkClass}>
          {this.props.children}
        </Router.Link>
      );
    } else {
      return (
        <a {...this.props} className={linkClass}>
          {this.props.children}
        </a>
      );
    }
  },
});
