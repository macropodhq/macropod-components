'use strict';

const React = require('react');

const IconButton = require('./');

require('./example.scss');

const svgIcons = require.context('../icon/svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

module.exports = React.createClass({
  displayName: 'IconButtonExample',

  render() {
    return (
      <ul className="IconButtonExample">
        {svgIcons.map((iconName, index, collection) => (
          <li key={iconName}>
            <IconButton type={iconName} /><code>{iconName}</code>
          </li>
        ))}
      </ul>
    );
  }
});
