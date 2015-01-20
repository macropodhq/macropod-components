/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash-node');
var DropdownMenu = require('../dropdown-menu');
var Avatar = require('../avatar');
var Comment = require('./comment');

module.exports = React.createClass({
  displayName: 'Comments',

  render: function() {
    var parentComments = _.filter(this.props.comments, function(obj) {return !obj.parentId});

    return (
      <div className="Comments">
        {
          parentComments.map(function(comment) {
            var replies = _.filter(this.props.comments, {parentId: comment.id});
            return (
              <Comment
                comment={comment}
                replies={replies}
                onEdit={this.props.onEdit}
                onReply={this.props.onReply}
                onDelete={this.props.onDelete}
                inputButtons={this.props.inputButtons}
              />
            );
          }.bind(this))
        }
      </div>
    )
  }
});
