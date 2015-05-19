'use strict';

const React = require('react/addons');
const _ = require('lodash-node');
const keyMirror = require('react/lib/keyMirror');

require('./icon.scss');

const iconTypes = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

const iconConstants = keyMirror(_.invert(iconTypes));

module.exports = React.createClass({
  displayName: 'Icon',

  propTypes: {
    type: React.PropTypes.oneOf(iconTypes).isRequired,
  },

  statics: {
    iconTypes: iconConstants,
  },

  getDefaultProps() {
    return {
      type: iconConstants['arrow-down'],
      component: React.createFactory('i'),
    };
  },

  render() {
    return this.props.component({
      ...this.props,
      className: 'Icon' + (this.props.className ? ` ${this.props.className}` : ''),
      style: this.props.style,
      dangerouslySetInnerHTML: {
        __html: require(`!raw!./svgs/icon-${this.props.type}.svg`),
      },
    });
  },
});
