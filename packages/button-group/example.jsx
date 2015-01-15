/** @jsx React.DOM */

var React = require('react');

var ButtonGroup = require('./');
var Button = require('../button');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  render: function() {
    return (
      <div>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>Left</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
});
