'use strict';

const React = require('react');
const _ = require('lodash');

const TodoList = require('./');

module.exports = React.createClass({
  displayName: 'TodoExample',

  getInitialState() {
    return {
      subtasks: [],
    };
  },

  handleCreate(name) {
    const subtasks = this.state.subtasks;

    subtasks.push({id: Math.random(), name: name, completed: false});
    this.setState({
      subtasks,
    }, () => this.refs.todo.focusNewInput());
  },

  handleNameChange(subtaskId, name) {
    const subtasks = this.state.subtasks;
    const record = _.findWhere(subtasks, {id: subtaskId});

    record.name = name;
    this.setState({subtasks: subtasks});
  },

  handleCompletionChange(subtaskId, state) {
    const subtasks = this.state.subtasks;
    const record = _.findWhere(subtasks, {id: subtaskId});

    record.completed = state;
    this.setState({subtasks: subtasks});
  },

  handleDelete(subtaskId) {
    const subtasks = _.without(
      this.state.subtasks,
      _.findWhere(this.state.subtasks, {id: subtaskId})
    );

    this.setState({subtasks: subtasks});
  },

  render() {
    return (
      <TodoList
        ref="todo"
        subtasks={this.state.subtasks}
        onCreate={this.handleCreate}
        onNameChange={this.handleNameChange}
        onCompletionChange={this.handleCompletionChange}
        onDelete={this.handleDelete}
        maxLength={50}
      />
    );
  },
});
