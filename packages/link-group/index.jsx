'use strict';

require('./link-group.scss');

const React = require('react');
const Router = require('react-router');
const _ = require('lodash-node');

module.exports = React.createClass({
  displayName: 'LinkGroup',

  mixins: [Router.State],

  getDefaultProps() {
    return {
      style: {},
    };
  },

  getChildren() {
    let children = [];

    React.Children.forEach(this.props.children, (child, index) => {
      let className = child.props.className ? child.props.className : '';


      if (child.props && (!_.size(this.getQuery()) && child.props.default)) {
        className = className + ' active';
      }

      children.push(React.addons.cloneWithProps(child, {className: className}));
    });

    return children;
  },

  render() {
    return (
      <div className="LinkGroup" style={this.props.style}>
        {this.getChildren()}
      </div>
    );
  },
});
