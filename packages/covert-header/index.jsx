/** @jsx React.DOM */
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

React = require('react/addons');

require('./covert-header.scss');
var ScrollEvent = require('../scroll-event-mixin');
var StyleUtilities = require('../style-utilities');

module.exports = React.createClass({
  displayName: 'CovertHeader',

  mixins: [ScrollEvent()],

  getInitialState: function() {
    return {
      hide: false,
    };
  },

  onScrollDown: function() {
    this.setState({hide: true});
  },

  onScrollUp: function() {
    this.setState({hide: false});
  },

  render: function() {
    var classSet = React.addons.classSet;
    var covertHeaderClass = classSet({
      'CovertHeader': true,
      'CovertHeader--hide': this.state.hide
    });

    return (
      this.transferPropsTo(
        <header className={covertHeaderClass} ref="header">
          {this.props.children}
        </header>
      )
    );
  }
});
