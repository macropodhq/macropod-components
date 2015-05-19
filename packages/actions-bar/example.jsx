'use strict';

const React = require('react');

const ActionsBar = require('./');
const Icon = require('../icon');

module.exports = React.createClass({
  displayName: 'ActionsBarExample',

  statics: {
    wide: true,
  },

  title() {
    return 'Action Bar';
  },

  links() {
    return [
      <span key={1} className={ActionsBar.NAVIGATION_TITLE_CLASSNAME}>TASKS:</span>,
      <a key={2} href="#" className={`${ActionsBar.NAVIGATION_ITEM_CLASSNAME} active`}>Open</a>,
      <a key={3} href="#" className={ActionsBar.NAVIGATION_ITEM_CLASSNAME}>Closed</a>,
    ];
  },

  actions() {
    return [
      <a key={1} href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="plus" font={false} /></a>,
      <a key={2} href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="settings" font={false} /></a>,
      <a key={3} href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="energy" font={false} /></a>,
      <input key={4} className={ActionsBar.ACTION_SEARCH_CLASSNAME} type="text" />,
    ];
  },

  render() {
    return (
      <ActionsBar
        title={this.title()}
        links={this.links()}
        actions={this.actions()}
      />
    );
  },
});
