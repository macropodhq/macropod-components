/** @jsx React.DOM */

var React = require('react/addons');

require('./steps.scss');

module.exports = React.createClass({
  displayName: 'Steps',

  render: function() {
    var children = [];

    for (var i = 0; i < this.props.count; i++) {
      var classes = React.addons.classSet({
        "Steps-step": true,
        "is-active": i === this.props.current - 1,
      });

      children.push(<span key={i} className={classes}>{i + 1}</span>);
    }

    return (
      <div className="Steps">{children}</div>
    );
  },
});
