'use strict';

const React = require('react');

const Bar = require('../bar');
const Tray = require('../tray');
const CovertHeader = require('../covert-header');

import styles from './navigation.mcss';

module.exports = React.createClass({
  displayName: 'Navigation',

  propTypes: {
    onTrayBlur: React.PropTypes.func,
    barItems: React.PropTypes.array.isRequired,
    showLeftTray: React.PropTypes.bool,
    showRightTray: React.PropTypes.bool,
    rightTrayContent: React.PropTypes.array,
    leftTrayContent: React.PropTypes.array,
    scrollOffset: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      onTrayBlur: function() {},
      barItems: [],
      showLeftTray: false,
      showRightTray: false,
      rightTrayContent: [],
      leftTrayContent: [],
      scrollOffset: 0,
      className: '',
    };
  },

  trayItems(group) {
    return group.items.map((item) => {
      return (
        <Tray.Item>
          {item}
        </Tray.Item>
      );
    });
  },

  rightTrayContent() {
    if (this.props.rightTrayContent.length) {
      const groups = this.props.rightTrayContent.map((group) => {
        return (
          <Tray.Group title={group.title}>
            {this.trayItems(group)}
          </Tray.Group>
        );
      });

      return [].concat(groups).concat(this.props.rightTrayBar);
    } else {
      return this.props.rightTrayBar;
    }
  },

  leftTrayContent() {
    if (this.props.leftTrayContent.length) {
      const groups = this.props.leftTrayContent.map((group) => {
        return (
          <Tray.Group title={group.title}>
            {this.trayItems(group)}
          </Tray.Group>
        );
      });

      return [].concat(groups).concat(this.props.leftTrayBar);
    } else {
      return this.props.leftTrayBar;
    }
  },

  render() {
    return (
      <div>
        <CovertHeader offset={this.props.scrollOffset} forceShow={this.props.showLeftTray || this.props.showRightTray}>
          <Bar className={this.props.className}>
            {this.props.barItems}
          </Bar>
        </CovertHeader>

        { (this.props.showLeftTray || this.props.showRightTray) &&
            <div className={styles.clickOverlay} onClick={this.props.onTrayBlur}/>
        }

        { this.props.showLeftTray &&
            <Tray fixed onClick={this.props.onTrayBlur}>
              {this.leftTrayContent()}
            </Tray>
        }

        { this.props.showRightTray &&
            <Tray fixed align={Tray.align.RIGHT} onClick={this.props.onTrayBlur}>
              {this.rightTrayContent()}
            </Tray>
        }
      </div>
    );
  },
});
