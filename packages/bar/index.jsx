'use strict';

const React = require('react');

require('./bar.scss');

const Item = React.createClass({
  displayName: 'BarItem',

  render() {
    const style = {
      padding: typeof this.props.children === 'string' ? 15 : 0,
      display: 'inline-block',
      color: 'rgba(255,255,255,0.5)',
      borderLeft: this.props.right ? '1px solid rgba(255, 255, 255, 0.2)' : 0,
      borderRight: this.props.left ? '1px solid rgba(255, 255, 255, 0.2)' : 0
    };

    return (
      <span className="BarItem" style={Object.assign(style, this.props.style || {})}>
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
      color: 'rgb(51, 161, 228)'
    };
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

  render() {
    return (
      <header className="Bar" style={{
        background: this.props.color,
      }}>

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
