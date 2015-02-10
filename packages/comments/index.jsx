'use strict';
var React = require('react/addons');
var _ = require('lodash-node');
/*global Comment:false*/
var Comment = require('./comment');

module.exports = React.createClass({
  displayName: 'Comments',

  render() {
    var parentComments = _.filter(this.props.comments, obj => !obj.parentId);

    return (
      <div className="Comments">
        {
          parentComments.map(comment => {
            var replies = _.filter(this.props.comments, {parentId: comment.id});
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
  }
});
