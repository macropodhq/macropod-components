/** @jsx React.DOM */

var _ = require('lodash');
var React = require('react');

require('open-sans/scss/open-sans.scss');
require('./index.scss');

var Component = React.createClass({
  render: function() {
    return (
      <div className="Playground">
        <hr />
        <h2 id={this.props.package.name}>{this.props.package.friendlyName} ({this.props.package.name})</h2>
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

var packageRequire = require.context('./', true, /example\.jsx/);

var packages = _.map(packageRequire.keys(), function(packagePath) {

  var packageName = packagePath.split(/\//)[1];

  return {
    friendlyName: packageName.split(/[ -]+/).map(function(e) {
      return e[0].toUpperCase() + e.substr(1);
    }).join(' '),
    name: packageName,
    path: packagePath
  };

});

React.renderComponent(
  <div>
    <h1>React Playground</h1>
    <h2>Table of Contents</h2>
    <ul>
      {_.map(packages, function(package) {
        return <li><a href={'#' + package.name}>{package.friendlyName}</a></li>;
      })}
    </ul>
    {_.map(packages, function(package) {
      var example = packageRequire(package.path);

      return <Component package={package} ><example /></Component>;
    })}
  </div>,
 getContainer('lol'));
