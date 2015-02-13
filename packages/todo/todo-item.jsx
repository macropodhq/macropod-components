'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'TodoItem',

  getDefaultProps() {
    return {
      subtask: {
        name: '',
        completed: false,
      },
    };
  },

  propTypes: {
    onNameChange: React.PropTypes.func.isRequired,
    onCompletionChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    subtask: React.PropTypes.shape({
      name: React.PropTypes.string,
      completed: React.PropTypes.bool,
    }).isRequired,
  },

  getInitialState() {
    return {
      isEditing: false,
    };
  },

  handleToggle() {
    this.props.onCompletionChange(!this.props.subtask.completed);

    return false;
  },

  handleClick() {
    this.setState({
      isEditing: true,
      editValue: '',
    });

    return false;
  },

  handleChange() {
    this.setState({
      editValue: this.refs.textInput.getDOMNode().value,
    });

    return false;
  },

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleSaveClick();
    }

    if (e.keyCode === 27) {
      this.handleCancelClick();
    }

    return false;
  },

  handleSaveClick() {
    this.props.onNameChange(this.state.editValue);

    this.setState({
      isEditing: false,
      editValue: '',
    });

    return false;
  },

  handleCancelClick() {
    this.setState({
      isEditing: false,
      editValue: '',
    });

    return false;
  },

  handleDelete() {
    this.props.onDelete();

    return false;
  },

  render() {
    return (
      <div className={`Todo-list-item${(this.state.isEditing ? ' is-editing' : '')}`} draggable="true">
        <input
          checked={this.props.subtask.completed}
          onChange={this.handleToggle}
          type="checkbox"
          />
        <span className="Todo-list-item-name" onClick={!this.state.isEditing && this.handleClick}>{this.props.subtask.name}</span>
        <input
          type="text"
          ref="textInput"
          value={this.state.editValue || this.props.subtask.name}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          />
        <a className="Todo-list-item-save" onClick={this.handleSaveClick}>Save</a>
        <a className="Todo-list-item-cancel" onClick={this.handleCancelClick}>Cancel</a>
        <a className="Todo-list-item-delete" onClick={this.handleDelete}>Delete…</a>
      </div>
    );
  }
});
