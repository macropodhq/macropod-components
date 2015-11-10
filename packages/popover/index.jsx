'use strict';
const React = require('react/addons');
const _ = require('lodash');
const Layer = require('../layered-mixin');

require('./popover.scss');

const PopoverContent = React.createClass({
  getInitialState() {
    return {
      showDropdown: false,
      style: {},
    };
  },

  getDefaultProps() {
    return {
      offset: 10,
      align: 'left',
    };
  },

  componentDidMount() {
    this.getBoundingRects();
    this.getClientDimensions();
    this.setDropdownStyle();
  },

  getBoundingRects() {
    this.anchorRect = this.props.anchor.getDOMNode().getBoundingClientRect();
    this.dropdownRect = this.refs.Popover.getDOMNode().getBoundingClientRect();
  },

  getClientDimensions() {
    this.clientHeight = document.documentElement.clientHeight;
    this.clientWidth = document.documentElement.clientWidth;
  },

  setDropdownStyle() {
    const bodyTop = document.documentElement.scrollTop || document.body.scrollTop;
    const dropdownTop = bodyTop + this.anchorRect.top + this.anchorRect.height;
    let dropdownHeight = this.getHeight();
    const dropdownBottom = dropdownTop + dropdownHeight;
    const dropdownOffscreenBottom = (dropdownBottom - (bodyTop + window.innerHeight));

    if (dropdownOffscreenBottom > 0) {
      dropdownHeight = dropdownHeight - (dropdownOffscreenBottom + 10);
    }

    const nextStyleState = {
      left: this.getLeft(),
      top: dropdownTop,
      position: 'absolute',
      zIndex: 10000,
      height: dropdownHeight,
      width: this.getWidth(),
    };

    if (!_.isEqual(nextStyleState, this.state.style)) {
      this.setState({
        style: nextStyleState,
      });
    }
  },

  getLeft() {
    if (this.dropdownRect.width > this.clientWidth) {
      return this.props.offset;
    }

    if ((this.anchorRect.left + this.dropdownRect.right) > this.clientWidth) {
      return this.clientWidth - (this.dropdownRect.width + this.props.offset);
    }

    if (this.props.align === 'right') {
      return this.anchorRect.right - this.dropdownRect.width;
    }

    return this.anchorRect.left;
  },

  getWidth() {
    if (this.dropdownRect.width > this.clientWidth) {
      return this.clientWidth - (this.props.offset * 2);
    } else {
      return this.dropdownRect.width;
    }
  },

  getHeight() {
    if (this.dropdownRect.bottom > document.documentElement.clientHeight) {
      return (this.clientHeight - (this.anchorRect.top + this.anchorRect.height)) - this.props.offset;
    } else {
      return this.dropdownRect.height;
    }
  },

  render() {
    this.overlayStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1000,
    };

    return (
      <div style={this.overlayStyle} onClick={this.props.close}>
        <div className={`${this.props.className} Popover`} ref="Popover" style={this.state.style}>
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports = React.createClass({
  displayName: 'Popover',

  mixins: [Layer],

  propTypes: {
    anchor: React.PropTypes.shape({
      getDOMNode: React.PropTypes.func.isRequired,
    }),
  },

  renderLayer() {
    if (this.props.visible) {
      return <PopoverContent className={this.props.className} anchor={this.props.anchor} children={this.props.children} close={this.props.close} align={this.props.align} />;
    } else {
      return null;
    }
  },

  render() {
    return null;
  },
});
