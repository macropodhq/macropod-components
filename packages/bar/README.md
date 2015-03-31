# Bar

A component that acts a lot like a 'header'.

## Usage

```
<Bar>
  <Bar.Item />
</Bar>
```

## Properties

### Bar

#### `leftWidth`

_Optional_. Width of the `Bar-Left` element, **representing a percentage of the parent**. Options are;

* Not supplied: `40`
* Any integer

#### `rightWidth`

_Optional_. Width of the `Bar-Right` element, **representing a percentage of the parent**. Options are;

* Not supplied: `40`
* Any integer

### Item

#### `align`

_Optional_. Align the item within the `Bar`. Options are;

* Not supplied: `Bar.Item.align.LEFT`
* `Bar.Item.align.LEFT`, `Bar.Item.align.CENTER` or `Bar.Item.align.RIGHT`
