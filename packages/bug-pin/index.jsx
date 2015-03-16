'use strict';

const React = require('react/addons');
const _ = require('lodash-node');
const keyMirror = require('react/lib/keyMirror');

require('./bug-pin.scss');

const pinTypes = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/pin-/i, '').replace(/.svg$/i, '')).sort();

const pinConstants = keyMirror(_.invert(pinTypes));

module.exports = React.createClass({
  displayName: 'BugPin',

  propTypes: {
    type: React.PropTypes.oneOf(pinTypes).isRequired,
  },

  statics: {
    pinTypes: pinConstants,
  },

  getDefaultProps() {
    return {
      type: pinConstants['arrow-down'],
      component: React.createFactory('i'),
    };
  },

  render() {
    return this.props.component({
      ...this.props,
      className: 'BugPin' + (this.props.className ? ` ${this.props.className}` : ''),
      style: this.props.style,
      dangerouslySetInnerHTML: {
        __html: require(`!raw!./svgs/pin-${this.props.type}.svg`)
      }
    });
  }
});
