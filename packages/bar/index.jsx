'use strict';

const React = require('react');

require('./bar.scss');

const Item = React.createClass({
  displayName: 'BarItem',

  getDefaultProps() {
    return {
      style: {}
    }
  },

  getStyle() {
    const style = {
      padding: typeof this.props.children === 'string' ? 15 : 0,
      display: 'inline-block',
      color: 'rgba(255,255,255,0.5)',
      borderLeft: this.props.right ? '1px solid rgba(255, 255, 255, 0.2)' : 0,
      borderRight: this.props.left ? '1px solid rgba(255, 255, 255, 0.2)' : 0
    };

    return Object.assign(style, this.props.style)
  },

  render() {
    return (
      <span className="BarItem" style={this.getStyle()}>
        {
          React.Children.map(this.props.children, (element) => {
            if (typeof element === 'string') {
              return element;
            }

            var style = {};

            if (element.props && element.props.style) {
              style = element.props.style;
            }

            style = Object.assign(style, {
              padding: 15,
              display: 'inline-block',
            });

            return React.addons.cloneWithProps(element, {style: style});
          })
        }
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
      style: {}
    }
  },

  buildChildren(align) {
    const children = React.Children.map(this.props.children, (element) => {
      if (element.props && element.props[align]) {
        return element;
      }

      return;
    });

    return children;
  },

  getStyle() {
    const style = {
      background: 'rgb(51, 161, 228)'
    };

    return Object.assign(style, this.props.style)
  },

  render() {
    return (
      <header className="Bar" style={this.getStyle()}>

        <div className="Bar-left" style={{
          float: 'left',
          minHeight: 1,
          width: '40%'}}>

          {this.buildChildren('left')}

        </div>

        <div className="Bar-center" style={{
          float: 'left',
          minHeight: 1,
          textAlign: 'center',
          width: '20%'}}>

          {this.buildChildren('center')}

        </div>

        <div className="Bar-right" style={{
          float: 'right',
          minHeight: 1,
          textAlign: 'right',
          width: '40%'}}>

          {this.buildChildren('right')}

        </div>

      </header>
    );
  }
});
