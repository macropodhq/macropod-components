# Markdown Snippet

A small component to display a snippet of markdown in a document.

## Usage

```
<MarkdownSnippet markdown="# Your markdown goes here" />
```

## Properties

### `markdown`

The unformatted markdown text to render

### `defaultStyles`

If set to false, doesn't apply the component's Markdown styles and relies on external or browser provided styles

### `linkTarget`

Allows setting the `target` attribute of generated Markdown links. Valid values are `"_self"`, `"_blank"`, `"_parent"` and `"_top"`.
