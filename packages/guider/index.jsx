'use strict';

var React = require('react/addons');

var Modal = require('../modal');
var Steps = require('../steps');
var Button = require('../button');

require('./guider.scss');

var noop = () => {};

module.exports = React.createClass({
  displayName: 'Guider',

  propType: {
    onClose: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    steps: React.PropTypes.number.isRequired,
    current: React.PropTypes.number.isRequired,
  },

  getDefaultProps() {
    return {
      onClose: noop,
      onNext: noop,
    };
  },

  handleClose() {
    this.props.onClose();
    return false;
  },

  handleNext() {
    this.props.onNext();
    return false;
  },

  render() {
    return (
      <div>
        <Modal dialogClassName="Guider" onClose={this.handleClose}>
          <div className="Guider-header">
            <a href="#" onClick={this.handleClose}>×</a>
            <h3>{this.props.title}</h3>
          </div>
          <div className="Guider-body">
            <p>{this.props.content}</p>
            <div className="Guider-actions">
              <Steps count={this.props.steps} current={this.props.current} />
              <Button onClick={this.handleNext}>next</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
});
