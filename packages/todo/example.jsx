'use strict';

var React = require('react');
var _ = require('lodash-node');

var TodoList = require('./');

module.exports = React.createClass({
  displayName: 'TodoExample',

  getInitialState() {
    return {
      subtasks: []
    };
  },

  handleCreate(name) {
    var subtasks = this.state.subtasks;
    subtasks.push({id: Math.random(), name: name, completed: false});
    this.setState({subtasks: subtasks});
  },

  handleNameChange(subtaskId, name) {
    var subtasks = this.state.subtasks;
    var record = _.findWhere(subtasks, {id: subtaskId});
    record.name = name;
    this.setState({subtasks: subtasks});
  },

  handleCompletionChange(subtaskId, state) {
    var subtasks = this.state.subtasks;
    var record = _.findWhere(subtasks, {id: subtaskId});
    record.completed = state;
    this.setState({subtasks: subtasks});
  },

  handleDelete(subtaskId) {
    var subtasks = this.state.subtasks;
    subtasks = _.without(subtasks, _.findWhere(subtasks, {id: subtaskId}));
    this.setState({subtasks: subtasks});
  },

  render() {
    return (
      <TodoList
        subtasks={this.state.subtasks}
        onCreate={this.handleCreate}
        onNameChange={this.handleNameChange}
        onCompletionChange={this.handleCompletionChange}
        onDelete={this.handleDelete}
      />
    );
  }
});
