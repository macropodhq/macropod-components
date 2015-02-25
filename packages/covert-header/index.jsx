'use strict';
/*
         /^\/^\
         \----|
     _---'---~~~~-_
      ~~~|~~L~|~~~~
         (/_  /~~--
       \~ \  /  /~
     __~\  ~ /   ~~----,
     \    | |       /  \
     /|   |/       |    |
     | | | o  o     /~   |
   _-~_  |        ||  \  /
  (// )) | o  o    \\---'
  //_- |  |          \
 //   |____|\______\__\
 ~      |   / |    |
         |_ /   \ _|
       /~___|  /____\
*/

const React = require('react/addons');

require('./covert-header.scss');
const ScrollEvent = require('../scroll-event-mixin');
const SuitClassSet = require('../suit-class-set');

module.exports = React.createClass({
  displayName: 'CovertHeader',

  mixins: [ScrollEvent()],

  getInitialState() {
    return {
      hide: false,
    };
  },

  onScrollDown() {
    this.setState({hide: true});
  },

  onScrollUp() {
    this.setState({hide: false});
  },

  render() {
    const covertHeaderClass = new SuitClassSet('CovertHeader');

    covertHeaderClass.addModifier({
      'hide': this.state.hide
    });

    return (
      <header {...this.props} className={covertHeaderClass.toString()} ref="header">
        {this.props.children}
      </header>
    );
  }
});
