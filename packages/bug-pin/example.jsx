'use strict';

const React = require('react');

const BugPin = require('./');

require('./example.scss');

const svgPins = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/pin-/i, '').replace(/.svg$/i, '')).sort();

module.exports = React.createClass({
  displayName: 'BugPin-example',

  render() {
    return (
      <ul className="BugPin-example">
        {svgPins.map((pinType, index, collection) => (
          <li key={pinType} style={{color: `hsl(${(index + 1) / collection.length * 360}, 80%, 45%)`}}>
            <BugPin className="BugPin-example--large" type={pinType} /><BugPin type={pinType} /><code>{pinType}</code>
          </li>
        ))}
      </ul>
    );
  }
});
