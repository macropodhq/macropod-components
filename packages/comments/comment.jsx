/** @jsx React.DOM */
var React = require('react/addons');
var DropdownMenu = require('../dropdown-menu');
var Avatar = require('../avatar');
var Button = require('../button');
var CommentReply = require('./comment-reply');

require('./comment.scss');

module.exports = React.createClass({
  displayName: 'Comment',

  getDefaultProps: function() {
    return {
      onReply: function() {},
      onEdit: function() {},
      onDelete: function() {},
      inputButtons: false
    }
  },

  getInitialState: function() {
    return {
      showMenu: false,
      stared: false,
      editing: false,
      newReply: false
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

  handleReplyChange: function(e) {
    if (!this.props.inputButtons) {
      return;
    } else {
      var newReply = false;
      if (e.target.value !== '') {
        newReply = true;
      }

      if (this.state.newReply !== newReply) {
        this.setState({newReply: newReply});
      }
    }
  },

  handleNewReply: function(e) {
    e && e.preventDefault();
    this.props.onReply(this.refs.replyInput.getDOMNode().value, this.props.comment.id);
    this.refs.replyInput.getDOMNode().value = '';
  },

  handleDelete: function() {
    this.props.onDelete(this.props.comment.id);
  },

  handleEdit: function(e) {
    e && e.preventDefault();
    this.props.onEdit(this.props.comment.id, this.refs.editInput.getDOMNode().value);
    this.handleEditToggle();
  },

  handleKeyDown: function(callback, e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13' && !e.ctrlKey && !e.shiftKey){
      callback();
      return false;
    }
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
      'Comment--starred': this.state.stared,
      'Comment--inputButtons': this.props.inputButtons
    });

    var replies = _.clone(this.props.replies).reverse();

    var dropdownContent = null;

    if (this.props.starable || this.props.comment.deletable || this.props.comment.editable) {
      dropdownContent = (
        <div>
          <a href="#" className="Comment-dropdownToggle" ref="menuAnchor" onClick={this.handleMenuToggle}>&hellip;</a>
          <DropdownMenu className="DropdownMenu" anchor={this.refs.menuAnchor} visible={this.state.showMenu} close={this.handleMenuToggle}>
            <dl>
              {this.props.starable && <dd><a href="#" onClick={this.handleStarToggle}>{this.state.stared ? "Unstar" : "Star"} this discussion</a></dd>}
              {this.props.comment.editable && <dd><a href="#" onClick={this.handleEditToggle}>Edit discussion</a></dd>}
              {this.props.comment.deletable && <dd><a href="#" onClick={this.handleDelete}>Delete discussion</a></dd>}
            </dl>
          </DropdownMenu>
        </div>
      );
    }

    return (
      <div className={commentClass}>
        {dropdownContent}
        <Avatar model={this.props.comment.author} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-author">
          <strong>{this.props.comment.author.name}</strong>
        </div>
        <p className="Comment-text" ref="commentText">
          {
            this.state.editing
              ?
                <form onSubmit={this.handleEdit}>
                  <textarea ref="editInput" className="Comment-editInput" defaultValue={this.props.comment.entry} onKeyDown={this.handleKeyDown.bind(null, this.handleEdit)}></textarea>

                  { this.props.inputButtons &&
                    <Button type="submit">Edit</Button>
                  }
                </form>
              : <span className="Comment-text-display">{this.props.comment.entry}</span>
          }
        </p>

        <div className="Comment-replies">
          {
            replies.map(function(comment) {
              return (
                <CommentReply comment={comment} />
              );
            })
          }

          <div className="Comment-replies-new">
            <form onSubmit={this.handleNewReply}>
              <textarea ref="replyInput" className="Comment-replies-new-input" placeholder="add a reply" onChange={this.handleReplyChange} onKeyDown={this.handleKeyDown.bind(null, this.handleNewReply)}></textarea>
              { this.props.inputButtons &&
                <Button type="submit" disabled={!this.state.newReply}>Reply</Button>
              }
            </form>
          </div>
        </div>
      </div>
    )
  }
});
