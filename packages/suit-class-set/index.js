'use strict';

const _ = require('lodash-node');
const empty = '';
const space = ' ';
const dash = '-';
const doubleDash = dash+dash;

function SuitClassSet(componentName) {
  if (!isValidString(componentName)) {
    throw new Error(`Supplied primary class name "${componentName}" is invalid.`);
  }

  Object.defineProperties(this, {

    componentName: {
      configurable: true,
      value: componentName,
    },

    modifiers: {
      value: [],
      writable: true,
    },

    states: {
      value: [],
      writable: true,
    },

    utilities: {
      value: [],
      writable: true,
    },

  });
}

function isValidString(string) {
  return _.isString(string) && string.indexOf(space) === -1;
}

function processString(string) {
  if (isValidString(string) && string.indexOf(dash) === -1) {

    return string;

  } else {

    console.warn(`Supplied class name fragments must not contain spaces. Ignoring "${string}"`);
    return empty;

  }
}

Object.defineProperty(SuitClassSet.prototype, 'add', {
  value: function(collection, args) {
    Array.prototype.forEach.call(args, arg => {

      if (_.isString(arg)) {
        this[collection].push(processString(arg));
      }

      if (_.isArray(arg)) {
        this[collection] = this[collection].concat(_.map(arg, item => processString(item)));
      }

      if (_.isPlainObject(arg)) {
        this[collection] = this[collection].concat(_(arg).map((item, key) => {
          if (item) {
            return processString(key);
          } else {
            return empty;
          }
        }).value());
      }

    });
  }
});

SuitClassSet.prototype.addModifier = function() {
  this.add('modifiers', arguments);
};

SuitClassSet.prototype.addState = function() {
  this.add('states', arguments);
};

SuitClassSet.prototype.addUtility = function() {
  this.add('utilities', arguments);
}

SuitClassSet.prototype.createDescendent = function(descendentName) {
  if (!isValidString(descendentName)) {
    throw new Error(`Supplied descendent name "${descendentName}" is invalid.`);
  }

  return new SuitClassSet([this.componentName, descendentName].join(dash));
};

SuitClassSet.prototype.toArray = function() {
  return [this.componentName]
    .concat(
      _(this.modifiers)
        .uniq()
        .filter(subClass => subClass.length > 0)
        .map(subClass => [this.componentName, subClass].join(doubleDash))
        .value()
    )
    .concat(
      _(this.utilities)
        .uniq()
        .filter(utility => utility.length > 0)
        .map(utility => `u-${utility}`)
        .value()
    )
    .concat(
      _(this.states)
        .uniq()
        .filter(state => state.length > 0)
        .map(state => `is-${state}`)
        .value()
    );
};

SuitClassSet.prototype.toString = function() {
  return this.toArray().join(space);
};

module.exports = SuitClassSet;
