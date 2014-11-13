/** @jsx React.DOM */
var React = require('react/addons');
var DropdownMenu = require('../dropdown-menu');
var Avatar = require('../avatar');
var CommentReply = require('./comment-reply');

require('./comment.scss');

var Comment = React.createClass({
  displayName: 'Comment',

  getDefaultProps: function() {
    return {
      onReply: function() {},
      onDelete: function() {}
    }
  },

  getInitialState: function() {
    return {
      showMenu: false,
      stared: false,
      editing: false
    };
  },

  handleMenuToggle: function(e) {
    this.setState({showMenu: !this.state.showMenu});
    e.preventDefault();
  },

  handleStarToggle: function(e) {
    this.setState({stared: !this.state.stared});
    e.preventDefault();
  },

  handleKeyPress: function(callback, e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      callback();
      return false;
    }
  },

  handleNewReply: function() {
    this.props.onReply(this.refs.replyInput.getDOMNode().value, this.props.comment.id);
    this.refs.replyInput.getDOMNode().value = '';
  },

  handleDelete: function() {
    this.props.onDelete(this.props.comment.id);
  },

  handleEdit: function() {
    this.props.onEdit(this.props.comment.id, this.refs.editInput.getDOMNode().value);
    this.handleEditToggle();
  },

  handleEditToggle: function() {
    this.setState({editing: !this.state.editing}, function() {
      if (this.state.editing) {this.refs.editInput.getDOMNode().focus()}
    });
  },

  render: function() {
    var cx = React.addons.classSet;
    var commentClass = cx({
      'Comment': true,
      'Comment--starred': this.state.stared
    });

    return (
      <div className={commentClass}>
        <a href="#" className="Comment-dropdownToggle" ref="menuAnchor" onClick={this.handleMenuToggle}>
          ...
        </a>
        <DropdownMenu className="DropdownMenu" anchor={this.refs.menuAnchor} visible={this.state.showMenu} close={this.handleMenuToggle}>
          <dl>
            <dd><a href="#" onClick={this.handleStarToggle}>{this.state.stared ? "Unstar" : "Star"} this discussion</a></dd>
            <dd><a href="#" onClick={this.handleEditToggle}>Edit discussion</a></dd>
            <dd><a href="#" onClick={this.handleDelete}>Delete discussion</a></dd>
          </dl>
        </DropdownMenu>
        <Avatar src={this.props.comment.author.avatar} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-author">
          <strong>{this.props.comment.author.name}</strong> <br/>
          {this.props.comment.author.position} &middot; {this.props.comment.author.company}
        </div>
        <p className="Comment-text" ref="commentText">
          {this.state.editing ? <input ref="editInput" defaultValue={this.props.comment.entry} onKeyPress={this.handleKeyPress.bind(null, this.handleEdit)} /> : this.props.comment.entry}
        </p>

        <div className="Comment-replies">
          {
            this.props.replies && this.props.replies.map(function(comment) {
              return (
                <CommentReply comment={comment} />
              );
            })
          }

          <div className="Comment-replies-new">
              <textarea ref="replyInput" onKeyPress={this.handleKeyPress.bind(null, this.handleNewReply)} className="Comment-replies-new-input" placeholder="add a reply"></textarea>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Comment;