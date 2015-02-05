// Pending a decent name!

var React = require('react/addons');
var AutoSizeTextArea = require('react-textarea-autosize');

var Button = require('../button');

require('./style');

var CancelableEdit = React.createClass({
  propTypes: {
    displayName: React.PropTypes.string,
    small: React.PropTypes.bool,
    allowEmpty: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
  },
  getInitialState() {
    return {
      editing: false,
      pendingValue: '',
    };
  },

  getDefaultProps() {
    return {
      small: false,
      allowEmpty: false,
      onSave: () => {},
    };
  },

  handleChange(e) {
    this.setState({
      pendingValue: e.target.value,
    });
  },

  handleCancel(e) {
    if (this.props.value === this.state.pendingValue ||
      confirm('Are you sure you want to discard your changes?')
    ) {
      this.setState({editing: false});
    }
  },

  handleSave() {
    if (this.props.allowEmpty || (this.state.pendingValue !== '')) {
      this.setState({
        editing: false
      },
        () => this.props.onSave(this.state.pendingValue)
      );
    }
  },

  unsaved() {
    return this.state.editing && (this.props.value !== this.state.pendingValue);
  },

  handleClick(e) {
    if (!this.state.editing) {
      this.setState({
        editing: true,
        pendingValue: this.props.value,
      });
    }
  },

  render() {
    var value = this.state.editing ? this.state.pendingValue : this.props.value;

    var Textarea = this.props.autosize ? AutoSizeTextArea : 'textarea';
    return (
      <div>
        <label style={{'display': 'none'}}>{this.props.name}</label>
        <Textarea
          className={'CancelableEdit'}
          value={value}
          onClick={this.handleClick}
          onChange={this.handleChange}
          name={this.props.name}
          readOnly={!this.state.editing}
          placeholder={this.props.placeholder}
        />
        { this.state.editing &&
          <div className="CancelableEdit-control">
            <Button small={this.props.small} skeleton onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button small={this.props.small} success onClick={this.handleSave}>
              Save {this.props.displayName}
            </Button>
          </div>
        }
      </div>
    );
  }
});

module.exports = CancelableEdit;
