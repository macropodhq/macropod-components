/** @jsx React.DOM */

var React = require('react');
var DropdownMenu = require('../dropdown-menu');
var Icon = require('../icon');

require('./card.scss');

var Card = React.createClass({

  getInitialState: function() {
    return {
      showActions: false
    };
  },


  getDefaultProps: function() {
    return {
      actions: null
    };
  },

  toggleActions: function(e) {
    this.setState({showActions: !this.state.showActions});
    e.preventDefault();
  },

  render: function() {
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
  }
});

module.exports = Card;
