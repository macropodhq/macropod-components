# Lightbox

Viewer for groups of images and documents. Includes rendering methods for images, and an iframe rendering method suitable for PDF and HTML documents.

## Usage

```
<Lightbox
  fullscreen={false}
  hide={false}
  initialIndex={0}
  onChange={function() {/* The shown asset has changed */}}
  style={{outline: '1px solid pink'}}
  assets={assets}
/>
```

## Properties

### `fullscreen`

Boolean property, whether to display the lightbox as "fullscreen" (i.e. absolutely positioned at 0 on every side).

_**Note**: The Lightbox will make no effort to break out of a container constricting it, so `fullscreen` can actually be used to just make it take up the size of its parent._

### `hide`

Boolean property, if `true`, the lightbox will not be displayed.

### `initialIndex`

Index of asset to display on first render.

### `onChange`

Function called when the shown asset is changed.

### `onClose`

Function, if supplied, a "close" button will be shown in the Lightbox toolbar, which will call this function when clicked.

### `style`

React style object, which will be assigned to the `.Lightbox` element.

### `assets`

Array of assets to render in the Lightbox. They should be objects with the following properties;

* `media`, the MIME type of the asset.
* `title`, the title or file name of the asset.
* `path`, the URL of the asset itself.
