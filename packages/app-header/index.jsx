/** @jsx React.DOM */

var React = require('react');

require('./app-header.scss');

module.exports = React.createClass({
  displayName: 'AppHeader',

  propTypes: {
    navLeft: React.PropTypes.node,
    navRight: React.PropTypes.node,
    title: React.PropTypes.node,
  },

  render: function() {
    return (
      <header className="AppHeader">
        <section className="AppHeader-primary">
          <h2 className="AppHeader-primary-title">{this.props.title}</h2>
          {this.props.navLeft &&
            <nav className="AppHeader-primary-nav AppHeader-primary-nav--left">
              {this.props.navLeft}
            </nav>
          }
          {this.props.navRight &&
            <nav className="AppHeader-primary-nav AppHeader-primary-nav--right">
              {this.props.navRight}
            </nav>
          }
        </section>
      </header>
    );
  }
});
