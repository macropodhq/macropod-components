'use strict';

const React = require('react');
const _ = require('lodash-node');

const TodoList = require('./');

module.exports = React.createClass({
  displayName: 'TodoExample',

  getInitialState() {
    return {
      subtasks: []
    };
  },

  handleCreate(name) {
    let subtasks = this.state.subtasks;
    subtasks.push({id: Math.random(), name: name, completed: false});
    this.setState({subtasks: subtasks});
  },

  handleNameChange(subtaskId, name) {
    let subtasks = this.state.subtasks;
    let record = _.findWhere(subtasks, {id: subtaskId});
    record.name = name;
    this.setState({subtasks: subtasks});
  },

  handleCompletionChange(subtaskId, state) {
    let subtasks = this.state.subtasks;
    let record = _.findWhere(subtasks, {id: subtaskId});
    record.completed = state;
    this.setState({subtasks: subtasks});
  },

  handleDelete(subtaskId) {
    let subtasks = this.state.subtasks;
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
