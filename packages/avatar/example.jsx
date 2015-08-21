'use strict';

const React = require('react');

const Avatar = require('./');

module.exports = React.createClass({
  displayName: 'AvatarExample',

  render() {
    return (
      <div>
        <h3>Square (default)</h3>
        <Avatar src="//www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50&d=404" title="Nathan Hutchison" size={Avatar.sizes.l} />
        <Avatar src="//www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35&d=404" title="Conrad Pankoff" size={Avatar.sizes.m} />
        <Avatar src="//www.gravatar.com/avatar/12c884c7f3e99ac579e120318eb9d888?s=20&d=404" title="Matt Milosavljevic" size={Avatar.sizes.s} />

        <h3>Circular</h3>
        <Avatar src="//www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=50&d=404" title="Conrad Pankoff" size="l" circle={true} />
        <Avatar src="//www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35&d=404" title="Nathan Hutchison" size="m" circle={true} />
        <Avatar src="//www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=20&d=404" title="James Coleman" size="s" circle={true} />

        <h3>No Image</h3>
        <Avatar title="Alan Downie" size="l" />
        <Avatar title="Conrad Pankoff" size="m" circle={true} />
        <Avatar title="James Coleman" size="s" circle={true} />
      </div>
    );
  },
});
