/** @jsx React.DOM */

var React = require('react');

var Icon = require('./');

var IconExample = React.createClass({
  render: function() {
    return (
      <div>
        Web font:
        <Icon type="user-female" />
        <Icon type="energy" />
        <Icon type="trophy" />
        <Icon type="users" />
        <Icon type="speech" />

        SVG:
        <Icon type="shield" font={false}/>
      </div>
    );
  }
});

module.exports = IconExample;
