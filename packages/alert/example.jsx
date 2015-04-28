'use strict';

const React = require('react');

const InputText = require('../form/input-text');
const InputTextarea = require('../form/input-textarea');
const InputCheckbox = require('../form/input-checkbox');

const Button = require('../button');
const Alert = require('./');

module.exports = React.createClass({
  displayName: 'AlertExample',

  getInitialState() {
    return {
      showAlert: false,
      alertState: 'Not yet shown',
      alertTitle: 'Informational message',
      alertContent: 'A thing has happened and we want you to know before you continue to use the app.',
      alertCancelable: false,
      alertDanger: false,
      alertValue: ''
    };
  },

  handleClick() {
    this.setState({
      showAlert: true,
    });
  },

  handleCancel() {
    this.setState({
      alertValue: '',
      showAlert: false,
      alertState: 'Canceled',
    });
  },

  handleOk(value) {
    this.setState({
      alertValue: value,
      showAlert: false,
      alertState: 'Completed',
    });
  },

  handleTitleChange(event) {
    this.setState({
      alertTitle: event.target.value
    });
  },

  handleContentChange(event) {
    this.setState({
      alertContent: event.target.value
    });
  },

  handleCancelableChange(event) {
    this.setState({
      alertCancelable: event.target.checked
    });
  },

  handleDangerChange(event) {
    this.setState({
      alertDanger: event.target.checked
    });
  },

  render() {
    return (
      <div>
        <InputText
          onChange={this.handleTitleChange}
          value={this.state.alertTitle}
          showLabel={false}
          placeholder="alert title" />

        <InputTextarea
          onChange={this.handleContentChange}
          value={this.state.alertContent}
          showLabel={false}
          autoSize
          placeholder="alert title" />

        <InputCheckbox 
          onChange={this.handleCancelableChange}
          checked={this.state.alertCancelable}
          showLabel={false}
          checkboxLabel="Cancelable" />

        <InputCheckbox 
          onChange={this.handleDangerChange}
          checked={this.state.alertDanger}
          showLabel={false}
          checkboxLabel="Danger" />
          
        <Button onClick={this.handleClick}>Show Alert</Button>

        <br />
        Alert State: <strong>{this.state.alertState}</strong>

        {this.state.showAlert &&
          <Alert
            cancelable={this.state.alertCancelable}
            danger={this.state.alertDanger}
            title={this.state.alertTitle}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
            {this.state.alertContent}
          </Alert>
        }
      </div>
    );
  }
});
