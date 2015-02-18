'use strict';

const _ = require('lodash-node');
const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

require('open-sans/scss/open-sans.scss');
require('normalize.css/normalize.css');
require('./index.scss');

const packageRequire = require.context('../packages', true, /example\.jsx/);
const packageReadmeRequire = require.context('../packages', true, /readme\.md/i);

const packages = _.map(packageRequire.keys(), path => {

  const name = path.split(/\//)[1];
  let readme = null;

  const readmePath = _.find(packageReadmeRequire.keys(), testReadmePath => testReadmePath.indexOf(`/${name}/`) !== -1);

  if (readmePath) {
    readme = packageReadmeRequire(readmePath);
  }

  return {
    friendlyName: name.split(/[ -]+/).map(e => e[0].toUpperCase() + e.substr(1)).join(' '),
    name,
    path,
    readme
  };

});

function wrapPackage(component) {
  const Example = packageRequire(component.path);

  return (
    <div className="Playground-Example" key={component.name}>
      <h2 id={component.name}>{component.friendlyName} ({component.name})</h2>
      {component.readme && <div className="Playground-Example-Sheet Playground-Example-Sheet--Readme">
        <h3>Readme</h3>
        <article className="Playground-Example-Sheet-Body" dangerouslySetInnerHTML={{__html: component.readme}}></article>
      </div>}
      <div className="Playground-Example-Sheet Playground-Example-Sheet--Demo">
        <h3>Example</h3>
        <div className="Playground-Example-Sheet-Body">
          <Example />
        </div>
      </div>
    </div>
  );
}

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <h1>Macropod Components</h1>
        <ul className="Playground-TOC">
          <li><Link to="/">All</Link></li>
          {packages.map(component => <li key={component.path}><Link to={`/${component.name}`}>{component.friendlyName}</Link></li>)}
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

const AllComponentsHandler = React.createClass({
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
      <Route name={component.name} path={`/${component.name}`} handler={React.createClass({
        displayName: `${component.friendlyName.split(' ').join('')}ExampleRouteHandler`,
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
