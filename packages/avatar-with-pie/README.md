# Avatar with Pie

A user `Avatar` which has an attached `PieBadge` component.

## Usage

```
<AvatarWithPie
  complete={4}
  total={9}
  backgroundColor="#21323a"
  src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50"
  firstName="Nathan"
  lastName="Hutchison"
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

### `title`

The full name of the user. Overrides the value of the `firstName` property if supplied.

### `model` (deprecated)

User model object from which to retrieve user properties.

If not supplied individually, the following attributes will be taken from this object;

* `firstName`
* `lastName`
* `email`
* `avatar_url` (used in the same way as `src`)
