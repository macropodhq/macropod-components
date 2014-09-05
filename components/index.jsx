/** @jsx React.DOM */

var CommentBox = require('./comment-box'),
    React = require('react');

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);
