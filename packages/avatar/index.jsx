/** @jsx React.DOM */

var md5 = require('MD5');
React = require('react/addons');
require('./avatar.scss');

var Avatar = React.createClass({
  getDefaultProps: function() {
    return {
      size: 'm',
      firstName: '',
      lastName: '',
    };
  },

  stringToColor: function(str) {
    return 'hsl(' + parseInt(md5(str).substr(2, 4), 16) + ', 80%, 45%)';
  },

  renderAvatar: function(firstName, lastName) {
    if (this.props.src) { // if the user has an avatar
      return <img className="Avatar-image" src={this.props.src} title={firstName} alt={firstName + '’s avatar'}/>;
    }

    var initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    return <span className="Avatar-initials" title={firstName}>{initials}</span>;
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
    var lastName = this.props.lastName;

    return (
      <span className={containerClass} style={{'background': this.stringToColor(firstName + lastName)}}>
        {this.renderAvatar(firstName, lastName)}
      </span>
    );
  }
});

module.exports = Avatar;
