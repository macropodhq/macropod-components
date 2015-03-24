'use strict';

const React = require('react');

require('./tray.scss');

const Group = React.createClass({
  displayName: 'TrayGroup',

  propTypes: {
    title: React.PropTypes.string,
  },

  render() {
    var title = null;

    if (this.props.title) {
      title = (
        <dt style={{
          textTransform: 'uppercase',
          color: 'rgb(199, 201, 209)',
          fontSize: 10,
          letterSpacing: 0.5,
          margin: '0 0 4px 0',
        }}>
          {this.props.title}
        </dt>
      );
    }

    return (
      <dl className="Tray-Group" style={{
        margin: 0,
        padding: '15px 0',
        borderBottom: '1px solid rgba(238, 238, 238, 1)',
      }}>
        {title}
        {this.props.children}
      </dl>
    )
  }
});

const Item = React.createClass({
  displayName: 'TrayItem',

  getDefaultProps() {
    return {
      style: {}
    }
  },

  getStyle() {
    const style = {
      margin: 0,
      padding: '3px 0',
    };

    return Object.assign(style, this.props.style)
  },

  render() {
    return (
      <dd className="Tray-Item" style={this.getStyle()}>
        {this.props.children}
      </dd>
    )
  }
});

const Sticky = React.createClass({
  displayName: 'TraySticky',

  propTypes: {
    onCalculateHeight: React.PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.onCalculateHeight(this.getDOMNode().getBoundingClientRect().height);
  },

  render() {
    return (
      <div className="Tray-Sticky">
        {this.props.children}
      </div>
    )
  }
});

module.exports = React.createClass({
  displayName: 'Tray',

  statics: {
    Group: Group,
    Item: Item,
    Sticky: Sticky,
  },

  propTypes: {
    right: React.PropTypes.bool,
    stickyHeight: React.PropTypes.number,
    fixed: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      fixed: false,
      stickyHeight: 0,
    }
  },

  buildSticky() {
    const children = React.Children.map(this.props.children, (element) => {
      if (element.type.displayName === Sticky.displayName) {
        return element;
      }

      return;
    });

    return children;
  },

  buildContent() {
    const children = React.Children.map(this.props.children, (element) => {
      if (element.type.displayName !== Sticky.displayName) {
        return element;
      }

      return;
    });

    return children;
  },

  render() {
    return (
      <section className="Tray" style={{
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.4)',
        background: 'rgb(251, 251, 254)',
        width: 300,
        maxWidth: '90%',
        position: this.props.fixed ? 'fixed' : 'absolute',
        top: 0,
        bottom: 0,
        left: this.props.right ? 'auto' : 0,
        right: this.props.right ? 0 : 'auto',
      }}>
        {this.buildSticky()}
        <div className="Tray-Content" style={{
          padding: 10,
          height: 'calc(100% - ' + this.props.stickyHeight + 'px)',
          overflow: 'auto'
        }}>
          {this.buildContent()}
        </div>
      </section>
    );
  }
});
