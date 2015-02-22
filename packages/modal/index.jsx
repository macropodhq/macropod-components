'use strict';

const React = require('react/addons');
const LayeredComponentMixin = require('react-components/js/layered-component-mixin');

const animationCallback = require('../style-utilities').animationCallback;

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
      modalVisible: false,
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
    window.addEventListener('keydown', this.handleKeyDown);
  },

  layerWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.classList.remove('isUnscrollable');
  },

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.handleClose();
    }
  },

  setVisibleState() {
    if (!this.isMounted()) {
      return;
    }
    this.setState({
      modalVisible: true
    });
  },

  handleClose() {
    if (!this.isMounted()) {
      return;
    }
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
    const classSet = React.addons.classSet;
    const modalClasses = {
      'Modal': true,
      'Modal--visible': this.state.showModal,
      'Modal--invisible': !this.state.showModal
    };

    if (this.props.className) {
      modalClasses[this.props.className] = true;
    }

    const modalClassName = classSet(modalClasses);

    const dialogClassObject = {
      'Modal-dialog': true,
      'Modal-dialog--withHeader': this.props.title,
      'Modal-dialog--withFooter': this.props.footer,
      [this.props.dialogClassName]:
        (typeof this.props.dialogClassName === 'string'),
    };

    const dialogClassName = classSet(dialogClassObject);

    return (
      <div className={modalClassName} onClick={this.handleClose} onScroll={this.stopPropagation}>
        <div className={dialogClassName} onClick={this.stopPropagation} style={{maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight}}>
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
