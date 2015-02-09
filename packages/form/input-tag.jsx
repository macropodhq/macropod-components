'use strict';

var React = require('react');
var InputWrapper = require('./input-wrapper');
var TagInput = require('../tag-input');

require('./input-tag.scss');

module.exports = React.createClass({
  displayName: 'InputTag',

  render() {
    var camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="Tag"
        label={this.props.label}
        showLabel={this.props.showLabel}>
            <TagInput {...this.props} /> 
      </InputWrapper>
    );
  },
});
