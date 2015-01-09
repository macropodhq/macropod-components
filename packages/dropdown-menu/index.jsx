/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash');
var Layer = require('react-components/js/layered-component-mixin');
var Popover = require('../popover');
require('./dropdown-menu.scss');

module.exports = React.createClass({
  displayName: 'DropdownMenu',

  propTypes: {
    footer: React.PropTypes.renderable,
    align: React.PropTypes.oneOf(['left', 'right'])
  },

  render: function() {

    var dropdownMenuClass = {
      'DropdownMenu': true,
      'DropdownMenu--withFooter': !!this.props.footer,
      'DroddownMenu--alignRight': this.props.align === 'right'
    };

    dropdownMenuClass[this.props.className] = true;

    return this.transferPropsTo(
      <Popover className={React.addons.classSet(dropdownMenuClass)} align={this.props.align}>
        <div className="DropdownMenu-internal">
          {this.props.children}

          { this.props.footer &&
            <div className={'DropdownMenu-footer'}>
              {this.props.footer}
            </div>
          }
        </div>
      </Popover>
    )
  }
});
