/** @jsx React.DOM */

var React = require('react');

require('./app-header.scss');

var AppHeader = React.createClass({
  /*
   TODO:
    move this to packages
    support some kind of menu array and header section system?
    lol I think I don't know css.. not sure whats missing?
   */

  render: function() {
    return (
      <header className="AppHeader">
        <section className="AppHeader-brand">
          <h2 className="AppHeader-brand-title">{this.props.title}</h2>

          <nav className="AppHeader-brand-navigation">
            {this.props.children}
          </nav>
        </section>
      </header>
    );
  }
});

module.exports = AppHeader;
