/** @jsx React.DOM */

var React = require('react');

var Lightbox = require('./');
var Button = require('../button');

var assets = [
  {
    title: 'The Beach',
    path: require('./images/beach.jpg'),
    contentType: 'image/jpeg'
  },
  {
    title: 'Tracks',
    path: require('./images/tracks.jpg'),
    contentType: 'image/jpeg'
  },
  {
    title: 'Forest',
    path: require('./images/forest.jpg'),
    contentType: 'image/jpeg'
  },
  {
    title: 'Model Graph',
    path: require('./images/model_graph.pdf'),
    contentType: 'application/pdf'
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
        <Lightbox>
          <Lightbox.AssetImage asset={assets[0]} />
        </Lightbox>

        <h3>Multiple assets</h3>
        <Lightbox onChange={this.handleChange}>
          {assets.map(assetMapper)}
        </Lightbox>

        <h3>Non-image assets</h3>
        <Lightbox>
          <div><h2>Testing!</h2></div>
          {assets.map(assetMapper)}
          <Lightbox.AssetIframe asset={{title: 'Jessica Stokes\' Website', path: 'http://jessicastokes.net/'}} />
        </Lightbox>

        <h3>Fullscreen</h3>
        <Button onClick={this.toggleFullscreenLightbox}>Open lightbox</Button>
        &nbsp; image number: <select ref="assetSwitcher">
          <option value="0" selected>1</option>
          <option value="1">2</option>
          <option value="2">3</option>
        </select>
        {this.state.open && 
          <Lightbox fullscreen={true} hide={!this.state.open} initialIndex={this.state.activeAsset} onClose={this.toggleFullscreenLightbox}>
          {assets.map(assetMapper)}
          </Lightbox>
        }
      </div>
    );
  }
});

