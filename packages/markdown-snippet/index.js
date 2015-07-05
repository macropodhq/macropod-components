import React from 'react/addons';
import marked from 'marked';

import SuitClassSet from '../suit-class-set';

import './style';

class MarkdownSnippet extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    defaultStyles: React.PropTypes.bool,
    linkTarget: React.PropTypes.oneOf([
      '_self',
      '_blank',
      '_parent',
      '_top',
    ]),
    markdown: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    defaultStyles: true,
    linkTarget: '_self',
    markdown: '',
  };

  componentWillMount() {
    // Monkey patching of Marked
    this.renderer = new marked.Renderer();
    const linkRenderer = this.renderer.link;
    this.renderer.link = (href, title, text) => linkRenderer.call(this.renderer, href, title, text).replace(/<a /, `<a target="${this.renderer.link.linkTarget || '_self'}" `);
  }

  render() {
    const classSet = new SuitClassSet('MarkdownSnippet');

    classSet.addModifier({
      'defaultStyles': this.props.defaultStyles,
    });

    this.renderer.link.linkTarget = this.props.linkTarget;

    let classNames = [classSet.toString()];

    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return (
      <div
        className={classNames.join(' ')}
        dangerouslySetInnerHTML={{
          __html: marked(this.props.markdown, {sanitize: true, renderer: this.renderer}),
        }}
      />
    );
  }
}

export default MarkdownSnippet;
