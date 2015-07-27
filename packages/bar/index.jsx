'use strict';

const React = require('react');
const _ = require('lodash-node');
const cx = React.addons.classSet;

import styles from './bar.mcss';

const align = {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT',
};

const Item = React.createClass({
  displayName: 'BarItem',

  statics: {
    align: align,
  },

  propTypes: {
    align: React.PropTypes.oneOf(Object.keys(align)),
  },

  getDefaultProps() {
    return {
      align: align.LEFT,
    };
  },

  getChildren() {
    const children = React.Children.map(this.props.children, (element) => {
      if (typeof element === 'string') {
        return element;
      }

      return React.addons.cloneWithProps(element, {className: styles['Item-child']});
    });

    return children;
  },

  render() {
    const itemClass = cx({
      [styles.Item]: true,
      [styles['Item--left']]: this.props.align === align.LEFT,
      [styles['Item--right']]: this.props.align === align.RIGHT,
      [styles['Item--string']]: typeof this.props.children === 'string',
      [this.props.className]: this.props.className,
    });

    return (
      <span {...this.props} className={itemClass}>
        {this.getChildren()}
      </span>
    );
  },
});

module.exports = React.createClass({
  displayName: 'Bar',

  statics: {
    Item: Item,
  },

  propTypes: {
    leftWidth(props, propName) {
      if (props[propName]) {
        if (typeof props[propName] !== 'number') {
          return new Error(propName + ' should be a number.');
        }

        if ((props[propName] + props.rightWidth) > 100) {
          return new Error(propName + ' (' + props[propName] + ') + rightWidth (' + props.rightWidth + ') shouldn\'t add to more than 100%.');
        }
      }
    },
    rightWidth: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      leftWidth: 40,
      rightWidth: 40,
    };
  },

  buildChildren(alignment) {
    const children = React.Children.map(this.props.children, (element) => {
      if (element && element.props && element.props.align === alignment) {
        return element;
      }

      return;
    });

    return children;
  },

  getLeftStyle() {
    return {
      width: this.props.leftWidth + '%',
    };
  },

  getCenterStyle() {
    return {
      width: 100 - (this.props.leftWidth + this.props.rightWidth) + '%',
    };
  },

  getRightStyle() {
    return {
      width: this.props.rightWidth + '%',
    };
  },

  render() {
    const barClass = cx({
      [styles.Bar]: true,
      [this.props.className]: this.props.className,
    });

    return (
      <header className={barClass}>
        <div className={styles['Bar-left']} style={this.getLeftStyle()}>
          {this.buildChildren(align.LEFT)}
        </div>

        <div className={styles['Bar-center']} style={this.getCenterStyle()}>
          {this.buildChildren(align.CENTER)}
        </div>

        <div className={styles['Bar-right']} style={this.getRightStyle()}>
          {this.buildChildren(align.RIGHT)}
        </div>
      </header>
    );
  },
});
