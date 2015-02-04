var React = require('react');

var CancelableEdit = require('./');


module.exports = React.createClass({
  displayName: 'EditiableFieldExample',

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
   placeholder="Name"
   allowEmpty={false}
  />`}
        </pre>
        <CancelableEdit
          value={this.state.name}
          onSave={this.handleNameSave}
          displayName="Name"
          placeholder="Name"
          allowEmpty
        />
      </div>
    );
  }
});
