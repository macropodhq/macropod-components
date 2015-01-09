/** @jsx React.DOM */
var React = require('react/addons');
var DropdownMenu = require('../dropdown-menu');
var Avatar = require('../avatar');
var Button = require('../button');
var CommentReply = require('./comment-reply');
var Textarea = require('react-textarea-autosize');
var DateFormatter = require('../datetime-format');
var moment = require('moment');
var Tooltip = require('../tooltip');

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
      replyValue: '',
      editValue: this.props.comment.entry
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
    this.setState({replyValue: e.target.value});
  },

  handleEditChange: function(e) {
    this.setState({editValue: e.target.value});
  },

  handleNewReply: function(e) {
    e && e.preventDefault();
    this.props.onReply(this.state.replyValue, this.props.comment.id);
    this.setState({replyValue: ''});
  },

  handleDelete: function() {
    this.props.onDelete(this.props.comment.id);
  },

  handleEdit: function(e) {
    e && e.preventDefault();
    this.props.onEdit(this.props.comment.id, this.state.editValue);
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
    this.setState({
      editing: !this.state.editing,
      editValue: this.props.comment.entry
    }, function() {
      if (this.state.editing) {
        var editInput = this.refs.editInput.getDOMNode();
        editInput.focus();
        editInput.setSelectionRange(this.state.editValue.length, this.state.editValue.length);
      }
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

    var editedDisplay = null;

    if (this.props.comment.updatedAt && moment(this.props.comment.updatedAt).isAfter(moment(this.props.comment.createdAt))) {
      editedDisplay = (
        <span className="Comment-edited">
          <span data-tooltip={DateFormatter.dateTime(this.props.comment.updatedAt)}>edited</span>
        </span>
      )
    }

    return (
      <div className={commentClass}>
        {dropdownContent}
        <Avatar model={this.props.comment.author} title={this.props.comment.author.name} size="m" circle={true} />
        <div className="Comment-details">
          <strong className="Comment-author">{this.props.comment.author.name}</strong>
          <time className="Comment-time" dateTime={DateFormatter.custom(this.props.comment.createdAt, 'YYYY-MM-DD hh:mm')}>{DateFormatter.dateTime(this.props.comment.createdAt)}</time>
          {editedDisplay}
        </div>
        <p className="Comment-text" ref="commentText">
          {
            this.state.editing
              ?
                <form onSubmit={this.handleEdit}>
                  <Textarea rows="1" ref="editInput" value={this.state.editValue} className="Comment-editInput" onChange={this.handleEditChange} onKeyDown={this.handleKeyDown.bind(null, this.handleEdit)}></Textarea>
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
              <Textarea rows="1" value={this.state.replyValue} className="Comment-replies-new-input" placeholder="add a reply" onChange={this.handleReplyChange} onKeyDown={this.handleKeyDown.bind(null, this.handleNewReply)}></Textarea>
              { this.props.inputButtons &&
                <Button type="submit" disabled={!this.state.replyValue.length}>Reply</Button>
              }
            </form>
          </div>
        </div>
      </div>
    )
  }
});
