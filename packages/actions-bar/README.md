# ActionsBar

Application toolbar with two nav sections and a title.

## Usage

```
<ActionsBar
  title="Actions Bar"
  links={[
    <span key={1} className={ActionsBar.NAVIGATION_TITLE_CLASSNAME}>SECTION:</span>,
    <a key={2} href="#" className={`${ActionsBar.NAVIGATION_ITEM_CLASSNAME} active`}>First</a>,
    <a key={3} href="#" className={ActionsBar.NAVIGATION_ITEM_CLASSNAME}>Second</a>
  ]}
  actions={[
    <a key={1} href="#" className={ActionsBar.ACTION_ITEM_CLASSNAME}><Icon type="plus" font={false} /></a>,
    <input key={2} className={ActionsBar.ACTION_SEARCH_CLASSNAME} type="text" />
  ]}
/>
```

## Properties

### `title`

Title to display in the bar.

### `links`

Array of elements, or element to display as tab-like buttons on the left of the bar.

### `actions`

Array of elements, or element to display as buttons on the right of the bar.

## Static Properties

### `NAVIGATION_ITEM_CLASSNAME`

Class name suitable for `<a>` elements to be displayed in the `links` section.

### `NAVIGATION_TITLE_CLASSNAME`

Class name suitable for a subtitle to be display in the `links` section.

### `ACTION_ITEM_CLASSNAME`

Class name suitable for `<a>` elements displayed in the `actions` section.

### `ACTION_SEARCH_CLASSNAME`

Class name suitable for `<input>` elements displayed in the `actions` section.
