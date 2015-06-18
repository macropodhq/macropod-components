import React from 'react';
import InputWrapper from './input-wrapper';
import Dropdown from '../dropdown';

export default React.createClass({
  displayName: 'InputDropdown',

  render() {
    const normalisedProps = InputWrapper.normaliseProps(this.props);

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="Tag"
      >
        <Dropdown
          {...normalisedProps}
        />
      </InputWrapper>
    );
  },
});
