'use strict';

const React = require('react');
const _ = require('lodash-node');
const Item = require('./item');
const Group = require('./group');

const align = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const style = {
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
  },

  propTypes: {
    align: React.PropTypes.oneOf(Object.keys(align)),
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

  componentDidMount() {
    this.setState({
      stickyHeight: this.refs.sticky ? this.refs.sticky.getDOMNode().getBoundingClientRect().height : 0,
    });
  },

  buildSticky() {
    const sticky = _.filter(this.props.children, (element) => element.props.sticky);

    if (sticky.length) {
      return (
        <div ref="sticky">
          {sticky}
        </div>
      );
    }
  },

  buildContent() {
    let content =  _.filter(this.props.children, (element) => !element.props.sticky);

    if (content.length) {
      const firstIndex = 0;
      const lastIndex = content.length - 1;
      let i = 0;

      content = _.transform(content, (result, value, key) => {
        let nodeStyle = {};

        if (i === firstIndex) {
          Object.assign(nodeStyle, Group.style.first);
        }

        if (i === lastIndex) {
          Object.assign(nodeStyle, Group.style.last);
        }

        result[key] = this.replaceNodeStyle(value, nodeStyle);

        i++;
      });

      return (
        <div className="Tray-Content" style={this.getContentStyle()}>
          {content}
        </div>
      );
    }
  },

  replaceNodeStyle(node, style = {}) {
    const nodeStyle = node.props && node.props.style || {};
    const style = Object.assign({}, nodeStyle, style);
    return React.addons.cloneWithProps(node, {style: style});
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

  render() {
    return (
      <section className="Tray" style={this.getTrayStyle()}>
        {this.buildSticky()}
        {this.buildContent()}
      </section>
    );
  }
});
