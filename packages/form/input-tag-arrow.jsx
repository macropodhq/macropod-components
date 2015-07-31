'use strict';

import React from 'react';
const Widgets = require('react-widgets');

require('./input-tag-arrow.scss');

module.exports = React.createClass({

  displayName: 'InputTagArrow',

  getInitialState() {
    return { open: false, layerShown: false };
  },

  changeHandler() {
    this.setState({ open: !this.state.open, overlayShown: !this.state.open});
  },

  render() {
    var layer = null;

    if (this.state.overlayShown) {
      layer = (
        <div onClick={this.changeHandler} className="overlay"></div>
      );
    }
    var cx = React.addons.classSet;
    var classes = cx({
      'empty': this.state.isEmpty,
      'multiselect-arrow-container':true
    });
    return (
      <div className={classes}>
        <div onClick={this.changeHandler} className="droparrow-trigger" >{this.props.label}</div>
        {layer}
        <Widgets.Multiselect
          {...this.props}
          onClick={this.optionClickHandler}
          open={this.state.open}
          duration={50}
        />
      </div>
    );
  },
});







