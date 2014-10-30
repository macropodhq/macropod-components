/** @jsx React.DOM */

var React = require('react');

var Button = require('../button');
var Prompt = require('./');

var PromptExample = module.exports = React.createClass({
  getInitialState: function() {
    return {
      showPrompt: false,
      promptState: 'Not yet shown',
      promptTitle: 'I just need to know!',
      promptContent: 'How much wood would a Woodchuck chuck if a Woodchuck could chuck wood?',
      promptDefaultValue: "A lot!",
      promptCancelable: true,
      promptValue: ''
    };
  },

  handleClick: function() {
    this.setState({
      showPrompt: true,
    });
  },

  handleCancel: function() {
    this.setState({
      promptValue: '',
      showPrompt: false,
      promptState: 'Canceled',
    });
  },

  handleOk: function(value) {
    this.setState({
      promptValue: value,
      showPrompt: false,
      promptState: 'Completed',
    });
  },

  handleTitleChange: function(event) {
    this.setState({
      promptTitle: event.target.value
    })
  },

  handleContentChange: function(event) {
    this.setState({
      promptContent: event.target.value
    })
  },

  handleDefaultValueChange: function(event) {
    this.setState({
      promptDefaultValue: event.target.value
    })
  },

  handleCancelableChange: function(event) {
    this.setState({
      promptCancelable: event.target.checked
    })
  },

  handlePromptValueChange: function(value) {
    this.setState({
      promptValue: value
    })
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this.handleTitleChange} value={this.state.promptTitle} />
        <br />
        <textarea onChange={this.handleContentChange} value={this.state.promptContent} />
        <br />
        <input type="text" onChange={this.handleDefaultValueChange} value={this.state.promptDefaultValue} />
        <br />
        <label><input type="checkbox" onChange={this.handleCancelableChange} checked={this.state.promptCancelable}></input> Cancelable</label>
        <br />
        <Button onClick={this.handleClick}>Show Prompt</Button>

        <br />
        Prompt State: <strong>{this.state.promptState}</strong>
        <br />
        Prompt Value: <strong>{this.state.promptValue}</strong>

        {this.state.showPrompt &&
          <Prompt
            cancelable={this.state.promptCancelable}
            title={this.state.promptTitle}
            content={this.state.promptContent}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            defaultValue={this.state.promptDefaultValue}
            />
        }
      </div>
    );
  }
});
