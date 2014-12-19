/** @jsx React.DOM */

var React = require('react/addons');
var Avatar = require('../avatar');
var PieBadge = require('../pie-badge');

require('./avatar-with-pie.scss');

module.exports = React.createClass({
  displayName: 'AvatarWithPie',

  getDefaultProps: function() {
    return {
      size: 'm',
    };
  },

  render: function() {
    var containerClass = React.addons.classSet({
      'AvatarWithPie': true,
      'AvatarWithPie--s': this.props.size.toLowerCase() === 's',
      'AvatarWithPie--m': this.props.size.toLowerCase() === 'm',
      'AvatarWithPie--l': this.props.size.toLowerCase() === 'l'
    });
    return (
      <span className={containerClass}>
        <Avatar
          size={this.props.size}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          src={this.props.src}
          email={this.props.email}
          circle={this.props.circle}
        />
        <PieBadge
          complete={this.props.complete}
          total={this.props.total}
          backgroundColor={this.props.backgroundColor}
        />
      </span>
    );
  }
});
