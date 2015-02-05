var _ = require('lodash-node');

module.exports = {
  _keyMixinHandleKeyDown(eventMaskCbPairs, e) {
    if (!_.isArray(eventMaskCbPairs)) {
      eventMaskCbPairs = [eventMaskCbPairs];
    }

    var callbacks = _.map(eventMaskCbPairs,
      (value) => _.all(value.mask,
        (value, key) => e[key] == value
      ) && value.cb
    );
    callbacks = _.compact(callbacks);

    _.each(callbacks, (cb) => this[cb](e));

    if (callbacks.length > 0) return false;
  },

  keyHandler(keyMask) {
    return this._keyMixinHandleKeyDown.bind(null, keyMask);
  },
};
