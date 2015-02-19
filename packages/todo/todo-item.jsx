'use strict';

const React = require('react');
const _ = require('lodash-node');

const Alert = require('../alert');
const Button = require('../button');
const CancelableEdit = require('../cancelable-edit');
const DeleteButton = require('../delete-button');

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
    complete: React.PropTypes.bool,
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
    const className = React.addons.classSet({
      'Todo-listItem--complete': this.props.complete,
      'Todo-listItem-edit': true,
    });

    return (
      <div className="Todo-listItem">
        <input
          className="Todo-listItem-complete"
          checked={this.props.complete}
          onChange={this.props.onCompletionChange.bind(null, !this.props.complete)}
          type="checkbox"
        />
        <CancelableEdit
          className={className}
          autoSize
          small
          inline
          saveButtonText="Save Todo"
          saveButtonTitle="Save Todo"
          saveButtonTitleInvalid="Todo items can not be empty"
          value={this.props.name}
          onSave={this.props.onNameChange}
        />
        <DeleteButton
          className="Todo-listItem-delete"
          onClick={this.handleAskDelete}
        />
        { this.state.showAlert &&
          <Alert
              cancelable
              title="Confirm Delete"
              onOk={this.handleConfirmOk}
              onCancel={this.handleConfirmCancel}
              okText="Delete"
            >
            Are you sure you want to delete: <pre style={{display: 'inline', borderRadius: 3, background: '#eee', padding: 3}}>
                {this.props.name.substr(1, MAX_ALERT_LENGTH)}
                {this.props.name.length > MAX_ALERT_LENGTH && '...'}
              </pre> ?
          </Alert>
        }
      </div>
    );
  }
});
