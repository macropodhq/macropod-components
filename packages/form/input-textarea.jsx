/** @jsx React.DOM */

var React = require('react');
var InputWrapper = require('./input-wrapper');

require('./input-textarea.scss');

module.exports = React.createClass({
  displayName: 'InputTextarea',

  render: function() {
    var camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="Textarea"
        label={this.props.label}
        showLabel={this.props.showLabel}>
        {
          this.transferPropsTo(
            <textarea id={'Input--Textarea--' + camelCaseLabel} className={'Input Input--Textarea Input--Textarea--' + camelCaseLabel}></textarea>
          )
        }
      </InputWrapper>
    );
  },
});
