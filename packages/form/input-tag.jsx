'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const TagInput = require('../tag-input');

require('./input-tag.scss');

module.exports = React.createClass({
  displayName: 'InputTag',

  render() {
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
