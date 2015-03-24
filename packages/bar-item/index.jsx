'use strict';

const React = require('react');

module.exports = React.createClass({
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