'use strict';

var React = require('react/addons');
var classSet = React.addons.classSet;
var _ = require('lodash-node');
var keyMirror = require('react/lib/keyMirror');

require('./icon.scss');

var iconTypes = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

var iconConstants = keyMirror(_.invert(iconTypes));

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
    var classes = {
      'Icon': true,
    };
    classes[this.props.className] = !!this.props.className; // es6 {[whatever]: true} syntax not supported yet
    var className = classSet(classes);

    var props = {
      className: className,
      style: this.props.style,
      dangerouslySetInnerHTML: {
        __html: require('!raw!./svgs/icon-' + this.props.type + '.svg')
      }
    };

    return this.props.component(props);
  }
});
