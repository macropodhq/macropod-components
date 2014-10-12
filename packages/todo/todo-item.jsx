/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var TodoItem = React.createClass({
  getDefaultProps: function() {
    return {
      subtask: {
        name: '',
        completed: false
      }
    };
  },

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    subtask: React.PropTypes.shape({
      name: React.PropTypes.string,
      completed: React.PropTypes.bool
    }).isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  get: function() {
    return _.extend({}, this.props.subtask);
  },

  handleToggle: function() {
    var subtask = this.get();
    subtask.completed = !subtask.completed;
    this.props.onChange(subtask);

    return false;
  },

  handleClick: function() {
    this.setState({
      isEditing: true,
      editValue: ''
    });

    return false;
  },

  handleChange: function() {
    this.setState({
      editValue: this.refs.textInput.getDOMNode().value
    });

    return false;
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      var subtask = this.get();
      subtask.name = this.state.editValue;
      this.props.onChange(subtask);
      this.handleCancelClick();
    }

    if (e.keyCode === 27) {
      this.handleCancelClick();
    }

    return false;
  },

  handleSaveClick: function() {
    var subtask = this.get();
    subtask.name = this.state.editValue;
    this.props.onChange(subtask);
    this.handleCancelClick();

    return false;
  },

  handleCancelClick: function() {
    this.setState({
      isEditing: false,
      editValue: ''
    });

    return false;
  },

  handleDelete: function() {
    this.props.onDelete(this.get());

    return false;
  },

  render: function(subtask) {
    return (
      <div className={'Todo-list-item' + (this.state.isEditing ? ' is-editing' : '')} draggable="true">
        <input checked={this.get().completed} onChange={this.handleToggle} type="checkbox" />
        <span className="Todo-list-item-name" onClick={!this.state.isEditing && this.handleClick}>{this.get().name}</span>
        <input type="text" ref="textInput" value={this.state.editValue || this.get().name} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
        <a className="Todo-list-item-save" onClick={this.handleSaveClick}>Save</a>
        <a className="Todo-list-item-cancel" onClick={this.handleCancelClick}>Cancel</a>
        <a className="Todo-list-item-delete" onClick={this.handleDelete}>Delete…</a>
      </div>
    );
  }
});

module.exports = TodoItem;
