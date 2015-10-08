import React from 'react';
import Column from '../column';
import Icon from '../icon';
import Card from '../card';
import InputText from '../form/input-text';

import styles from './board.mcss';

export default class Board extends React.Component {
  getFooter() {
    return (
      <div className={styles.footer}>
        <InputText
          wrapperClassName={' '}
          className={styles.InputText}
          placeholder="Create new task"
          onChange={function() {}}
        />
      </div>
    );
  }

  getColumn() {
    return (
      <Column
        className={styles.Column}
        title="Backlog"
        subTitle="9"
        action={<Icon type="settings-filled" />}
        footer={this.getFooter()}
      >

        <Card className={styles.Card} title="some task" />
        <Card className={styles.Card} title="some task" />
        <Card className={styles.Card} title="some task" />
        <Card className={styles.Card} title="some task" />

      </Column>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
        { this.getColumn() }
      </div>
    );
  }
}
