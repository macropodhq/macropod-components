/** @jsx React.DOM */

var React = require('react');

require('./actions-bar.scss');

module.exports = React.createClass({
  displayName: 'ActionsBar',
  
  render: function() {
    return (
      <nav className="ActionsBar-Navigation">
      {
        this.props.links.map(function(link) {
          return (
            <a href="#" className="ActionsBar-Navigation-link">{link.displayName}</a>
          );
        })
      }
      </nav>
    )
  }
});

var ActionsBar = React.createClass({
  navigation: function() {
    var navigation = this.props.links.map(function(link) {
      return (
        <a href="#">link.displayName</a>
      );
    });

    return navigation;
  },

  render: function() {
    return (
      <section className="ActionsBar">
        <h1 className="ActionsBar-title">{this.props.title}</h1>
        <Navigation links={this.props.links()}/>
        <div className="ActionsBar-actions">
          {this.props.children}
        </div>
      </section>
    );
  }
});
