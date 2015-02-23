const React = require('react/addons');
const AutoSizeTextArea = require('react-textarea-autosize');

const Alert = require('../alert');
const Button = require('../button');
const KeyMixin = require('../key-mixin');

require('./style');

const noop = () => {};

const hotKeys = [
  {
    mask: {key: 'Enter', metaKey: true, altKey: false}, //osx
    cb: 'handleSave',
  },
  {
    mask: {key: 'Enter', ctrlKey: true, altKey: false}, //windows
    cb: 'handleSave',
  },
  {
    mask: {key: 'Escape', ctrlKey: false, altKey: false},
    cb: 'handleCancel',
  },
];

module.exports = React.createClass({
  displayName: 'CancelableEdit',

  mixins: [KeyMixin],
  propTypes: {
    value: React.PropTypes.string,
    saveButtonText: React.PropTypes.string,
    cancelButtonText: React.PropTypes.string,
    saveButtonTitle: React.PropTypes.string,
    saveButtonInvalid: React.PropTypes.string,
    cancelButtonTitle: React.PropTypes.string,
    warnMessage: React.PropTypes.string,
    small: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    em: React.PropTypes.bool,
    allowEmpty: React.PropTypes.bool,
    autoSize: React.PropTypes.bool,
    creating: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    displayName(props, propName) {
      if (propName in props) {
        // displayName is deprecated
        return new Error(
          'CancelableEdit\'s `displayName` property is deprecated.' +
          ' Please use the saveButtonText property instead.'
        );
      }
    },
  },

  getInitialState() {
    return {
      editing: false,
      pendingValue: '',
      showAlert: false,
    };
  },

  getDefaultProps() {
    return {
      value: '',
      saveButtonText: 'Save',
      saveButtonTitle: 'Save',
      saveButtonTitleInvalid: 'Save',
      cancelButtonText: 'Cancel',
      cancelButtonTitle: 'Cancel',
      warnMessage: 'Are you sure you want to discard your changes?',
      small: false,
      inline: false,
      em: false,
      allowEmpty: false,
      autoSize: false,
      creating: false,
      onSave: noop,
      onCancel: noop,
    };
  },

  handleChange(e) {
    this.setState({
      pendingValue: e.target.value,
    });
  },

  handleConfirmCancel() {
    this.setState({showAlert: false}, () => this.refs.input.getDOMNode().focus());
  },

  handleConfirmOk() {
    this.setState({
      editing: false,
      showAlert: false,
    }, () => this.props.onCancel());
  },

  handleCancel() {
    if (this.unsaved()) {
      this.refs.input.getDOMNode().blur();
      this.setState({showAlert: true});
    } else {
      this.setState({editing: false});
    }
  },

  handleSave() {
    if (this.validInput()) {
      const saveValue = this.state.pendingValue;

      this.props.onSave(saveValue);
      this.setState({
        editing: false,
        pendingValue: '',
      });
    }
  },

  unsaved() {
    return this.state.editing && (this.props.value !== this.state.pendingValue);
  },

  validInput() {
    return this.props.allowEmpty ||
      (typeof this.state.pendingValue === 'string' &&
      (this.state.pendingValue !== ''));
  },

  focus() {
    if (this.isMounted()) {
      this.setState({
        editing: true,
        pendingValue: this.props.value,
      }, () => this.refs.input.getDOMNode().focus());
    }
  },

  handleBlur() {
    if ((this.state.pendingValue.length < 1) || !this.unsaved()) {
      this.setState({
        editing: false
      });
    }
  },

  handleClick() {
    this.focus();
  },

  renderContent() {
    const editClassName = React.addons.classSet({
      'CancelableEdit-edit': true,
      'is-editing': this.state.editing,
      'CancelableEdit-edit--em': this.props.em,
    });

    if (this.props.creating && !this.state.editing) {
      return (
        <Button skeleton style={{fontSize: 15, color: '#6aa0c3', pointer: 'cursor'}} onClick={this.handleClick}>{this.props.placeholder}</Button>
      );
    } else {
      const value = this.state.editing ? this.state.pendingValue : this.props.value;
      const Textarea = this.props.autoSize ? AutoSizeTextArea : 'textarea';

      return (
        [<label style={{'display': 'none'}}>{this.props.name}</label>,
        <Textarea
          ref="input"
          rows={this.props.inline ? 1 : 0}
          onKeyDown={this.keyHandler(hotKeys)}
          className={editClassName}
          value={value}
          onClick={this.handleClick}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          name={this.props.name}
          readOnly={!this.state.editing}
          placeholder={this.props.placeholder}
        />]
      );
    }
  },

  render() {
    const className = React.addons.classSet({
      [this.props.className]: !!this.props.className,
      'CancelableEdit': true,
      'CancelableEdit--inline': this.props.inline,
    });

    return (
      <div className={className}>
        { this.renderContent() }
        { this.state.editing &&
          <div className="CancelableEdit-control">
            <Button
                disabled={!this.validInput()}
                title={this.validInput() ? this.props.saveButtonTitle : this.props.saveButtonTitleInvalid}
                small={this.props.small}
                success
                onClick={this.handleSave}
              >
              {this.props.saveButtonText ||
                'Save ' + (this.props.displayName || '')}
            </Button>
            <Button
                title={this.props.cancelButtonTitle}
                small={this.props.small}
                skeleton
                onClick={this.handleCancel}
              >
              {this.props.cancelButtonText}
            </Button>
            { this.state.showAlert &&
              <Alert
                  danger
                  cancelable
                  onOk={this.handleConfirmOk}
                  onCancel={this.handleConfirmCancel}
                  okText="Discard"
                  title="Discard Changes"
                >
                {this.props.warnMessage}
              </Alert>
            }
          </div>
        }
      </div>
    );
  }
});
