'use strict';

import React from 'react';

const Widgets = require('react-widgets');

require('./dropdown-arrow.scss');

module.exports = React.createClass({

  displayName: 'DropDownArrow',

  getInitialState() {
    return { open: false, overlayShown: false  };
  },

  changeHandler() {
  	this.setState({ open: !this.state.open, overlayShown: !this.state.open});
  },

  render() {

    let layer = null;

    if (this.state.overlayShown) {
      layer = (
        <div onClick={this.changeHandler} className="overlay"></div>
      );
    }

  	return (
  		<div className="dropdown-arrow-container">
  			<button onClick={this.changeHandler} className="button-trigger" >{this.props.label}<div/></button>
        {layer}
        <Widgets.DropdownList
  				onSelect={this.changeHandler}
  				open={this.state.open}
  				{...this.props}
  			/>
   		</div>
   	);
  }

});
