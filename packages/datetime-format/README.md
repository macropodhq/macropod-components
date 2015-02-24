# DateFormatter

Utilities for formatting dates, used across [Macropod](https://macropod.com) products for consistent dates.

## Usage

```
let formattedDate = DateFormatter.dateTime(new Date());
```

## Methods

All methods accept at least one parameter, `date`, which is the Date string or object from which to derive the time.

### `date`

Standardised formatting for a date only.

### `dateTime`

Standardised formatting for a date with time.

### `time`

Standardised formatting for a time only.

### `custom` (deprecated)

Accepts a second parameter, `format`, which is a custom format string for rendering.
This string is passed to [Fecha](https://github.com/taylorhakes/fecha), whose spec for format strings is [available here](https://github.com/taylorhakes/fecha#formatting-tokens).

_**Note**: It is considered poor practice to use this method over calling Fecha's own format function directly in cases where you want a custom date format. The purpose of this utility is to keep it consistent, and this goes against that._
