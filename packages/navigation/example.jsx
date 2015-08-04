'use strict';

const React = require('react');

const style = {
  iframe: {
    width: '100%',
    height: 500,
  },
};

module.exports = React.createClass({
  displayName: 'AppNavigationIframe',

  statics: {
    wide: true,
  },

  render() {
    return (
      <iframe src="/#navigation-content?iframe=true" frameBorder={0} style={style.iframe} />
    );
  },
});
