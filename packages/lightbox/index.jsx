'use strict';

const React = require('react/addons');
const OnResize = require('react-window-mixins').OnResize;
const SuitClassSet = require('../suit-class-set');

require('./lightbox.scss');

const noop = () => {};

const AssetImage = React.createClass({
  mixins: [OnResize],

  getInitialState() {
    return {
      zoomable: false,
      zoomed: false,
    };
  },

  toggleImageZoom() {
    if (!this.state.zoomable) {
      return;
    }
    this.setState({
      zoomed: !this.state.zoomed
    });
  },

  checkImageSize() {
    const node = this.getDOMNode();
    const parentElementWidth = node.parentNode ?
      node.parentNode.clientWidth :
      Infinity;
    const parentElementHeight = node.parentNode ?
      node.parentNode.clientHeight :
      Infinity;

    const zoomable = (node.naturalWidth > parentElementWidth) ||
      (node.naturalHeight > parentElementHeight);

    this.setState({
      zoomable: zoomable,
      zoomed: zoomable ? this.state.zoomed : false
    });
  },

  handleImageLoad() {
    this.checkImageSize();
  },

  onResize() {
    this.checkImageSize();
  },

  render() {
    const imageClasses = new SuitClassSet('AssetImage');

    imageClasses.addModifier({
      'zoomable': this.state.zoomable,
    });

    imageClasses.addState({
      'zoomed': this.state.zoomed,
    });

    return (
      <img className={imageClasses.toString()} src={this.props.asset.path} onClick={this.toggleImageZoom} onLoad={this.handleImageLoad} />
    );
  },

  getTitle() {
    return this.props.asset.title;
  },
});

const AssetIframe = React.createClass({
  render() {
    return (
      <iframe className="AssetIframe" src={this.props.asset.path} frameBorder="0" />
    );
  },

  getTitle() {
    return this.props.asset.title;
  },
});

const AssetLink = React.createClass({
  render() {
    return (
      <a className="AssetLink" href={this.props.asset.path} target="_blank">Download <em>{this.props.asset.title}</em></a>
    );
  },

  getTitle() {
    return this.props.asset.title;
  },
});

const Lightbox = React.createClass({
  displayName: 'Lightbox',

  statics: {
    AssetImage: AssetImage,
    AssetIframe: AssetIframe,
    AssetLink: AssetLink,

    _containers: [
      {media: 'application/pdf', container: AssetIframe},
      {media: 'text/html', container: AssetIframe},
      {media: 'image/*', container: AssetImage},
      {media: '*/*', container: AssetLink},
    ],

    register(media, container) {
      this.unregister(media);

      this._containers.push({
        media: media,
        container: container,
      });

      this._containers.sort((a, b) => {
        const ac = a.media.split('/', 2);
        const bc = b.media.split('/', 2);

        if (ac[0] === '*' && bc[0] !== '*') {
          return 1;
        }

        if (ac[0] !== '*' && bc[0] === '*') {
          return -1;
        }

        if (ac[1] === '*' && bc[1] !== '*') {
          return 1;
        }

        if (ac[1] !== '*' && bc[1] === '*') {
          return -1;
        }

        return 0;
      });
    },

    unregister(media) {
      for (let i = 0; i < this._containers.length; i++) {
        if (this._containers[i].media === media) {
          this._containers.splice(i, 1);
          i--;
        }
      }
    },

    containerFor(media) {
      if (typeof media !== 'string' || media.length < 1) {
        media = 'application/octet-stream';
      }

      for (let i = 0; i < this._containers.length; i++) {
        let ac = this._containers[i].media.split('/', 2),
            bc = media.split('/', 2);

        if (ac[0] === bc[0] && ac[1] === bc[1]) {
          return this._containers[i].container;
        }

        if (ac[0] === bc[0] && ac[1] === '*') {
          return this._containers[i].container;
        }

        if (ac[0] === '*' && ac[1] === '*') {
          return this._containers[i].container;
        }
      }

      return null;
    },
  },

  propTypes: {
    fullscreen: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    initialIndex: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onClose: React.PropTypes.func,
    style: React.PropTypes.object,
    assets: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.shape({
        key: React.PropTypes.string,
        media: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired,
      }),
      React.PropTypes.shape({
        key: React.PropTypes.string,
        title: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired,
        container: React.PropTypes.func.isRequired,
      }),
      React.PropTypes.shape({
        key: React.PropTypes.string,
        title: React.PropTypes.string.isRequired,
        element: React.PropTypes.element.isRequired,
      }),
    ]).isRequired).isRequired,
  },

  getDefaultProps() {
    return {
      displayComponent: React.createElement('img'),
      initialIndex: 0,
      onChange: noop,
      style: {},
      assets: [],
    };
  },

  getInitialState() {
    return {
      currentAssetIndex: parseInt(this.props.initialIndex, 10),
    };
  },

  getCurrentAsset() {
    return this.props.assets[this.state.currentAssetIndex];
  },

  handlePrevious() {
    let nextIndex = this.state.currentAssetIndex - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.assets.length - 1;
    }

    this.updateCurrentAssetIndex(nextIndex);
  },

  handleNext() {
    let nextIndex = this.state.currentAssetIndex + 1;
    if (this.props.assets.length === nextIndex) {
      nextIndex = 0;
    }

    this.updateCurrentAssetIndex(nextIndex);
  },

  updateCurrentAssetIndex(nextIndex) {
    this.setState({currentAssetIndex: nextIndex}, () => {
      this.props.onChange(this.state.currentAssetIndex);
    });
  },

  render() {
    if (this.props.hide === true) {
      return null;
    }

    const multipleAssets = this.props.assets.length > 1;

    const lightboxClass = new SuitClassSet('Lightbox');

    lightboxClass.addModifier({
      'multiple': multipleAssets,
      'fullscreen': !!this.props.fullscreen
    });

    let currentAsset = this.getCurrentAsset();

    let element = currentAsset.element;
    if (!element) {
      let Container = currentAsset.container || Lightbox.containerFor(currentAsset.media);

      element = <Container asset={currentAsset} />;
    }

    return (
      <div className={lightboxClass.toString() + (this.props.className ? ` ${this.props.className}` : '')} style={this.props.style}>
        <div className="Lightbox-asset">

          <div className="Lightbox-details">
            <h4 className="Lightbox-title">{currentAsset.title}</h4>
            <div className="Lightbox-controls">
              { multipleAssets &&
                <span>
                  <span className="Lightbox-counter">{this.state.currentAssetIndex + 1} of {this.props.assets.length}</span>
                  <button className="Lightbox-controls-previous" onClick={this.handlePrevious}>&lt;</button>
                  <button className="Lightbox-controls-next" onClick={this.handleNext}>&gt;</button>
                </span>
              }
              {this.props.onClose &&
                <button className="Lightbox-controls-close" onClick={this.props.onClose}>&times;</button>
              }
            </div>
          </div>

          <div className="Lightbox-file">
            {element}
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Lightbox;
