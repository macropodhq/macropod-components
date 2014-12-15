/** @jsx React.DOM */
var React = require('react/addons');
var Comment = require('./comment');

module.exports = React.createClass({
  displayName: 'CommentThread',

  render: function() {
    return (
      <div className="CommentThread">
        {this.transferPropsTo(<Comment />)}
      </div>
    )
  }
});
