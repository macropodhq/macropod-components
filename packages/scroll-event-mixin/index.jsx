var _ = require('lodash-node');

module.exports = options => {
  var defaults = {
    interval: 100,
    timeout: 200
  };

  options = _.assign(defaults, options);

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

      if (this.intervals * options.interval > options.timeout && this.scrolling) {
        this.scrolling = false;
        this._onScrollEnd();
      }
      this.intervals++;
    },

    checkPosition() {
      if (window.pageYOffset === this.position) return false;

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

      this.onScroll && this.onScroll();
    },

    _onScrollEnd() {
      this.onScrollEnd && this.onScrollEnd();
      this.intervals = 0;
      clearInterval(this.checkInterval);
    },

    _onScrollStart() {
      this.checkInterval = setInterval(this.checkScroll, options.interval);
      this.onScrollStart && this.onScrollStart();
    },

    _onScrollUp() {
      this.onScrollUp && this.onScrollUp();
    },

    _onScrollDown() {
      this.onScrollDown && this.onScrollDown();
    }
  };
};
