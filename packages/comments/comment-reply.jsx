/** @jsx React.DOM */
var React = require('react/addons');
var Avatar = require('../avatar');

var CommentReply = React.createClass({
  displayName: 'Comment Reply',

  render: function() {
    return (
      <div className="Comment-reply">
        <Avatar model={this.props.comment.author} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-author">
          <strong>{this.props.comment.author.name}</strong>
        </div>
        <p className="Comment-text">
          {this.props.comment.entry}
        </p>
      </div>
    )
  }
});

module.exports = CommentReply;
