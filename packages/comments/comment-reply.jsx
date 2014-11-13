/** @jsx React.DOM */
var React = require('react/addons');
var Avatar = require('../avatar');

var CommentReply = React.createClass({
  displayName: 'Comment Reply',

  render: function() {
    return (
      <div className="Comment-reply">
        <Avatar src={this.props.comment.author.avatar} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-author">
          <strong>{this.props.comment.author.name}</strong> <br/>
          {this.props.comment.author.position} &middot; {this.props.comment.author.company}
        </div>
        <p className="Comment-text">
          {this.props.comment.entry}
        </p>
      </div>
    )
  }
});

module.exports = CommentReply;
