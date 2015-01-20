/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash-node');

module.exports = React.createClass({
  displayName: 'TodoItem',

  getDefaultProps: function() {
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

  getInitialState: function() {
    return {
      isEditing: false,
    };
  },

  handleToggle: function() {
    this.props.onCompletionChange(!this.props.subtask.completed);

    return false;
  },

  handleClick: function() {
    this.setState({
      isEditing: true,
      editValue: '',
    });

    return false;
  },

  handleChange: function() {
    this.setState({
      editValue: this.refs.textInput.getDOMNode().value,
    });

    return false;
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.handleSaveClick();
    }

    if (e.keyCode === 27) {
      this.handleCancelClick();
    }

    return false;
  },

  handleSaveClick: function() {
    this.props.onNameChange(this.state.editValue);

    this.setState({
      isEditing: false,
      editValue: '',
    });

    return false;
  },

  handleCancelClick: function() {
    this.setState({
      isEditing: false,
      editValue: '',
    });

    return false;
  },

  handleDelete: function() {
    this.props.onDelete();

    return false;
  },

  render: function(subtask) {
    return (
      <div className={'Todo-list-item' + (this.state.isEditing ? ' is-editing' : '')} draggable="true">
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
