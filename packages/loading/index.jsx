const React = require('react/addons');
const cx = require('classnames');

import styles from './loading.mcss';

export default class Loading extends React.Component {
  static propTypes = {
    size: React.PropTypes.oneOf(['small', 'medium']),
    type: function(props, propName) {
      if (props[propName]) {
        return new Error(`The \`${propName}\` property is no longer supported by the \`Loading\` component. The standard spinner will be shown.`);
      }
    },
  };

  render() {
    const loadingClass = cx({
      [styles.Loading]: !this.props.size,
      [styles.LoadingSmall]: this.props.size === 'small',
      [styles.LoadingMedium]: this.props.size === 'medium',
    });

    // TODO: This could probably just return an `svg` element. Investigate possible caveats?

    return (
      <div className={loadingClass} {...this.props}>
        <svg version="1.1" viewBox="0 0 40 40">
          <path fill="#606060" d="M33.4,20.1c1,0,1.7-0.8,1.6-1.8c-0.9-7.4-7.2-13.2-14.8-13.2c-7.6,0-14,5.7-14.8,13.2c-0.1,1,0.7,1.8,1.6,1.8h0c0.8,0,1.5-0.6,1.6-1.5c0.7-5.8,5.6-10.2,11.6-10.2c6,0,10.9,4.5,11.6,10.2C31.9,19.5,32.6,20.1,33.4,20.1L33.4,20.1z"></path>
        </svg>
      </div>
    );
  };
};
