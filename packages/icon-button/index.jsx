'use strict';

const React = require('react');
const Icon = require('../icon');

require('./style.scss');

module.exports = React.createClass({
  displayName: 'IconButton',

  render() {
    return (
      <button {...this.props} className={this.constructor.displayName + (this.props.className ? ` ${this.props.className}` : '')}>
        <Icon type={this.props.type} />
      </button>
    );
  },
});
