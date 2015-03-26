'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const Widgets = require('react-widgets');

require('./input-tag.scss');

module.exports = React.createClass({
  displayName: 'InputTag',

  getDefaultProps() {
    return {
      label: '',
    };    
  },

  render() {
    return (
      <InputWrapper
        inputType="Tag"
        label={this.props.label}
        showLabel={this.props.showLabel}>
          <Widgets.Multiselect {...this.props} />
      </InputWrapper>
    );
  },
});
