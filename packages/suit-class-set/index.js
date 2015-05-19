'use strict';

const _ = require('lodash-node');
const empty = '';
const space = ' ';
const dash = '-';
const doubleDash = dash + dash;

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

class SuitClassSet {

  constructor(componentName) {
    if (!isValidString(componentName)) {
      throw new Error(`Supplied primary class name "${componentName}" is invalid.`);
    }

    this._componentName = componentName;
    this._modifiers = [];
    this._states = [];
    this._utilities = [];
  }

  _add(collection, args) {
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

  addModifier() {
    this._add('_modifiers', arguments);
  }

  addState() {
    this._add('_states', arguments);
  }

  addUtility() {
    this._add('_utilities', arguments);
  }

  createDescendent(descendentName) {
    if (!isValidString(descendentName)) {
      throw new Error(`Supplied descendent name "${descendentName}" is invalid.`);
    }

    return new SuitClassSet([this._componentName, descendentName].join(dash));
  }

  toArray() {
    return [this._componentName]
      .concat(
        _(this._modifiers)
          .uniq()
          .filter(subClass => subClass.length > 0)
          .map(subClass => [this._componentName, subClass].join(doubleDash))
          .value()
      )
      .concat(
        _(this._utilities)
          .uniq()
          .filter(utility => utility.length > 0)
          .map(utility => `u-${utility}`)
          .value()
      )
      .concat(
        _(this._states)
          .uniq()
          .filter(state => state.length > 0)
          .map(state => `is-${state}`)
          .value()
      );
  }

  toString() {
    return this.toArray().join(space);
  }

}

module.exports = SuitClassSet;
