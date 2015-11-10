'use strict';

const React = require('react');
const Router = require('react-router');
const _ = require('lodash');
const cx = require('classnames');

import styles from './link-group.mcss';

module.exports = React.createClass({
  displayName: 'LinkGroup',

  mixins: [Router.State],

  getChildren() {
    const children = [];

    React.Children.forEach(this.props.children, (child, index) => {
      const active = child.props && (!_.size(this.getQuery()) && child.props.default);

      const className = cx({
        [this.props.className]: child.props.className,
        [styles.Link]: !child.props.className,
        [styles.LinkActive]: active,
      });

      children.push(React.addons.cloneWithProps(child, {className: className, activeClassName: styles.LinkActive}));
    });

    return children;
  },

  render() {
    return (
      <div className={this.props.className}>
        {this.getChildren()}
      </div>
    );
  },
});
