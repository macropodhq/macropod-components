import React from 'react';

import styles from './card.mcss';

export default class Card extends React.Component {
  static propTypes = {
    title: React.PropTypes.any,
    indicatorColor: React.PropTypes.string,
  }

  static defaultProps = {
    title: '',
  }

  renderIndicator() {
    if (this.props.indicatorColor) {
      return (
        <span
          className={styles.indicator}
          style={{
            background: this.props.indicatorColor,
          }}
        />
      );
    }

    return null;
  }

  render() {
    const {
      title,
      className,
      style,
      children,
    } = this.props;

    return (
      <div
        className={className || styles.Card}
        style={style}
      >
        { this.renderIndicator() }
        { title &&
            <h2 className={styles.title}>{title}</h2>
        }
        { children }
      </div>
    );
  }
}
