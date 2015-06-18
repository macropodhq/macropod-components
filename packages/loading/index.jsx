'use strict';

const React = require('react/addons');
const SuitClassSet = require('../suit-class-set');
require('./loading.scss');

module.exports = React.createClass({
  displayName: 'Loading',

  getDefaultProps() {
    return {
      type: 'stack',
      style: {},
    };
  },

  render() {
    const classes = new SuitClassSet('Loading');

    classes.addModifier({
      'small': this.props.size === 'small',
      'medium': this.props.size === 'medium',
    });

    // TODO: This could probably just return an `svg` element. Investigate possible caveats?

    return (
      <div className={classes.toString()} style={this.props.style}>
        <svg version="1.1" viewBox="0 0 40 40">
          <path fill="#000" d="M33.4,20.1c1,0,1.7-0.8,1.6-1.8c-0.9-7.4-7.2-13.2-14.8-13.2c-7.6,0-14,5.7-14.8,13.2c-0.1,1,0.7,1.8,1.6,1.8h0c0.8,0,1.5-0.6,1.6-1.5c0.7-5.8,5.6-10.2,11.6-10.2c6,0,10.9,4.5,11.6,10.2C31.9,19.5,32.6,20.1,33.4,20.1L33.4,20.1z"></path>
        </svg>
      </div>
    );
  },
});
