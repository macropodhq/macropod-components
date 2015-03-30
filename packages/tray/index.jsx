'use strict';

const React = require('react');
const _ = require('lodash-node');
const Item = require('./item');
const Group = require('./group');
const Sticky = require('./sticky');

require('./tray.scss');

const align = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const style = {
  title: {
    textTransform: 'uppercase',
    color: 'rgb(199, 201, 209)',
    fontSize: 10,
    letterSpacing: 0.5,
    margin: '0 0 4px 0',
  },

  tray: {
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.4)',
    background: 'rgb(251, 251, 254)',
    width: 300,
    maxWidth: '90%',
    top: 0,
    bottom: 0,
  },

  content: {
    padding: 10,
    overflow: 'auto',
  },
};

module.exports = React.createClass({
  displayName: 'Tray',

  statics: {
    align: align,
    Group: Group,
    Item: Item,
    Sticky: Sticky,
  },

  propTypes: {
    align: React.PropTypes.oneOf(Object.keys(align)),
    stickyHeight: React.PropTypes.number,
    fixed: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      align: align.LEFT,
      fixed: false,
      style: {},
    };
  },

  getInitialState() {
    return {
      stickyHeight: 0,
    };
  },

  buildSticky() {
    const sticky = _.filter(this.props.children, (element) => {
      if (element.props.sticky) {
        return element;
      }

      return false;
    });

    if (sticky.length) {
      return (
        <Sticky className="Tray-Sticky" onCalculateHeight={this.handleStickyHeight}>
          {sticky}
        </Sticky>
      );
    }
  },

  buildContent() {
    const content =  _.filter(this.props.children, (element) => {
      if (!element.props.sticky) {
        return element;
      }

      return false;
    });

    if (content.length) {
      return (
        <div className="Tray-Content" style={this.getContentStyle()}>
          {content}
        </div>
      );
    }
  },

  getTrayStyle() {
    return Object.assign({}, style.tray, {
      position: this.props.fixed ? 'fixed' : 'absolute',
      left: this.props.align === align.RIGHT ? 'auto' : 0,
      right: this.props.align === align.RIGHT ? 0 : 'auto',
    }, this.props.style);
  },

  getContentStyle() {
    return Object.assign({}, style.content, {
      height: 'calc(100% - ' + this.state.stickyHeight + 'px)',
    });
  },

  handleStickyHeight(height) {
    this.setState({
      stickyHeight: height,
    });
  },

  render() {
    return (
      <section className="Tray" style={this.getTrayStyle()}>
        {this.buildSticky()}
        {this.buildContent()}
      </section>
    );
  }
});
