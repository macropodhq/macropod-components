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
          <svg width="40px" height="40px" viewBox="0 0 64 89" version="1.1" style={{
            padding: '10px 0 0 0',
            opacity: 0.5,
          }}>
              <g stroke="none" fill="none" fillRule="evenodd">
                  <path fill="white" d="M19.5,89 C44.0766714,89 64,69.0766714 64,44.5 C64,19.9233286 44.0766714,0 19.5,0 C-5.07667137,0 29.750001,19.9233286 29.750001,44.5 C29.750001,69.0766714 -5.07667137,89 19.5,89 Z" />
                  <circle fill="white" cx="11" cy="45" r="11" />
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

