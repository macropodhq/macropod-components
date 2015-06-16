'use strict';

const React = require('react');

require('./index.pcss');

module.exports = React.createClass({
  displayName: 'Form',

  render() {
    return (
      <form {...this.props} className="Form">
        {this.props.children}
      </form>
    );
  },
});
