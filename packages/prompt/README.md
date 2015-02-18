# Prompt

React-native replacement for JavaScript `prompt()`

## Usage

```
{this.state.showPrompt &&
  <Prompt
    onCancel={function() {/* Respond to "Cancel" */}}
    onOk={function() {/* Respond to "OK" */}}
    title="Sea shell census"
    cancelable={false}
    cancelText="Cancel"
    okText="OK"
    content="How many sea shells did you sell?"
    defaultValue="127"
    validateInput={function(value) {/* Return true if value is valid */}}
  />
}
```

## Properties

### `onCancel`

Function to call when the user cancels the prompt.

### `onOk`

Function to call when the user clicks "OK" in the prompt.

### `title`

Title to display in the prompt.

### `cancelable`

Whether the prompt shows the "Cancel" and close buttons, and responds to pressing Escape.

### `cancelText`

Text to display on the "Cancel" button. Defaults to "Cancel".

### `okText`

Text to display on the "OK" button. Defaults to "OK".

### `content`

Optional content to display above the prompt textbox.

### `defaultValue`

The default value for the prompt to show in the textbox.

### `validateInput`

Function which will be passed the entered value to determine if it can be accepted.
