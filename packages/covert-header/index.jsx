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

var React = require('react/addons');

require('./covert-header.scss');
var ScrollEvent = require('../scroll-event-mixin');
var StyleUtilities = require('../style-utilities');

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
    var classSet = React.addons.classSet;
    var covertHeaderClass = classSet({
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
