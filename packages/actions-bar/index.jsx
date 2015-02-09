'use strict';

var React = require('react');

require('./actions-bar.scss');


module.exports = React.createClass({
  displayName: 'ActionsBar',
  
  statics: {
    NAVIGATION_ITEM_CLASSNAME: 'ActionsBar-navigation-link',
    NAVIGATION_TITLE_CLASSNAME: 'ActionsBar-navigation-title',
    ACTION_ITEM_CLASSNAME: 'ActionsBar-actions-control',
    ACTION_SEARCH_CLASSNAME: 'ActionsBar-actions-search'
  },

  render() {
    return (
      <section className="ActionsBar">

        <h1 className="ActionsBar-title">{this.props.title}</h1>

        <nav className="ActionsBar-navigation">
          {this.props.links}
        </nav>

        <nav className="ActionsBar-actions">
          {this.props.actions}
        </nav>

      </section>
    );
  }
});
