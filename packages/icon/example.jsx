/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var Icon = require('./');

require('./example.scss');

var svgIcons = require.context('./svgs', true, /\.svg$/).keys().map(function(name) {
  return name.replace(/.\/icon-/i, '').replace(/.svg$/i, '');
}).sort();

module.exports = React.createClass({
  displayName: 'IconExample',

  render: function() {
    return (
      <ul className="IconExample">
        {svgIcons.map(function(iconName, index, collection) {
          return (
            <li style={{color: 'hsl(' + (index + 1) / collection.length * 360 + ', 80%, 45%)'}}>
              <Icon className="IconExample--large" type={iconName} /><Icon type={iconName} /><code>{iconName}</code>
            </li>
          );
        })}
      </ul>
    );
  }
});
