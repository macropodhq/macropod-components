'use strict';

const React = require('react');

const Icon = require('./');

require('./example.scss');

const svgIcons = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

module.exports = React.createClass({
  displayName: 'IconExample',

  render() {
    return (
      <ul className="IconExample">
        {svgIcons.map((iconName, index, collection) => (
          <li key={iconName} style={{color: `hsl(${(index + 1) / collection.length * 360}, 80%, 45%)`}}>
            <Icon className="IconExample--large" type={iconName} /><Icon type={iconName} /><code>{iconName}</code>
          </li>
        ))}
      </ul>
    );
  }
});
