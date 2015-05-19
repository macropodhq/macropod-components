'use strict';

// (╯°□°）╯︵ ┻━┻

const React = require('react/addons');

const DataTable = require('react-data-components').DataTable;

require('./table.scss');

module.exports = React.createClass({
  displayName: 'Table',

  propTypes: {
    columns: React.PropTypes.array.isRequired,
    initialData: React.PropTypes.array.isRequired,
    initialPageLength: React.PropTypes.number,
    pageLengthOptions: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      pageLengthOptions: [5, 10, 15],
    };
  },

  render() {
    return (<DataTable
      {...this.props}
      className="Table"
      initialPageLength={this.props.initialPageLength || this.props.initialData.length}
      pageLengthOptions={this.props.pageLengthOptions}
    />);
  },
});
