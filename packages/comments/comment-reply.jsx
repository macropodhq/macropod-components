'use strict';
const React = require('react/addons');
const Avatar = require('../avatar');
const DateFormatter = require('../datetime-format');

module.exports = React.createClass({
  displayName: 'CommentReply',

  render() {
    return (
      <div className="Comment-reply">
        <Avatar
          title={this.props.comment.author.name}
          firstName={this.props.comment.author.firstName}
          lastName={this.props.comment.author.lastName}
          email={this.props.comment.author.email}
          src={this.props.comment.author.avatar_url}
          size="m"
          circle={true}/>

        <div className="Comment-details">
          <strong className="Comment-author">{this.props.comment.author.name}</strong>
          <time className="Comment-time" dateTime={DateFormatter.custom(this.props.comment.createdAt, 'YYYY-MM-DD hh:mm')}>
            {DateFormatter.dateTime(this.props.comment.createdAt)}
          </time>
        </div>

        <div className="Comment-text">
          {this.props.comment.beforeContent}
          <p className="Comment-text-content">{this.props.comment.entry}</p>
          {this.props.comment.afterContent}
        </div>
      </div>
    );
  }
});
