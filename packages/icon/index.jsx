import React from 'react/addons';
import _ from 'lodash';
import keyMirror from 'react/lib/keyMirror';

import styles from './icon.mcss';

const iconTypes = require.context('./svgs', true, /\.svg$/).keys().map(name => name.replace(/.\/icon-/i, '').replace(/.svg$/i, '')).sort();

const iconConstants = keyMirror(_.invert(iconTypes));

export default class Icon extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(iconTypes).isRequired,
  };

  static defaultProps = {
    type: iconConstants['arrow-down'],
    component: React.createFactory('i'),
  };

  statics = {
    iconTypes: iconConstants,
  };

  render() {
    return this.props.component({
      className: styles.Icon,
      ...this.props,
      dangerouslySetInnerHTML: {
        __html: require(`!raw!./svgs/icon-${this.props.type}.svg`),
      },
    });
  };
};
