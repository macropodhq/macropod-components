/** @jsx React.DOM */

var React = require('react');

var ActionsBar = require('./');
var Icon = require('../icon');

module.exports = React.createClass({
  displayName: 'ActionsBarExample',

  links: function() {
    return [
      {'to':'board','params':{'boardId':'2'},'query':{'open':true},'displayName':'Open'},
      {'to':'board','params':{'boardId':'2'},'query':{'closed':true},'displayName':'Closed'}
    ];
  },

  title: function() {
    return 'Action Bar';
  },


  links: function() {
    return [
      <span className={ActionsBar.NAVIGATION_TITLE_CLASSNAME}>TASKS:</span>,
      <a href="#" className={ActionsBar.NAVIGATION_ITEM_CLASSNAME + ' active'}>Open</a>,
      <a href="#" className={ActionsBar.NAVIGATION_ITEM_CLASSNAME}>Closed</a>
    ];
  },

  actions: function() {
    return [
      <a href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="plus" font={false} /></a>,
      <a href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="settings" font={false} /></a>,
      <a href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="energy" font={false} /></a>,
      <input className={ActionsBar.ACTION_SEARCH_CLASSNAME} type="text" />
    ];
  },

  render: function() {
    return (
      <ActionsBar
        title={this.title()}
        links={this.links()}
        actions={this.actions()}
      ></ActionsBar>
    );
  }
});
