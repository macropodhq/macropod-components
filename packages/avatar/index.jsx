/** @jsx React.DOM */

var md5 = require('MD5');
React = require('react/addons');
require('./avatar.scss');

var sizes = {
  's': 20,
  'm': 35,
  'l': 50
};

var Avatar = React.createClass({
  getDefaultProps: function() {
    return {
      size: 'm',
      firstName: '',
      lastName: '',
      src: '',
      email: '',
    };
  },

  checkModelProps: function() {

    if (this.props.model) {

      var name = _.has(this.props.model, 'name') ? this.props.model.name : '';
      this.props.firstName = _.has(this.props.model, 'firstName') ? this.props.model.firstName : name;
      this.props.lastName = _.has(this.props.model, 'lastName') ? this.props.model.lastName : '';

      if (this.props.email === '') {
        this.props.email = _.has(this.props.model, 'email') ? this.props.model.email : '';
      }

      if (this.props.src === '') {
        this.props.src = _.has(this.props.model, 'avatar_url') ? this.props.model.avatar_url : '';
      }

    }

  },

  componentWillMount: function() {
    this.checkModelProps();
  },

  componentWillUpdate: function() {
    this.checkModelProps();
  },

  getBackgroundImage: function() {
    var ratio = window.devicePixelRatio || 1;
    if (this.props.src !== '') {
      url = this.props.src;
    } else if (this.props.email !== '') {
      url = '//www.gravatar.com/avatar/' + md5(this.props.email) + '?d=blank&s=' + (sizes[this.props.size] * ratio).toString(10)
    } else {
      return '';
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
    var classSet = React.addons.classSet;

    var containerClass = classSet({
      'Avatar': true,
      'Avatar--circle': !!this.props.circle,
      'Avatar--bordered': !!this.props.src,
      'Avatar--s': this.props.size.toLowerCase() === 's',
      'Avatar--m': this.props.size.toLowerCase() === 'm',
      'Avatar--l': this.props.size.toLowerCase() === 'l'
    });

    var firstName = this.props.title || this.props.firstName;
    var lastName = this.props.lastName || '';

    return (
      <span title={firstName + '’s avatar'}
        className={containerClass}
        style={{'background-color': this.getColor(firstName + lastName)}}>
        <span className="Avatar-initials" aria-hidden="true">{this.getInitials(firstName, lastName)}</span>
        <span className="Avatar-image" aria-hidden="true" style={{'background-image': this.getBackgroundImage()}}></span>
      </span>
    );
  }
});

module.exports = Avatar;
