/** @jsx React.DOM */

var React = require('react');

var TodoList = require('./');

var TodoExample = React.createClass({
  getInitialState: function() {
    return {
      subtasks: []
    };
  },

  handleCreate: function(name) {
    var subtasks = this.state.subtasks;
    subtasks.push({id: Math.random(), name: name, completed: false});
    this.setState({subtasks: subtasks});
  },

  handleNameChange: function(subtaskId, name) {
    var subtasks = this.state.subtasks;
    var record = _.findWhere(subtasks, {id: subtaskId});
    record.name = name;
    this.setState({subtasks: subtasks});
  },

  handleCompletionChange: function(subtaskId, state) {
    var subtasks = this.state.subtasks;
    var record = _.findWhere(subtasks, {id: subtaskId});
    record.completed = state;
    this.setState({subtasks: subtasks});
  },

  handleDelete: function(subtaskId) {
    var subtasks = this.state.subtasks;
    subtasks = _.without(subtasks,_.findWhere(subtasks, {id: subtaskId}));
    this.setState({subtasks: subtasks});
  },

  render: function() {
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

module.exports = TodoExample;
