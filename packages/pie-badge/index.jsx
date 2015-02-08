'use strict';

var React = require('react/addons');

require('./pie-badge.scss');

module.exports = React.createClass({
  displayName: 'PieBadge',

  getDefaultProps() {
    return {
      backgroundColor: '#ffffff',
      complete: 0,
      total: 1
    }
  },

  render() {
    var size = 32;
    var startAngle = -90;
    var endAngle = (360 * this.props.complete / this.props.total) + startAngle;

    var x1 = size/2 + (size/2 - 3.5) * Math.cos(Math.PI * startAngle / 180),
        y1 = size/2 + (size/2 - 3.5) * Math.sin(Math.PI * startAngle / 180),
        x2 = size/2 + (size/2 - 3.5) * Math.cos(Math.PI *  endAngle  / 180),
        y2 = size/2 + (size/2 - 3.5) * Math.sin(Math.PI *  endAngle  / 180);

    var pathDefinition = 'M' + (size/2).toString() + ',' + (size/2).toString() + ' L' + x1.toString() + ',' + y1.toString() + '  A' + (size/2 - 3.5).toString() + ',' + (size/2 - 3.5).toString() + ' 0 ' + ((endAngle-startAngle > 180) ? '1' : '0') + ',1 ' + x2.toString() + ',' + y2.toString() + ' z';

    var complete = this.props.total > 0 && this.props.complete >= this.props.total;

    var pieBadgeClasses = React.addons.classSet({
      'PieBadge': true,
      'PieBadge--complete': complete
    });

    return (
      <svg className={pieBadgeClasses} version="1.1" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14.5" stroke={this.props.backgroundColor} />
        <path className="PieBadge-pie" d={pathDefinition} />
        {complete && <path className="PieBadge-check" d="M13.188 19.341l-3.984-3.926c-.43-.43-.869-.43-1.318 0-.449.43-.439.859.029 1.289l4.477 4.443c.495.553 1.07.63 1.525.108l9.409-9.415c.43-.43.42-.869-.029-1.318-.449-.449-.889-.459-1.318-.029l-8.791 8.847z"/>}
      </svg>
    );
  }
});
