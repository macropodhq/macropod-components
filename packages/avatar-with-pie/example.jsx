'use strict';

const React = require('react');

const AvatarWithPie = require('./');

module.exports = React.createClass({
  displayName: 'AvatarWithPieWithPieExample',

  render() {
    return (
      <div>
        <h3>Square (default)</h3>
        <AvatarWithPie complete="1" total="4" src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=50" firstName="Conrad" lastName="Pankoff" size="l" />
        <AvatarWithPie complete="2" total="4" src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35" firstName="Nathan" lastName="Hutchison" size="m" />
        <AvatarWithPie complete="3" total="4" src="http://www.gravatar.com/avatar/12c884c7f3e99ac579e120318eb9d888?s=20" firstName="Matt" lastName="Milosavljevic" size="s" />

        <h3>Circular</h3>
        <AvatarWithPie complete="1" total="5" src="http://www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=50" firstName="James" lastName="Coleman" size="l" circle={true} />
        <AvatarWithPie complete="3" total="5" src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=35" firstName="Nathan" lastName="Hutchison" size="m" circle={true} />
        <AvatarWithPie complete="5" total="5" src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=20" firstName="Conrad" lastName="Pankoff" size="s" circle={true} />

        <h3>Gravatar</h3>
        <AvatarWithPie complete="1" total="6" email="jessica.stokes@macropod.com" firstName="Jessica" lastName="Stokes" size="l" circle={true} />
        <AvatarWithPie complete="3" total="6" email="james.coleman@bugherd.com" firstName="James" lastName="Coleman" size="m" />
        <AvatarWithPie complete="5" total="6" email="matt@bugherd.com" firstName="Matt" lastName="Milosavljevic" size="s" circle={true} />

        <div style={{backgroundColor: '#21323a', color: '#fff', marginLeft: -30, marginRight: -30, paddingLeft: 30, paddingRight: 30}}>
          <h3>Setting Background Colour</h3>
          <AvatarWithPie backgroundColor="#21323a" complete="1" total="6" email="deoxxa@fknsrs.biz" firstName="Conrad" lastName="Pankoff" size="l" circle={true} />
          <AvatarWithPie backgroundColor="#21323a" complete="3" total="6" email="jessica.stokes@macropod.com" firstName="Jessica" lastName="Stokes" size="m" />
          <AvatarWithPie backgroundColor="#21323a" complete="5" total="6" email="james.coleman@bugherd.com" firstName="James" lastName="Coleman" size="s" circle={true} />
        </div>

        <h3>No Image</h3>
        <AvatarWithPie complete="2" total="7" firstName="Alan" lastName="Downie" size="l" />
        <AvatarWithPie complete="4" total="7" firstName="Conrad" lastName="Pankoff" size="m" circle={true} />
        <AvatarWithPie complete="7" total="7" firstName="James" lastName="Coleman" size="s" circle={true} />
      </div>
    );
  }
});
