/** @jsx React.DOM */

var _ = require("lodash"),
    React = require("react"),
    Fluxxor = require("fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

require("./style");

module.exports = React.createClass({
  mixins: [FluxChildMixin],
  getDefaultProps: function() {
    return {
      onSubtaskCreate: function() { console.log("subtask create", arguments); },
      onSubtaskDelete: function() { console.log("subtask delete", arguments); },
      onSubtaskSetName: function() { console.log("subtask set name", arguments); },
      onSubtaskToggleComplete: function() { console.log("subtask toggle complete", arguments); },
      subtasks: [],
    };
  },
  getInitialState: function() {
    return {
      isCreating: false,
      currentInput: '',
    };
  },
  handleAdd: function() {
    this.setState({
      isCreating: true,
    });

    return false;
  },
  handleInput: function(ev) {
    this.setState({
      currentInput: ev.target.value,
    });

    return false;
  },
  handleInputKey: function(ev) {
    if (ev.keyCode === 13) {
      this.handleCreate();
    }

    if (ev.keyCode === 27) {
      this.handleCancel();
    }

    return false;
  },
  handleCancel: function() {
    this.setState({
      isCreating: false,
      currentInput: '',
    });

    return false;
  },
  handleCreate: function() {
    this.props.onSubtaskCreate(this.props.taskId, this.state.currentInput);
    this.setState({
      currentInput: '',
    });

    return false;
  },
  subtaskToggleComplete: function(subtask) {
    this.props.onSubtaskToggleComplete(subtask.task_id, subtask.id, !subtask.completed);

    return false;
  },
  subtaskDelete: function(subtask) {
    this.props.onSubtaskDelete(subtask.task_id, subtask.id);

    return false;
  },
  subtaskEditFocus: function(subtask) {
    if (subtask.completed) {
      return;
    }

    subtask.backupName = subtask.name;
    subtask.isEditing = true;
    this.forceUpdate();
  },
  subtaskEditChange: function(subtask, ev) {
    subtask.name = ev.target.value;
    this.forceUpdate();
  },
  subtaskEditKey: function(subtask, ev) {
    if (ev.keyCode === 13) {
      this.subtaskEditSave(subtask);
    }

    if (ev.keyCode === 27) {
      this.subtaskEditCancel(subtask);
    }

    return false;
  },
  subtaskEditCancel: function(subtask) {
    subtask.name = subtask.backupName;
    subtask.isEditing = false;
    this.forceUpdate();
  },
  subtaskEditSave: function(subtask) {
    delete subtask.backupName;
    subtask.isEditing = false;
    this.props.onSubtaskSetName(subtask.task_id, subtask.id, subtask.name);
  },
  renderSubtask: function(subtask) {
    return (
      <div className={'ToDo-list-item' + (subtask.isEditing ? ' is-editing' : '')} draggable="true">
        <input checked={subtask.completed} onChange={this.subtaskToggleComplete.bind(null, subtask)} type="checkbox" />
        <span className="ToDo-list-item-name" onClick={this.subtaskEditFocus.bind(null, subtask)}>{subtask.name}</span>
        <input type="text" value={subtask.name} onChange={this.subtaskEditChange.bind(null, subtask)} onKeyUp={this.subtaskEditKey.bind(null, subtask)} />
        <a className="ToDo-list-item-save" onClick={this.subtaskEditSave.bind(null, subtask)}>Save</a>
        <a className="ToDo-list-item-cancel" onClick={this.subtaskEditCancel.bind(null, subtask)}>Cancel</a>
        <a className="ToDo-list-item-delete" onClick={this.subtaskDelete.bind(null, subtask)}>Delete…</a>
      </div>
    );
  },
  render: function() {
    return (
      <div className="ToDo">
        <div className="ToDo-list">
          {_.where(this.props.subtasks, {completed: false}).map(this.renderSubtask)}
        </div>
        <div className={'ToDo-controls' + (this.state.isCreating ? ' is-creating' : '')}>
          <div className="ToDo-controls-new">
            <input type="text" value={this.state.currentInput} onChange={this.handleInput} onKeyUp={this.handleInputKey} />
            <a className="ToDo-controls-add" onClick={this.handleCreate}>Add to-do</a>
            <a className="ToDo-controls-cancel" onClick={this.handleCancel}>Cancel</a>
          </div>
          <a className="ToDo-controls-create" onClick={this.handleAdd}><span>+</span> Add a To-do</a>
        </div>
        <div className="ToDo-list ToDo-list--complete">
          {_.where(this.props.subtasks, {completed: true}).map(this.renderSubtask)}
        </div>
      </div>
    );
  }
});
