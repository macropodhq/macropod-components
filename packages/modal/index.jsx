'use strict';

var React = require('react/addons');
var LayeredComponentMixin = require('react-components/js/layered-component-mixin');

var animationCallback = require('../style-utilities').animationCallback;

require('./modal.scss');

module.exports = React.createClass({
  displayName: 'Modal',

  mixins: [LayeredComponentMixin],

  getDefaultProps() {
    return {
      onClose: () => {},
    };
  },

  getInitialState() {
    return {
      showModal: false,
      modalVisible: false
    };
  },

  componentDidMount() {
    this.setState({
      showModal: true
    });
    this.setVisibleState();
    document.body.classList.add('isUnscrollable');
  },

  layerDidMount() {
    animationCallback(this._layer.querySelector('.Modal-dialog'), this.setVisibleState);
    window.addEventListener('keyup', this.handleKeyUp);
  },

  layerWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
    document.body.classList.remove('isUnscrollable');
  },

  handleKeyUp(e) {
    if (e.keyCode == 27) {
      this.handleClose();
    }
  },

  setVisibleState() {
    if (!this.isMounted()) return;
    this.setState({
      modalVisible: true
    }); 
  },

  handleClose() {
    if (!this.isMounted()) return;
    this.setState({
      showModal: false
    });

    animationCallback(this._layer.querySelector('.Modal-dialog'), this.props.onClose);
    return false;
  },

  stopPropagation(event) {
    event.stopPropagation();
  },

  renderLayer() {
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

  render() {
    return null;
  }
});
