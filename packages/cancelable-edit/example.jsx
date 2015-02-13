const React = require('react');

const CancelableEdit = require('./');


module.exports = React.createClass({
  displayName: 'CancelableEditExample',

  getInitialState() {
    return {
      name: 'John smith',
    };
  },

  handleNameSave(name) {
    this.setState({
      name: name,
    });
  },

  render() {
    return (
      <div>
        <pre> {/*lol es6 literals are too literal */}
{`<CancelableEdit
    value={this.state.name}
    onSave={this.handleNameSave}
    autoSize
    placeholder="Name"
    displayName="Name"
  />`}
        </pre>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          autoSize
          displayName="Name"
          placeholder="Name"
        />
      </div>
    );
  }
});
