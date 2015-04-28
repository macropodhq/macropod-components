'use strict';

require('./link-group.scss');

const React = require('react');
const Router = require('react-router');
const _ = require('lodash-node');

const border = '2px solid black';
const style = {
  link: {
    general: {
      padding: '1em',
      background: 'grey',
      border: '1px solid black',
      borderTop: border,
      borderBottom: border,
      float: 'left',
    },

    first: {
      borderRadius: '3px 0 0 3px',
      borderLeft: border,
    },

    last: {
      borderRadius: '0 3px 3px 0',
      borderRight: border,
    },

    active: {
      background: 'blue',
    },
  },

  clear: {
    clear: 'both',
  }
};

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
      let childStyle = style.link.general;

      if (index === 0) {
        childStyle = Object.assign({}, childStyle, style.link.first);
      }

      if (index === ((this.props.children).length - 1)) {
        childStyle = Object.assign({}, childStyle, style.link.last);
      }

      if (child.props && (!_.size(this.getQuery()) && child.props.default) || (_.isEqual(Object.keys(child.props.query), Object.keys(this.getQuery())))) {
        childStyle = Object.assign({}, childStyle, style.link.active);
      }

      children.push(React.addons.cloneWithProps(child, {style: childStyle}));
    });

    return children;
  },

  render() {
    return (
      <div className="LinkGroup" style={this.props.style}>
        {this.getChildren()}
        <table style={style.clear} />
      </div>
    );
  }
});
