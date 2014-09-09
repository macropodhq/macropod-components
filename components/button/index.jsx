/** @jsx React.DOM */

require('./style');

var React = require('react');

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'default'
    };
  },
  
  render: function() {
    var buttonClass = 'Button Button--' + this.props.type;

    return (
      this.transferPropsTo(<button className={buttonClass}>{this.props.children}</button>)
    );
  }
});

var ButtonExample = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  handleClick: function(e) {
    this.setState({click: this.state.count++});
  },

  render: function() {
    return (
      <div>
        <Button onClick={this.handleClick}>What what?</Button>
        {this.state.count}
      </div>
    );
  }
});

module.exports = {
  name: 'Button',
  Component: Button,
  Example: ButtonExample,
  readme: 'its a button'
};
