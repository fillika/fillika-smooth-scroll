# smooth-scroll
Smooth scroll on vanilla JS

# How to use

```
import smoothScroll from 'fillika-smooth-scroll'

button.addEventListener('click', function() {
  smoothScroll(config);
})
```


**or** you can download file from *dist* forder and add to your HTML as script function smoothScroll will be available global.

# Config

Here is only one require attribute - target.
```
const config = {
  duration: 500,
  target: document.getElementById("here"),
  animationName: "easeOutQuad",
  offsetY: 50,
};
```

## animationName
http://gizma.com/easing/


animationName can be:
- linear (default)
- easeOutQuad
- easeInQuad
- easeInOutQuad
- easeInCubic