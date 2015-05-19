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


const ScrollEvent = require('../scroll-event-mixin');
const SuitClassSet = require('../suit-class-set');

require('./covert-header.scss');

module.exports = React.createClass({
  displayName: 'CovertHeader',

  mixins: [ScrollEvent()],

  propTypes: {
    offset: React.PropTypes.number,
    forceShow: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      offset: 0,
      forceShow: false,
    };
  },

  getInitialState() {
    return {
      hide: false,
    };
  },

  onScrollDown() {
    const pastOffset = this.props.offset < this.position;
    if (pastOffset && !this.state.hide && !this.props.forceShow) {
      this.setState({hide: true});
    }
  },

  onScrollUp() {
    if (this.state.hide) {
      this.setState({hide: false});
    }
  },

  render() {
    const covertHeaderClass = new SuitClassSet('CovertHeader');

    covertHeaderClass.addModifier({
      'hide': this.state.hide,
    });

    return (
      <div {...this.props} className={covertHeaderClass.toString()} ref="header">
        {this.props.children}
      </div>
    );
  },
});
