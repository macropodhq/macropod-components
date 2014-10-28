/** @jsx React.DOM */

// (╯°□°）╯︵ ┻━┻

var React = require('react/addons');

var DataTable = require('react-data-components').DataTable;

require('./table.scss');

var Table = React.createClass({
  propTypes: {
    columns: React.PropTypes.array.isRequired,
    initialData: React.PropTypes.array.isRequired,
    initialPageLength: React.PropTypes.number,
    pageLengthOptions: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      pageLengthOptions: [ 5, 10, 15 ]
    };
  },

  render: function() {
    return this.transferPropsTo(<DataTable
      className="Table"
      initialPageLength={this.props.initialPageLength || this.props.initialData.length}
      pageLengthOptions={this.props.pageLengthOptions}
    />);
  }
});

module.exports = Table;
