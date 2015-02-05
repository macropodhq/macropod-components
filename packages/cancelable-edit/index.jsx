// Pending a decent name!

var React = require('react/addons');
var AutoSizeTextArea = require('react-textarea-autosize');

var Button = require('../button');
var KeyMixin = require('../key-mixin');

require('./style');

var hotKeys = [
  {
    mask: {key: 'Enter', metaKey: true, altKey: false}, //osx
    cb: 'handleSave',
  },{
    mask: {key: 'Enter', ctrlKey: true, altKey: false}, //windows
    cb: 'handleSave',
  },{
    mask: {key: 'Escape', ctrlKey: false, altKey: false},
    cb: 'handleCancel',
  },
];

var CancelableEdit = React.createClass({
  mixins: [KeyMixin],
  propTypes: {
    warnMessage: React.PropTypes.string,
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
      warnMessage: 'Are you sure you want to discard your changes?',
      displayName: '',
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
      confirm(this.props.warnMessage)
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
          onKeyDown={this.keyHandler(hotKeys)}
          className="CancelableEdit"
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
