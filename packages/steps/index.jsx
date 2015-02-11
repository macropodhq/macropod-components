'use strict';

const React = require('react/addons');

require('./steps.scss');

module.exports = React.createClass({
  displayName: 'Steps',

  render() {
    let children = [];

    for (let i = 0; i < this.props.count; i++) {
      let classes = React.addons.classSet({
        'Steps-step': true,
        'is-active': i === this.props.current - 1,
      });

      children.push(<span key={i} className={classes}>{i + 1}</span>);
    }

    return (
      <div className="Steps">{children}</div>
    );
  },
});
