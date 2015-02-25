'use strict';

require('./style.scss');

const React = require('react');

module.exports = React.createClass({
  displayName: 'DeleteButton',

  render() {
    return (
      <button {...this.props} className={'DeleteButton' + (this.props.className ? ` ${this.props.className}` : '')}>
        ×
      </button>
    );
  }
});
