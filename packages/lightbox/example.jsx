/** @jsx React.DOM */

var React = require('react');

var Lightbox = require('./');
var Button = require('../button');

var assets = [
  {
    media: 'image/jpeg',
    title: 'The Beach',
    path: require('./images/beach.jpg'),
  },
  {
    media: 'image/jpeg',
    title: 'Tracks',
    path: require('./images/tracks.jpg'),
  },
  {
    media: 'image/jpeg',
    title: 'Forest',
    path: require('./images/forest.jpg'),
  },
  {
    media: 'application/pdf',
    title: 'Model Graph',
    path: require('./images/model_graph.pdf'),
  }
];

module.exports = React.createClass({
  displayName: 'LightboxExample',

  getInitialState: function() {
    return {
      open: false,
      activeAsset: 0
    };
  },

  toggleFullscreenLightbox: function() {
    this.setState({activeAsset: this.refs.assetSwitcher.getDOMNode().value})
    this.setState({open: !this.state.open});
  },

  handleChange: function(index) {
    alert(index);
  },

  render: function() {
    function assetMapper(asset) {
      var container = Lightbox.containerFor(asset.contentType);

      return (
        <container asset={asset} />
      );
    }

    return (
      <div>
        <h3>Single asset</h3>
        <Lightbox assets={assets.slice(0, 1)} />

        <h3>Multiple assets</h3>
        <Lightbox assets={assets} onChange={this.handleChange} />

        <h3>Non-image assets</h3>
        <Lightbox assets={assets.concat([
          {
            media: 'text/html',
            title: 'Jessica Stokes\' Website',
            path: 'http://jessicastokes.net/',
          },
        ])} />

        <h3>Fullscreen</h3>
        <Button onClick={this.toggleFullscreenLightbox}>Open lightbox</Button>
        &nbsp; image number: <select ref="assetSwitcher">
          <option value="0" selected>1</option>
          <option value="1">2</option>
          <option value="2">3</option>
        </select>
        {this.state.open && 
          <Lightbox
            assets={assets}
            fullscreen={true}
            hide={!this.state.open}
            initialIndex={this.state.activeAsset}
            onClose={this.toggleFullscreenLightbox}
            />
        }
      </div>
    );
  }
});

