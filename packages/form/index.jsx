'use strict';

const React = require('react');

import styles from './index.mcss';

module.exports = React.createClass({
  displayName: 'Form',

  render() {
    return (
      <form {...this.props} className={styles.Form}>
        {this.props.children}
      </form>
    );
  },
});
