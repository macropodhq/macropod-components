/** @jsx React.DOM */
React = require('react/addons');
require('./lightbox.scss');

var noop = function(){};

var Lightbox = React.createClass({
  displayName: 'Lightbox',

  propTypes: {
    assets: React.PropTypes.array.isRequired,
    fullscreen: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    initialIndex: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onClose: React.PropTypes.func,
    style: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      displayComponent: React.DOM.img,
      initialIndex: 0,
      onChange: noop,
      style: {}
    }
  },

  getInitialState: function() {
    return {
      currentAssetIndex: parseInt(this.props.initialIndex,10)
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
    this.setState({currentAssetIndex: nextIndex},
      function() {
        this.props.onChange(this.state.currentAssetIndex);
      }.bind(this)
    );
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

    return (
      <div className={lightboxClass} style={this.props.style}>
        <div className="Lightbox-asset">

          <div className="Lightbox-details">
            <h4 className="Lightbox-title">{this.getCurrentAsset().title}</h4>
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
            <this.props.displayComponent src={this.getCurrentAsset().path} />
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Lightbox;
