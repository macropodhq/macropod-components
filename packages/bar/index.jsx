import React from 'react';

import styles from './bar.mcss';

const align = {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT',
};

export default class Bar extends React.Component {
  static align = align;

  static propTypes = {
    classes: React.PropTypes.shape({
      left: React.PropTypes.string,
      center: React.PropTypes.string,
      right: React.PropTypes.string,
    }),
  };

  static defaultProps = {
    classes: {},
  };

  buildChildren(alignment) {
    const children = React.Children.map(this.props.children, (element) => {
      if (element && element.props && element.props.align === alignment) {
        return element;
      }

      return;
    });

    return children;
  }

  render() {
    return (
      <header className={this.props.className || styles.Bar}>
        <div className="left">
          {this.buildChildren(align.LEFT)}
        </div>

        <div className="center">
          {this.buildChildren(align.CENTER)}
        </div>

        <div className="right">
          {this.buildChildren(align.RIGHT)}
        </div>
      </header>
    );
  };
};
