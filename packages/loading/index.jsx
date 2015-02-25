'use strict';

const React = require('react/addons');
const SuitClassSet = require('../suit-class-set');
require('./loading.scss');

module.exports = React.createClass({
  displayName: 'Loading',

  getDefaultProps() {
    return {
      type: 'stack'
    };
  },

  render() {
    const classes = new SuitClassSet('Loading');

    classes.addModifier({
      'small': this.props.size === 'small'
    });

    return (
      <div className={classes.toString()}>
      {(this.props.type === 'stack') &&
        <svg className="Loading--stack" version="1.1" viewBox="0 0 600 600">
          <path className="Loading-top Loading-main" clip-rule="evenodd" d="M561.5,119H181.1c-5.2,0-10.4-0.6-19.4,6.1L48,209.5c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C577.8,124.5,566.7,119,561.5,119z" />
          <path className="Loading-middle Loading-main" clip-rule="evenodd" d="M554.4,246.9H174c-5.2,0-10.4-0.6-19.4,6.1L40.9,337.4c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C570.7,252.4,559.6,246.9,554.4,246.9" />
          <path className="Loading-bottom Loading-main" clip-rule="evenodd" d="M547.3,373.4H166.9c-5.2,0-10.4-0.6-19.4,6.1L33.8,463.9c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C563.6,378.9,552.5,373.4,547.3,373.4" />
          <path className="Loading-middle Loading-secondary" d="M171.5,246.9c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H174C173.2,246.9,172.4,246.9,171.5,246.9" />
          <path className="Loading-bottom Loading-secondary" d="M164.4,373.4c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H166.9C166.1,373.4,165.3,373.4,164.4,373.4" />
        </svg>
      }
      {(this.props.type === 'circle') &&
        <svg className="Loading--circle" version="1.1" viewBox="0 0 40 40">
          <path fill="#000" d="M33.4,20.1c1,0,1.7-0.8,1.6-1.8c-0.9-7.4-7.2-13.2-14.8-13.2c-7.6,0-14,5.7-14.8,13.2c-0.1,1,0.7,1.8,1.6,1.8h0c0.8,0,1.5-0.6,1.6-1.5c0.7-5.8,5.6-10.2,11.6-10.2c6,0,10.9,4.5,11.6,10.2C31.9,19.5,32.6,20.1,33.4,20.1L33.4,20.1z"></path>
        </svg>
      }
      </div>
    );
  }
});
