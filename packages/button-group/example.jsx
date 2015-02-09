'use strict';

var React = require('react');

var ButtonGroup = require('./');
var Button = require('../button');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'ButtonExample',

  render() {
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
