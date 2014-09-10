/** @jsx React.DOM */

var _ = require('lodash');
var React = require('react');

require('./index.scss');

var Component = React.createClass({
  render: function() {
    return (
      <div className="Playground">
      	<h2>{this.props.name}</h2>
        <div>{this.props.readme}</div>
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

var components = [ // requireDir or something would be cool?
  require('./todo'),
  require('./button'),
  require('./base')
];

function renderComponents(components, el) {
  React.renderComponent(
    <div>
      {_.map(components,
        function(component) {
          return <Component name={component.name} readme={component.readme}><component.Example/></Component>;
        }
      )}
    </div>,
   el);
}

renderComponents(components, getContainer('lol'));
