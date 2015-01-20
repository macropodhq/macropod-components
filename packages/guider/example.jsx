/** @jsx React.DOM */

var React = require('react');

var Button = require('../button');
var Guider = require('./');

module.exports = React.createClass({
  displayName: 'GuiderExample',

  getInitialState: function() {
    return {
      showGuider: false,
      guiderSuccess: 'no idea yet',
      guiderTitle: 'You need to learn a thing!',
      guiderContent: 'Here\'s how to do the thing!',
      guiderSteps: 4,
      guiderCurrent: 1,
    };
  },

  handleClick: function() {
    this.setState({
      showGuider: true,
    });
  },

  handleClose: function() {
    this.setState({
      showGuider: false,
      guiderSuccess: 'nope',
    });
  },

  handleNext: function() {
    this.setState({
      showGuider: false,
      guiderSuccess: 'yep',
    });
  },

  handleTitleChange: function(e) {
    this.setState({
      guiderTitle: e.target.value,
    });
  },

  handleContentChange: function(e) {
    this.setState({
      guiderConent: e.target.value,
    });
  },

  render: function() {
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
        <input type="text" onChange={this.handleTitleChange} value={this.state.guiderTitle} />
        <br />
        <textarea onChange={this.handleContentChange} value={this.state.guiderContent} />
        <br />
        <Button onClick={this.handleClick}>Guide me!</Button>
      </div>
    );
  }
});
