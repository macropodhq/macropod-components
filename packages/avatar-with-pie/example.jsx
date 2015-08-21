'use strict';

const React = require('react');

const AvatarWithPie = require('./');

module.exports = React.createClass({
  displayName: 'AvatarWithPieWithPieExample',

  render() {
    return (
      <div>
        <h3>Square (default)</h3>
        <AvatarWithPie complete="1" total="4" src="//www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=50&d=404" title="Conrad Pankoff" size={Avatar.sizes.l} />
        <AvatarWithPie complete="2" total="4" src="//www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35&d=404" title="Nathan Hutchison" size={Avatar.sizes.m} />
        <AvatarWithPie complete="3" total="4" src="//www.gravatar.com/avatar/12c884c7f3e99ac579e120318eb9d888?s=20&d=404" title="Matt Milosavljevic" size={Avatar.sizes.s} />

        <h3>Circular</h3>
        <AvatarWithPie complete="1" total="5" src="//www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=50&d=404" title="James Coleman" size="l" circle={true} />
        <AvatarWithPie complete="3" total="5" src="//www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35&d=404" title="Nathan Hutchison" size="m" circle={true} />
        <AvatarWithPie complete="5" total="5" src="//www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=20&d=404" title="Conrad Pankoff" size="s" circle={true} />

        <div style={{backgroundColor: '#21323a', color: '#fff', marginLeft: -30, marginRight: -30, paddingLeft: 30, paddingRight: 30}}>
          <h3>Setting Background Colour</h3>
          <AvatarWithPie backgroundColor="#21323a" complete="1" total="6" src="//www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=50&d=404" title="Conrad Pankoff" size="l" circle={true} />
          <AvatarWithPie backgroundColor="#21323a" complete="3" total="6" src="//www.gravatar.com/avatar/a11cf2d27c3f0a82f1b0cc12cdb0a2e5?s=25&d=404" title="Jessica Stokes" size="m" />
          <AvatarWithPie backgroundColor="#21323a" complete="5" total="6" src="//www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=50&d=404" title="James Coleman" size="s" circle={true} />
        </div>

        <h3>No Image</h3>
        <AvatarWithPie complete="2" total="7" title="Alan Downie" size="l" />
        <AvatarWithPie complete="4" total="7" title="Conrad Pankoff" size="m" circle={true} />
        <AvatarWithPie complete="7" total="7" title="James Coleman" size="s" circle={true} />
      </div>
    );
  },
});
