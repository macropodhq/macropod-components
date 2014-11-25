/** @jsx React.DOM */

var React = require('react');

var Icon = require('./');

var IconExample = React.createClass({
  render: function() {
    return (
      <div style={{fontSize:40}}>
        Web font:
        <Icon type="user-female" />
        <Icon type="energy" />
        <Icon type="trophy" />
        <Icon type="users" />
        <Icon type="speech" />

        SVG:
        <Icon type="shield" font={false} />
        <Icon type="twitter" font={false}/>
        <Icon type="magnet" font={false}/>

      </div>
    );
  }
});

module.exports = IconExample;
