/** @jsx React.DOM */

var React = require('react/addons');

var animationCallback = require('../style-utilities').animationCallback;

require('./modal.scss');

var Modal = React.createClass({
  getDefaultProps: function() {
    return {
      onClose: function() {},
    };
  },

  getInitialState: function() {
    return {
      showModal: false,
      modalVisible: false
    };
  },

  componentDidMount: function() {
    this.setState({
      showModal: true
    });
    this.setVisibleState();
    animationCallback(this.refs.dialog.getDOMNode(), this.setVisibleState);

    window.addEventListener('keyup', this.handleKeyUp);
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyUp);
  },

  handleKeyUp: function(e) {
    if (e.keyCode == 27) {
      this.handleClose();
    }
  },

  setVisibleState: function() {
    if (!this.isMounted()) return;
    this.setState({
      modalVisible: true
    });
  },

  handleClose: function(e) {
    if (!this.isMounted()) return;
    this.setState({
      showModal: false
    });

    animationCallback(this.refs.dialog.getDOMNode(), this.props.onClose);
    return false;
  },

  stopPropagation: function(event) {
    event.stopPropagation();
  },

  render: function() {
    var cx = React.addons.classSet;
    var modalClasses = cx({
      'Modal': true,
      'Modal--visible': this.state.showModal,
      'Modal--invisible': !this.state.showModal
    });

    var dialogClasses = cx({
      'Modal-dialog': true
    });

    dialogClasses[this.props.dialogClassName] = true;

    return (
      <div className={modalClasses} onClick={this.handleClose}>
        <div className={dialogClasses} ref="dialog" onClick={this.stopPropagation}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Modal;
