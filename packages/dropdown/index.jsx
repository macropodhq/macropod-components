'use strict';

const React = require('react/addons');

const Widgets = require('react-widgets');

require('./dropdown.scss');

module.exports = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    arrow: React.PropTypes.bool,
  },

  displayName: 'Dropdown',

  getDefaultProps() {
    return {
      label: 'Choose one',
      arrow: false,
    };
  },

  getInitialState() {
    return {
      open: false,
      overlayShown: false,
    }
  },

  changeHandler() {
  	this.setState({
      open: !this.state.open,
      overlayShown: !this.state.open,
    });
  },

  inputWrapper() {
    return (
    	<Widgets.DropdownList {...this.props} />
    );
  },

  arrowWrapper() {
    let layer = null;

    if (this.state.overlayShown) {
      layer = (
        <div onClick={this.changeHandler} className="overlay" />
      );
    }

  	return (
  		<div className="dropdown-arrow-container">
  			<button onClick={this.changeHandler} className="button-trigger">{this.props.label}<div/></button>
        {layer}
        <Widgets.DropdownList
  				onSelect={this.changeHandler}
  				open={this.state.open}
  				{...this.props}
  			/>
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
