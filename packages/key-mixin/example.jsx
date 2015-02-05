var React = require('react');

var KeyMixin = require('./');

var hotKeys = [
  {
    mask: {key: 'Enter', metaKey: true, altKey: false}, //osx
    cb: 'handleEnter',
  },{
    mask: {key: 'Enter', ctrlKey: true, altKey: false}, //windows
    cb: 'handleEnter',
  },{
    mask: {key: 'Escape', ctrlKey: false, altKey: false},
    cb: 'handleEscape',
  },
];

module.exports = React.createClass({
  displayName: 'KeyMixinExample',
  mixins: [KeyMixin],

  handleEscape(e) {
    alert('escape');
  },

  handleEnter(e) {
    alert('enter');
  },

  render() {
    return (
      <input
        {...this.callOnKeyDown(hotKeys)}
      />
    );
  }
});
