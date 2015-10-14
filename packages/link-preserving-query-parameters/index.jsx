import React from 'react/addons';
import {Router, Link} from 'react-router';

export default function LinkPreservingQueryParametersFactory(queryParameters) {

  if (!Array.isArray(queryParameters)) {
    throw new Error('LinkPreservingQueryParametersFactory was not supplied an array of parameters to preserve. Either parameters should be supplied, or a Router.Link element should be used if you don\'t require the query preservation functionality.');
  }

  return React.createClass({
    displayName: 'LinkPreservingQueryParameters',

    mixins: [Router.State],

    render() {
      const props = Object.assign({}, this.props); // cloned to avoid React warnings

      const currentQuery = this.getQuery();
      const preservedQuery = {};

      queryParameters.forEach((param) => preservedQuery[param] = currentQuery[param]);

      props.query = Object.assign({}, preservedQuery, props.query);

      return <Link {...props} />;
    },
  });

}
