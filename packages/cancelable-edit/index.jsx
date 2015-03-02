const React = require('react/addons');
const AutoSizeTextArea = require('react-textarea-autosize');
var _ = require('lodash-node');

const Alert = require('../alert');
const Button = require('../button');
const Link = require('../link');
const KeyMixin = require('../key-mixin');
const SuitClassSet = require('../suit-class-set');

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
    placeholder: React.PropTypes.string,
    createText: React.PropTypes.string,
    small: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    em: React.PropTypes.bool,
    allowEmpty: React.PropTypes.bool,
    autoSize: React.PropTypes.bool,
    creating: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
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
    this.setState({
      showAlert: false,
    }, () => this.refs.input.getDOMNode().focus());
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
      this.setState({
        showAlert: true,
      });
    } else {
      this.setState({
        editing: false,
      }, () => this.props.onCancel());

    }
  },

  handleSaveSingleLine() {
    if (this.props.singleLine) {
      this.handleSave();
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
    return this.state.editing &&
      (this.props.value !== this.state.pendingValue);
  },

  validInput() {
    return this.props.allowEmpty ||
      (typeof this.state.pendingValue === 'string' &&
      (this.state.pendingValue !== ''));
  },

  focus() {
    if (this.isMounted()) {
      if (!this.state.editing) {
        this.setState({
          editing: true,
          pendingValue: this.props.value,
        }, () => this.refs.input.getDOMNode().focus());
      } else {
        this.refs.input.getDOMNode().focus();
      }
    }
  },

  handleBlur() {
    if ((this.state.pendingValue.length < 1) || !this.unsaved()) {
      this.setState({
        editing: false,
      }, () => this.props.onCancel());
    }
  },

  handleClick() {
    this.focus();
  },

  getHotKeys() {
    return this.props.singleLine ? _.extend({}, hotKeys, {
        mask: {key: 'Enter', metaKey: false, altKey: false},
        cb: 'handleSaveSingleLine',
      }) :
      hotKeys;
  },

  renderContent(parentClassName) {
    const editClassName = parentClassName.createDescendent('edit');

    editClassName.addModifier({
      'em': this.props.em,
    });

    editClassName.addState({
      'editing': this.state.editing,
    });

    if (this.props.creating && !this.state.editing) {
      return (
        <Link fill={this.props.fill} onClick={this.handleClick}>
          {this.props.createText || this.props.placeholder}
        </Link>
      );
    } else {
      const value = this.state.editing ? this.state.pendingValue : this.props.value;
      const Control = this.props.singleLine ?
        'input' :
        (this.props.autoSize ? AutoSizeTextArea : 'textarea');

      return (
        [<label key="label" style={{'display': 'none'}}>{this.props.name}</label>,
        <Control
          ref="input"
          key="input"
          rows={((this.props.em || this.singleLine) ? 1 : 3)}
          onKeyDown={this.keyHandler(this.getHotKeys())}
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
    const className = new SuitClassSet('CancelableEdit');

    className.addModifier({
      'inline': this.props.inline,
    });

    return (
      <div className={className.toString() + (this.props.className ? ` ${this.props.className}` : '')}>
        { this.renderContent(className) }
        { this.state.editing &&
          <div className="CancelableEdit-control">
            <Button
                disabled={!this.validInput()}
                title={this.validInput() ? this.props.saveButtonTitle : this.props.saveButtonTitleInvalid}
                small={this.props.small}
                success
                onClick={this.handleSave}
              >
              {this.props.saveButtonText}
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
