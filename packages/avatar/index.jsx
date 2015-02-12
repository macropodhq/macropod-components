'use strict';

const md5 = require('MD5');
const React = require('react/addons');
const keyMirror = require('react/lib/keyMirror');
const _ = require('lodash-node');

require('./avatar.scss');

const sizes = {
  's': 20,
  'm': 35,
  'l': 50,
};

const sizeConstants = keyMirror(sizes);

const validateSize = (props, propName) => {
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
    model(props, propName) {
      if (propName in props) {
        return new Error('Avatar\'s model property is deprecated. Please use the explicit properties instead.');
      }
    },
  },

  statics: {
    sizes: sizeConstants,
    validateSize: validateSize,
  },

  getDefaultProps() {
    return {
      size: sizeConstants.m,
      firstName: '',
      lastName: '',
      src: '',
      email: '',
    };
  },

  getBackgroundImage(src, email) {
    const ratio = (window && window.devicePixelRatio) || 1;
    let url = '';

    if (src !== '') {
      url = src;
    } else if (email !== '') {
      url = `//www.gravatar.com/avatar/${md5(email)}?d=blank&s=${(sizes[this.props.size] * ratio).toString(10)}`;
    }

    return `url(${url})`;
  },

  getColor(str) {
    return `hsl(${parseInt(md5(str).substr(2, 4), 16)}, 80%, 45%)`;
  },

  getInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  },

  render() {
    let name;
    let firstName = this.props.firstName;
    let lastName = this.props.lastName;
    let email = this.props.email;
    let src = this.props.src;

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

    const classSet = React.addons.classSet;

    const containerClass = classSet({
      'Avatar': true,
      'Avatar--circle': !!this.props.circle,
      'Avatar--bordered': !!src,
      [`Avatar--${this.props.size}`]: true,
    });

    firstName = this.props.title || firstName;
    lastName = lastName || '';

    return (
      <span title={`${firstName}’s avatar`}
        className={containerClass}
        style={{backgroundColor: this.getColor(firstName + lastName)}}>
        <span className="Avatar-initials" aria-hidden="true">{this.getInitials(firstName, lastName)}</span>
        <span className="Avatar-image" aria-hidden="true" style={{backgroundImage: this.getBackgroundImage(src, email)}}></span>
      </span>
    );
  }
});
