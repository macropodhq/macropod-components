/** @jsx React.DOM */

var react = require('react');

var CommentBox = require('./comment-box');

var modules = [
	CommentBox,
];

modules.forEach(function(m) {
	var el = document.createElement('div');
	document.body.appendChild(el);
	react.renderComponent(new m(), el);
});
