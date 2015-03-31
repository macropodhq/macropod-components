# Tray

A component that is pinned to either the left or the right of its parent with 100% height.

## Usage

```
<Tray>
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

#### `align`

_Optional_. Positions the `Tray` on the left or the right. Options are;

* Not supplied: `Tray.align.LEFT`
* `Tray.align.LEFT` or `Tray.align.RIGHT`

### Tray.Group

#### `title`

_Optional_. Title of the group. Options are;

* Not supplied: `null`,
* Any `string`

### Tray.Item

None.

### Any direct child

Any direct decendant of `Tray`, regardless of the type (`Tray.Group`, `div`, `Bar`).

#### `sticky`

_Optional_. `Tray` will group all `sticky` children, calculate the height, and then set an explcit height for both the `sticky` and `non-sticky` children. Useful if you need to scroll a `Tray-Group`.