'use strict';
const React = require('react/addons');
const Popover = require('../popover');
require('./dropdown-menu.scss');

module.exports = React.createClass({
  displayName: 'DropdownMenu',

  propTypes: {
    footer: React.PropTypes.node,
    align: React.PropTypes.oneOf(['left', 'right'])
  },

  render() {

    const dropdownMenuClass = React.addons.classSet({
      'DropdownMenu': true,
      'DropdownMenu--withFooter': !!this.props.footer,
      'DroddownMenu--alignRight': this.props.align === 'right',
      [this.props.className]: true,
    });

    return (
      <Popover {...this.props} className={dropdownMenuClass} align={this.props.align}>
        <div className="DropdownMenu-internal">
          {this.props.children}

          { this.props.footer &&
            <div className={'DropdownMenu-footer'}>
              {this.props.footer}
            </div>
          }
        </div>
      </Popover>
    );
  }
});
