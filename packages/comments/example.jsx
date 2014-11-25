/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var Comments = require('./');
var Button = require('../button');


var authors = [
  {name: 'Nathan', avatar_url: 'http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d', position: 'Developer', company: 'BugHerd'},
  {name: 'Conrad', avatar_url: 'http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56', position: 'Developer', company: 'BugHerd'},
  {name: 'Jessica', avatar_url: 'http://www.gravatar.com/avatar/a11cf2d27c3f0a82f1b0cc12cdb0a2e5', position: 'Developer', company: 'BugHerd'},
];

var CommentsExample = React.createClass({
  getInitialState: function() {
    return {
      comments: [
        {
          id: 1,
          parentId: null,
          author: authors[2],
          entry: 'Here\'s an example of the comment component!'
        },
        {
          id: 2,
          parentId: 1,
          author: authors[1],
          entry: 'This thing sure is neat!'
        },
        {
          id: 3,
          parentId: 1,
          author: authors[0],
          entry: 'Needs more cowbell.'
        }
      ]
    }
  },

  handleNewComment: function(value, parentId) {
    var updatedComments = this.state.comments;

    updatedComments.push({
      id: this.state.comments.length + 1,
      parentId: parentId === undefined ? null : parentId,
      author: authors[Math.floor(Math.random() * (2 - 0 + 1))],
      entry: value
    });

    this.setState({comments: updatedComments})
  },

  handleKeyPress: function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      this.handleNewDiscussion();
      return false;
    }
  },

  handleNewDiscussion: function() {
    this.handleNewComment(this.refs.newDiscussionInput.getDOMNode().value)
    this.refs.newDiscussionInput.getDOMNode().value = '';
  },

  handleDelete: function(id) {
    var updatedComments = _.reject(this.state.comments, {id: id});
    this.setState({comments: updatedComments});
  },

  handleEdit: function(id, value) {
    var updatedComments = _.reject(this.state.comments, {id: id});
    var editedComment = _.filter(this.state.comments, {id: id});
    editedComment[0].entry = value;
    updatedComments.push(editedComment[0]);
    this.setState({comments: updatedComments});
  },

  render: function() {
    return (
      <div>
        <input ref="newDiscussionInput" onKeyPress={this.handleKeyPress} placeholder="add new discussion" />
        <Comments comments={this.state.comments} onReply={this.handleNewComment} onDelete={this.handleDelete} onEdit={this.handleEdit} />
      </div>
    );
  }
});

module.exports = CommentsExample;
