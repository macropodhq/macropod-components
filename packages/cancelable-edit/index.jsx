const React = require('react/addons');
const cx = require('classnames');

const InputText = require('../form/input-text');
const InputTextarea = require('../form/input-textarea');

const Alert = require('../alert');
const Button = require('../button');
const Link = require('../link');
const KeyMixin = require('../key-mixin');

import styles from './cancelable-edit.mcss';

const noop = () => {};

const isChildOf = function(child, parent) {
  if (child === null) {
    return false;
  } else if (child === parent) {
    return true;
  } else {
    return isChildOf(child.parentNode, parent);
  }
};

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
    maxLength: React.PropTypes.number,
    autoSize: React.PropTypes.bool,
    creating: React.PropTypes.bool,
    rows: React.PropTypes.number,
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    showLabel: React.PropTypes.bool,
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
      rows: 3,
      onSave: noop,
      onCancel: noop,
      showLabel: false,
    };
  },

  handleChange(e) {
    this.setState({
      pendingValue: this.props.singleLine ? e.target.value.replace(/\r?\n/g, ' ') : e.target.value,
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

  handleFocus() {
    if (this.isMounted()) {
      if (!this.state.editing) {
        this.setState({
          editing: true,
          pendingValue: this.props.value,
        }, () => this.refs.input.focusInput());
      } else {
        this.refs.input.focusInput();
      }
    }
  },

  handleClick(evt) {
    evt.preventDefault();
    this.handleFocus();
  },

  handleBlur() {
    setTimeout(() => {
      if (!isChildOf(document.activeElement, this.getDOMNode()) && ((this.state.pendingValue.length < 1) || !this.unsaved())) {
        this.setState({
          editing: false,
        }, () => this.props.onCancel());
      }
    }, 0);
  },

  getHotKeys() {
    const hk = hotKeys.slice();

    if (this.props.singleLine) {
      hk.push({
        mask: {key: 'Enter', metaKey: false, altKey: false},
        cb: 'handleSaveSingleLine',
      });
    }

    return hk;
  },

  renderContent() {
    const inputClass = cx({
      [styles.Input]: true,
      [styles.inactiveInput]: !this.state.editing,
    });

    if (this.props.creating && !this.state.editing) {
      return (
        <Link ref="link" tabIndex="0" href="#" fill={this.props.fill} onClick={this.handleClick}>
          {this.props.createText || this.props.placeholder}
        </Link>
      );
    } else {
      const InputField = this.props.autoSize ? InputTextarea : (this.props.singleLine ? InputText : InputTextarea);
      const value = this.state.editing ? this.state.pendingValue : this.props.value;

      return (
        <InputField
          ref="input"
          key="input"
          className={inputClass}
          maxLength={this.props.maxLength}
          rows={((this.props.em || this.props.singleLine) ? 1 : this.props.rows)}
          spellCheck={false}
          onKeyDown={this.keyHandler(this.getHotKeys())}
          value={value}
          onFocus={this.handleFocus}
          autoSize={this.props.autoSize}
          onClick={this.handleClick}
          onChange={this.handleChange}
          name={this.props.name}
          readOnly={!this.state.editing}
          placeholder={this.props.placeholder}
          showLabel={this.props.showLabel} />
      );
    }
  },

  render() {
    const cancelableEditClass = cx({
      [styles.CancelableEdit]: !this.props.className,
      [this.props.className]: this.props.className,
    });

    return (
      <div className={cancelableEditClass} onBlur={this.handleBlur}>
        { this.renderContent() }
        { this.state.editing &&
          <div>
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
  },
});
