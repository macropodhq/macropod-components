'use strict';

const _ = require('lodash');
const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router';
const RouteHandler = Router.RouteHandler;
import createBrowserHistory from 'history/lib/createBrowserHistory'
const SuitClassSet = require('../packages/suit-class-set');

if (process.env.NODE_ENV !== 'production') {
  //require('react-a11y')(React);
}

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
    readme,
  };

});

function wrapPackage(component) {
  const Example = packageRequire(component.path);

  const readme = component.readme
    ? <div className="PlaygroundExample-sheet PlaygroundExample-sheet--readme">
        <h3>Readme</h3>
        <article className="PlaygroundExample-sheet-body" dangerouslySetInnerHTML={{__html: component.readme}}></article>
      </div>
    : null;
  const wide = Example.wide === true;

  const exampleClass = new SuitClassSet('PlaygroundExample');

  exampleClass.addModifier({
    wide,
  });

  return (
    <div className={exampleClass.toString()} key={component.name}>
      <h2 id={component.name}>{component.friendlyName} ({component.name})</h2>
      {wide || readme}
      <div className="PlaygroundExample-sheet PlaygroundExample-sheet--demo">
        <h3>Example</h3>
        <div className="PlaygroundExample-sheet-body">
          <Example />
        </div>
      </div>
      {wide && readme}
    </div>
  );
}

const App = React.createClass({
  displayName: 'App',

  mixins: [Router.State],

  render() {
    if (this.props.location.query.iframe) {
      return <div>{this.props.children}</div>
    } else {
      return (
        <div>
          <h1>Macropod Components</h1>
          <ul className="PlaygroundTOC">
            <li><Link to="/">All</Link></li>
            {packages.map(component => <li key={component.path}><Link to={`/${component.name}`}>{component.friendlyName}</Link></li>)}
          </ul>
          <div>{this.props.children}</div>
        </div>
      );
    }
  },
});

const AllComponentsHandler = React.createClass({
  displayName: 'AllComponentsHandler',

  render() {
    return (
      <div>
        {packages.map(wrapPackage)}
      </div>
    );
  },
});
ReactDOM.render(<Router history={createBrowserHistory()}>
  <Route name="app" path="/" component={App}>
    <Route name="all" path="/" component={AllComponentsHandler}/>
    {packages.map(component =>
      <Route key={component.name} name={component.name} path={`/${component.name}`} component={React.createClass({
        displayName: `${component.friendlyName.split(' ').join('')}ExampleRouteHandler`,
        render() {
          return wrapPackage(component);
        },
      })}/>
    )}
    <Route name="navigation-content" path="/navigation-content" component={require('../packages/navigation/content')} />
    <Route name="covert-header-content" path="/covert-header-content" component={require('../packages/covert-header/content')} />
  </Route>
  </Router>,
  document.body
);
