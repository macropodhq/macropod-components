import React from 'react';
import Icon from './';

import styles from './example.mcss';

const svgIcons = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

export default class IconExample extends React.Component {
  render() {
    return (
      <ul className={styles.example}>
        {svgIcons.map((iconName, index, collection) => (
          <li key={iconName} style={{color: `hsl(${(index + 1) / collection.length * 360}, 80%, 45%)`}}>
            <Icon className={styles.IconLarge} type={iconName} /><Icon className={styles.Icon} type={iconName} /><code>{iconName}</code>
          </li>
        ))}
      </ul>
    );
  };
};
