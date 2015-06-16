'use strict';

const React = require('react');
const DropdownMenu = require('../dropdown-menu');
const Icon = require('../icon');

require('./card.pcss');

module.exports = React.createClass({
  displayName: 'Card',

  propTypes: {
    actions: React.PropTypes.arrayOf(React.PropTypes.node),
    title: React.PropTypes.node,
    headerContent: React.PropTypes.node,
    children: React.PropTypes.node,
  },

  getInitialState() {
    return {
      showActions: false,
    };
  },

  getDefaultProps() {
    return {
      actions: null,
    };
  },

  toggleActions(e) {
    this.setState({showActions: !this.state.showActions});
    e.preventDefault();
  },

  render() {
    return (
      <div className="Card">
        <div className="Card-header">
          <h4 className="Card-title">{this.props.title}</h4>
          {this.props.actions &&
            <span>
              <Icon ref="actionLink" className="Card-action" type="settings" font={false} onClick={this.toggleActions} />
              <DropdownMenu anchor={this.refs.actionLink} visible={this.state.showActions} className="Card-action-dropdown">
                {this.props.actions}
              </DropdownMenu>
            </span>
          }
          {this.props.headerContent &&
            <div className="Card-header-content">
              {this.props.headerContent}
            </div>
          }
        </div>
        <div className="Card-content">
          {this.props.children}
        </div>
      </div>
    );
  },
});
