/** @jsx React.DOM */

var React = require('react');

var Lightbox = require('./');
var Button = require('../button');

var assets = [
  {
    title: 'The Beach',
    path: require('./images/beach.jpg')
  },
  {
    title: 'Tracks',
    path: require('./images/tracks.jpg')
  },
  {
    title: 'Forest',
    path: require('./images/forest.jpg')
  }
];

var LightboxExample = React.createClass({
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
    return (
      <div>
        <h3>Single asset</h3>
        <Lightbox assets={[assets[1]]} displayComponent={React.DOM.img} />

        <h3>Multiple assets</h3>
        <Lightbox assets={assets} onChange={this.handleChange} />

        <h3>Fullscreen</h3>
        <Button onClick={this.toggleFullscreenLightbox}>Open lightbox</Button>
        &nbsp; image number: <select ref="assetSwitcher">
          <option value="0" selected>1</option>
          <option value="1">2</option>
          <option value="2">3</option>
        </select>
        {this.state.open && 
          <Lightbox fullscreen={true} hide={!this.state.open} assets={assets} initialIndex={this.state.activeAsset} onClose={this.toggleFullscreenLightbox}/>
        }
      </div>
    );
  }
});

module.exports = LightboxExample;
