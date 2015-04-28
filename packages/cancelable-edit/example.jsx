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
        <h3>Automatic Sizing</h3>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          autoSize
          placeholder="Name"
          label="thingo"
        />
        <pre>
{`<CancelableEdit
  value={this.state.name}
  onSave={this.handleNameSave}
  autoSize
  placeholder="Name"
/>`}
        </pre>

        <h3>Create mode</h3>
        <CancelableEdit
          creating
          saveButtonText="Create"
          placeholder="Yo..."
        />
        <pre>
{`<CancelableEdit
  creating
  saveButtonText="Create"
  placeholder="Yo..."
/>`}
        </pre>

        <h3>Single-Line Mode</h3>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          singleLine
          placeholder="Name"
        />
        <pre>
{`<CancelableEdit
  value={this.state.name}
  onSave={this.handleNameSave}
  singleLine
  placeholder="Name"
/>`}
        </pre>

        <h3>Single-Line Mode with Automatic Sizing</h3>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          autoSize
          singleLine
          placeholder="Name"
        />
        <pre>
{`<CancelableEdit
  value={this.state.name}
  onSave={this.handleNameSave}
  autoSize
  singleLine
  placeholder="Name"
/>`}
        </pre>
      </div>
    );
  }
});
