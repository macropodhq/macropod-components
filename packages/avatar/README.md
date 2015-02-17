# Avatar

## Usage

```
<Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" firstName="Nathan" lastName="Hutchison" size={Avatar.sizes.l} />
```

## Properties

### `size`

The size of the avatar to display; either `'s'`, `'m'` or `'l'`.

### `firstName`

The first name of the user whose avatar this is.

### `lastName`

The last name of the user whose avatar this is.

### `src`

The URL of this user's avatar.

### `email`

This user's email address. Will be used to determing the Gravatar URL if no `src` attribute is supplied.

### `circle`

Boolean property; if set, the avatar will be rendered in a circle.
