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

var LoadingExample = React.createClass({
  getInitialState: function() {
    return {
      open: false
    };
  },

  toggleFullscreenLightbox: function() {
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
        <Lightbox className="Lightbox--fullscreen" hide={!this.state.open} assets={assets} onClose={this.toggleFullscreenLightbox}/>
      </div>
    );
  }
});

module.exports = LoadingExample;
