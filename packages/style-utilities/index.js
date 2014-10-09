var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

var getStyleProperty = function getStyleProperty(propName) {
  // test standard property first
  if (typeof docElemStyle[propName] === 'string') {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for (var i = 0, len = prefixes.length; i < len; i++) {
    prefixed = prefixes[i] + propName;

    if (typeof docElemStyle[prefixed] === 'string') {
      return prefixed;
    }
  }
};

var defView = document.defaultView;

var getStyle = (defView && defView.getComputedStyle) ? function(elem) {
  return defView.getComputedStyle(elem, null);
} : function(elem) {
  return elem.currentStyle;
};

var transformProperty = getStyleProperty('transform');

var is3d = !!getStyleProperty('perspective');
var translate = is3d ? function(x, y) {
  return 'translate3d( ' + x + 'px, ' + y + 'px, 0)';
} : function(x, y) {
  return 'translate( ' + x + 'px, ' + y + 'px)';
};

var vendorEvent = function vendorEvent(events) {
  var i;
  var el = document.createElement('fakeElement');

  for (i in events) {
    if (el.style[i] !== undefined) {
      return events[i];
    }
  }
};

var cssCallback = function cssCallback(events, element, callback) {
  var cssEvent = vendorEvent(events);

  var called = false;
  var wrap = function() {
    if (called) {
      return;
    }

    called = true;

    callback();
  };

  setTimeout(wrap, 2000);

  if (cssEvent) {
    element.addEventListener(cssEvent, wrap);
  }
};

module.exports = {
  getStyleProperty: getStyleProperty,
  getStyle: getStyle,
  transformProperty: transformProperty,
  translate: translate,
  transitionCallback: cssCallback.bind(null, {'transition': 'transitionend', 'OTransition': 'oTransitionEnd', 'MozTransition': 'transitionend', 'WebkitTransition': 'webkitTransitionEnd'}),
  animationCallback: cssCallback.bind(null, {'animationname': 'animationend', 'OAnimationName': 'oAnimationEnd', 'MozAnimationName': 'animationend', 'webkitAnimationName': 'webkitAnimationEnd'}),
};
