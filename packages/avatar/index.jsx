/** @jsx React.DOM */

var md5 = require('MD5');
var React = require('react/addons');
var keyMirror = require('react/lib/keyMirror');
var _ = require('lodash-node');

require('./avatar.scss');

var sizes = {
  's': 20,
  'm': 35,
  'l': 50,
};

var sizeConstants = keyMirror(sizes);

var validateSize = function(props, propName, componentName) {
  if (!sizeConstants[props[propName]]) {
    return new Error('invalid avatar size');
  }
};

module.exports = React.createClass({
  displayName: 'Avatar',

  propTypes: {
    size: validateSize,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    src: React.PropTypes.string,
    email: React.PropTypes.string,
    circle: React.PropTypes.bool,
    model: function(props, propName) {
      if (propName in props) {
        return new Error('Avatar\'s model property is deprecated. Please use the explicit properties instead.');
      }
    },
  },

  statics: {
    sizes: sizeConstants,
    validateSize: validateSize,
  },

  getDefaultProps: function() {
    return {
      size: sizeConstants.m,
      firstName: '',
      lastName: '',
      src: '',
      email: '',
    };
  },

  getBackgroundImage: function(src, email) {
    var ratio = window && window.devicePixelRatio || 1;
    var url = '';

    if (src !== '') {
      url = src;
    } else if (email !== '') {
      url = '//www.gravatar.com/avatar/' + md5(email) + '?d=blank&s=' + (sizes[this.props.size] * ratio).toString(10);
    }

    return 'url(' + url + ')';
  },

  getColor: function(str) {
    return 'hsl(' + parseInt(md5(str).substr(2, 4), 16) + ', 80%, 45%)';
  },

  getInitials: function(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  },

  render: function() {
    var name;
    var firstName = this.props.firstName;
    var lastName = this.props.lastName;
    var email = this.props.email;
    var src = this.props.src;

    if (this.props.model) {
      name = _.has(this.props.model, 'name') ? this.props.model.name : '';
      firstName = _.has(this.props.model, 'firstName') ? this.props.model.firstName : name;
      lastName = _.has(this.props.model, 'lastName') ? this.props.model.lastName : '';

      if (this.props.email === '') {
        email = _.has(this.props.model, 'email') ? this.props.model.email : '';
      }

      if (this.props.src === '') {
        src = _.has(this.props.model, 'avatar_url') ? this.props.model.avatar_url : '';
      }
    }

    var classSet = React.addons.classSet;

    var classes = {
      'Avatar': true,
      'Avatar--circle': !!this.props.circle,
      'Avatar--bordered': !!src,
    };
    classes['Avatar--' + this.props.size] = true;

    var containerClass = classSet(classes);

    firstName = this.props.title || firstName;
    lastName = lastName || '';

    return (
      <span title={firstName + '’s avatar'}
        className={containerClass}
        style={{backgroundColor: this.getColor(firstName + lastName)}}>
        <span className="Avatar-initials" aria-hidden="true">{this.getInitials(firstName, lastName)}</span>
        <span className="Avatar-image" aria-hidden="true" style={{backgroundImage: this.getBackgroundImage(src, email)}}></span>
      </span>
    );
  }
});
