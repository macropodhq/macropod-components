# Scroll Event Mixin

React component mixin for detecting when the page is scrolled.

## Usage

```javascript
React.createClass({
  mixins: [ScrollEventMixin({
    interval: 100,
    timeout: 300
  })],

  onScrollStart() {
    /* Scrolling has started */
  },

  onScrollEnd() {
    /* Scrolling has ended */
  }
});
```

## Properties

### `interval`

How often to update the scrolling status, in milliseconds. Defaults to 100.

### `timeout`

Time to wait before declaring scrolling to have ended, in milliseconds. Defaults to 200.
