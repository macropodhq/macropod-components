'use strict';

const React = require('react');

const style = {
  iframe: {
    width: '100%',
    height: 150,
  },
};

module.exports = React.createClass({
  displayName: 'CovertHeaderIframe',

  statics: {
    wide: true,
  },

  render() {
    return (
      <iframe src="/#/covert-header-content?iframe=true" frameBorder={0} style={style.iframe} />
    );
  },
});
