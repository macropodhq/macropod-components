'use strict';

require('./style.scss');

const React = require('react');

module.exports = React.createClass({
  displayName: 'DeleteButton',

  render() {
    const className = React.addons.classSet({
      'DeleteButton': true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <button {...this.props} className={className}>
        ×
      </button>
    );
  }
});
