/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash');
var DropdownMenu = require('../dropdown-menu');
var Avatar = require('../avatar');
var CommentThread = require('./comment-thread');

module.exports = React.createClass({
  displayName: 'Comments',

  getParentComments: function() {
    return _.filter(this.props.comments, function(obj) {return !obj.parentId});
  },

  getComments: function(parentId) {
    return _.filter(this.props.comments, {parentId: parentId});
  },

  render: function() {
    return (
      <div className="Comments">
        {
          this.getParentComments().map(function(comment) {
            return this.transferPropsTo(
              <CommentThread comment={comment} replies={this.getComments(comment.id)} />
            );
          }.bind(this))
        }
      </div>
    )
  }
});
