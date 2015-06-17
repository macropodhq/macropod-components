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
    const normalisedProps = InputWrapper.normaliseProps(this.props);

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="Tag"
      >
        <Widgets.Multiselect
          {...normalisedProps}
          duration={50}
        />
      </InputWrapper>
    );
  },
});
