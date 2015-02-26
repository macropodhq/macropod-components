'use strict';

const React = require('react');

require('./style.scss');

module.exports = React.createClass({
  displayName: 'DeleteButton',

  render() {
    return (
      <button {...this.props} className={this.constructor.displayName + (this.props.className ? ` ${this.props.className}` : '')}>
        ×
      </button>
    );
  }
});
