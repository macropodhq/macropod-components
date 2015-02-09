'use strict';

var _ = require('lodash-node');
var React = require('react');

require('open-sans/scss/open-sans.scss');
require('normalize.css/normalize.css')
require('./index.scss');

var Component = React.createClass({
  render() {
    return (
      <div className="Playground-Example">
        <h2 id={this.props.package.name}>{this.props.package.friendlyName} ({this.props.package.name})</h2>
        <div>{this.props.children}</div>
      </div>
    );
  },
});

var packageRequire = require.context('../packages', true, /example\.jsx/);

var packages = _.map(packageRequire.keys(), packagePath => {

  var packageName = packagePath.split(/\//)[1];

  return {
    friendlyName: packageName.split(/[ -]+/).map(e => {
      return e[0].toUpperCase() + e.substr(1);
    }).join(' '),
    name: packageName,
    path: packagePath
  };

});

var packageContents = _.map(packages, component => <li key={component.path}><a href={'#' + component.name}>{component.friendlyName}</a></li>);
var packages = _.map(packages, (component) => {
  var Example = packageRequire(component.path);

  return <Component key={component.path} package={component} ><Example /></Component>;
});

React.render(
  <div>
    <h1>React Playground</h1>
    <h2>Table of Contents</h2>
    <ul className="Playground-TOC">
      {packageContents}
    </ul>
      {packages}
  </div>,
 document.body);
