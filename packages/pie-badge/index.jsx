'use strict';

const React = require('react/addons');
const SuitClassSet = require('../suit-class-set');

require('./pie-badge.scss');

module.exports = React.createClass({
  displayName: 'PieBadge',

  getDefaultProps() {
    return {
      backgroundColor: '#ffffff',
      complete: 0,
      total: 1,
    };
  },

  render() {
    const size = 32;
    const startAngle = -90;
    const endAngle = (360 * this.props.complete / this.props.total) + startAngle;

    const x1 = size / 2 + (size / 2 - 3.5) * Math.cos(Math.PI * startAngle / 180);
    const y1 = size / 2 + (size / 2 - 3.5) * Math.sin(Math.PI * startAngle / 180);
    const x2 = size / 2 + (size / 2 - 3.5) * Math.cos(Math.PI * endAngle / 180);
    const y2 = size / 2 + (size / 2 - 3.5) * Math.sin(Math.PI * endAngle / 180);

    const pathDefinition = `M${(size / 2).toString()},${(size / 2).toString()} L${x1.toString()},${y1.toString()}  A${(size / 2 - 3.5).toString()},${(size / 2 - 3.5).toString()} 0 ${((endAngle - startAngle > 180) ? '1' : '0')},1 ${x2.toString()},${y2.toString()} z`;

    const complete = this.props.total > 0 && this.props.complete >= this.props.total;

    const pieBadgeClasses = new SuitClassSet('PieBadge');

    pieBadgeClasses.addState({
      complete,
    });

    return (
      <svg className={pieBadgeClasses.toString()} version="1.1" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14.5" stroke={this.props.backgroundColor} />
        {this.props.total > 0 && this.props.total >= this.props.complete && <path className="PieBadge-pie" d={pathDefinition} />}
        {complete && <path className="PieBadge-check" d="M13.188 19.341l-3.984-3.926c-.43-.43-.869-.43-1.318 0-.449.43-.439.859.029 1.289l4.477 4.443c.495.553 1.07.63 1.525.108l9.409-9.415c.43-.43.42-.869-.029-1.318-.449-.449-.889-.459-1.318-.029l-8.791 8.847z"/>}
      </svg>
    );
  },
});
