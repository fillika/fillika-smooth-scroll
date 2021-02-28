// http://gizma.com/easing/
const animations = {
  linear: (t, c, d) => (c * t) / d,
  easeOutQuad: (t, c, d) => {
    t /= d;
    return -c * t * (t - 2);
  },
  easeInQuad: (t, c, d) => {
    t /= d;
    return c * t * t;
  },
  easeInOutQuad: (t, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t;
    t--;
    return (-c / 2) * (t * (t - 2) - 1);
  },
  easeInCubic: (t, c, d) => {
    t /= d;
    return c * t * t * t;
  },
};

export default animations;