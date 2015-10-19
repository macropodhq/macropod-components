import React from 'react';

import Bar from './';
import Icon from '../icon';
import Link from '../link';

import styles from './example.mcss';

export default class BarExample extends React.Component {
  static wide = true;

  render() {
    return (
      <Bar classes={{
        left: styles.left,
        right: styles.right,
      }}>
        <Link className={styles.item} align={Bar.align.LEFT}>
          <Icon type="home" />
        </Link>

        <svg className={styles.logo} align={Bar.align.CENTER} width="40px" height="40px" viewBox="0 0 64 89" version="1.1">
          <g stroke="none" fill="none" fillRule="evenodd">
            <path fill="white" d="M19.5,89 C44.0766714,89 64,69.0766714 64,44.5 C64,19.9233286 44.0766714,0 19.5,0 C-5.07667137,0 29.750001,19.9233286 29.750001,44.5 C29.750001,69.0766714 -5.07667137,89 19.5,89 Z" />
            <circle fill="white" cx="11" cy="45" r="11" />
          </g>
        </svg>

        <Link className={styles.item} align={Bar.align.RIGHT}>
          <Icon type="settings" />
        </Link>

        <Link className={styles.item} align={Bar.align.RIGHT}>
          <Icon type="user" />
        </Link>
      </Bar>
    );
  };
};
