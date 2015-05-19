'use strict';

const React = require('react/addons');

const Widgets = require('react-widgets');

require('./dropdown.scss');

module.exports = React.createClass({
  displayName: 'Dropdown',

  render() {
    return (<Widgets.DropdownList {...this.props} />);
  },
});
