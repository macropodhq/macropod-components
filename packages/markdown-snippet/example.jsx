import React from 'react';

import MarkdownSnippet from './';

const markdown = `##### Markdown Snippet

> Here's a blockquote!!!

This is a Markdown snippet. You can do _all_ kinds of strange things in [Markdown](http://daringfireball.net)!!! tweetbot://popncutie/status/658809556194078720`;

class MarkdownSnippetExample extends React.Component {
  render() {
    return (
      <div>
        <h4>Standard</h4>
        <MarkdownSnippet
          markdown={markdown}
        />

        <h4>Without default styles</h4>
        <MarkdownSnippet
          defaultStyles={false}
          markdown={markdown}
        />

        <h4>Change link target</h4>
        <MarkdownSnippet
          markdown={markdown}
          linkTarget="_blank"
        />
      </div>
    );
  }
}

export default MarkdownSnippetExample;
