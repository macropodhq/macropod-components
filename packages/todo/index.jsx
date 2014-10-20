/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

require('./todo-list.scss');

var TodoItem = require('./todo-item');
var Button = require('../button');

var TodoList = React.createClass({
  getDefaultProps: function() {
    return {
      subtasks: [],
    };
  },

  get: function() {
    return this.props.subtasks;
  },


  getInitialState: function() {
    return {
      isCreating: false,
      currentInput: '',
    };
  },
  handleAddClick: function() {
    this.setState({
      isCreating: true,
    },
      function() {
        this.refs.NewInput.getDOMNode().focus();
      }.bind(this)
    );

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
    this.props.onCreate({name: this.state.currentInput, completed: false});
    this.setState({
      currentInput: '',
    });

    return false;
  },

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onCreate: React.PropTypes.func.isRequired
  },

  renderSubtask: function(subtask) {
    return <TodoItem onDelete={this.props.onDelete} onChange={this.props.onChange} subtask={subtask}/>;
  },

  render: function() {
    return (
      <div className="Todo">
        <div className="Todo-list">
          {_.where(this.get(), {completed: false}).map(this.renderSubtask)}
        </div>
        <div className={'Todo-controls' + (this.state.isCreating ? ' is-creating' : '')}>
          <div className="Todo-controls-new">
            <input ref="NewInput" type="text" value={this.state.currentInput} onChange={this.handleInput} onKeyUp={this.handleInputKey} />
            <Button onClick={this.handleCreate}>Add to-do</Button>
            <Button type="skeleton" onClick={this.handleCancel}>Cancel</Button>
          </div>
          <a className="Todo-controls-create" onClick={this.handleAddClick}><span>+</span> Add a To-do</a>
        </div>
        <div className="Todo-list Todo-list--complete">
          {_.where(this.get(), {completed: true}).map(this.renderSubtask)}
        </div>
      </div>
    );
  }
});

module.exports = TodoList;
