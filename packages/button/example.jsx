'use strict';

const React = require('react');

const Button = require('./');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  getInitialState() {
    return {
      count: 0,
    };
  },

  handleClick() {
    this.setState({click: this.state.count++});
  },

  render() {
    return (
      <div className="ButtonExample">
        <h4>Button Types</h4>

        <Button onClick={this.handleClick}>Default</Button><br />
        <Button success onClick={this.handleClick}>Success</Button><br />
        <Button danger onClick={this.handleClick}>Danger</Button><br />
        <Button cancel onClick={this.handleClick}>Cancel</Button><br />
        <Button skeleton onClick={this.handleClick}>
          Skeleton<br />
          (no border, outline or background)
        </Button>

        <h4>Modifiers</h4>

        <p>Can be used on any Button type. Here they're used on the Default.</p>
        <Button small onClick={this.handleClick}>Small</Button><br />
        <Button disabled onClick={this.handleClick}>
          Disabled<br />
          (fades out colour of button type)
        </Button>

        <h4>Novelties</h4>

        <p>This button demonstrates that the Button component gracefully supports any <code>background-color</code></p>
        <Button className="Button--custom" onClick={this.handleClick}>Custom</Button>
        <br/>
        You've clicked {this.state.count} button{this.state.count === 1 ? '' : 's'}
      </div>
    );
  },
});
