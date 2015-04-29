# LinkGroup

An element to contain `Link` components, which displays children in a group.

## Usage

```
<LinkGroup>
  <Link>Left</Link>
  <Link>Middle</Link>
  <Link>Right</Link>
</LinkGroup>
```

## `Link` Properties

### `route`

_Required_. Sets the `Link` component to use `Router.Link`.

### `query`

_Required_. Take a look [here](https://github.com/rackt/react-router/blob/master/examples/query-params/app.js).

### `default`

_Optional_. If no query is present, `default` will be the active link. This is useful if someone removes the `?query=` param from the url.
