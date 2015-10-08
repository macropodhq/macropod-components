import React from 'react';
import Column from './index.jsx';
import Icon from '../icon';
import Card from '../card';
import InputText from '../form/input-text';

import styles from './example.mcss';

export default class ColumnExample extends React.Component {
  statics: {
    wide: true,
  }

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

  render() {
    return (
      <div className={styles.container}>
        <Column
          className={styles.Column}
          title="Backlog"
          subTitle="9"
          action={<Icon type="settings-filled" />}
        >

          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />

        </Column>

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
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />
          <Card className={styles.Card} title="some task" />

        </Column>
      </div>
    );
  }
}
