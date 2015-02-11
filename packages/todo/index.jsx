'use strict';

const React = require('react');
const _ = require('lodash-node');

require('./todo-list.scss');

const TodoItem = require('./todo-item');
const Button = require('../button');

module.exports = React.createClass({
  displayName: 'TodoList',

  getDefaultProps() {
    return {
      subtasks: [],
    };
  },

  propTypes: {
    onCreate: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onCompletionChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      isCreating: false,
      currentInput: '',
    };
  },

  handleAddClick() {
    let newState = {
      isCreating: true,
    };

    let self = this;
    this.setState(newState, () => {
      self.refs.newInput.getDOMNode().focus();
    });

    return false;
  },

  handleInput(ev) {
    this.setState({
      currentInput: ev.target.value,
    });

    return false;
  },

  handleInputKey(ev) {
    if (ev.keyCode === 13) {
      this.handleCreate();
    }

    if (ev.keyCode === 27) {
      this.handleCancel();
    }

    return false;
  },

  handleCancel() {
    this.setState({
      isCreating: false,
      currentInput: '',
    });

    return false;
  },

  handleCreate() {
    this.props.onCreate(this.state.currentInput);

    this.setState({
      currentInput: '',
    });

    return false;
  },

  renderSubtask(subtask) {
    return (
      <TodoItem
        subtask={subtask}
        onNameChange={this.props.onNameChange.bind(null, subtask.id)}
        onCompletionChange={this.props.onCompletionChange.bind(null, subtask.id)}
        onDelete={this.props.onDelete.bind(null, subtask.id)}
        />
    );
  },

  render() {
    return (
      <div className="Todo">
        <div className="Todo-list">
          {_.where(this.props.subtasks, {completed: false}).map(this.renderSubtask)}
        </div>
        <div className={`Todo-controls${(this.state.isCreating ? ' is-creating' : '')}`}>
          <div className="Todo-controls-new">
            <input
              ref="newInput"
              type="text"
              value={this.state.currentInput}
              onChange={this.handleInput}
              onKeyUp={this.handleInputKey}
              />
            <Button onClick={this.handleCreate}>Add to-do</Button>
            <Button type="skeleton" onClick={this.handleCancel}>Cancel</Button>
          </div>
          <a className="Todo-controls-create" onClick={this.handleAddClick}><span>+</span> Add a To-do</a>
        </div>
        <div className="Todo-list Todo-list--complete">
          {_.where(this.props.subtasks, {completed: true}).map(this.renderSubtask)}
        </div>
      </div>
    );
  }
});
