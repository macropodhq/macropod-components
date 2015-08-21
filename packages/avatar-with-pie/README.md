# Avatar with Pie

A user `Avatar` which has an attached `PieBadge` component.

## Usage

```
<AvatarWithPie
  complete={4}
  total={9}
  backgroundColor="#21323a"
  src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50&d=404"
  title="Nathan Hutchison"
  size={Avatar.sizes.l}
/>
```

## Properties

### `complete`

The number of items completed. Should be less than or equal to `total`.

### `total`

The total number of items to complete. Must be greater than or equal to `complete`.

### `backgroundColor`

A CSS colour to display around the pie badge. This lets it fake transparency.

### `size`

The size of the avatar to display; either `'s'` (20px), `'m'` (35px) or `'l'` (50px).

### `src`

The URL of this user's avatar.

_**Note**: If you are using Gravatars, you should use the appropriate size for the display (see `size` above for the appropriate sizes), multiplied by `window.devicePixelRatio` for high-resolution display support. You should also specify for the method for missing avatars for be 404 (`d=404`)._

### `circle`

Boolean property; if set, the avatar will be rendered in a circle.

### `title`

The full name of the user. Overrides the value of the `firstName` property if supplied.

### `firstName` (deprecated)

The first name of the user whose avatar this is.

### `lastName` (deprecated)

The last name of the user whose avatar this is.

### `email` (deprecated)

This user's email address. Will be used to determing the Gravatar URL if no `src` attribute is supplied.
