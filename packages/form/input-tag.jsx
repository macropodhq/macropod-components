'use strict';

const React = require('react');
const InputWrapper = require('./input-wrapper');
const Widgets = require('react-widgets');
const cx = require('classnames');

require('./input-tag.scss');

module.exports = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    arrow: React.PropTypes.bool,
  },

  displayName: 'InputTag',

  getDefaultProps() {
    return {
      label: 'Select options',
      arrow: false,
    };
  },

  getInitialState() {
    return {
      open: false,
      overlayShown: false,
    };
  },

  changeHandler() {
    this.setState({
      open: !this.state.open,
      overlayShown: !this.state.open,
    });
  },

  multiSelect(normalisedProps) {
    if (this.props.arrow) {
      return (
        <Widgets.Multiselect
          {...this.props}
          open={this.state.open}
          duration={50}
        />
      );
    } else {
      return (
        <Widgets.Multiselect
          {...normalisedProps}
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
        {this.multiSelect(normalisedProps)}
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
    if (this.props.arrow) {
      return this.arrowWrapper();
    }

    return this.inputWrapper();
  },
});
