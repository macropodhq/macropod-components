'use strict';

const React = require('react/addons');
const LayeredComponentMixin = require('react-components/layered-component-mixin');

const animationCallback = require('../style-utilities').animationCallback;
const SuitClassSet = require('../suit-class-set');

require('./modal.scss');

module.exports = React.createClass({
  displayName: 'Modal',

  mixins: [LayeredComponentMixin],

  propTypes: {
    forceMobile: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    onWillClose: React.PropTypes.func,
    title: React.PropTypes.string,
    footer: React.PropTypes.node,
    className: React.PropTypes.string,
    dialogClassName: React.PropTypes.string,
    maxWidth: React.PropTypes.string,
    maxHeight: React.PropTypes.string,
    closeButton: React.PropTypes.bool,
    canClickAway: React.PropTypes.bool,
    canEscClose: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      onClose: () => {},
      onWillClose: () => {},
      canClickAway: true,
      forceMobile: false,
      title: '',
      closeButton: false,
      canEscClose: true,
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
      showModal: true,
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

  handleKeyDown(evt) {
    if (evt.keyCode === 27 && this.props.canEscClose) {
      this.handleClose(evt);
    }
  },

  setVisibleState() {
    if (!this.isMounted()) {
      return;
    }
    this.setState({
      modalVisible: true,
    });
  },

  handleClickAwayClose(evt) {
    if (this.props.canClickAway) {
      this.handleClose(evt);
    }
  },

  handleClose(evt) {
    if (!this.isMounted()) {
      return;
    }

    this.props.onWillClose(evt);

    if (evt.defaultPrevented) {
      return;
    }

    evt.preventDefault();

    this.setState({
      showModal: false,
    });

    animationCallback(this._layer.querySelector('.Modal-dialog'), this.props.onClose);
  },

  stopPropagation(event) {
    event.stopPropagation();
  },

  renderLayer() {
    const modalClasses = new SuitClassSet('Modal');

    modalClasses.addModifier({
      'visible': this.state.showModal,
      'invisible': !this.state.showModal,
      'forceMobile': this.props.forceMobile === true,
    });

    const dialogClasses = modalClasses.createDescendent('dialog');

    dialogClasses.addModifier({
      'withHeader': this.props.title,
      'withFooter': this.props.footer,
    });

    return (
      <div
        className={modalClasses.toString() + (this.props.className ? ` ${this.props.className}` : '')}
        onClick={this.handleClickAwayClose}
        onScroll={this.stopPropagation}
      >
        <div
          className={dialogClasses.toString() + (this.props.dialogClassName ? ` ${this.props.dialogClassName}` : '')}
          onClick={this.stopPropagation}
          style={{maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight}}
        >
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
  },
});
