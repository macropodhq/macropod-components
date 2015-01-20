/** @jsx React.DOM */

var md5 = require('MD5');
React = require('react/addons');
require('./avatar.scss');

var sizes = {
  's': 20,
  'm': 35,
  'l': 50
};

module.exports = React.createClass({
  displayName: 'Avatar',

  getDefaultProps: function() {
    return {
      size: 'm',
      firstName: '',
      lastName: '',
      src: '',
      email: '',
    };
  },

  getBackgroundImage: function(src, email) {
    var ratio = window.devicePixelRatio || 1;
    var url = '';

    if (src !== '') {
      url = src;
    } else if (email !== '') {
      url = '//www.gravatar.com/avatar/' + md5(email) + '?d=blank&s=' + (sizes[this.props.size] * ratio).toString(10)
    }

    return 'url(' + url + ')';
  },

  getColor: function(str) {
    return 'hsl(' + parseInt(md5(str).substr(2, 4), 16) + ', 80%, 45%)';
  },

  getInitials: function(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
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

    var containerClass = classSet({
      'Avatar': true,
      'Avatar--circle': !!this.props.circle,
      'Avatar--bordered': !!src,
      'Avatar--s': this.props.size.toLowerCase() === 's',
      'Avatar--m': this.props.size.toLowerCase() === 'm',
      'Avatar--l': this.props.size.toLowerCase() === 'l'
    });

    firstName = this.props.title || firstName;
    lastName = lastName || '';

    return (
      <span title={firstName + '’s avatar'}
        className={containerClass}
        style={{'background-color': this.getColor(firstName + lastName)}}>
        <span className="Avatar-initials" aria-hidden="true">{this.getInitials(firstName, lastName)}</span>
        <span className="Avatar-image" aria-hidden="true" style={{'background-image': this.getBackgroundImage(src, email)}}></span>
      </span>
    );
  }
});
