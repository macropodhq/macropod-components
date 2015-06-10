import React from 'react/addons';
import Router from 'react-router';

export default function LinkPreservingQueryParametersFactory(queryParameters) {

  if (!Array.isArray(queryParameters)) {
    return Router.Link;
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

      return <Router.Link {...props} />;
    },
  });

}
