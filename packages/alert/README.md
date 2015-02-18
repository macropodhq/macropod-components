# Alert

React-native replacement for JavaScript `alert()`

## Usage

```
{this.state.showAlert &&
  <Alert
    onCancel={function() {/* Respond to "Cancel" */}}
    onOk={function() {/* Respond to "OK" */}}
    title="This is the title of the Alert."
    cancelable={true}
    cancelText="Cancel"
    okText="OK"
    okDisabled={false}
    >
    This is the content of the Alert.
  </Alert>
}
```

## Properties

### `onCancel`

Function to call when the user cancels the alert.

### `onOk`

Function to call when the user clicks "OK" in the alert.

### `title`

Title to display in the alert.

### `cancelable`

Whether the alert shows the "Cancel" and close buttons, and responds to pressing Escape.

### `cancelText`

Text to display on the "Cancel" button. Defaults to "Cancel".

### `okText`

Text to display on the "OK" button. Defaults to "OK".

### `okDisabled`

Whether the "OK" button should show up disabled.
