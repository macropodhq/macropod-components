var _ = require('lodash-node');

/*  example
  <input {...this.callOnKeyDown( [
    {
      mask: {key: 'Enter', metaKey: true, altKey: false}, //osx
      cb: 'handleEnter',
    },{
      mask: {key: 'Enter', ctrlKey: true, altKey: false}, //windows
      cb: 'handleEnter',
    },{
      mask: {key: 'Escape', ctrlKey: false, altKey: false},
      cb: 'handleEscape',
    },
  ])}/>
*/

module.exports = {
  _keyMixinHandleKeyDown(eventMaskCbPairs, e) {
    if (!_.isArray(eventMaskCbPairs)) eventMaskCbPairs = [eventMaskCbPairs];

    var callbacks = _.map(eventMaskCbPairs,
      (value) => _.all(value.mask,
        (value, key) => e[key] == value
      ) && value.cb
    );
    callbacks = _.compact(callbacks);

    _.each(callbacks, (cb) => this[cb](e));

    if (callbacks.length > 0) return false;
  },

  bindKeys(keyMask) {
    return this._keyMixinHandleKeyDown.bind(null, keyMask);
  },
};
