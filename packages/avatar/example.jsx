/** @jsx React.DOM */

var React = require('react');

var Avatar = require('./');

module.exports = React.createClass({
  displayName: 'AvatarExample',

  render: function() {
    var person = {
      avatar_url: "http://gravatar.com/avatar/57e7abbdae964dbab015cdadf581ad22",
      id: 1,
      name: "matt.milosavljevic",
      user_id: 1
    };
    return (
      <div>
        <h3>Square (default)</h3>
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" firstName="Nathan" lastName="Hutchison" size={Avatar.sizes.l} />
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" firstName="Conrad" lastName="Pankoff" size="m" />
        <Avatar src="http://www.gravatar.com/avatar/12c884c7f3e99ac579e120318eb9d888?s=20" firstName="Matt" lastName="Milosavljevic" size="s" />

        <h3>Circular</h3>
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=50" firstName="Conrad" lastName="Pankoff" size="l" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35" firstName="Nathan" lastName="Hutchison" size="m" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=20" firstName="James" lastName="Coleman" size="s" circle={true} />

        <h3>Gravatar</h3>
        <Avatar email="matt@bugherd.com" firstName="Matt" lastName="Milosavljevic" size="l" circle={true} />
        <Avatar email="james.coleman@bugherd.com" firstName="James" lastName="Coleman" size="m" />
        <Avatar email="nathan@bugherd.com" firstName="Nathan" lastName="Hutchison" size="s" circle={true} />

        <h3>Model-based</h3>
        <Avatar model={person} size="l" circle={true}/>
        <Avatar model={person} size={Avatar.sizes.m} circle={true}/>
        <Avatar model={person} size="s"/>

        <h3>No Image</h3>
        <Avatar firstName="Alan" lastName="Downie" size="l" />
        <Avatar firstName="Conrad" lastName="Pankoff" size="m" circle={true} />
        <Avatar firstName="James" lastName="Coleman" size="s" circle={true} />
      </div>
    );
  }
});
