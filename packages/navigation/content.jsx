'use strict';

const React = require('react');

const Bar = require('../bar');
const Icon = require('../icon');
const Link = require('../link');
const Navigation = require('./');

import styles from './content.mcss';

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
    require('./iframe.css');
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
        <Link className={styles.item} onClick={this.toggleLeftTray} align={Bar.align.LEFT}>
          <Icon type="folder-filled" />
        </Link>
      </Bar>,
    ];
  },

  getRightTrayBar() {
    return (
      <Bar sticky>
        <span align={Bar.align.RIGHT} className={styles.item}>James Coleman</span>

        <Link className={styles.item} onClick={this.toggleRightTray} align={Bar.align.RIGHT}>
          <Icon type="user-filled" />
        </Link>
      </Bar>
    );
  },

  getRightTrayContents() {
    return [
      {
        items: [
          <Link className={styles.Link}>Account</Link>,
        ],
      },
      {
        items: [
          <Link className={styles.Link}>People</Link>,
          <Link className={styles.Link}>Teams</Link>,
        ],
      },
      {
        items: [
          <Link className={styles.Link}>Login Settings</Link>,
          <Link className={styles.Link}>Edit Profile</Link>,
          <Link className={styles.Link}>Notification Settings</Link>,
        ],
      },
    ];
  },

  getLeftTrayContents() {
    return [
      {
        items: [
          <Link className={styles.Link}>Dashboard</Link>,
        ],
      },
      {
        title: 'Projects',
        items: [
          <Link className={styles.Link}>Project A</Link>,
          <Link className={styles.Link}>Project B</Link>,
        ],
      },
    ];
  },

  render() {

    return (
      <div className={styles.container}>
        <Navigation
          classes={{
            left: styles.left,
            right: styles.right,
          }}
          onTrayBlur={this.hideTrays}
          scrollOffset={52}
          barItems={[
            <Link className={styles.item} onClick={this.toggleLeftTray} align={Bar.align.LEFT}>
              <Icon type="folder-filled" />
            </Link>,
            <Link className={styles.item} onClick={this.toggleRightTray} align={Bar.align.RIGHT}>
              <Icon type="user-filled" />
            </Link>,
            <svg width="40px" height="40px" viewBox="0 0 64 89" version="1.1" className={styles.logo} align={Bar.align.CENTER}>
              <g stroke="none" fill="none" fillRule="evenodd">
                <path fill="white" d="M19.5,89 C44.0766714,89 64,69.0766714 64,44.5 C64,19.9233286 44.0766714,0 19.5,0 C-5.07667137,0 29.750001,19.9233286 29.750001,44.5 C29.750001,69.0766714 -5.07667137,89 19.5,89 Z" />
                <circle fill="white" cx="11" cy="45" r="11" />
              </g>
            </svg>,
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
