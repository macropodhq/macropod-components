'use strict';
const React = require('react/addons');
const _ = require('lodash');
const Comment = require('./comment');

module.exports = React.createClass({
  displayName: 'Comments',

  render() {
    const parentComments = _.filter(this.props.comments, obj => !obj.parentId);

    return (
      <div className="Comments">
        {
          parentComments.map(comment => {
            let replies = _.filter(this.props.comments, {parentId: comment.id});
            return (
              <Comment
                key={comment.id}
                comment={comment}
                replies={replies}
                onEdit={this.props.onEdit}
                onReply={this.props.onReply}
                onDelete={this.props.onDelete}
                inputButtons={this.props.inputButtons}
              />
            );
          })
        }
      </div>
    );
  },
});
