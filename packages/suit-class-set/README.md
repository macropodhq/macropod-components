# SuitClassSet

Class property formatter based on, and enforcing the [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/cb2adfea6ad26a2c6af9f2c1bc880e966854e709/doc/naming-conventions.md).

## Usage

```javascript
const elementClasses = new SuitClassSet('MyComponent');

elementClasses.addModifier('foo');

elementClasses.addState('bar');

elementClasses.addUtility('baz');

element.class = elementClasses.toString();
```

## Constructor

Creates a new SuitClassSet instance, and sets the component name, from which each class name will be derived.

## Methods

### `add` methods

Each of the `add` methods accepts and number of arguments, each in the following formats;

* A `string` representing a single class.
* An `Array`, with each item being a `string` representing a single class.
* A plain `Object`, whose enumerable keys represent a single class. If a key's associated value is falsy, the class will be excluded from output.

_**Note**: at present camel/snake case for each type of name is not required, but that may become the case in the future. Please follow the rules in the SUIT CSS naming conventions as closely as possible._

#### `addModifier`

Adds a [Modifier](https://github.com/suitcss/suit/blob/cb2adfea6ad26a2c6af9f2c1bc880e966854e709/doc/naming-conventions.md#componentname--modifiername) class to the set. For example, adding `'foo'` would add a class called `'MyComponent--foo'`.

#### `addState`

Adds a [State](https://github.com/suitcss/suit/blob/cb2adfea6ad26a2c6af9f2c1bc880e966854e709/doc/naming-conventions.md#componentnameis-stateofcomponent) class to the set. For example, adding `'bar'` would add a class called `'is-bar'`.

#### `addUtility`

Adds a [Utility](https://github.com/suitcss/suit/blob/cb2adfea6ad26a2c6af9f2c1bc880e966854e709/doc/naming-conventions.md#u-utilityname) class to the set. For example, adding `'baz'` would add a class called `'u-baz'`.

### `createDescendent`

Creates a new `SuitClassSet` instance for a [descendent](https://github.com/suitcss/suit/blob/cb2adfea6ad26a2c6af9f2c1bc880e966854e709/doc/naming-conventions.md#componentname-descendentname) of the current one.

Accepts one argument, which is the descendent name. For example, calling `createDescendent` with `bar` would create a new `SuitClassSet` instance whose base component name is `MyComponent-bar`.

### `toArray`

Generates an array of class name strings based on the current state of the set.

### `toString`

Returns all class names as one string, suitable for use in DOM `class`, or React `className` properties.
