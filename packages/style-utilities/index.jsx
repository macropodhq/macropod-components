const prefixes = 'Webkit Moz ms Ms O'.split(' ');
const docElemStyle = document.documentElement.style;

const getStyleProperty = (propName) => {
  // test standard property first
  if (typeof docElemStyle[propName] === 'string') {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  let prefixed;
  for (let i = 0, len = prefixes.length; i < len; i++) {
    prefixed = prefixes[i] + propName;

    if (typeof docElemStyle[prefixed] === 'string') {
      return prefixed;
    }
  }
};

const defView = document.defaultView;

const getStyle = (defView && defView.getComputedStyle) ? elem => defView.getComputedStyle(elem, null) : elem => elem.currentStyle;

const transformProperty = getStyleProperty('transform');

const is3d = !!getStyleProperty('perspective');
const translate = is3d ? (x, y) =>
  `translate3d(${x}px, ${y}px, 0)` : (x, y) =>
    `translate(${x}px, ${y}px)`;

const vendorEvent = events => {
  const el = document.createElement('fakeElement');
  for (let i in events) {
    if (el.style[i] !== undefined) {
      return events[i];
    }
  }
};

const cssCallback = (events, element, callback) => {
  let cssEvent = vendorEvent(events);

  let called = false;
  const wrap = () => {
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
