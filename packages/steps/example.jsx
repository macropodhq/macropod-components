/** @jsx React.DOM */

var React = require('react');

var Button = require('../button');
var Steps = require('./');

var StepsExample = module.exports = React.createClass({
  getInitialState: function() {
    return {
      totalSteps: 4,
      currentStep: 1,
    };
  },

  handleAddStep: function() {
    this.setState({
      totalSteps: this.state.totalSteps + 1,
    });
  },

  handleRemoveStep: function() {
    this.setState({
      totalSteps: Math.max(this.state.totalSteps - 1, 1),
    });
  },

  handleCompleteStep: function() {
    this.setState({
      currentStep: Math.min(this.state.currentStep + 1, this.state.totalSteps),
    });
  },

  handleDecompleteStep: function() {
    this.setState({
      currentStep: Math.max(this.state.currentStep - 1, 0),
    });
  },

  render: function() {
    return (
      <div>
        <div>
          <Steps count={this.state.totalSteps} current={this.state.currentStep} />
        </div>

        <div>total steps: {this.state.totalSteps}, current step: {this.state.currentStep}</div>

        <div>
          <Button onClick={this.handleRemoveStep}>LESS FFS</Button>
          <Button onClick={this.handleAddStep}>MORE PLZ</Button>
          <Button onClick={this.handleCompleteStep}>DONE ONE</Button>
          <Button onClick={this.handleDecompleteStep}>WAIT NO SHIT</Button>
        </div>
      </div>
    );
  }
});