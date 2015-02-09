'use strict';

var React = require('react');
var InputWrapper = require('./input-wrapper');

require('./input-text.scss');

module.exports = React.createClass({
  displayName: 'InputText',

  render() {
    var camelCaseLabel = InputWrapper.camelCase(this.props.label);

    return (
      <InputWrapper
        inputType="text"
        label={this.props.label}
        showLabel={this.props.showLabel}>
          <input {...this.props} type="text" id={'Input--text--' + camelCaseLabel} className={'Input Input--text Input--text--' + camelCaseLabel} />
      </InputWrapper>
    );
  },
});
