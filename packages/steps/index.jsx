'use strict';

const React = require('react');
const SuitClassSet = require('../suit-class-set');

require('./steps.scss');

module.exports = React.createClass({
  displayName: 'Steps',

  render() {
    const children = [];

    for (let i = 0; i < this.props.count; i++) {
      const classes = new SuitClassSet('Steps-step');

      classes.addState({
        'active': i === this.props.current - 1,
      });

      children.push(<span key={i} className={classes.toString()}>{i + 1}</span>);
    }

    return (
      <div className="Steps">{children}</div>
    );
  },
});
