'use strict';

const React = require('react');

const Button = require('../button');
const Steps = require('./');

module.exports = React.createClass({
  displayName: 'StepsExample',

  getInitialState() {
    return {
      totalSteps: 4,
      currentStep: 1,
    };
  },

  handleAddStep() {
    this.setState({
      totalSteps: this.state.totalSteps + 1,
    });
  },

  handleRemoveStep() {
    this.setState({
      totalSteps: Math.max(this.state.totalSteps - 1, 1),
    });
  },

  handleCompleteStep() {
    this.setState({
      currentStep: Math.min(this.state.currentStep + 1, this.state.totalSteps),
    });
  },

  handleDecompleteStep() {
    this.setState({
      currentStep: Math.max(this.state.currentStep - 1, 0),
    });
  },

  render() {
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
