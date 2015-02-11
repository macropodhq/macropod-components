'use strict';

const React = require('react/addons');
const Avatar = require('../avatar');
const PieBadge = require('../pie-badge');

require('./avatar-with-pie.scss');

module.exports = React.createClass({
  displayName: 'AvatarWithPie',

  propTypes: {
    size: Avatar.validateSize,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    src: React.PropTypes.string,
    email: React.PropTypes.string,
    circle: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      size: Avatar.sizes.m,
    };
  },

  render() {
    let classes = {
      'AvatarWithPie': true,
    };

    classes[`AvatarWithPie--${this.props.size}`] = true;
    let containerClass = React.addons.classSet(classes);

    return (
      <span className={containerClass}>
        <Avatar
          size={this.props.size}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          title={this.props.title}
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
