/** @jsx React.DOM */
var React = require('react/addons');
var Avatar = require('../avatar');
var DateFormatter = require('../datetime-format');

module.exports = React.createClass({
  displayName: 'CommentReply',

  render: function() {
    return (
      <div className="Comment-reply">
        <Avatar model={this.props.comment.author} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-details">
          <strong className="Comment-author">{this.props.comment.author.name}</strong>
          <time className="Comment-time" dateTime={DateFormatter.custom(this.props.comment.createdAt, 'YYYY-MM-DD hh:mm')}>{DateFormatter.dateTime(this.props.comment.createdAt)}</time>
        </div>
        <p className="Comment-text">
          {this.props.comment.entry}
        </p>
      </div>
    )
  }
});
