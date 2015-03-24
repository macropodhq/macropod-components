# Tray

A component that is pinned to either the left or the right of its parent with 100% height.

## Usage

```
<Tray>
  <Tray.Sticky />
  <Tray.Group>
    <Tray.Item />
  </Tray.Group>
</Tray>
```

## Properties

### Tray

#### `fixed`

_Optional_. Sets the `position` to be `fixed` instead of `absolute`. Options are;

* Not supplied: `false`
* `true` or `false`

#### `stickyHeight`

_Optional_. Height of the `Tray.Sticky` child. Options are;

* Not supplied: `0`
* Any `float` or `integer`

### Tray.Sticky

#### `onCalculateHeight`

_Required_. Function with the height of `Tray.Sticky` as first argument.

### Tray.Group

#### `title`

_Optional_. Title of the group. Options are;

* Not supplied: `null`,
* Any `string`

### Tray.Item

None.
