/** @jsx React.DOM */
React = require('react/addons');
require('./avatar.scss');

var Avatar = React.createClass({
  getDefaultProps: function() {
    return {
      size: 'm'
    };
  },

  render: function() {
    var classSet = React.addons.classSet;
    var src = this.props.src ? this.props.src : '/favicon-32x32.png';

    var containerClass = classSet({
      'Avatar--circle': this.props.circle,
      'Avatar': true,
      'Avatar--s': this.props.size.toLowerCase() === 's',
      'Avatar--m': this.props.size.toLowerCase() === 'm',
      'Avatar--l': this.props.size.toLowerCase() === 'l'
    });

    return (
      <span className={containerClass}>
        <img className="Avatar-image" src={src} title={this.props.title} alt={this.props.title}></img>
      </span>
    );
  }
});

module.exports = Avatar;
