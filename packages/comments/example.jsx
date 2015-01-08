/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var Comments = require('./');
var Button = require('../button');
var Textarea = require('react-textarea-autosize');


var authors = [
  {name: 'Nathan', avatar_url: 'http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d', position: 'Developer', company: 'Macropod'},
  {name: 'Conrad', avatar_url: 'http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56', position: 'Developer', company: 'Macropod'},
  {name: 'Jessica', avatar_url: 'http://www.gravatar.com/avatar/a11cf2d27c3f0a82f1b0cc12cdb0a2e5', position: 'Developer', company: 'Macropod'},
];

module.exports = React.createClass({
  displayName: 'CommentsExample',

  getInitialState: function() {
    return {
      inputButtons: false,
      comments: [
        {
          id: 1,
          parentId: null,
          author: authors[2],
          entry: 'Here\'s an example of the comment component!',
          editable: true,
          deletable: true
        },
        {
          id: 2,
          parentId: 1,
          author: authors[1],
          entry: 'This thing sure is neat!',
          editable: false,
          deletable: false
        },
        {
          id: 3,
          parentId: 1,
          author: authors[0],
          entry: 'Needs more cowbell.',
          editable: false,
          deletable: false
        },
        {
          id: 4,
          parentId: null,
          author: authors[2],
          entry: 'This discussion can only be edited.',
          editable: true,
          deletable: false
        },
        {
          id: 5,
          author: authors[2],
          entry: 'This discussion can only be deleted!',
          editable: false,
          deletable: true
        },
        {
          id: 6,
          author: authors[0],
          entry: 'This comment \nis over multiple lines',
          editable: true,
          deletable: true
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

  handleKeyDown: function(callback, e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13' && !e.ctrlKey && !e.shiftKey){
      callback();
      return false;
    }
  },

  handleNewDiscussion: function(e) {
    e && e.preventDefault();
    this.handleNewComment(this.refs.newDiscussionInput.getDOMNode().value)
    this.refs.newDiscussionInput.getDOMNode().value = '';
    this.refs.newDiscussionInput.getDOMNode().style.height = 'auto';
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

  handleButtonToggle: function() {
    this.setState({inputButtons: !this.state.inputButtons});
  },

  render: function() {
    return (
      <div>
        <Button style={{'margin-bottom': '10px'}} onClick={this.handleButtonToggle}>{this.state.inputButtons ? 'Hide buttons' : 'Show Buttons'}</Button><br />
        <form onSubmit={this.handleNewDiscussion}>
          <Textarea rows="1" ref="newDiscussionInput" onKeyDown={this.handleKeyDown.bind(null, this.handleNewDiscussion)} placeholder="add new discussion"></Textarea>
          { this.state.inputButtons &&
            <Button type="submit">Add</Button>
          }
        </form>
        <Comments comments={this.state.comments} onReply={this.handleNewComment} onDelete={this.handleDelete} onEdit={this.handleEdit} inputButtons={this.state.inputButtons}/>
      </div>
    );
  }
});
