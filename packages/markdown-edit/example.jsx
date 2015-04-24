const React = require('react');

const CancelableEdit = require('./');


module.exports = React.createClass({
  displayName: 'CancelableEditExample',

  getInitialState() {
    return {
      markdown: `Markdown Sample
================

## Paragraphs, Headers, Blockquotes

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

### Phrase Emphasis

Some of these words *are emphasized*.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.

## Lists

* Candy.
* Gum.
* Booze.


+ Candy.
+ Gum.
+ Booze.


- Candy.
- Gum.
- Booze.


1. Red
2. Green
3. Blue


* A list item.

  With multiple paragraphs.

* Another item in the list.

### Links

This is an [example link](http://example.com/).

This is an [example link](http://example.com/ "With a Title").

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

I start my morning with a cup of coffee and
[The New York Times][NY Times].

[ny times]: http://www.nytimes.com/

### Images

![alt text](/path/to/img.jpg "Title")

### Code

I strongly recommend against using any \`<blink>\` tags.

I wish SmartyPants used named entities like \`&mdash;\`
instead of decimal-encoded entites like \`&#8212;\`.

If you want your page to validate under XHTML 1.0 Strict,
you've got to put paragraph tags in your blockquotes:

    <blockquote>
        <p>For example.</p>
    </blockquote>`,
    };
  },

  handleNameSave(markdown) {
    this.setState({
      markdown: markdown,
    });
  },

  render() {
    return (
      <div>
        <h3>Automatic Sizing</h3>
        <CancelableEdit
          value={this.state.markdown}
          onSave={this.handleNameSave}
          autoSize
          placeholder="Markdown"
        />
        <pre>
{`<CancelableEdit
  value={this.state.markdown}
  onSave={this.handleNameSave}
  autoSize
  placeholder="Markdown"
/>`}
        </pre>

        <h3>Create mode</h3>
        <CancelableEdit
          creating
          saveButtonText="Create"
          placeholder="Yo..."
        />
        <pre>
{`<CancelableEdit
  creating
  saveButtonText="Create"
  placeholder="Yo..."
/>`}
        </pre>
      </div>
    );
  }
});
