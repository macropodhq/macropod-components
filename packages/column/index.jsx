import React from 'react';
import {Scrollbars} from 'react-scrollbars';

import styles from './column.mcss';

const Children = Scrollbars(React.createClass({
  render() {
    return (
      <div className={styles.scrollable}>
        {this.props.children}
      </div>
    )
  }
}));

export default class Column extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string,
    action: React.PropTypes.component,
    footer: React.PropTypes.component,
  }

  getSubTitle() {
    if (this.props.subTitle) {
      return <span className={styles.subTitle}>{ this.props.subTitle }</span>;
    }

    return null;
  }

  getAction() {
    if (this.props.action) {
      return <span className={styles.action}>{ this.props.action }</span>;
    }

    return null;
  }

  getFooter() {
    if (this.props.footer) {
      return <footer className={styles.footer}>{ this.props.footer }</footer>
    }

    return null;
  }

  render() {
    // TODO: CHECK TITLE LENGTH?
    return (
      <div className={this.props.className || styles.Column}>
        <header className={styles.header}>
          { this.props.title }
          { this.getSubTitle() }
          { this.getAction() }
        </header>

        <div className={styles.body}>
          <Children>
            {this.props.children}
          </Children>
        </div>

        { this.getFooter() }
      </div>
    );
  }
}
