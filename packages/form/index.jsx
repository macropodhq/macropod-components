'use strict';

var React = require('react');

require('./index.scss');

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
