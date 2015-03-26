# attachHoverState

A function that replicates the `:hover` event and stores it in the `state`.

## Usage

```
const style = {
  base: {},
  hover: {},
};

getInitialState() {
  return {
    hover: false
  };
}

getStyle() {
  return Object.assign(
    {},
    style.base,
    this.state.hover ? style.hover : null
  );
}

<Component {...attachHoverState(this)} style={this.getStyle()} />
```

