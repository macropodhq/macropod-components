'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'Inlay',

  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

  render() {
    return <span style={{
        borderRadius: 3,
        background: '#eee',
        padding: 3,
      }}>
        {this.props.children}
    </span>;
  },
});
