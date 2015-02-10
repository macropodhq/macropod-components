'use strict';

var _ = require('lodash-node');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

require('open-sans/scss/open-sans.scss');
require('normalize.css/normalize.css');
require('./index.scss');

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

function wrapPackage(component) {
  var Example = packageRequire(component.path);

  return (
    <div className="Playground-Example" key={component.name}>
      <h2 id={component.name}>{component.friendlyName} ({component.name})</h2>
      <div><Example /></div>
    </div>
  );
}

var App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <h1>Macropod Components</h1>
        <h2>Table of Contents</h2>
        <ul className="Playground-TOC">
          <li><Link to="/">All</Link></li>
          {packages.map(component => <li key={component.path}><Link to={'/' + component.name}>{component.friendlyName}</Link></li>)}
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

var AllComponentsHandler = React.createClass({
  displayName: 'AllComponentsHandler',

  render() {
    return (
      <div>
        {packages.map(wrapPackage)}
      </div>
    );
  }
});

Router.run(
  <Route name="app" path="/" handler={App}>
    <Route name="all" path="/" handler={AllComponentsHandler}/>
    {packages.map(component =>
      <Route name={component.name} path={'/' + component.name} handler={React.createClass({
        displayName: component.friendlyName.split(' ').join('')+'ExampleRouteHandler',
        render() {return wrapPackage(component);}
      })}/>
    )}
  </Route>,
  Handler => {
    React.render(
      <Handler />,
      document.body
   );
  }
);
