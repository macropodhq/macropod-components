/** @jsx React.DOM */

var React = require('react');
var InputWrapper = require('./input-wrapper');
var TagInput = require('../tag-input');

require('./input-tag.scss');

module.exports = React.createClass({
  displayName: 'InputTag',

  render: function() {
    var camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="Tag"
        label={this.props.label}
        showLabel={this.props.showLabel}>
        {
          this.transferPropsTo(
            <TagInput />
          )
        }
      </InputWrapper>
    );
  },
});
