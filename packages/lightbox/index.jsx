/** @jsx React.DOM */

var React = require('react/addons');
var OnResize = require("react-window-mixins").OnResize;

require('./lightbox.scss');

var noop = function(){};

var AssetImage = React.createClass({
  mixins: [OnResize],

  getInitialState: function() {
    return {
      zoomable: false,
      zoomed: false,
    };
  },

  toggleImageZoom: function() {
    if (!this.state.zoomable) {
      return;
    }
    this.setState({
      zoomed: !this.state.zoomed
    });
  },

  checkImageSize: function() {
    var node = this.getDOMNode();
    var parentElementWidth = node.parentNode
      ? node.parentNode.clientWidth
      : Infinity;

    var zoomable = node.naturalWidth > parentElementWidth;

    this.setState({
      zoomable: zoomable,
      zoomed: zoomable ? this.state.zoomed : false
    });
  },

  handleImageLoad: function() {
    this.checkImageSize();
  },

  onResize: function() {
    this.checkImageSize();
  },

  render: function() {
    var imageClasses = React.addons.classSet({
      'AssetImage': true,
      'AssetImage--zoomed': this.state.zoomed,
      'AssetImage--zoomable': this.state.zoomable
    });

    return (
      <img className={imageClasses} src={this.props.asset.path} onClick={this.toggleImageZoom} onLoad={this.handleImageLoad} />
    );
  },

  getTitle: function() {
    return this.props.asset.title;
  },
});

var AssetIframe = React.createClass({
  render: function() {
    return (
      <iframe className="AssetIframe" src={this.props.asset.path} frameBorder="0" />
    );
  },

  getTitle: function() {
    return this.props.asset.title;
  },
});

var AssetLink = React.createClass({
  render: function() {
    return (
      <a className="AssetLink" href={this.props.asset.path} target="_blank">Download <em>{this.props.asset.title}</em></a>
    );
  },

  getTitle: function() {
    return this.props.asset.title;
  },
});

var Lightbox = module.exports = React.createClass({
  displayName: 'Lightbox',

  statics: {
    AssetImage: AssetImage,
    AssetIframe: AssetIframe,
    AssetLink: AssetLink,
    _containers: [
      {media: "application/pdf", container: AssetIframe},
      {media: "text/html", container: AssetIframe},
      {media: "image/*", container: AssetImage},
      {media: "*/*", container: AssetLink},
    ],
    register: function register(media, container) {
      this.unregister(media);

      this._containers.push({
        media: media,
        container: container,
      });

      this._containers.sort(function(a, b) {
        var ac = a.media.split("/", 2),
            bc = b.media.split("/", 2);

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
    unregister: function unregister(media) {
      for (var i = 0; i < this._containers.length; i++) {
        if (this._containers[i].media === media) {
          this._containers.splice(i, 1);
          i--;
        }
      }
    },
    containerFor: function containerFor(media) {
      for (var i = 0; i < this._containers.length; i++) {
        var ac = this._containers[i].media.split("/", 2),
            bc = media.split("/", 2);

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
    assets: React.PropTypes.arrayOf(React.PropTypes.shape({
      media: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      key: React.PropTypes.string,
    }).isRequired).isRequired,
  },

  getDefaultProps: function() {
    return {
      displayComponent: React.DOM.img,
      initialIndex: 0,
      onChange: noop,
      style: {},
      assets: [],
    };
  },

  getInitialState: function() {
    return {
      currentAssetIndex: parseInt(this.props.initialIndex, 10),
    };
  },

  getCurrentAsset: function() {
    return this.props.assets[this.state.currentAssetIndex];
  },

  handlePrevious: function() {
    var nextIndex = this.state.currentAssetIndex - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.assets.length - 1;
    }

    this.updateCurrentAssetIndex(nextIndex);
  },

  handleNext: function() {
    var nextIndex = this.state.currentAssetIndex + 1;
    if (this.props.assets.length === nextIndex) {
      nextIndex = 0;
    }

    this.updateCurrentAssetIndex(nextIndex);
  },

  updateCurrentAssetIndex: function(nextIndex) {
    this.setState({currentAssetIndex: nextIndex}, function() {
      this.props.onChange(this.state.currentAssetIndex);
    }.bind(this));
  },

  render: function() {
    if (this.props.hide === true) {
      return null;
    }

    var multipleAssets = this.props.assets.length > 1;

    var lightboxClassObject = {
      'Lightbox': true,
      'Lightbox--multiple': multipleAssets,
      'Lightbox--fullscreen': !!this.props.fullscreen
    };

    if (typeof this.props.className === 'string') {
      lightboxClassObject[this.props.className] = true;
    }

    var lightboxClass = React.addons.classSet(lightboxClassObject);

    var currentAsset = this.getCurrentAsset();

    var container = Lightbox.containerFor(currentAsset.media);

    return (
      <div className={lightboxClass} style={this.props.style}>
        <div className="Lightbox-asset">

          <div className="Lightbox-details">
            <h4 className="Lightbox-title">{currentAsset.title}</h4>
            <div className="Lightbox-controls">
              { multipleAssets &&
                <span>
                  <span className="Lightbox-counter">{this.state.currentAssetIndex + 1} of {this.props.assets.length}</span>
                  <span className="Lightbox-controls-previous" onClick={this.handlePrevious}>&lt;</span>
                  <span className="Lightbox-controls-next" onClick={this.handleNext}>&gt;</span>
                </span>
              }
              {this.props.onClose && <span className="Lightbox-controls-close" onClick={this.props.onClose}>&times;</span>}
            </div>
          </div>

          <div className="Lightbox-file">
            <container asset={currentAsset} />
          </div>

        </div>
      </div>
    );
  }
});
