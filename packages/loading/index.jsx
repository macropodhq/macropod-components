/** @jsx React.DOM */

var React = require('react/addons');
require('./loading.scss');

var Loading = module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      type: "stack"
    }
  },

  render: function() {
    var classes = React.addons.classSet({
      'Loading': true,
      'Loading--small': this.props.size === 'small'
    });

    return ( 
      <div className={classes}>
      {(this.props.type === "stack") &&
        <svg version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 600 600'>
        <g>
          <path className='Loading-top Loading-main' clip-rule='evenodd' d='M561.5,119H181.1c-5.2,0-10.4-0.6-19.4,6.1L48,209.5
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C577.8,124.5,566.7,119,561.5,119z'/>

          <path className='Loading-middle Loading-main' clip-rule='evenodd' d='M554.4,246.9H174c-5.2,0-10.4-0.6-19.4,6.1L40.9,337.4
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C570.7,252.4,559.6,246.9,554.4,246.9'/>

          <path className='Loading-bottom Loading-main' clip-rule='evenodd' d='M547.3,373.4H166.9c-5.2,0-10.4-0.6-19.4,6.1L33.8,463.9
            c-9,6.8-2.6,12.3,2.6,12.3h385.1c5.2,0,15.1-1.4,24.1-8.2l109-82.3C563.6,378.9,552.5,373.4,547.3,373.4'/>

          <path className='Loading-middle Loading-secondary' d='M171.5,246.9c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3
            c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H174C173.2,246.9,172.4,246.9,171.5,246.9'/>

          <path className='Loading-bottom Loading-secondary' d='M164.4,373.4c-4.5,0-9.3,0.5-16.9,6.2l274,96.6c5.2,0,15.1-1.4,24.1-8.2l109-82.3
            c2.4-1.8,3.4-3.6,3.4-5.1c0-4.2-6.9-7.1-10.7-7.1H166.9C166.1,373.4,165.3,373.4,164.4,373.4'/>
        </g>
        </svg>
      }
      {(this.props.type === "circle") &&
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50">
          <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path>
        </svg>
      }
      </div>
    );
  }
});
