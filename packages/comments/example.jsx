'use strict';

const React = require('react');
const _ = require('lodash-node');
const Comments = require('./');
const Button = require('../button');
const InputTextarea = require('../form/input-textarea');


const authors = [
  {name: 'Nathan', avatar_url: 'http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d', position: 'Developer', company: 'Macropod'},
  {name: 'Conrad', avatar_url: 'http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56', position: 'Developer', company: 'Macropod'},
  {name: 'Jessica', avatar_url: 'http://www.gravatar.com/avatar/a11cf2d27c3f0a82f1b0cc12cdb0a2e5', position: 'Developer', company: 'Macropod'},
];

module.exports = React.createClass({
  displayName: 'CommentsExample',

  getInitialState() {
    return {
      inputButtons: false,
      comments: [
        {
          id: 1,
          parentId: null,
          author: authors[2],
          entry: 'Here\'s an example of the comment component!\nHere\'s a link: https://www.youtube.com/watch?v=bN5aW9AAIjQ',
          editable: true,
          deletable: true,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
          updatedAt: '2015-01-07T12:04:01.453783131+11:00',
        },
        {
          id: 2,
          parentId: 1,
          author: authors[1],
          entry: 'This thing sure is neat! I hope it will still work for really, rather incredibly long pieces of text, and of course, my favourite website, http://www.longurl.de/redirect/scripts/data/save/transferred/user/cachedwekljfh93287kejf309284wekllkef8923knb09834fvb/3287468327476432589457/dfvbnbvjfdbcksvbkjdvbkldlkdcnksdvbkdvjbjdvksdjvndvkn/dkcvbh43568372156kdsnbfvmdbnkj0985dnvsdvkjh34tvf/99999999999999999/klejfhkwjefh9827498245wjkefhnkwejfn28903470923/wdkjfhwekjfhwkjfhekrjhgelrjghwef/1238763454095789216376542309548908234876/dfjwhefjwhegfwqhegdwejhfgiwef/abcdefghgterkgjergnrkfn7892634rkjl8907/mnbvcxyqwertzu987654321/redirect/wm/tzoidpjcgh',
          editable: false,
          deletable: false,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
        },
        {
          id: 3,
          parentId: 1,
          author: authors[0],
          entry: 'Needs more cowbell.',
          editable: false,
          deletable: false,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
        },
        {
          id: 4,
          parentId: null,
          author: authors[2],
          entry: 'This discussion can only be edited.',
          editable: true,
          deletable: false,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
        },
        {
          id: 5,
          author: authors[2],
          entry: 'This discussion can only be deleted!',
          editable: false,
          deletable: true,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
        },
        {
          id: 6,
          author: authors[0],
          entry: 'This is some event',
          repliable: false,
          editable: false,
          deletable: false,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
        },
        {
          id: 7,
          parentId: null,
          author: authors[1],
          entry: 'Oh my, you can put a thing in here as well. That\'s cool!',
          editable: true,
          deletable: true,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
          updatedAt: '2015-01-07T12:04:01.453783131+11:00',
          beforeContent: <div><small>this is before the content</small></div>,
          afterContent: <div><em>√ <small>this comment has a tick</small></em></div>,
        },
        {
          id: 8,
          parentId: 7,
          author: authors[1],
          entry: 'This construction is making me thirsty!',
          editable: true,
          deletable: true,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
          updatedAt: '2015-01-07T12:04:01.453783131+11:00',
          beforeContent: <div><small>INT. OFFICE - DAY <em>(the speaker looks unhappy)</em></small></div>,
          afterContent: <div><small><em>exit scene left</em></small></div>,
        },
        {
          id: 9,
          parentId: null,
          author: authors[1],
          entry: 'This comment is highlighted.',
          editable: true,
          deletable: true,
          highlighted: true,
          createdAt: '2015-01-07T13:04:01.453783131+11:00',
          updatedAt: '2015-01-07T14:04:01.453783131+11:00',
        },
        {
          id: 10,
          parentId: 9,
          author: authors[1],
          entry: 'A reply!',
          editable: true,
          deletable: true,
          createdAt: '2015-01-07T11:04:01.453783131+11:00',
          updatedAt: '2015-01-07T12:04:01.453783131+11:00',
        },
        {
          id: 11,
          parentId: null,
          author: authors[1],
          entry: 'This comment is automatically scrolled to.',
          editable: true,
          deletable: true,
          createdAt: '2015-01-07T13:04:01.453783131+11:00',
          updatedAt: '2015-01-07T14:04:01.453783131+11:00',
          scrollIntoView: true,
        },
      ],
    };
  },

  handleNewComment(value, parentId) {
    let updatedComments = this.state.comments;

    updatedComments.push({
      id: this.state.comments.length + 1,
      parentId: parentId === undefined ? null : parentId,
      author: authors[Math.floor(Math.random() * (2 - 0 + 1))],
      entry: value,
    });

    this.setState({comments: updatedComments});
  },

  handleKeyDown(callback, evt) {
    if (!evt) {
      evt = window.event;
    }

    const keyCode = evt.keyCode || evt.which;
    if (keyCode === 13 && !evt.ctrlKey && !evt.shiftKey){
      callback();
      evt.preventDefault();
    }
  },

  handleNewDiscussion(e) {
    if (e) {
      e.preventDefault();
    }

    this.handleNewComment(this.refs.newDiscussionInput.getDOMNode().value);

    this.refs.newDiscussionInput.getDOMNode().value = '';
    this.refs.newDiscussionInput.getDOMNode().style.height = 'auto';
  },

  handleDelete(id) {
    let updatedComments = _.reject(this.state.comments, {id: id});

    this.setState({
      comments: updatedComments,
    });
  },

  handleEdit(id, value) {
    let updatedComments = _.reject(this.state.comments, {id: id});
    let editedComment = _.filter(this.state.comments, {id: id});
    editedComment[0].entry = value;
    updatedComments.push(editedComment[0]);

    this.setState({
      comments: updatedComments,
    });
  },

  handleButtonToggle() {
    this.setState({
      inputButtons: !this.state.inputButtons,
    });
  },

  handleScrollIntoViewButton() {
    var comments = this.state.comments.slice();

    comments[10] = _.extend(_.clone(comments[10]), {
      scrollIntoView: !comments[10].scrollIntoView,
    });

    this.setState({
      comments: comments,
    });

    if (!comments[10].scrollIntoView) {
      setTimeout(this.handleScrollIntoViewButton, 1);
    }
  },

  render() {
    return (
      <div>
        <Button style={{marginBottom: '10px'}} onClick={this.handleButtonToggle}>
          {this.state.inputButtons ? 'Hide buttons' : 'Show Buttons'}
        </Button>
        <Button style={{marginBottom: '10px'}} onClick={this.handleScrollIntoViewButton}>
          Scroll Into View
        </Button>

        <br />

        <form onSubmit={this.handleNewDiscussion}>
          <InputTextarea
            rows="1"
            autoSize
            ref="newDiscussionInput"
            onKeyDown={this.handleKeyDown.bind(null, this.handleNewDiscussion)}
            placeholder="add new discussion"
          />

          {this.state.inputButtons &&
            <Button type="submit">Add</Button>
          }
        </form>

        <Comments
          comments={this.state.comments}
          onReply={this.handleNewComment}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
          inputButtons={this.state.inputButtons}
        />
      </div>
    );
  },
});
