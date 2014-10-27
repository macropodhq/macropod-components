/** @jsx React.DOM */
React = require('react/addons');
require('./lightbox.scss');

var Lightbox = React.createClass({
  displayName: 'Lightbox',

  propTypes: {
    assets: React.PropTypes.array.isRequired
  },

  getDefaultProps: function() {
    return {
      displayComponent: React.DOM.img,
      onChange: function(){}
    }
  },

  getInitialState: function() {
    return {
      currentAssetIndex: 0
    };
  },

  getCurrentAsset: function(index) {
    return this.props.assets[index || this.state.currentAssetIndex];
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
    var hideLightbox = this.props.hide === true;
    var multipleAssets = this.props.assets.length > 1;
    var cx = React.addons.classSet;
    var lightboxClass = cx({
      'Lightbox': true,
      'Lightbox--multiple': multipleAssets
    });

    return (
      !hideLightbox ?
        this.transferPropsTo(
            <div className={lightboxClass}>
              <div className="Lightbox-asset">

                <div className="Lightbox-details">
                  <h4 className="Lightbox-title">{this.getCurrentAsset().title}</h4>
                  <div className="Lightbox-controls">
                    { multipleAssets && 
                      <span>
                        <span className="Lightbox-counter">{this.state.currentAssetIndex + 1} of {this.props.assets.length}</span>
                        <span onClick={this.handlePrevious} className="Lightbox-controls-previous">&lt;</span>
                        <span onClick={this.handleNext} className="Lightbox-controls-next">&gt;</span>
                      </span>
                    }
                    {this.props.onClose && <span onClick={this.props.onClose} className="Lightbox-controls-close">&times;</span>}
                  </div>
                </div>

                <div className="Lightbox-file">
                  <this.props.displayComponent src={this.getCurrentAsset().path} />
                </div>
                
              </div>
            </div>
        )
      : null
    )
  }
});

module.exports = Lightbox;
