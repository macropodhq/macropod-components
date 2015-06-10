# LinkPreservingQueryParameters

A React Router [Link](https://rackt.github.io/react-router/#Link) factory, producing instances of the Link which preserve the requested query parameters.

## Usage

```
const LinkWithinAuthContext = LinkPreservingQueryParametersFactory(['redirect_uri', 'product']);

<LinkWithinAuthContext to="register" />
```

## `LinkPreservingQueryParametersFactory` Parameters

### `queryParameters`

Array of query parameters to preserve in the generated link.

## Link API

The returned React object has the same API as React Router's [Link](https://rackt.github.io/react-router/#Link), with the exteption that the `query` prop will merge any object you supply with the preserved parameters.
