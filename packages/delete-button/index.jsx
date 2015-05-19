'use strict';

const React = require('react');
const Icon = require('../icon');

require('./style.scss');

module.exports = React.createClass({
  displayName: 'DeleteButton',

  render() {
    return (
      <Icon {...this.props} className={this.constructor.displayName + (this.props.className ? ` ${this.props.className}` : '')} type="close-filled" font={false} />
    );
  },
});
