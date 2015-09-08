import React from 'react';
import Card from './index.jsx';
import Avatar from '../avatar';

import styles from './example.mcss';

export default class CardExample extends React.Component {
  render() {
    return (
      <div>

        <h4>Basic:</h4>
        <div className={styles.container}>
          <Card
            title="Bugherd browser extension"
          />
        </div>

        <h4>With `indicator`:</h4>
        <div className={styles.container}>
          <Card
            title="Macropod: A Retrospective Blog"
            indicator="red"
          />
        </div>

        <h4>Custom content:</h4>
        <div className={styles.container}>
          <Card
            title="This is a card title length that no one ever should have period."
            indicator="orange"
          >
            <div className={styles.custom}>
              <div className={styles.users}>
                <Avatar title="A" size="s" />
                <Avatar title="B" size="s" />
                <Avatar title="C" size="s" />
                <Avatar title="D" size="s" />
                <Avatar title="E" size="s" />
                <Avatar title="F" size="s" />
              </div>
            </div>
          </Card>
        </div>

        <h4>Inline custom content:</h4>

        <div className={styles.container}>
          <Card
            title="Mars Attacks"
          >
            <div className={styles.users}>
              <Avatar title="A" size="s" />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
