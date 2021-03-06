const React = require('react/addons');
const InputTextarea = require('../form/input-textarea');
const cx = require('classnames');

const Alert = require('../alert');
const Button = require('../button');
const IconButton = require('../icon-button');
const Link = require('../link');
const KeyMixin = require('../key-mixin');
const MarkdownSnippet = require('../markdown-snippet');

import styles from './markdown-edit.mcss';

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
  displayName: 'MarkdownEdit',

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
    defaultStyles: React.PropTypes.bool,
    linkTarget: React.PropTypes.oneOf([
      '_self',
      '_blank',
      '_parent',
      '_top',
    ]),
    small: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    allowEmpty: React.PropTypes.bool,
    maxLength: React.PropTypes.number,
    creating: React.PropTypes.bool,
    rows: React.PropTypes.number,
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
  },

  getInitialState() {
    return {
      editing: false,
      previewing: false,
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
      editButtonText: 'Edit',
      editButtonTitle: 'Edit',
      previewButtonText: 'Preview',
      previewButtonTitle: 'Preview',
      warnMessage: 'Are you sure you want to discard your changes?',
      placeholder: '',
      defaultStyles: true,
      small: false,
      inline: false,
      allowEmpty: false,
      creating: false,
      rows: 3,
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
    }, () => {
      if (typeof this.refs.input !== 'undefined') {
        this.refs.input.focusInput();
      }
    });
  },

  handleConfirmOk() {
    this.setState({
      editing: false,
      previewing: false,
      showAlert: false,
    }, () => this.props.onCancel());
  },

  handleCancel(evt) {
    evt.preventDefault();
    if (this.unsaved()) {
      this.setState({
        showAlert: true,
      });
    } else {
      this.setState({
        editing: false,
        previewing: false,
      }, () => this.props.onCancel());
    }
  },

  handleSave(evt) {
    evt.preventDefault();
    if (this.validInput()) {
      const saveValue = this.state.pendingValue;

      this.props.onSave(saveValue);
      this.setState({
        editing: false,
        previewing: false,
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

  handleClick(evt) {
    evt.preventDefault();
    if (this.isMounted()) {
      if (!this.state.editing) {
        this.setState({
          editing: true,
          previewing: false,
          pendingValue: this.props.value,
        }, () => {
          if (typeof this.refs.input !== 'undefined') {
            this.refs.input.focusInput();
          }
        });
      } else {
        if (typeof this.refs.input !== 'undefined') {
          this.refs.input.focusInput();
        }
      }
    }
  },

  handlePreview(evt) {
    evt.preventDefault();
    this.setState({
      previewing: !this.state.previewing,
    });
  },

  handleBlur() {
    setTimeout(() => {
      if (
        !this.state.showAlert &&
        !isChildOf(document.activeElement, this.getDOMNode()) &&
        ((this.state.pendingValue.length < 1) || !this.unsaved())
      ) {
        this.setState({
          editing: false,
        }, () => this.props.onCancel());
      }
    }, 0);
  },

  renderContent() {
    if (this.props.creating && !this.state.editing) {
      return (
        <Link tabIndex="0" href="#" fill={this.props.fill} onClick={this.handleClick}>
          {this.props.createText || this.props.placeholder}
        </Link>
      );
    } else if (this.state.previewing || !this.state.editing) {
      const value = this.state.editing
        ? this.state.pendingValue
        : (typeof this.props.value === 'string' && this.props.value.length > 0
            ? this.props.value
            : this.props.placeholder);

      return [
        <label key="label" style={{'display': 'none'}}>{this.props.name}</label>,
        <MarkdownSnippet
          className={styles.MarkdownSnippet}
          key="markdown"
          markdown={value}
          linkTarget={this.props.linkTarget}
          defaultStyles={this.props.defaultStyles}
        />,
      ];
    } else {
      const value = this.state.editing ? this.state.pendingValue : this.props.value;

      return [
        <label key="label" style={{'display': 'none'}}>{this.props.name}</label>,
        <InputTextarea
          ref="input"
          key="input"
          maxLength={this.props.maxLength}
          rows={this.props.rows}
          onKeyDown={this.keyHandler(hotKeys)}
          value={value}
          onChange={this.handleChange}
          name={this.props.name}
          readOnly={!this.state.editing}
          placeholder={this.props.placeholder}
          onBlur={this.handleBlur}
          autoSize
        />,
      ];
    }
  },

  render() {
    const markdownEditClass = cx({
      [styles.MarkdownEdit]: !this.props.className,
      'active': this.state.editing,
      'inline': this.props.inline,
      'placeholder': !this.state.editing && (typeof this.props.value !== 'string' || this.props.value.length < 1),
      [this.props.className]: this.props.className,
    });

    return (
      <div className={markdownEditClass} onBlur={this.handleBlur}>
        { !this.props.creating && !this.state.editing &&
          <IconButton
            style={{'float': 'right'}}
            type="pencil"
            title={this.props.editButtonTitle}
            onClick={this.handleClick}
          />
        }
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
            <Button
              title={this.props.previewButtonTitle}
              small={this.props.small}
              skeleton
              onClick={this.handlePreview}
            >
              {this.props.previewButtonText}
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
