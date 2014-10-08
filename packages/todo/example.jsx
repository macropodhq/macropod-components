/** @jsx React.DOM */

var React = require('react');

var TodoList = require('./');

var TodoExample = React.createClass({
  getInitialState: function() {
    return {
      subtasks: []
    };
  },

  handleCreate: function(subtask) {
    var subtasks = this.state.subtasks;
    subtask.id = Math.random(); // perhaps i could do this by identity somehow?
    subtasks.push(subtask);
    this.setState({subtasks: subtasks});
  },

  handleChange: function(subtask) {
    var subtasks = this.state.subtasks;
    var record = _.findWhere(subtasks, {id: subtask.id});
    record.name = subtask.name;
    record.completed = subtask.completed;
    this.setState({subtasks: subtasks});
  },

  handleDelete: function(subtask) {
    var subtasks = this.state.subtasks;
    subtasks = _.without(subtasks,_.findWhere(subtasks, {id: subtask.id}));
    this.setState({subtasks: subtasks});
  },

  render: function() {
    return (
      <TodoList
        subtasks={this.state.subtasks}
        onCreate={this.handleCreate}
        onChange={this.handleChange}
        onDelete={this.handleDelete}
      />
    );
  }
});

module.exports = TodoExample;
