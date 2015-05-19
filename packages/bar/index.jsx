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
  },

  [align.CENTER]: {
    float: 'left',
    minHeight: 1,
    textAlign: 'center',
  },

  [align.RIGHT]: {
    float: 'right',
    minHeight: 1,
    textAlign: 'right',
  },

  header: {
    background: 'rgb(39, 61, 64)',
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
      borderLeft: this.props.align === align.RIGHT ? '1px solid rgba(0,0,0,.15)' : 0,
      borderRight: this.props.align === align.LEFT ? '1px solid rgba(0,0,0,.15)' : 0
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
      <span className="BarItem" {...this.props} style={this.getStyle()}>
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

  propTypes: {
    leftWidth(props, propName) {
      if (props[propName]) {
        if (typeof props[propName] !== 'number') {
          return new Error(propName + ' should be a number.');
        }

        if ((props[propName] + props['rightWidth']) > 100) {
          return new Error(propName + ' ('+ props[propName] +') + rightWidth ('+ props['rightWidth'] +') shouldn\'t add to more than 100%.');
        }
      }
    },
    rightWidth: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      style: {},
      leftWidth: 40,
      rightWidth: 40,
    }
  },

  buildChildren(align) {
    const children = React.Children.map(this.props.children, (element) => {
      if (element && element.props && element.props.align === align) {
        return element;
      }

      return;
    });

    return children;
  },

  getStyle() {
    return Object.assign({}, style.header, this.props.fixed ? style.fixed : {}, this.props.style);
  },

  getLeftStyle() {
    return Object.assign({}, style[align.LEFT], {width: this.props.leftWidth + '%'});
  },

  getCenterStyle() {
    return Object.assign({}, style[align.CENTER], {width: 100 - (this.props.leftWidth + this.props.rightWidth) + '%'});
  },

  getRightStyle() {
    return Object.assign({}, style[align.RIGHT], {width: this.props.rightWidth + '%'});
  },

  render() {
    return (
      <header className="Bar" style={this.getStyle()}>
        <div className="Bar-left" style={this.getLeftStyle()}>
          {this.buildChildren(align.LEFT)}
        </div>

        <div className="Bar-center" style={this.getCenterStyle()}>
          {this.buildChildren(align.CENTER)}
        </div>

        <div className="Bar-right" style={this.getRightStyle()}>
          {this.buildChildren(align.RIGHT)}
        </div>
      </header>
    );
  }
});
