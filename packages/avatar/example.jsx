/** @jsx React.DOM */

var React = require('react');

var Avatar = require('./');

var LoadingExample = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Normal</h3>
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" title="Nathan" size="l" />
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" title="Conrad" size="m" />
        <Avatar src="http://www.gravatar.com/avatar/e4f66a7241674482fc1ebe610597225f?s=20" title="Geoff" size="s" />

        <h3>Circular</h3>
        <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" title="Nathan" size="l" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" title="Conrad" size="m" circle={true} />
        <Avatar src="http://www.gravatar.com/avatar/e4f66a7241674482fc1ebe610597225f?s=20" title="Geoff" size="s" circle={true} />
      </div>
    );
  }
});

module.exports = LoadingExample;
