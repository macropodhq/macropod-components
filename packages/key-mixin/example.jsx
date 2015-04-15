const React = require('react');

const InputText = require('../form/input-text');

const KeyMixin = require('./');

const keys = [
  {
    mask: {key: 'Enter', metaKey: true, altKey: false}, //osx
    cb: 'handleEnter',
  },
  {
    mask: {key: 'Enter', ctrlKey: true, altKey: false}, //windows
    cb: 'handleEnter',
  },
  {
    mask: {key: 'Escape', ctrlKey: false, altKey: false},
    cb: 'handleEscape',
  },
];

module.exports = React.createClass({
  displayName: 'KeyMixinExample',
  mixins: [KeyMixin],

  getInitialState() {
    return {
      value: 'Hit escape or meta+enter',
    };
  },

  handleEscape() {
    this.setState({
      value: 'You hit escape!',
    });
  },

  handleEnter() {
    this.setState({
      value: 'You hit meta+enter',
    });
  },

  render() {
    return (
      <InputText
        value={this.state.value}
        onKeyDown={this.keyHandler(keys)}
        showLabel={false} />
    );
  }
});
