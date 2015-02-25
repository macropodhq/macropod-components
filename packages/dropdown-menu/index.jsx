'use strict';
const React = require('react/addons');
const Popover = require('../popover');
const SuitClassSet = require('../suit-class-set');
require('./dropdown-menu.scss');

module.exports = React.createClass({
  displayName: 'DropdownMenu',

  propTypes: {
    footer: React.PropTypes.node,
    align: React.PropTypes.oneOf(['left', 'right'])
  },

  render() {
    const dropdownMenuClass = new SuitClassSet('DropdownMenu');

    dropdownMenuClass.addModifier({
      'withFooter': !!this.props.footer,
      'alignRight': this.props.align === 'right',
    });

    return (
      <Popover {...this.props} className={dropdownMenuClass.toString() + (this.props.className ? ` ${this.props.className}` : '')} align={this.props.align}>
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
