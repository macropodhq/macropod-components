/** @jsx React.DOM */

var React = require('react');
require('./loading.scss');

var Loading = module.exports = React.createClass({
  render: function() {
    this.mainColor = this.props.mainColor || '#FFF';
    this.secondaryColor = this.props.secondaryColor || '#CCC';

    return (
      <div className={'Loading Loading--' + this.props.size}>
        <svg version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 600 600'>
        <g>
          <path className='top' fill-rule='evenodd' clip-rule='evenodd' fill={this.mainColor} d='M561.5,119H181.1c-5.2,0-10.4-0.6-19.4,6.1L48,209.5
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C577.8,124.5,566.7,119,561.5,119z'/>

          <path className='middle' fill-rule='evenodd' clip-rule='evenodd' fill={this.mainColor} d='M554.4,246.9H174c-5.2,0-10.4-0.6-19.4,6.1L40.9,337.4
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C570.7,252.4,559.6,246.9,554.4,246.9'/>
          <path className='bottom' fill-rule='evenodd' clip-rule='evenodd' fill={this.mainColor} d='M547.3,373.4H166.9c-5.2,0-10.4-0.6-19.4,6.1L33.8,463.9
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C563.6,378.9,552.5,373.4,547.3,373.4'/>

          <linearGradient className='middle' id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='5.937691e-07' y1='-7.006747e-09' x2='1' y2='-7.006747e-09' gradientTransform='matrix(4.615277e-09 -102.7979 -102.7979 -4.615277e-09 359.8887 349.6666)'>
            <stop  offset='0' style={{'stop-color': this.mainColor}}/>
            <stop  offset='1' style={{'stop-color': this.secondaryColor}}/>
          </linearGradient>
          <path className='middle' fill='url(#SVGID_1_)' d='M171.5,246.9c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3
            c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H174C173.2,246.9,172.4,246.9,171.5,246.9'/>

          <linearGradient className='bottom' id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='5.937691e-07' y1='1.411918e-07' x2='1' y2='1.411918e-07' gradientTransform='matrix(4.615278e-09 -102.798 -102.798 -4.615278e-09 352.8105 476.22)'>
            <stop  offset='0' style={{'stop-color': this.mainColor}}/>
            <stop  offset='1' style={{'stop-color': this.secondaryColor}}/>
          </linearGradient>
          <path className='bottom' fill='url(#SVGID_2_)' d='M164.4,373.4c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3
            c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H166.9C166.1,373.4,165.3,373.4,164.4,373.4'/>
        </g>
        </svg>
      </div>
    );
  }
});
