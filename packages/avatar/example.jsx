/** @jsx React.DOM */

var React = require('react');

var Avatar = require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Normal</h3>
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" firstName="Nathan" lastName="Hutchison" size="l" />
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" firstName="Conrad" lastName="Pankoff" size="m" />
        <Avatar src="http://www.gravatar.com/avatar/e4f66a7241674482fc1ebe610597225f?s=20" firstName="Geoff" lastName="Stokes" size="s" />

        <h3>Circular</h3>
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" firstName="Nathan" lastName="Hutchison" size="l" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" firstName="Conrad" lastName="Pankoff" size="m" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/e4f66a7241674482fc1ebe610597225f?s=20" firstName="Geoff" lastName="Stokes" size="s" circle={true} />

        <h3>No Image</h3>
        <Avatar firstName="Nathan" lastName="Hutchison" size="l" circle={true} />
        <Avatar firstName="Conrad" lastName="Pankoff" size="m" circle={true} />
        <Avatar firstName="Geoff" lastName="Stokes" size="s" circle={true} />
      </div>
    );
  }
});

module.exports = LoadingExample;
