'use strict';

const React = require('react');

const Bar = require('../bar');
const Icon = require('../icon');
const Link = require('../link');
const Navigation = require('./');

const style = {
  link: {
    color: 'inherit',
    fontSize: 14,
  },

  icon: {
    fontSize: 16,
  },

  div: {
    paddingTop: 52,
  },

  logo: {
    padding: '10px 0 0 0',
    opacity: 0.5,
  },
};

module.exports = React.createClass({
  displayName: 'NavigationExample',

  statics: {
    wide: true,
  },

  getInitialState() {
    return {
      leftTray: false,
      rightTray: false,
    };
  },

  componentDidMount() {
    require('./iframe.pcss');
  },

  hideTrays() {
    this.setState({
      leftTray: false,
      rightTray: false,
    });
  },

  toggleLeftTray() {
    this.setState({
      leftTray: !this.state.leftTray,
    });
  },

  toggleRightTray() {
    this.setState({
      rightTray: !this.state.rightTray,
    });
  },

  getLeftTrayBar() {
    return [
      <Bar sticky>
        <Bar.Item>
          <Link style={style.link} onClick={this.toggleLeftTray}>
            <Icon style={style.icon} type="folder-filled" />
          </Link>
        </Bar.Item>
      </Bar>,
    ];
  },

  getRightTrayBar() {
    return (
      <Bar sticky leftWidth={70} rightWidth={30}>
        <Bar.Item style={{border: 0}}>James Coleman</Bar.Item>

        <Bar.Item align={Bar.Item.align.RIGHT}>
          <Link style={style.link} onClick={this.toggleRightTray}>
            <Icon style={style.icon} type="user-filled" />
          </Link>
        </Bar.Item>
      </Bar>
    );
  },

  getRightTrayContents() {
    return [
      {
        items: [
          <Link style={style.link}>Account</Link>,
        ],
      },
      {
        items: [
          <Link style={style.link}>People</Link>,
          <Link style={style.link}>Teams</Link>,
        ],
      },
      {
        items: [
          <Link style={style.link}>Login Settings</Link>,
          <Link style={style.link}>Edit Profile</Link>,
          <Link style={style.link}>Notification Settings</Link>,
        ],
      },
    ];
  },

  getLeftTrayContents() {
    return [
      {
        items: [
          <Link style={style.link}>Dashboard</Link>,
        ],
      },
      {
        title: 'Projects',
        items: [
          <Link style={style.link}>Project A</Link>,
          <Link style={style.link}>Project B</Link>,
        ],
      },
    ];
  },

  render() {

    return (
      <div style={style.div}>
        <Navigation
          onTrayBlur={this.hideTrays}
          scrollOffset={52}
          barItems={[
            <Bar.Item align={Bar.Item.align.LEFT}>
              <Link style={style.link} onClick={this.toggleLeftTray}>
                <Icon style={style.icon} type="folder-filled" />
              </Link>
            </Bar.Item>,
            <Bar.Item align={Bar.Item.align.RIGHT}>
              <Link style={style.link} onClick={this.toggleRightTray}>
            <Icon style={style.icon} type="user-filled" />
              </Link>
            </Bar.Item>,
            <Bar.Item align={Bar.Item.align.CENTER}>
              <svg width="40px" height="40px" viewBox="0 0 64 89" version="1.1" style={style.logo}>
                  <g stroke="none" fill="none" fillRule="evenodd">
                    <path fill="white" d="M19.5,89 C44.0766714,89 64,69.0766714 64,44.5 C64,19.9233286 44.0766714,0 19.5,0 C-5.07667137,0 29.750001,19.9233286 29.750001,44.5 C29.750001,69.0766714 -5.07667137,89 19.5,89 Z" />
                    <circle fill="white" cx="11" cy="45" r="11" />
                  </g>
              </svg>
            </Bar.Item>,
          ]}
          leftTrayBar={this.getLeftTrayBar()}
          rightTrayBar={this.getRightTrayBar()}
          rightTrayContent={this.getRightTrayContents()}
          leftTrayContent={this.getLeftTrayContents()}
          showLeftTray={this.state.leftTray}
          showRightTray={this.state.rightTray}
        />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestiae veritatis a assumenda quis, ipsam dolore temporibus dignissimos ex reiciendis molestias commodi incidunt doloribus sint, nobis fugit nesciunt sit quasi.</p>
      </div>
    );
  },
});
