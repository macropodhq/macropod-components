'use strict';

const React = require('react');

const style = {
  title: {
    textTransform: 'uppercase',
    color: 'rgb(199, 201, 209)',
    fontSize: 10,
    letterSpacing: 0.5,
    margin: '0 0 4px 0',
  },

  group: {
    margin: 0,
    padding: '10px 0',
    borderBottom: '1px solid rgba(238, 238, 238, 1)',
  },

  first: {
    paddingTop: 0,
  },

  last: {
    paddingBottom: 0,
    border: 0,
  },
};

module.exports = React.createClass({
  displayName: 'TrayGroup',

  statics: {
    style: style,
  },

  propTypes: {
    title: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      style: {},
    };
  },

  getStyle() {
    return Object.assign({}, style.group, this.props.style);
  },

  render() {
    let title = null;

    if (this.props.title) {
      title = (
        <dt style={style.title}>
          {this.props.title}
        </dt>
      );
    }

    return (
      <dl className="Tray-Group" style={this.getStyle()}>
        {title}
        {this.props.children}
      </dl>
    );
  },
});
