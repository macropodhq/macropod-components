'use strict';

const React = require('react/addons');
const Widgets = require('react-widgets');

require('./input-tag-arrow.scss');

module.exports = React.createClass({

  displayName: 'InputTagArrow',

  getInitialState() {
    return { open: false };
  },

  changeHandler() {
    this.setState({ open: !this.state.open});
  },

  checkOpen() {
    if(!this.state.open){
      this.setState({ open: !this.state.open});
    }
  },

  render() {
    var classNames = 'trigger';
    var open = this.state.open;

    return (<div className="multiselect-arrow-container">
            <button  onClick={this.changeHandler} className={classNames} >{this.props.label}</button>
            <Widgets.Multiselect
              {...this.props}
              onClick={this.checkOpen}
              open={open}
              duration={50}
            />
          </div>
    );
  },
});
