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
    let classSet = React.addons.classSet;
    let covertHeaderClass = classSet({
      'CovertHeader': true,
      'CovertHeader--hide': this.state.hide
    });

    return (
      <header {...this.props} className={covertHeaderClass} ref="header">
        {this.props.children}
      </header>
    );
  }
});
