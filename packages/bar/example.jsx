'use strict';

const React = require('react');

const Bar = require('./');
const Icon = require('../icon');
const Link = require('../link');

const linkStyle = {
  color: 'inherit'
};

module.exports = React.createClass({
  displayName: 'BarExample',

  statics: {
    wide: true,
  },

  render() {
    return (
      <Bar>
        <Bar.Item align={Bar.Item.align.LEFT}>
          <Link style={linkStyle}>
            <Icon type="home" />
          </Link>
        </Bar.Item>
        <Bar.Item align={Bar.Item.align.CENTER}>
          <svg width="40px" height="40px"  viewBox="0 0 600 600" style={{
            padding: '7px 0 0 0',
            opacity: 0.5,
          }}>
            <g>
              <polygon fill="white" points="390,75 256.9,75 100.1,347 233.3,347" />
              <polygon fill="white" points="366.1,254 209.4,525 343.2,525 500,254" />
            </g>
          </svg>
        </Bar.Item>
        <Bar.Item align={Bar.Item.align.RIGHT}>
          <Link style={linkStyle}>
            <Icon type="settings" />
          </Link>
        </Bar.Item>
        <Bar.Item align={Bar.Item.align.RIGHT}>
          <Link style={linkStyle}>
            <Icon type="user" />
          </Link>
        </Bar.Item>
      </Bar>
    );
  }
});

