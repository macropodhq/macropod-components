var keymaster = require('keymaster');
var _ = require('lodash');

module.exports = function(options) {
  return {
    componentDidMount: function() {
      _.each(options.keys,
        function(cb, key) {
          keymaster(key, this[cb]);
        }.bind(this)
      );
    },

    componentWillUnmount: function() {
      _.each(options.keys,
        function(cb, key) {
          keymaster.unbind(key, this[cb]);
        }.bind(this)
      );
    }
  };
};
