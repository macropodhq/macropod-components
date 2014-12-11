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
    document.body.classList.add('isUnscrollable');
  },

  layerDidMount: function() {
    animationCallback(this._layer.querySelector('.Modal-dialog'), this.setVisibleState);
    window.addEventListener('keyup', this.handleKeyUp);
  },

  layerWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyUp);
    document.body.classList.remove('isUnscrollable');
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
    var modalClasses = {
      'Modal': true,
      'Modal--visible': this.state.showModal,
      'Modal--invisible': !this.state.showModal
    };

    if (this.props.className) {
      modalClasses[this.props.className] = true;
    }

    modalClasses = classSet(modalClasses);

    var dialogClassObject = {
      'Modal-dialog': true,
      'Modal-dialog--withHeader': this.props.title,
      'Modal-dialog--withFooter': this.props.footer
    };

    dialogClassObject[this.props.dialogClassName] = (typeof this.props.dialogClassName === 'string');

    var dialogClasses = classSet(dialogClassObject);

    return (
      <div className={modalClasses} onClick={this.handleClose} onScroll={this.stopPropagation}>
        <div className={dialogClasses} onClick={this.stopPropagation} style={{maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight}}>
          {this.props.closeButton &&
            <a className="Modal-close" href="#" onClick={this.handleClose}> &#215; </a>
          }
          {this.props.title && 
            <div className="Modal-header">
              <h2 className="Modal-title">{this.props.title}</h2>
            </div>
          }

          <div className="Modal-content">
            {this.props.children}
          </div>

          {this.props.footer && 
            <div className="Modal-footer">
              {this.props.footer}
            </div>
          }

        </div>
      </div>
    );
  },

  render: function() {
    return null;
  }
});

module.exports = Modal;
