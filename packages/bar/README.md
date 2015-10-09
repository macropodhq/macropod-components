# Bar

A component that acts a lot like a 'header'.

## Usage

```
<Bar>
  <div align={{Bar.align.left}} />
</Bar>
```

## Properties

### Bar

#### `classes`

_Optional_. Supply classnames for the `left`, `center` and `right` wrappers. Options are;

* Not supplied: `left`, `center`, `right` from `./bar.mcss`
* Object with `left`, `center`, `right` keys with strings as values:

```js
classes={{
  left: 'leftClass'
  right: styles.rightClass
}}
```

## Statics

### `align`

Defines which wrapper you want the child element inserted into (`left`, `center` or `right`):

```js
<Bar>
  <div align={{Bar.align.left}} />
</Bar>
```
