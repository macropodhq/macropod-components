'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const Widgets = require('react-widgets');
const cx = require('classnames');

require('./input-tag.scss');

module.exports = React.createClass({

  displayName: 'InputTag',

  getDefaultProps() {
    return {
      label: '',
      arrow: false,
      open: false,
      layerShown: false,
    };
  },

  changeHandler() {
    this.setState({
      open: !this.state.open,
      overlayShown: !this.state.open,
    });
  },

  multiSelect() {
    if (this.props.arrow) {
      return (
        <Widgets.Multiselect
          {...normalisedProps}
          duration={50}
        />
      );
    } else {
      return (
        <Widgets.Multiselect
          {...this.props}
          onClick={this.optionClickHandler}
          open={this.state.open}
          duration={50}
        />
      );
    }
  },

  inputWrapper() {
    const normalisedProps = InputWrapper.normaliseProps(this.props);

    return (
      <InputWrapper
        {...normalisedProps}
        inputType="Tag"
      >
        {this.multiSelect()}
      </InputWrapper>
    );
  },

  arrowWrapper() {
    let layer = null;

    if (this.state.overlayShown) {
      layer = (
        <div onClick={this.changeHandler} className="overlay" />
      );
    }

    let classes = cx({
      'empty': this.state.isEmpty,
      'multiselect-arrow-container':true
    });

    return (
      <div className={classes}>
        <button onClick={this.changeHandler} className="button-trigger">{this.props.label}<div/></button>
        {layer}
        {this.multiSelect()}
      </div>
    );
  },

  render() {
    const arrow = this.props.arrow;

    return (
      { arrow ? this.arrowWrapper() : this.inputWrapper() }
    );
  },
});
