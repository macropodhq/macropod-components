# Navigation

A wrapper component with a logical api that glues `Bar` and `Tray`.

## Usage

```
<Navigation />
```

## Properties

#### `onTrayBlur`

_Optional_. Callback function for when a user wants to close the tray (clicking the `overlay` or the initiating icon). Options are;

* Not supplied: `function() {}`
* Any `function`

#### `barItems`

_Required_. `Array` of elements to show in the navigation bar. See [`Bar`](#Bar). Options are;

* `Array`

#### `showLeftTray` / `showRightTray`

_Optional_. Make the respective tray visible.

#### `rightTrayContent` / `leftTrayContent`

_Optional_. Groups of items. Options are;

* Not supplied: `[]`
* `Array`:
```javascript
[{
  title: 'group title',
  items: [
    <Item />,
    <Item />,
  ]
}]
```
* `title` is _optional_.

#### `scrollOffset`

_Optional_. The offset for `CovertHeader`. Options are;

* Not supplied: `0`
* Any integer
