'use strict';
const React = require('react/addons');
const _ = require('lodash-node');
const InputTextarea = require('../form/input-textarea');
const SuitClassSet = require('../suit-class-set');

const DropdownMenu = require('../dropdown-menu');
const Avatar = require('../avatar');
const Icon = require('../icon');
const Button = require('../button');
const CommentReply = require('./comment-reply');
const DateFormatter = require('../datetime-format');

require('./comment.scss');

const noop = () => {};

function dateValidator(props, propName, componentName) {
  if (propName in props && isNaN(new Date(props[propName]).getUTCMilliseconds())) {
    return new Error(`Invalid value for prop \`${propName}\` in \`${componentName}\`.`);
  }
}

module.exports = React.createClass({
  displayName: 'Comment',

  propTypes: {
    comment: React.PropTypes.shape({
      id: React.PropTypes.any.isRequired,
      author: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        avatar_url: React.PropTypes.string,
      }).isRequired,
      highlighted: React.PropTypes.bool,
      scrollIntoView: React.PropTypes.bool,
      entry: React.PropTypes.string.isRequired,
      beforeContent: React.PropTypes.node,
      afterContent: React.PropTypes.node,
      repliable: React.PropTypes.bool,
      editable: React.PropTypes.bool,
      deletable: React.PropTypes.bool,
      isDiscussion(props, propName) {
        if (props[propName] === false) {
          return new Error('The "isDiscussion" comment property is deprecated. Please use "repliable" instead.');
        }
      },
      createdAt: dateValidator,
      updatedAt(props, propName, componentName) {
        if (!(propName in props)) {
          return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\`.`);
        }
        return dateValidator(props, propName, componentName);
      },
    }).isRequired,
    onReply: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    inputButton: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      onReply: noop,
      onEdit: noop,
      onDelete: noop,
      inputButtons: false
    };
  },

  getInitialState() {
    return {
      showMenu: false,
      starred: false,
      editing: false,
      replyValue: '',
      editValue: this.props.comment.entry
    };
  },

  handleMenuToggle(e) {
    e.preventDefault();

    this.setState({
      showMenu: !this.state.showMenu,
    });
  },

  handleStarToggle(e) {
    e.preventDefault();

    this.setState({
      starred: !this.state.starred,
    });
  },

  handleReplyChange(e) {
    this.setState({
      replyValue: e.target.value,
    });
  },

  handleEditChange(e) {
    this.setState({
      editValue: e.target.value,
    });
  },

  handleNewReply(e) {
    if (e) { // would e ever be undefined?
      e.preventDefault();
    }

    this.props.onReply(this.state.replyValue, this.props.comment.id);

    this.setState({
      replyValue: '',
    });
  },

  handleDelete() {
    this.props.onDelete(this.props.comment.id);
  },

  handleEdit(e) {
    if (e) { // would e ever be undefined?
      e.preventDefault();
    }

    this.props.onEdit(this.props.comment.id, this.state.editValue);

    this.handleEditToggle();
  },

  handleKeyDown(callback, e) {
    if (!e) {
      e = window.event; // TODO: is this ever so? makes this harder to test
    }

    const keyCode = e.keyCode || e.which;
    if (keyCode === 13 && !e.ctrlKey && !e.shiftKey){
      callback();
      return false;
    }
  },

  handleEditToggle() {
    this.setState({
      editing: !this.state.editing,
      editValue: this.props.comment.entry
    }, () => {
      if (this.state.editing) {
        let editInput = this.refs.editInput.getDOMNode();
        editInput.focus();
        editInput.setSelectionRange(this.state.editValue.length, this.state.editValue.length);
      }
    });
  },

  componentDidMount() {
    if (this.props.comment.scrollIntoView) {
      setTimeout(() => this.getDOMNode().scrollIntoView(), 1);
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.comment.scrollIntoView !== this.props.comment.scrollIntoView) {
      this.setState({
        scrollIntoView: nextProps.comment.scrollIntoView,
      });
    }
  },

  componentDidUpdate() {
    if (this.state.scrollIntoView) {
      this.getDOMNode().scrollIntoView();

      this.setState({
        scrollIntoView: false,
      });
    }
  },

  render() {
    const commentClass = new SuitClassSet('Comment');

    commentClass.addModifier({
      'starred': this.state.starred,
      'inputButtons': this.props.inputButtons,
      'repliable': this.props.comment.isDiscussion === false && this.props.comment.repliable === false,
      'highlighted': this.props.comment.highlighted,
    });

    const replies = _.clone(this.props.replies).reverse();

    let dropdownContent = null;

    if (this.props.starable || this.props.comment.deletable || this.props.comment.editable) {
      dropdownContent = (
        <div>
          <a href="#" className="Comment-dropdownToggle" ref="menuAnchor" onClick={this.handleMenuToggle}>
            <Icon type="settings" font={false} />
          </a>

          <DropdownMenu className="DropdownMenu" anchor={this.refs.menuAnchor} visible={this.state.showMenu} close={this.handleMenuToggle}>
            <dl>
              {this.props.starable &&
                <dd>
                  <a href="#" onClick={this.handleStarToggle}>{this.state.starred ? 'Unstar' : 'Star'} this discussion</a>
                </dd>
              }

              {this.props.comment.editable &&
                <dd>
                  <a href="#" onClick={this.handleEditToggle}>Edit discussion</a>
                </dd>
              }

              {this.props.comment.deletable &&
                <dd>
                  <a href="#" onClick={this.handleDelete}>Delete discussion</a>
                </dd>
              }
            </dl>
          </DropdownMenu>
        </div>
      );
    }

    let editedDisplay = null;
    if (this.props.comment.updatedAt && (new Date(this.props.comment.updatedAt) > new Date(this.props.comment.createdAt))) {
      editedDisplay = (
        <span className="Comment-edited">
          <span data-tooltip={DateFormatter.dateTime(this.props.comment.updatedAt)}>edited</span>
        </span>
      );
    }

    return (
      <div className={commentClass.toString()}>
        {dropdownContent}

        <Avatar
          title={this.props.comment.author.name}
          firstName={this.props.comment.author.firstName}
          lastName={this.props.comment.author.lastName}
          email={this.props.comment.author.email}
          src={this.props.comment.author.avatar_url}
          size="m"
          circle={true}
        />

        <div className="Comment-details">
          <strong className="Comment-author">{this.props.comment.author.name}</strong>

          <time className="Comment-time" dateTime={DateFormatter.custom(this.props.comment.createdAt, 'YYYY-MM-DD hh:mm')}>
            {DateFormatter.dateTime(this.props.comment.createdAt)}
          </time>

          {editedDisplay}
        </div>

        <div className="Comment-text">
          {this.state.editing &&
            <form onSubmit={this.handleEdit}>
              <InputTextarea
                rows="1"
                autoSize
                ref="editInput"
                value={this.state.editValue}
                className="Comment-editInput"
                onChange={this.handleEditChange}
                onKeyDown={this.handleKeyDown.bind(null, this.handleEdit)}
              />

              {this.props.inputButtons &&
                <Button type="submit">Edit</Button>
              }
            </form>
          }

          {!this.state.editing &&
            <div className="Comment-text-content">
              {this.props.comment.beforeContent &&
                <div className="Comment-text-before">{this.props.comment.beforeContent}</div>
              }
              <span className="Comment-text-main">{this.props.comment.entry}</span>
              {this.props.comment.afterContent &&
                <div className="Comment-text-after">{this.props.comment.afterContent}</div>
              }
            </div>
          }
        </div>

        <div className="Comment-replies">
          {replies.map(comment => <CommentReply key={comment.id} comment={comment} />)}

          {this.props.comment.isDiscussion !== false && this.props.comment.repliable !== false &&
            <div className="Comment-replies-new">
              <form onSubmit={this.handleNewReply}>
                <InputTextarea
                  rows="1"
                  autoSize
                  value={this.state.replyValue}
                  className="Comment-replies-new-input"
                  placeholder="add a reply"
                  onChange={this.handleReplyChange}
                  onKeyDown={this.handleKeyDown.bind(null, this.handleNewReply)}
                />

                {this.props.inputButtons &&
                  <Button type="submit" disabled={!this.state.replyValue.length}>Reply</Button>
                }
              </form>
            </div>
          }
        </div>
      </div>
    );
  }
});
