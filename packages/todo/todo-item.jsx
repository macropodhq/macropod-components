'use strict';

const React = require('react');
const _ = require('lodash-node');

const Alert = require('../alert');
const Button = require('../button');
const CancelableEdit = require('../cancelable-edit');
const Inlay = require('../inlay');
const DeleteButton = require('../delete-button');
const SuitClassSet = require('../suit-class-set');

const MAX_ALERT_LENGTH = 23;

module.exports = React.createClass({
  displayName: 'TodoItem',

  getDefaultProps() {
    return {
      name: '',
      completed: false,
    };
  },

  propTypes: {
    onNameChange: React.PropTypes.func.isRequired,
    onCompletionChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    name: React.PropTypes.string,
    completed: React.PropTypes.bool,
  },

  getInitialState() {
    return {
      showAlert: false,
    };
  },

  handleConfirmCancel() {
    this.setState({
      showAlert: false,
    });
  },

  handleConfirmOk() {
    this.setState({
      showAlert: false,
    }, () => this.props.onDelete());
  },

  handleAskDelete() {
    this.setState({
      showAlert: true
    });
  },

  render() {
    const className = new SuitClassSet('TodoItem').
      createDescendent('edit');

    className.addModifier({
      'complete': this.props.completed,
    });

    return (
      <div className="TodoItem">
        <input
          className="TodoItem-complete"
          checked={this.props.completed}
          onChange={this.props.onCompletionChange.bind(null, !this.props.completed)}
          type="checkbox"
        />
        <CancelableEdit
          className={className.toString()}
          singleLine
          small
          inline
          saveButtonText="Save Todo"
          saveButtonTitle="Save Todo"
          saveButtonTitleInvalid="Todo items can not be empty"
          value={this.props.name}
          onSave={this.props.onNameChange}
        />
        <DeleteButton
          className="TodoItem-delete"
          onClick={this.handleAskDelete}
        />
        { this.state.showAlert &&
          <Alert
              cancelable
              title="Confirm Delete"
              onOk={this.handleConfirmOk}
              onCancel={this.handleConfirmCancel}
              okText="Delete"
              danger
            >
            Are you sure you want to delete: <Inlay>
                {this.props.name.substr(1, MAX_ALERT_LENGTH)}
                {this.props.name.length > MAX_ALERT_LENGTH && '...'}
              </Inlay> ?
          </Alert>
        }
      </div>
    );
  }
});
