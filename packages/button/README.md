# Button

A wrapper around `React.DOM.button`, with a few common traits

## Usage

```
<Button success>Ok</Button>
<Button cancel>Cancel</Button>
<Button small>GO!</Button>
<Button danger>WARNING!</Button>
```

## Properties

### `small`

Slightly smaller button.

### `skeleton`

A button with no borders or background.

### `cancel`

A button used for cancelling edits and alert dialogs.

### `success`

A button used for confirmation.

### `danger`

A button used for potentially destructive actions (such as delete).

### More

Other properties are passed to the `button` element, information on supported attributes can be found [in the React docs](http://facebook.github.io/react/docs/tags-and-attributes.html#supported-attributes)
