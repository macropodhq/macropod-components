'use strict';

const React = require('react');

const InputText = require('../form/input-text');
const InputTextarea = require('../form/input-textarea');
const Button = require('../button');

const Guider = require('./');

module.exports = React.createClass({
  displayName: 'GuiderExample',

  getInitialState() {
    return {
      showGuider: false,
      guiderSuccess: 'no idea yet',
      guiderTitle: 'You need to learn a thing!',
      guiderContent: 'Here\'s how to do the thing!',
      guiderSteps: 4,
      guiderCurrent: 1,
    };
  },

  handleClick() {
    this.setState({
      showGuider: true,
    });
  },

  handleClose() {
    this.setState({
      showGuider: false,
      guiderSuccess: 'nope',
    });
  },

  handleNext() {
    this.setState({
      showGuider: false,
      guiderSuccess: 'yep',
    });
  },

  handleTitleChange(e) {
    this.setState({
      guiderTitle: e.target.value,
    });
  },

  handleContentChange(e) {
    this.setState({
      guiderContent: e.target.value,
    });
  },

  render() {
    return (
      <div>
        {this.state.showGuider &&
          <Guider
            onClose={this.handleClose}
            onNext={this.handleNext}
            title={this.state.guiderTitle}
            content={this.state.guiderContent}
            steps={4}
            current={1}
            />
        }

        <div>Was the guider "completed"? <strong>{this.state.guiderSuccess}</strong></div>
        <br />

        <InputText
          onChange={this.handleTitleChange}
          value={this.state.guiderTitle}
          showLabel={false} />

        <InputTextarea
          onChange={this.handleContentChange}
          value={this.state.guiderContent}
          showLabel={false} />

        <Button onClick={this.handleClick}>Guide me!</Button>
      </div>
    );
  }
});
