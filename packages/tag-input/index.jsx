'use strict';

const React = require('react/addons');

const Widgets = require('react-widgets');

require('./tag-input.scss');

module.exports = React.createClass({
  displayName: 'TagInput',

  render() {
    return (<Widgets.Multiselect {...this.props} />);
  }
});
