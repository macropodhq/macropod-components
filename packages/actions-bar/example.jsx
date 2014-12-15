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

  render: function() {
    return (
      <ActionsBar title="Actions Bar" links={this.links}>
        <a href="#" title="Add a new column" className="ActionsBar-actions-control">
          <Icon type="plus" />
        </a>

        <a href="#" title="Project settings" className="ActionsBar-actions-control">
          <Icon type="settings" />
        </a>

        <a href="#"title="People on this project" className="ActionsBar-actions-control">
          <Icon type="users" />
        </a>
      </ActionsBar>
    );
  }
});
