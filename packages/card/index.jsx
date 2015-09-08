import React from 'react';

import styles from './card.mcss';

export default class Card extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    indicator: React.PropTypes.string,
  }

  static defaultProps = {
    title: '',
  }

  getIndicator() {
    if (this.props.indicator) {
      return (
        <span className={styles.indicator} style={{background: this.props.indicator}} />
      );
    }

    return null;
  }

  render() {
    return (
      <div className={this.props.className || styles.Card}>
        { this.getIndicator() }
        <h2 className={styles.title}>{this.props.title}</h2>
        { this.props.children }
      </div>
    );
  }
}
