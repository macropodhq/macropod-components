'use strict';

var React = require('react/addons');

var Widgets = require('react-widgets');

require('./tag-input.scss');

module.exports = React.createClass({
  displayName: 'TagInput',

  render() {
    return (<Widgets.Multiselect {...this.props} />);
  }
});
