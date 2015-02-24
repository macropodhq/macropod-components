# AppHeader

Application header with two nav sections and a title.

## Usage

```
<AppHeader
  title="App Header"
  navLeft={
    <span>
      <a href="#" className="AppHeader-link">Home</a>
    </span>
  }
  navRight={
    <span>
      <a href="#" className="AppHeader-link">Search</a>
    </span>
  }
/>
```

## Properties

### `title`

Title to display in the bar.

### `navLeft`

Element to display as on the left of the bar.

### `navRight`

Element to display on the right of the bar.
