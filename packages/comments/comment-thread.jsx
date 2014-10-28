/** @jsx React.DOM */
var React = require('react/addons');
var Comment = require('./comment');

var CommentThread = React.createClass({
  displayName: 'CommentThread',

  render: function() {
    return (
      <div className="CommentThread">
        {this.transferPropsTo(<Comment />)}
      </div>
    )
  }
});

module.exports = CommentThread;
