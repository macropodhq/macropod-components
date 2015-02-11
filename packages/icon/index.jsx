'use strict';

const React = require('react/addons');
const classSet = React.addons.classSet;
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
    let classes = {
      'Icon': true,
    };
    classes[this.props.className] = !!this.props.className; // es6 {[whatever]: true} syntax not supported yet
    let className = classSet(classes);

    let props = {
      className: className,
      style: this.props.style,
      dangerouslySetInnerHTML: {
        __html: require(`!raw!./svgs/icon-${this.props.type}.svg`)
      }
    };

    return this.props.component(props);
  }
});
