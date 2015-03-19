'use strict';

const React = require('react');

require('./bar.scss');

module.exports = React.createClass({
  displayName: 'Bar',

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
        background: this.props.color
      }}>

        <div style={{
          float: 'left',
          minHeight: 1,
          width: '40%'}}>

          {this.buildChildren('left')}

        </div>

        <div style={{
          float: 'left',
          minHeight: 1,
          textAlign: 'center',
          width: '20%'}}>

          {this.buildChildren('center')}

        </div>

        <div style={{
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
