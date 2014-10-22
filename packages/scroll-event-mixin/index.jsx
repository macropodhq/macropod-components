var _ = require('lodash');

var ScrollEventMixin = function(options) {
  var defaults = {
    interval: 100,
    timeout: 200
  };

  options = _.assign(defaults, options);

  return {
    componentDidMount: function() {
      window.addEventListener('scroll', this._onScroll, false);
      this.intervals = 0;
      this.position = window.pageYOffset;
      this.scrolling = false;
    },

    componentWillUnmount: function() {
      window.removeEventListener('scroll', this._onScroll, false);
    },

    checkScroll: function() {
      this.checkPosition();

      if (this.intervals * options.interval > options.timeout && this.scrolling) {
        this.scrolling = false;
        this._onScrollEnd();
      }
      this.intervals++;
    },

    checkPosition: function() {
      if (window.pageYOffset === this.position) return false;

      if (window.pageYOffset > this.position) {
        this._onScrollDown();
      } else {
        this._onScrollUp();
      }

      this.position = window.pageYOffset;
    },

    _onScroll: function() {
      this.intervals = 0;

      if (!this.scrolling) {
        this.scrolling = true;
        this._onScrollStart();
      }

      this.onScroll && this.onScroll();
    },

    _onScrollEnd: function() {
      this.onScrollEnd && this.onScrollEnd();
      this.intervals = 0;
      clearInterval(this.checkInterval);
    },

    _onScrollStart: function() {
      this.checkInterval = setInterval(this.checkScroll, options.interval);
      this.onScrollStart && this.onScrollStart();
    },

    _onScrollUp: function() {
      this.onScrollUp && this.onScrollUp();
    },

    _onScrollDown: function() {
      this.onScrollDown && this.onScrollDown();
    }
  };
};

module.exports = ScrollEventMixin;
