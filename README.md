# smooth-scroll
Smooth scroll on vanilla JS

# How to use

`import smoothScroll from '@fillika/smooth-scroll'`

` 
button.addEventListener('click', function() {
  smoothScroll(config);
})
`
# Config

Here is only one require attribute - target.
`
const config = {
  duration: 500,
  target: document.getElementById("here"),
  animationName: "easeOutQuad",
  offsetY: 50,
};
`
// http://gizma.com/easing/
animationName can be:
- linear (default)
- easeOutQuad
- easeInQuad
- easeInOutQuad
- easeInCubic

You can find animation in animation.js. Also you can add your animation in this file