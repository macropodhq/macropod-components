const _ = require('lodash-node');

module.exports = (options) => {
  const defaults = {
    interval: 100,
    timeout: 200
  };

  const _options = _.assign({}, defaults, options);

  return {
    componentDidMount() {
      window.addEventListener('scroll', this._onScroll, false);
      this.intervals = 0;
      this.position = window.pageYOffset;
      this.scrolling = false;
    },

    componentWillUnmount() {
      window.removeEventListener('scroll', this._onScroll, false);
    },

    checkScroll() {
      this.checkPosition();

      if (this.intervals * _options.interval > _options.timeout && this.scrolling) {
        this.scrolling = false;
        this._onScrollEnd();
      }
      this.intervals++;
    },

    checkPosition() {
      if (window.pageYOffset === this.position) {
        return false;
      }

      if (window.pageYOffset > this.position) {
        this._onScrollDown();
      } else {
        this._onScrollUp();
      }

      this.position = window.pageYOffset;
    },

    _onScroll() {
      this.intervals = 0;

      if (!this.scrolling) {
        this.scrolling = true;
        this._onScrollStart();
      }

      if (typeof this.onScroll === 'function') {
        this.onScroll();
      }
    },

    _onScrollEnd() {
      if (typeof this.onScrollEnd === 'function') {
        this.onScrollEnd();
      }
      this.intervals = 0;
      clearInterval(this.checkInterval);
    },

    _onScrollStart() {
      this.checkInterval = setInterval(this.checkScroll, _options.interval);
      if (typeof this.onScrollStart === 'function') {
        this.onScrollStart();
      }
    },

    _onScrollUp() {
      if (typeof this.onScrollUp === 'function') {
        this.onScrollUp();
      }
    },

    _onScrollDown() {
      if (typeof this.onScrollDown === 'function') {
        this.onScrollDown();
      }
    }
  };
};
