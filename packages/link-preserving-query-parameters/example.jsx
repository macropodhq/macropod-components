import React from 'react/addons';
import Router from 'react-router';
import LinkPreservingQueryParametersFactory from './';

const DemoLink = LinkPreservingQueryParametersFactory(['mode', 'context']);

export default React.createClass({
  displayName: 'LinkPreservingQueryParametersFactory-example',

  render() {
    return (
      <div>
        <p>You can choose to <Router.Link to="link-preserving-query-parameters" query={{widgets: 127, mode: 'delete', context: 'please-keep'}}>Demonstrate Link Preserving Query Parameters</Router.Link> to have example parameters set for you.</p>

        <p><DemoLink to="link-preserving-query-parameters">This is the demonstration link</DemoLink>. It will keep the <code>mode</code> and <code>context</code> parameters from the page it appears on.</p>
      </div>
    );
  },
});
