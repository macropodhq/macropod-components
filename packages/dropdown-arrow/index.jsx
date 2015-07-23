'use strict';

const React = require('react/addons');

const Widgets = require('react-widgets');

require('./dropdown-arrow.scss');

module.exports = React.createClass({

  displayName: 'DropDownArrow',

  getInitialState() {
    return { open: false };
  },

  changeHandler() {
  	console.log('changeHandler');
  	this.setState({ open: !this.state.open});
  },

  // <Dropdown open={this.state.open} onSelect={this.setState.bind(this, {open: !this.state.open})}/>
  render() {

   	var classNames = 'trigger';
  	var open = this.state.open;

    return (<div className="dropdown-arrow-container">
    			<button onClick={this.changeHandler} className={classNames} >{this.props.label}</button>
      			<Widgets.DropdownList
      				onSelect={this.changeHandler}
      				open={open}
      				{...this.props}
      			/>
     		</div>);
  },
});
