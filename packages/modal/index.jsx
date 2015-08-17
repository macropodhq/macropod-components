'use strict';

const React = require('react/addons');
const LayeredComponentMixin = require('react-components/layered-component-mixin');

const animationCallback = require('../style-utilities').animationCallback;
const classnames = require('classnames');
const style = require('./modal.mcss');

module.exports = React.createClass({
  displayName: 'Modal',

  mixins: [LayeredComponentMixin],

  propTypes: {
    forceMobile: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    title: React.PropTypes.string,
    footer: React.PropTypes.node,
    className: React.PropTypes.string,
    dialogClassName: React.PropTypes.string,
    maxWidth: React.PropTypes.string,
    maxHeight: React.PropTypes.string,
    closeButton: React.PropTypes.bool,
    canClickAway: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      onClose: () => {},
      canClickAway: true,
      forceMobile: false,
      title: '',
      closeButton: false,
    };
  },

  getInitialState() {
    return {
      showModal: false,
    };
  },

  componentDidMount() {
    this.setState({
      showModal: true,
    });
    document.body.classList.add(style.isUnscrollable);
  },

  force(){
    if (this.isMounted()){
      this.forceUpdate();
    }
  },

  layerDidMount() {
    animationCallback(React.findDOMNode(this.dialog), this.force);
    window.addEventListener('keydown', this.handleKeyDown);
  },

  layerWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.classList.remove(style.isUnscrollable);
  },

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.handleClose();
    }
  },

  handleClickAwayClose(evt) {
    if (this.props.canClickAway) {
      this.handleClose(evt);
    }
  },

  handleClose(evt) {
    if (evt) {
      evt.preventDefault();
    }
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      showModal: false,
    });
    animationCallback(React.findDOMNode(this.dialog), this.props.onClose);
  },

  stopPropagation(event) {
    event.stopPropagation();
  },

  renderLayer() {
    let ModalClassName = classnames({
      [style.forceMobile]: false, //this.props.forceMobile === true,
    });


    let DialogClassName = classnames({
      [style.visible]: this.state.showModal,
      [style.invisible]: !this.state.showModal,
    });

    let contentClassName = classnames({
      [style.content]: true,
      [style.withHeader]: this.props.title !== '',
      [style.withFooter]: this.props.footer,
      [style.withHeaderAndFooter]: this.props.title !== '' && this.props.footer
    })

    return (
      <div className={style.Modal + (this.props.className ? ` ${this.props.className}` : '')} onClick={this.handleClickAwayClose} onScroll={this.stopPropagation}>
        <div ref={(ref) => {this.dialog = ref;}} className={DialogClassName + (this.props.dialogClassName ? ` ${this.props.dialogClassName}` : '')} onClick={this.stopPropagation} style={{maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight}}>
          {this.props.closeButton &&
            <a className={style.close} href="#" onClick={this.handleClose}> &#215; </a>
          }
          {this.props.title &&
            <div className={style.header}>
              <h2 className={style.title}>{this.props.title}</h2>
            </div>
          }

          <div className={contentClassName}>
            {this.props.children}
          </div>

          {this.props.footer &&
            <div className={style.footer}>
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
