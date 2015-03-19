'use strict';

const React = require('react');
const _ = require('lodash-node');

const align = {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT',
};

const style = {
  [align.LEFT]: {
    float: 'left',
    minHeight: 1,
    width: '40%',
  },

  [align.CENTER]: {
    float: 'left',
    minHeight: 1,
    textAlign: 'center',
    width: '20%',
  },

  [align.RIGHT]: {
    float: 'right',
    minHeight: 1,
    textAlign: 'right',
    width: '40%',
  },

  header: {
    background: 'rgb(51, 161, 228)',
    overflow: 'hidden',
  },

  itemChild: {
    padding: 15,
    display: 'inline-block',
  },
}

const Item = React.createClass({
  displayName: 'BarItem',

  statics: {
    align: align
  },

  propTypes: {
    align: React.PropTypes.oneOf(Object.keys(align)),
  },

  getDefaultProps() {
    return {
      style: {},
      align: align.LEFT,
    }
  },

  getStyle() {
    const style = {
      padding: typeof this.props.children === 'string' ? 15 : 0,
      display: 'inline-block',
      color: 'rgba(255,255,255,0.5)',
      borderLeft: this.props.align === align.RIGHT ? '1px solid rgba(255, 255, 255, 0.2)' : 0,
      borderRight: this.props.align === align.LEFT ? '1px solid rgba(255, 255, 255, 0.2)' : 0
    };

    return Object.assign(style, this.props.style);
  },

  getChildSyle(element) {
    const childStyle = element.props && _.isObject(element.props.style) ?
      Object.assign({}, style.itemChild, element.props.style) :
      style.itemChild;

    return childStyle;
  },

  getChildren() {
    const children = React.Children.map(this.props.children, (element) => {
      if (typeof element === 'string') {
        return element;
      }

      return React.addons.cloneWithProps(element, {style: this.getChildSyle(element)});
    });

    return children;
  },

  render() {
    return (
      <span className="BarItem" style={this.getStyle()}>
        {this.getChildren()}
      </span>
    );
  }
});

module.exports = React.createClass({
  displayName: 'Bar',

  statics: {
    Item: Item,
  },

  getDefaultProps() {
    return {
      style: {},
    }
  },

  buildChildren(align) {
    const children = React.Children.map(this.props.children, (element) => {
      if (element.props && element.props.align === align) {
        return element;
      }

      return;
    });

    return children;
  },

  getStyle() {
    return Object.assign(style.header, this.props.style);
  },

  render() {
    return (
      <header className="Bar" style={this.getStyle()}>
        <div className="Bar-left" style={style[align.LEFT]}>
          {this.buildChildren(align.LEFT)}
        </div>

        <div className="Bar-center" style={style[align.CENTER]}>
          {this.buildChildren(align.CENTER)}
        </div>

        <div className="Bar-right" style={style[align.RIGHT]}>
          {this.buildChildren(align.RIGHT)}
        </div>
      </header>
    );
  }
});
