import React from 'react';
import Board from './';

import styles from './example.mcss';

export default class ColumnExample extends React.Component {
  statics: {
    wide: true,
  }

  render() {
    return (
      <Board />
    )
  }
}
