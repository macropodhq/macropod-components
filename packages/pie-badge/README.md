# Pie Badge

A graph component to show the progress of some sort of process. Displays a checkmark when finished.

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
