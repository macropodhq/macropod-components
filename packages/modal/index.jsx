/** @jsx React.DOM */

var React = require('react/addons');
var LayeredComponentMixin = require('react-components/js/layered-component-mixin');

var animationCallback = require('../style-utilities').animationCallback;

require('./modal.scss');

var Modal = React.createClass({
  mixins: [LayeredComponentMixin],

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
  },

  layerDidMount: function() {
    animationCallback(this._layer.querySelector('.Modal-dialog'), this.setVisibleState);

    window.addEventListener('keyup', this.handleKeyUp);
  },

  layerWillUnmount: function() {
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

  handleClose: function() {
    if (!this.isMounted()) return;
    this.setState({
      showModal: false
    });

    animationCallback(this._layer.querySelector('.Modal-dialog'), this.props.onClose);
    return false;
  },

  stopPropagation: function(event) {
    event.stopPropagation();
  },

  renderLayer: function() {
    var classSet = React.addons.classSet;
    var modalClasses = classSet({
      'Modal': true,
      'Modal--visible': this.state.showModal,
      'Modal--invisible': !this.state.showModal
    });

    var dialogClassObject = {
      'Modal-dialog': true
    };

    dialogClassObject[this.props.dialogClassName] = (typeof this.props.dialogClassName === 'string');

    var dialogClasses = classSet(dialogClassObject);

    return (
      <div className={modalClasses} onClick={this.handleClose}>
        <div className={dialogClasses} onClick={this.stopPropagation}>
          {this.props.children}
        </div>
      </div>
    );
  },

  render: function() {
    return null;
  }
});

module.exports = Modal;
