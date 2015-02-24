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
  />`}
        </pre>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          autoSize
          placeholder="Name"
        />

        <br/>

      <pre>
{`
  <CancelableEdit
    creating
    saveButtonText="Create"
    placeholder="Yo..."
  />
`}
      </pre>
      <CancelableEdit
        creating
        saveButtonText="Create"
        placeholder="Yo..."
      />
      </div>
    );
  }
});
