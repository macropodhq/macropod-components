/** @jsx React.DOM */

var React = require('react');

var Button = require('../button');
var Alert = require('./');

var AlertExample = module.exports = React.createClass({
  getInitialState: function() {
    return {
      showAlert: false,
      alertState: 'Not yet shown',
      alertTitle: 'Informational message',
      alertContent: 'A thing has happened and we want you to know before you continue to use the app.',
      alertCancelable: false,
      alertValue: ''
    };
  },

  handleClick: function() {
    this.setState({
      showAlert: true,
    });
  },

  handleCancel: function() {
    this.setState({
      alertValue: '',
      showAlert: false,
      alertState: 'Canceled',
    });
  },

  handleOk: function(value) {
    this.setState({
      alertValue: value,
      showAlert: false,
      alertState: 'Completed',
    });
  },

  handleTitleChange: function(event) {
    this.setState({
      alertTitle: event.target.value
    })
  },

  handleContentChange: function(event) {
    this.setState({
      alertContent: event.target.value
    })
  },

  handleCancelableChange: function(event) {
    this.setState({
      alertCancelable: event.target.checked
    })
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this.handleTitleChange} value={this.state.alertTitle} />
        <br />
        <textarea onChange={this.handleContentChange} value={this.state.alertContent} />
        <br />
        <label><input type="checkbox" onChange={this.handleCancelableChange} checked={this.state.alertCancelable}></input> Cancelable</label>
        <br />
        <Button onClick={this.handleClick}>Show Alert</Button>

        <br />
        Alert State: <strong>{this.state.alertState}</strong>

        {this.state.showAlert &&
          <Alert
            cancelable={this.state.alertCancelable}
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
