# smooth-scroll
Smooth scroll on vanilla JS

# How to use

```
import smoothScroll from 'fillika-smooth-scroll'

button.addEventListener('click', function() {
  smoothScroll(config);
})
```


**or** you can add library from CND

```
<script src="https://unpkg.com/fillika-smooth-scroll@1.0.4/dist/smoothScroll.min.js"></script>
```


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