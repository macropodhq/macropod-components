/** @jsx React.DOM */

var _ = require('lodash');
var React = require('react');

require('./index.scss');

var Component = React.createClass({
  render: function() {
    return (
      <div className="Playground">
      	<h2>{this.props.name}</h2>
      	<div>{this.props.children}</div>
    	</div>
    );
  },
});

var getContainer = function getContainer(name) {
	var id = ['container', name].join('-');

	var el = document.getElementById(id);

	if (!el) {
		el = document.createElement('div');
		el.id = id;
		document.body.appendChild(el);
	}

	return el;
};

var components = [
  'hotkey-mixin',
  'loading',
  'todo',
  'button',
  'base',
];

function renderComponents(components, el) {
  React.renderComponent(
    <div>
      {_.map(components, function(component) {
        var example = require('./' + component + '/example');
        var name = component.split(/[ -]+/).map(function(e) {
          return e[0].toUpperCase() + e.substr(1);
        }).join(" ") + " (" + component + ")";

        return <Component name={name}><example /></Component>;
      })}
    </div>,
   el);
}

renderComponents(components, getContainer('lol'));
