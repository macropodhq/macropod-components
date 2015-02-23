'use strict';

const React = require('react');
const _ = require('lodash-node');

const Button = require('../button');
const CancelableEdit = require('../cancelable-edit');

require('./style');
const TodoItem = require('./todo-item');

module.exports = React.createClass({
  displayName: 'TodoList',

  getDefaultProps() {
    return {
      subtasks: [],
    };
  },

  propTypes: {
    subtasks: React.PropTypes.array.isRequired,
    onCreate: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onCompletionChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  },

  renderSubtask(subtask) {
    return (
      <TodoItem
        name={subtask.name}
        completed={subtask.completed}
        onNameChange={this.props.onNameChange.bind(null, subtask.id)}
        onCompletionChange={this.props.onCompletionChange.bind(null, subtask.id)}
        onDelete={this.props.onDelete.bind(null, subtask.id)}
        />
    );
  },

  focusNewInput() {
    this.refs.input.focus();
  },

  render() {
    return (
      <div className="Todo">
        <div className="Todo-list">
          {_.map(this.props.subtasks, this.renderSubtask)}
        </div>
        <div className="Todo-controls">
          <CancelableEdit
            ref="input"
            small
            autoSize
            creating
            saveButtonText="Create Todo"
            saveButtonTitle="Create Todo"
            saveButtonTitleInvalid="Todo items can not be empty"
            placeholder="Create a new todo..."
            onSave={this.props.onCreate}
          />
        </div>
      </div>
    );
  }
});
