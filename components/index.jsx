/** @jsx React.DOM */

var React = require('react');

require("./index.scss");

var Component = React.createClass({
  render: function() {
    return (
      <div className="playground-component">
      	<h2>{this.props.name}</h2>
      	<div>{this.props.children}</div>
    	</div>
    );
  },
});

var getContainer = function getContainer(name) {
	var id = ["container", name].join("-");

	var el = document.getElementById(id);

	if (!el) {
		el = document.createElement("div");
		el.id = id;
		document.body.appendChild(el);
	}

	return el;
};

var render = function render(name, content) {
	React.renderComponent(<Component name={name}>{content}</Component>, getContainer(name.replace(/\s/g, "-")));
};

// START DOING STUFF HERE

var CommentBox = require('./comment-box');

render("Comment Box", <CommentBox data={[]}/>)
