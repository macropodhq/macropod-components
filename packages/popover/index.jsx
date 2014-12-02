/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash');
var Layer = require('react-components/js/layered-component-mixin');
require('./popover.scss');

var PopoverContent = React.createClass({
  getInitialState: function() {
    return {
      showDropdown: false,
      style: {}
    };
  },

  getDefaultProps: function() {
    return {
      offset: 10,
      align: 'left'
    };
  },

  componentDidMount: function() {
    this.getBoundingRects();
    this.getClientDimensions();
    this.setDropdownStyle();
  },

  getBoundingRects: function() {
    this.anchorRect = this.props.anchor.getDOMNode().getBoundingClientRect();
    this.dropdownRect = this.refs.Popover.getDOMNode().getBoundingClientRect();
  },

  getClientDimensions: function() {
    this.clientHeight = document.documentElement.clientHeight;
    this.clientWidth = document.documentElement.clientWidth;
  },

  setDropdownStyle: function() {
    var bodyTop = document.documentElement.scrollTop || document.body.scrollTop;
    var dropdownTop = bodyTop + this.anchorRect.top + this.anchorRect.height;
    var dropdownHeight = this.getHeight();
    var dropdownBottom = dropdownTop + dropdownHeight;
    var dropdownOffscreenBottom = (dropdownBottom - (bodyTop + window.innerHeight));

    if (dropdownOffscreenBottom > 0) {
      dropdownHeight = dropdownHeight - (dropdownOffscreenBottom + 10);
    }

    var nextStyleState = {
      left: this.getLeft(),
      top: dropdownTop,
      position: 'absolute',
      zIndex: 10000,
      height: dropdownHeight,
      width: this.getWidth()
    };

    if (!_.isEqual(nextStyleState, this.state.style)) {
      this.setState({
        style: nextStyleState
      });
    }
  },

  getLeft: function() {
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

  getWidth: function() {
    if (this.dropdownRect.width > this.clientWidth) {
      return this.clientWidth - (this.props.offset * 2);
    } else {
      return this.dropdownRect.width;
    }
  },

  getHeight: function() {
    if (this.dropdownRect.bottom > document.documentElement.clientHeight) {
      return (this.clientHeight - (this.anchorRect.top + this.anchorRect.height)) - this.props.offset;
    } else {
      return this.dropdownRect.height;
    }
  },

  render: function() {
    this.overlayStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1000
    };

    return  (
      <div style={this.overlayStyle} onClick={this.props.close}>
        <div className={this.props.className + ' Popover'} ref="Popover" style={this.state.style}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = PopoverContent;

var Popover = React.createClass({
  mixins: [Layer],

  propTypes: {
    anchor: React.PropTypes.shape({
      getDOMNode: React.PropTypes.func.isRequired
    })
  },

  renderLayer: function() {
    if (this.props.visible) {
      return <PopoverContent className={this.props.className} anchor={this.props.anchor} children={this.props.children} close={this.props.close} align={this.props.align} />;
    } else {
      return null;
    }
  },

  render: function() {
    return null;
  }
});

module.exports = Popover;