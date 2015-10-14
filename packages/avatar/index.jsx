import React from 'react';
import md5 from 'MD5';
import keyMirror from 'keymirror';
import SuitClassSet from '../suit-class-set';

import './avatar.scss';

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

export default React.createClass({
  displayName: 'Avatar',

  propTypes: {
    size: validateSize,
    firstName(props, propName) {
      if (propName in props && props[propName] != '') {
        return new Error(`Avatar's \`${propName}\` property is deprecated. Please use \`title\` instead.`);
      }
    },
    lastName(props, propName) {
      if (propName in props && props[propName] != '') {
        return new Error(`Avatar's \`${propName}\` property is deprecated. Please use \`title\` instead.`);
      }
    },
    src: React.PropTypes.string,
    email(props, propName) {
      if (propName in props && props[propName] != '') {
        return new Error(`Avatar's \`${propName}\` property is deprecated. Please specify the \`src\` instead.`);
      }
    },
    circle: React.PropTypes.bool,
  },

  statics: {
    sizes: sizeConstants,
    validateSize: validateSize,
  },

  getInitialState() {
    return {
      showImage: false,
    };
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

  getAvatarUrl(src, email) {
    const ratio = (window && window.devicePixelRatio) || 1;
    let url = '';

    if (src !== '') {
      url = src;
    } else if (email !== '') {
      url = `//www.gravatar.com/avatar/${md5(email)}?d=404&s=${(sizes[this.props.size] * ratio).toString(10)}`;
    }

    return url;
  },

  getBackgroundImage(url) {
    return `url(${url})`;
  },

  getColor(str) {
    return `hsl(${parseInt(md5(str).substr(2, 4), 16)}, 80%, 45%)`;
  },

  getInitials(name, lastName) {
    return name.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  },

  handleImageLoadComplete() {
    if (this.isMounted()) {
      this.setState({
        showImage: true,
      });
    }
  },

  render() {
    let firstName = this.props.firstName;
    let lastName = this.props.lastName;
    let email = this.props.email;
    let src = this.props.src;

    firstName = this.props.title || firstName;
    lastName = lastName || '';

    const hashName = (firstName + lastName).replace(/\s*/g, '');

    const imageUrl = this.getAvatarUrl(src, email);
    const avatarStyle = {};

    if (this.state.showImage) {
      avatarStyle.backgroundImage = this.getBackgroundImage(imageUrl);
      avatarStyle.color = 'transparent';
    } else {
      avatarStyle.backgroundColor = this.getColor(hashName);
    }

    const containerClass = new SuitClassSet('Avatar');

    containerClass.addModifier({
      'circle': !!this.props.circle,
      'bordered': !!src,
      [this.props.size]: true,
    });

    return (
      <span
        title={`${firstName}’${firstName.charAt(firstName.length - 1).toLowerCase() === 's' ? '' : 's'} avatar`}
        className={containerClass.toString()}
        style={avatarStyle}
      >
        <img
          src={imageUrl}
          onLoad={this.handleImageLoadComplete}
          style={{position: 'absolute', maxWidth: 0, maxHeight: 0, opacity: 0}}
          aria-hidden="true"
          alt=""
        />
        {this.getInitials(firstName, lastName)}
      </span>
    );
  },
});
