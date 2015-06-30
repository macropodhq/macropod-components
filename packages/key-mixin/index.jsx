const _ = require('lodash-node');

module.exports = {
  _keyMixinHandleKeyDown(eventMaskCbPairs, evt) {
    if (!_.isArray(eventMaskCbPairs)) {
      eventMaskCbPairs = [eventMaskCbPairs];
    }

    let callbacks = _.map(eventMaskCbPairs,
      (pair) => _.all(pair.mask,
        (value, key) => evt[key] === value
      ) && pair.cb
    );
    callbacks = _.compact(callbacks);

    _.each(callbacks, (cb) => this[cb](evt));

    if (callbacks.length > 0) {
      evt.preventDefault();
    }
  },

  keyHandler(keyMask) {
    return this._keyMixinHandleKeyDown.bind(null, keyMask);
  },
};
