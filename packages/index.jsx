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

var packageNames = [
  'avatar',
  'hotkey-mixin',
  'icon',
  'loading',
  'todo',
  'button',
  'modal',
  'steps',
  'base',
];

function renderComponents(packageNames, el) {
  React.renderComponent(
    <div>
      {_.map(packageNames, function(packageName) {
        var example = require('./' + packageName + '/example');
        var name = packageName.split(/[ -]+/).map(function(e) {
          return e[0].toUpperCase() + e.substr(1);
        }).join(" ") + " (" + packageName + ")";

        return <Component name={name}><example /></Component>;
      })}
    </div>,
   el);
}

renderComponents(packageNames, getContainer('lol'));
