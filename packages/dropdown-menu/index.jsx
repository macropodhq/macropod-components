/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('lodash');
var Layer = require('react-components/js/layered-component-mixin');
var Popover = require('../popover');
require('./dropdown-menu.scss');

var DropdownMenu = React.createClass({
 render: function() {

    var dropdownMenuClass = {
      'DropdownMenu': true,
      'DropdownMenu--withFooter': !!this.props.footer
    };

    dropdownMenuClass[this.props.className] = true;

    return this.transferPropsTo(
      <Popover className={React.addons.classSet(dropdownMenuClass)}>
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

module.exports = DropdownMenu;