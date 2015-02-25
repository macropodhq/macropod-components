'use strict';

const React = require('react');

const SuitClassSet = require('./');

module.exports = React.createClass({
  displayName: 'SuitClassSet-example',

  statics: {
    wide: true,
  },

  render() {
    const aClassSet = new SuitClassSet('SuitClassSet');
    const aDescendentClassSet = aClassSet.createDescendent('descendent');

    aClassSet.addModifier('foo');

    aClassSet.addModifier({
      'bar': true,
      'baz': false,
      'something with spaces which should not work': true,
    });

    aClassSet.addModifier([
      'abc',
      '123',
    ]);

    aClassSet.addState('loading');

    aDescendentClassSet.addModifier('withModifier');

    aDescendentClassSet.addUtility('clearFix');

    return (
      <div>
        <p>This example contains two SuitClassSets; one demonstrating all the modifier and state features, and one which is a descendent whose class name is derived from the first.</p>
        <h3><code>aClassSet</code></h3>
        <pre>
          {aClassSet.toString()}
        </pre>
        <h3><code>aDescendentClassSet</code></h3>
        <pre>
          {aDescendentClassSet.toString()}
        </pre>
      </div>
    );
  }
});
